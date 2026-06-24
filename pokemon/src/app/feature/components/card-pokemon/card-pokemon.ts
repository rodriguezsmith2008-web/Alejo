import { Component, Input } from '@angular/core';
import { Pokemon } from '../../model/pokemons/pokemons-module';

@Component({
  selector: 'app-pokemon-card',
  standalone: false,
  templateUrl: './card-pokemon.html',
  styleUrl: './card-pokemon.scss',
})
export class PokemonCard {
  @Input() pokemon!: Pokemon;
}