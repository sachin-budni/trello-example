import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddTrelloListOfList, RemoveTrello, UpdateTrello } from '../actions/trello.actions';
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
    this.store.dispatch(new AddTrelloListOfList(trelloId, value));
  }

  deleteCard(id: number) {
    this.store.dispatch(new RemoveTrello(id));
  }
  addCard(id: number) {
    this.dialog.open(CreateTrelloListComponent, {
      width: "300px",
      data: { id } as Trello
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
      name: name,
      memberDetails: value.memberDetails
    }
    this.store.dispatch(new UpdateTrello(data));
  }
  createTrello() {
    this.dialog.open(CreateTrelloComponent, { width: '300px' });
  }

}
