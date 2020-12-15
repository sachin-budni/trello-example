import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RemoveTrelloList, UpdateTrelloList } from '../actions/trelloList.actions';
import { CreateTrelloListComponent } from '../create-trello-list/create-trello-list.component';
import { selectVisibleBooks, TrelloList } from '../models/trelloList.model';
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
  @Input() trelloId: string;
  trelloListOfList: Observable<TrelloList[]>;
  constructor(private store: Store<AppState>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.trelloListOfList = this.store.select(selectVisibleBooks(parseInt(this.trelloId))) as Observable<TrelloList[]>;
  }
  edit(value: TrelloList) {
    this.openDialog(value);
  }
  
  openDialog(value: TrelloList) {
    this.dialog.open(CreateTrelloListComponent, {
      width: '300px',
      data: value
    })
  }

  deleteTrelloList(id: number) {
    this.store.dispatch(new RemoveTrelloList(id));
  }

  drop({
    item
  }: CdkDragDrop<any>) {
    console.log(this.trelloId)
    let data: TrelloList = item.data;
    let dropped:TrelloList = {
      id: data.id,
      name: data.name,
      trelloId: parseInt(this.trelloId)
    }
    this.store.dispatch(new UpdateTrelloList(dropped));
  }


  trackByFn(index: number, { id }: TrelloList): string | number {
    return id || index;
  }

}
