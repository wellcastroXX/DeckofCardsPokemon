import { Component, EventEmitter, Output, ViewChild, output } from '@angular/core';
import { IgxButtonModule, IgxIconModule, IgxRippleModule, IgxTooltipModule } from 'igniteui-angular';
import { DeckService } from '../../services/deck.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss'
})
export class ActionsComponent {
  @Output() deckCardsChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() MakeADeckButton = new EventEmitter<void>();
  @Output() ViewDecksButton = new EventEmitter<void>();
  MyDeck: any[] = [];
  makeDeskCards: Boolean = true;
  modeDeckCards: Boolean = false;

  constructor(private deckService: DeckService, private router: Router) {}

  action1() {
    this.MakeADeckButton.emit();
    this.makeDeskCards = false;
    console.log('presed');
  }

  action2() {
    
  }

  action3() {
    window.location.reload();
    /* this.MyDeck = this.deckService.getUserDeck();
    if(this.MyDeck.length === 0){
      this.makeDeskCards = true;
    }else{
      this.ViewDecksButton.emit();
      this.deckCardsChanged.emit(false);
    } */
  }

  action4() {
   
  }

  action5() {
    
  }

}
