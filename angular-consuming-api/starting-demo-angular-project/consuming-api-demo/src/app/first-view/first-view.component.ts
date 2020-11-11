import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../models/pokemon';
import { AjaxService } from '../services/ajax.service';

@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.css']
})
export class FirstViewComponent implements OnInit{

  pokemonDisplay: IPokemon = null;
  jsonDisplay: string = null;
  inputField = '';

  constructor(private myAjax: AjaxService) { }

  ngOnInit(): void {
  }

  firstButton(): void {

    this.myAjax.obtainPokemonSpecificReturnPokemon(this.inputField).subscribe(
      data => {
        this.pokemonDisplay = data;
      }
    );
  }

  secondButton(): void {

    this.myAjax.obtainPokemonSpecificReturnJson(this.inputField).subscribe(
      data => {
        this.jsonDisplay = data;
      }
    );
  }

}
