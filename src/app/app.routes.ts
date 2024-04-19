import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayingTableComponent } from './playing-table/playing-table.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'playing-table', component: PlayingTableComponent },
  // Other routes if any
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { routes };