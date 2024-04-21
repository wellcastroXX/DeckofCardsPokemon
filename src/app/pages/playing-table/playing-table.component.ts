import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxButtonModule, IgxIconModule, IgxRippleModule, IgxTooltipModule } from 'igniteui-angular';
import { Service } from '../../services/service';
import { ActionsComponent } from '../../components/actions/actions.component';
import { Router } from '@angular/router';

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

  constructor(private service: Service, private router: Router) {
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

  back() {
    console.log('back');
    window.location.reload();
  }

}
