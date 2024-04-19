import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private localStorageService: LocalStorageService) {}

  getUserDeck(): any[] {
    const myDeckString = this.localStorageService.getItem('MyDeck');
    if (myDeckString) {
      return JSON.parse(myDeckString);
    } else {
      return [];
    }
  }

  saveDeck(deck: any): void {
    const existingDeckString = this.localStorageService.getItem('MyDeck');
    let existingDeck = [];
    if (existingDeckString) {
      existingDeck = JSON.parse(existingDeckString);
    }
    const index = existingDeck.findIndex((d: any) => d.id === deck.id);
    if (index !== -1) {
      existingDeck[index] = deck;
    } else {
      existingDeck.push(deck);
    }
    this.localStorageService.setItem('MyDeck', JSON.stringify(existingDeck));
  }

  generateId(): string {
    return 'deck_' + Date.now();
  }

  removeDeck(deckId: string): void {
    const myDeck = this.getUserDeck();
    const updatedDeckList = myDeck.filter(deck => deck.id !== deckId);
    this.localStorageService.setItem('MyDeck', JSON.stringify(updatedDeckList));
  }
}