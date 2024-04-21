import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DeckService } from '../../services/deck.service';
import { Service } from '../../services/service';
import { ActionsComponent } from '../actions/actions.component';
import { Card } from '../../models/deck';

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
  detailRotate: boolean = false;
  trainerCardCount: number = 0;
  typeCounts: { [key: string]: number } = {};

  constructor(private deckService: DeckService, private service: Service) {
    this.actionsComponent!;
  }

  showDetails(deck: any) {
    this.detailRotate = true;
    let trainerCardCount = 0;
    for (const card of deck.cards) {
      if (card.supertype === 'Trainer') {
        trainerCardCount++;
        this.trainerCardCount = trainerCardCount;
      }
    }
    const typeCounts: { [key: string]: number } = {};
    for (const card of deck.cards) {
      for (const type of card.types) {
        if (typeCounts[type]) {
          typeCounts[type]++;
        } else {
          typeCounts[type] = 1;
        }
        this.typeCounts = typeCounts;
      }
    }
    this.typeCounts = typeCounts;
  }

  toggleModeDeckCards(deck: any) {
    console.log(deck); 
    this.selectedDeck.emit(deck);
    this.modeDeckCards.emit(true);
    this.deckCards.emit(true);
    this.cards.emit(deck.cards);
  }

  removeDeck(deck: Card) {
    console.log('removing deck'); 
    this.deckService.removeDeck(deck.id);
    this.removeDeckClicked.emit();
  }

  close() {
    this.detailRotate = false;
  }

}
