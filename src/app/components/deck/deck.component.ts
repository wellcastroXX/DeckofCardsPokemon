import { Component, ElementRef, ViewChild } from '@angular/core';
import { DeckService } from '../../services/deck.service';
import { Service } from '../../services/service';
import { Card } from '../../models/deck';
import { ActionsComponent } from '../actions/actions.component';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrl: './deck.component.scss'
})
export class DeckComponent {
  @ViewChild(ActionsComponent) actionsComponent!: ActionsComponent;
  @ViewChild('deckInput') deckInput!: ElementRef;
  MyDeck: any[] = [];
  modeDeckCards: boolean = false;
  deckCards: Boolean = false;
  name: string = '';
  ID: any = '';
  selectedDeck: any = null;
  cards: any[] = [];
  loading: boolean = false; 

  constructor(private deckService: DeckService, private service: Service) {
    this.actionsComponent!;
  }

  ngOnInit() {
    if (this.deckInput) {
      this.deckInput.nativeElement.focus();
    }
    this.MyDeck = this.deckService.getUserDeck();
    console.log(this.MyDeck);
    
    if (this.deckCards == false) {
      this.modeDeckCards = true;
    }
  }

  toggleModeDeckCards(deck: any) {
    console.log(deck); 
    this.selectedDeck = deck;
    this.modeDeckCards = true;
    this.deckCards = true;
    this.cards = this.selectedDeck.cards;
  }

  saveName() {
    const deck = { id: this.deckService.generateId(), name: this.name, cards: [] };
    this.deckService.saveDeck(deck);
    this.MyDeck.push(deck);
    this.name = '';
  }

  addCard() {
    if (!this.selectedDeck) {
      console.error('Nenhnum baralho selecionado');
      return;
    }

    if (this.selectedDeck.cards.length >= 60) {
      console.error('Maximum number of cards reached for this deck!');
      return;
    }
    
    this.service.getRandomCard().subscribe(card => {
      console.log(card);

      if (this.selectedDeck.cards.length >= 60) {
        console.error('Número máximo de cartas com o mesmo nome alcançado para este baralho!');
        return;
      }

      this.selectedDeck.cards.push(card);
      
      if (this.selectedDeck.cards.length > 24) {
        this.loading = true;
        this.deckService.saveDeck(this.selectedDeck);
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      }
    });
  }

  removeDeck(deck: any) {
    console.log('removing deck'); 
    this.deckService.removeDeck(deck.id);
  }

}
