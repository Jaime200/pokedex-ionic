import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IPokemons } from '../models/pokemons.model';
import { responsePokemons } from '../models/reponse.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  private http = inject(HttpClient)
  constructor() { }

  getPokemons(){
    return this.http.get<responsePokemons>(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`).pipe(
      map(result =>{
        return result.results
      })
    )
  }
}
