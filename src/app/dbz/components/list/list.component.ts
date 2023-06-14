import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter()

  @Output()
  public onDeleteCharacterById: EventEmitter<string> = new EventEmitter()

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ]

  deleteCharacter( index: number): void {
    console.log({ index })
    this.onDeleteCharacter.emit( index )
  }

  deleteCharacterById( id?: string): void {

    if (!id) return;
    this.onDeleteCharacterById.emit( id )
  }
}
