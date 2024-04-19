import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { DeckComponent } from '../components/deck/deck.component';
import { UserCardsComponent } from '../components/user-cards/user-cards.component';
import { CommonModule } from '@angular/common';
import { ActionsComponent } from '../components/actions/actions.component';
import { IgxButtonModule, IgxIconModule, IgxRippleModule, IgxTooltipModule } from 'igniteui-angular';
import { Service } from '../services/service';

@Component({
  selector: 'app-playing-table',
  templateUrl: './playing-table.component.html',
  styleUrl: './playing-table.component.scss',
})
export class PlayingTableComponent {
  @ViewChild(ActionsComponent) actionsComponent!: ActionsComponent;
  title: string = 'Baralho';
  showImage: boolean = false;
  Cards: any;

  constructor(private service: Service) {
    this.actionsComponent!;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showImage = true;
    }, 0);

    /* this.service.getCards().subscribe((data: any) => {
      this.Cards = data;
      console.log(this.Cards);
    }); */
    
  }

}
