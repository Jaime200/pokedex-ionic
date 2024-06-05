import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { IPokemons } from 'src/app/models/pokemons.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent  implements OnInit {
  @Input() pokemon! : IPokemons 
  
  constructor() { }
  
  ngOnInit() {}



}
