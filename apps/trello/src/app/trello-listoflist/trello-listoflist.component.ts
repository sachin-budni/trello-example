import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddTrelloListOfList, RemoveTrelloListOfList } from '../actions/trello.actions';
import { RemoveTrelloList, UpdateTrelloList } from '../actions/trelloList.actions';
import { CreateTrelloListComponent } from '../create-trello-list/create-trello-list.component';
import { Trello } from '../models/trello.model';
import { TrelloList } from '../models/trelloList.model';
import { AppState } from './../app.state';

interface DropListData {
  id: string;
  tasks: TrelloList[];
}

interface TransferData {
  prevTaskList: DropListData;
  currTaskList: DropListData;
  previousIndex: number;
  currentIndex: number;
}


@Component({
  selector: 'trello-workspace-trello-listoflist',
  templateUrl: './trello-listoflist.component.html',
  styleUrls: ['./trello-listoflist.component.scss']
})
export class TrelloListoflistComponent implements OnInit {
  @Input() trelloListOfList: Trello;
  constructor(private store: Store<AppState>, private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  edit(value: TrelloList) {
    this.openDialog(value);
  }
  
  openDialog(value: TrelloList) {
    this.dialog.open(CreateTrelloListComponent, {
      width: '300px',
      data: { id: this.trelloListOfList.id, memberDetails: [value] } as Trello
    })
  }

  deleteTrelloList(id: number) {
    this.store.dispatch(new RemoveTrelloListOfList(this.trelloListOfList.id, id));
  }

  drop({
    item,
    container,
    previousContainer
  }: CdkDragDrop<any>) {
    let data: TrelloList = item.data;
    let prevId: number = previousContainer.data;
    let newId: number = container.data;
    if (prevId !== newId) {
      this.store.dispatch(new AddTrelloListOfList(newId, data));
      this.store.dispatch(new RemoveTrelloListOfList(prevId, data.id));
    }
  }


  trackByFn(index: number, { id }: TrelloList): string | number {
    return id || index;
  }

}
