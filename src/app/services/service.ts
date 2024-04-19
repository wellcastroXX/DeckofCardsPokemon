import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root'
})
export class Service {
  constructor(private apiService: ApiService) {}

  getACard(cardId: string): Observable<any> {
    return this.apiService.call('GET', `cards/${cardId}`);
  }

  getCards(): Observable<any> {
    return this.apiService.call('GET', `cards`);
  }

  getRandomCard(): Observable<any> {
    return this.getCards().pipe(
      map(response => {
        const cards = response.data;
        const randomIndex = Math.floor(Math.random() * cards.length);
        const randomCard = cards[randomIndex];
        return randomCard;
      })
    );
  }
  
  
}
