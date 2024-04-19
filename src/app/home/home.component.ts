import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isExpanded = false;

  constructor(private router: Router) { }

  expandDiagonal() {
    this.isExpanded = true;
    this.redirectToPlayingTable();
  }

  redirectToPlayingTable() {
    this.router.navigateByUrl('/playing-table');
  }
}
