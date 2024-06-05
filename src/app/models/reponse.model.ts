import { IPokemons } from "./pokemons.model"

export interface responsePokemons {
    count : number
    next : string
    previous: string
    results: IPokemons[]
}