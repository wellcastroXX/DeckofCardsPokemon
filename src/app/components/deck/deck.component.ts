import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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
  @Input() deckCards: boolean = false;
  @Input() name: string = '';
  MyDeck: any[] = [];
  modeDeckCards: boolean = false;
  ID: any = '';
  selectedDeck: any = null;
  cards: any[] = [];
  loading: boolean = false;
  recused: boolean = false;

  constructor(private deckService: DeckService, private service: Service) {
    this.actionsComponent!;
  }

  ngOnInit() {
    if (this.name != '') {
      this.deckCards = true;
    }
    if (this.deckInput) {
      this.deckInput.nativeElement.focus();
    }
    this.MyDeck = this.deckService.getUserDeck();
    console.log(this.MyDeck);
  }

  addCard() {
    if (this.selectedDeck?.cards.length >= 24) {
      if (this.selectedDeck.cards.length >= 60) { 
        this.recused = true;
        setTimeout(() => {
          this.recused = false;
        }, 500);
      } else {
        this.loading = true;
        if (!this.selectedDeck) {
          console.error('Nenhnum baralho selecionado');
          return;
        }
    
        if (this.selectedDeck.cards.length >= 60) {
          console.error('Maximum number of cards reached for this deck!');
          return;
        }
        
        this.service.getRandomCard().subscribe(generatedCard => {
          console.log(generatedCard);
          const cardName = generatedCard.name;
          const cardsWithSameName = this.selectedDeck.cards.filter((card: Card) => card.name === cardName);
      
          if (cardsWithSameName.length >= 4) {
            this.addCard();
          } else {
            this.selectedDeck.cards.push(generatedCard);
            this.deckService.saveDeck(this.selectedDeck);
            setTimeout(() => {
              this.loading = false;
            }, 100);
          }
        });
      }
    } else {
      if (this.cards.length >= 24) {
        const deck = { id: this.deckService.generateId(), name: this.name, cards: this.cards };
        this.deckService.saveDeck(deck);
        this.selectedDeck = deck;
      } else {
        if (this.selectedDeck?.name == undefined) {
          this.loading = true;
          this.service.getRandomCard().subscribe(card => {
            console.log(card);
            this.cards.push(card);
            setTimeout(() => {
              this.loading = false;
            }, 100);
          });
        } else {
          this.loading = true;
          this.service.getRandomCard().subscribe(card => {
            console.log(card);
            this.selectedDeck.cards.push(card);
            setTimeout(() => {
              this.loading = false;
            }, 100);
          });
        }
      }
    }
  }

  onRemoveDeckClicked() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.MyDeck = this.deckService.getUserDeck();
    }, 3000);
  }

  onDeckCardsChanged(value: boolean) {
    this.deckCards = value;
  }
  
}
