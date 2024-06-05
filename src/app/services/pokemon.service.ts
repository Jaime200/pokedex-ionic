import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { IPokemons } from '../models/pokemons.model';
import { responsePokemons } from '../models/reponse.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  private http = inject(HttpClient)
  private limit = signal<number>(10)
  private offset = signal<number>(0)
  constructor() { }

  getPokemons(){
    
    return this.http.get<responsePokemons>(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit()}&offset=${this.offset()}`).pipe(
      map(result =>{
        return result.results
      })
    )
  }

  next(){
    if(this.offset() <=150)
    this.offset.update(prev=> prev+10);
    return this.getPokemons();
  }

  previous(){
    if(this.offset() > 0)
    this.offset.update(prev=> prev-10);
    return this.getPokemons();
  }
}
