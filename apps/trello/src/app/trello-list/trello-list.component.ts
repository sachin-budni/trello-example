import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RemoveTrello, UpdateTrello } from '../actions/trello.actions';
import { AddTrelloList, RemoveTrelloListById } from '../actions/trelloList.actions';
import { CreateTrelloListComponent } from '../create-trello-list/create-trello-list.component';
import { CreateTrelloComponent } from '../create-trello/create-trello.component';
import { Trello } from '../models/trello.model';
import { TrelloList } from '../models/trelloList.model';
import { AppState } from './../app.state';


@Component({
  selector: 'trello-workspace-trello-list',
  templateUrl: './trello-list.component.html',
  styleUrls: ['./trello-list.component.scss']
})
export class TrelloListComponent implements OnInit {
  trelloList: Observable<Trello[]>
  constructor(private store: Store<AppState>, private dialog: MatDialog) {
    this.trelloList = store.select('trello');
  }

  ngOnInit(): void {
  }

  addTrello(value: TrelloList, trelloId: number) {
    value.id = 100;
    value.trelloId = trelloId;
    this.store.dispatch(new AddTrelloList(value));
  }

  deleteCard(id: number) {
    this.store.dispatch(new RemoveTrello(id));
    this.store.dispatch(new RemoveTrelloListById(id));
  }
  addCard(id: number) {
    this.dialog.open(CreateTrelloListComponent, {
      width: "300px",
      data: { trelloId: id } as TrelloList
    })
  }

  updateName(event, value: Trello) {
    const name = event.target.innerHTML;
    if (name == '' || name == undefined || name == null) {
      alert('this field is required');
      event.target.innerHTML = value.name;
      return false;
    }
    const data: Trello = {
      id: value.id,
      name: name
    }
    this.store.dispatch(new UpdateTrello(data));
  }

  drop(evnet) {
    console.log('---', evnet);
  }
  createTrello() {
    this.dialog.open(CreateTrelloComponent, { width: '300px' });
  }

}
