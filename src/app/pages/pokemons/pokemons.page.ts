import { Component, OnInit, inject, signal } from '@angular/core';
import { IPokemons } from 'src/app/models/pokemons.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage implements OnInit {
  pokemonService = inject(PokemonService)
  public pokemons = signal<IPokemons[] | null>(null)
  constructor() { }

  ngOnInit() {
    this.GetPokemon();
  }

  private GetPokemon(){
    this.pokemonService.getPokemons().subscribe({
      next : (response)=>{
        console.log(response)
        this.pokemons.set(response)
      },
      error : ()=>{

      }
    })
  }

  next(){
    this.pokemonService.next().subscribe({
      next : (response)=>{
        console.log(response)
        this.pokemons.set(response)
      },
      error : ()=>{

      }
    })
  }

  previous(){
    this.pokemonService.previous().subscribe({
      next : (response)=>{
        
        this.pokemons.set(response)
      },
      error : ()=>{

      }
    });
  }

}
