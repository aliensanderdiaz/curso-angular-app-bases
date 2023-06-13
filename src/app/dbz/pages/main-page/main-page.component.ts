import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  characters: Character[] = [
    {
      name: 'Krillin',
      power: 50
    },
    {
      name: 'Vegeta',
      power: 7500
    },
    {
      name: 'Goku',
      power: 10000
    }
  ]

  onNewCharacter( newCharacter: Character ):void {
    console.log({ newCharacter })
    this.characters.push( newCharacter )
    console.log( this.characters )
  }
}
