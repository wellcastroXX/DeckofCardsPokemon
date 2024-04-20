import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlayingTableComponent } from './pages/playing-table/playing-table.component';

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