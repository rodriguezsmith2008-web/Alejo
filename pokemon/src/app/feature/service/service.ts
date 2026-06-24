import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, of, switchMap } from 'rxjs';
import { PokemonListItem, PokemonListResponse,PokemonDetailRaw,Pokemon } from '../model/pokemons/pokemons-module';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getAll(page: number): Observable<Pokemon[]> {
    const limit = 20;
    const offset = (page - 1) * limit;
    const listUrl = `${BASE_URL}?limit=${limit}&offset=${offset}`;

    return this.http.get<PokemonListResponse>(listUrl).pipe(
      map((response) => response.results),
      switchMap((listaBasica: PokemonListItem[]) =>
        forkJoin(
          listaBasica.map((item) =>
            this.http.get<PokemonDetailRaw>(item.url)
          )
        )
      ),

      map((detallesCrudos: PokemonDetailRaw[]) =>
        detallesCrudos.map((p) => this.mapToPokemon(p)
    )
      ),

      catchError((error) => {
        console.error('Error al traer los pokemon', error);
        return of([]);
      })
    );
  }

  private mapToPokemon(raw: PokemonDetailRaw): Pokemon {
    return {
      id: raw.id,
      name: raw.name,
      image: raw.sprites.front_default,
      weight: raw.weight,
      height: raw.height,
      baseExperience: raw.base_experience,
      types: raw.types.map((t) => t.type.name),
      stats: {
        hp: this.getStat(raw, 'hp'),
        attack: this.getStat(raw, 'attack'),
        defense: this.getStat(raw, 'defense'),
        specialAttack: this.getStat(raw, 'special-attack'),
        specialDefense: this.getStat(raw, 'special-defense'),
        speed: this.getStat(raw, 'speed'),
      },
    };
  }

  private getStat(raw: PokemonDetailRaw, statName: string): number {
    const found = raw.stats.find((s) => s.stat.name === statName);
    return found ? found.base_stat : 0;
  }
}