import { Component, OnInit } from '@angular/core';
import { Pokemon } from './feature/model/pokemons/pokemons-module';
import { PokemonService } from './feature/service/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
    standalone: false,
  styleUrls: ['./app.scss']
})
export class App  {
    title = 'pokemon-app';

}