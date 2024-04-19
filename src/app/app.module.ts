import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IgxButtonModule, IgxIconModule, IgxRippleModule, IgxTooltipModule } from 'igniteui-angular';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayingTableComponent } from './playing-table/playing-table.component';
import { CommonModule } from '@angular/common';
import { UserCardsComponent } from './components/user-cards/user-cards.component';
import { ActionsComponent } from './components/actions/actions.component';
import { DeckComponent } from './components/deck/deck.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeckComponent,
    UserCardsComponent,
    ActionsComponent,
    CardComponent,
    PlayingTableComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxIconModule,
    IgxRippleModule,
    IgxTooltipModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    FormsModule,
    CommonModule,
    IgxButtonModule,
    IgxIconModule,
    IgxRippleModule,
    IgxTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
