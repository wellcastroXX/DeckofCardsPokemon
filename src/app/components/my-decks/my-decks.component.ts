import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DeckService } from '../../services/deck.service';
import { Service } from '../../services/service';
import { ActionsComponent } from '../actions/actions.component';

@Component({
  selector: 'app-my-decks',
  templateUrl: './my-decks.component.html',
  styleUrl: './my-decks.component.scss'
})
export class MyDecksComponent {
  @Input() MyDeck: any;
  @ViewChild(ActionsComponent) actionsComponent!: ActionsComponent;
  @Output() removeDeckClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() selectedDeck: EventEmitter<any> = new EventEmitter<any>();
  @Output() modeDeckCards: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() deckCards: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() cards: EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor(private deckService: DeckService, private service: Service) {
    this.actionsComponent!;
  }

  toggleModeDeckCards(deck: any) {
    console.log(deck); 
    this.selectedDeck.emit(deck);
    this.modeDeckCards.emit(true);
    this.deckCards.emit(true);
    this.cards.emit(deck.cards);
  }

  removeDeck(deck: any) {
    console.log('removing deck'); 
    this.deckService.removeDeck(deck.id);
    this.removeDeckClicked.emit();
  }

}
