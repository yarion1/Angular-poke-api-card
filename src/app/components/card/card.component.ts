import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemonData';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  pokemon: Pokemon;
  seaechedPokemon: string = '';

  constructor(private service: PokemonServiceService) {
    this.pokemon = {
      name: '',
      id: 0,
      sprites: {
        front_default: '',
      },
      types: [],
    };
  }

  ngOnInit(): void {
    this.getPokemon('pikachu');
  }
  getPokemon(seaechedPokemon: string) {
    this.service.getPokemon(seaechedPokemon).subscribe({
      next: (res) => {
        this.pokemon = {
          name: res.name,
          id: res.id,
          sprites: res.sprites,
          types: res.types,
        };
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
