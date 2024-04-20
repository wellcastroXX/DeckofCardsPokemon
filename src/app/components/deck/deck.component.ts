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
  recused: boolean = false;

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

  saveName() {
    const deck = { id: this.deckService.generateId(), name: this.name, cards: [] };
    this.deckService.saveDeck(deck);
    this.MyDeck.push(deck);
    this.name = '';
  }

  addCard() {
    if (this.selectedDeck.cards.length > 24) {
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
    
        if (this.selectedDeck.cards.length >= 60) {
          this.recused = true;
          setTimeout(() => {
            this.recused = false;
          }, 500);
        } else {
          if (cardsWithSameName.length >= 4) {
            this.addCard();
          } else {
            this.selectedDeck.cards.push(generatedCard);
            this.deckService.saveDeck(this.selectedDeck);
            setTimeout(() => {
              this.loading = false;
            }, 2000);
          }
        }
      });
    } else {
      if (!this.selectedDeck) {
        console.error('Nenhnum baralho selecionado');
        return;
      }
      this.service.getRandomCard().subscribe(card => {
        console.log(card);
        this.selectedDeck.cards.push(card);
      });
    }
  }

  onRemoveDeckClicked() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.MyDeck = this.deckService.getUserDeck();
    }, 3000);
  }
}
