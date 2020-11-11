import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor( private myHttpCli: HttpClient) { }

  obtainPokemon(): Observable<IPokemon> {
    return this.myHttpCli.get<IPokemon>('https://pokeapi.co/api/v2/pokemon/starmie');
  }

  obtainPokemonSpecificReturnJson(pokeName: string): Observable<string> {
    return this.myHttpCli.get<string>(`https://pokeapi.co/api/v2/pokemon/` + pokeName);
  }

  obtainPokemonSpecificReturnPokemon(pokeName: string): Observable<IPokemon> {
    return this.myHttpCli.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/` + pokeName);
  }
}
