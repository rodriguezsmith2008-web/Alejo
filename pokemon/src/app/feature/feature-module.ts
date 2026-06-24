import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCard } from './components/card-pokemon/card-pokemon';
import { PokemonList } from './pagues/list-pokemon/list-pokemon';



@NgModule({
  declarations: [
    PokemonCard,
    PokemonList
  ],
  imports: [
    CommonModule
  ],exports:[
    PokemonList
  ]
})
export class FeatureModule { }
