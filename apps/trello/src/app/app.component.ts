import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTrelloComponent } from './create-trello/create-trello.component';

@Component({
  selector: 'trello-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'trello';

  constructor(private dialog: MatDialog) {}

  createTrello() {
    this.dialog.open(CreateTrelloComponent, { width: '300px' });
  }
}
