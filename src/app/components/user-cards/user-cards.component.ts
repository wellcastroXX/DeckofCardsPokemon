import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
//import { DeckService } from '../../services/deck.service';
import { ActionsComponent } from '../actions/actions.component';
import { DeckService } from '../../services/deck.service';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrl: './user-cards.component.scss'
})
export class UserCardsComponent {
  @ViewChild('deckInput') deckInput!: ElementRef;
  @ViewChild(ActionsComponent) actionsComponent!: ActionsComponent;
  @Output() deckName: EventEmitter<string> = new EventEmitter<string>();
  MyDeck: any[] = [];
  isModeDeckCardsInitialized: boolean = false;
  deckCards: boolean = false; 
  name: string = '';

  constructor(private deckService: DeckService) {
    this.actionsComponent!;
  }

  ngOnInit(): void {
    if (this.deckInput) {
      this.deckInput.nativeElement.focus();
    }
    this.MyDeck = this.deckService.getUserDeck();
    if(this.MyDeck.length === 0){
      this.isModeDeckCardsInitialized = true;
    }else{
      this.isModeDeckCardsInitialized = false;
    }
  }

  MakeADeck() {
    this.isModeDeckCardsInitialized = true;
    console.log(this.isModeDeckCardsInitialized);
  }

  ViewDecks() {
    this.isModeDeckCardsInitialized = false;
    console.log(this.isModeDeckCardsInitialized);
  }

  saveName() {
    this.isModeDeckCardsInitialized = false;
    this.deckCards = false;
    this.deckName.emit(this.name);
    /* const deck = { id: this.deckService.generateId(), name: this.name, cards: [] };
    this.deckService.saveDeck(deck); */
  }

  onDeckCardsChanged(value: boolean) {
    this.deckCards = value;
  }

}
