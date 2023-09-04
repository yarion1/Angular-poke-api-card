import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Pokemon } from '../models/pokemonData';

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {
  private baseUrl: string = '';
  private pokemon: Pokemon | any;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.pokeApi;
  }

  getPokemon(name: string): Observable<Pokemon> {
    this.pokemon = this.http.get<Pokemon>(`${this.baseUrl}${name}`);

    return this.pokemon;
  }
}
