import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 500
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ]

  constructor() { }

  onNewCharacter( character: Character ):void {
    const newCharacter: Character = {
      id: uuid(),
      ...character
    }
    this.characters.push( newCharacter )
  }

  onDeleteCharacter( index: number ): void {
    this.characters.splice(index, 1)
  }

  deleteCharacterById( id: string ): void {
    console.log({ id, mensaje: 'Servicio' })
    this.characters = this.characters.filter(character => character.id !== id)
    console.log( this.characters )
  }

}