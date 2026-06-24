import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/service';
import { Pokemon } from '../../model/pokemons/pokemons-module';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.html',
  styleUrl: './list-pokemon.scss',
  standalone: false
})
export class PokemonList implements OnInit {
  pokemons: Pokemon[] = [];

  cargando = false;
  error = false;

  paginaActual = 1;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.cargarPokemons();
  }

  cargarPokemons(): void {
    this.cargando = true;
    this.error = false;

    this.pokemonService.getAll(this.paginaActual).subscribe({
      next: (data) => {
        this.pokemons = data;
        this.cargando = false;
      },
      error: () => {
        this.error = true;
        this.cargando = false;
      },
    });
  }

  paginaSiguiente(): void {
    this.paginaActual++;
    this.cargarPokemons();
  }

  paginaAnterior(): void {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.cargarPokemons();
    }
  }
}