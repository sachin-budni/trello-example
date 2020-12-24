import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AddTrelloListOfList, UpdateTrelloListOfList } from './../actions/trello.actions';
import { AppState } from '../app.state';
import { Trello } from '../models/trello.model';
import { TrelloList } from '../models/trelloList.model';

@Component({
  selector: 'trello-workspace-create-trello-list',
  templateUrl: './create-trello-list.component.html',
  styleUrls: ['./create-trello-list.component.scss']
})
export class CreateTrelloListComponent implements OnInit {
  trelloListOfListFormGroup: FormGroup;
  constructor(private dialogRef: MatDialogRef<CreateTrelloListComponent>,
    private store: Store<AppState>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Trello) { }

  ngOnInit(): void {
    this.trelloListOfListFormGroup = this.fb.group({
      name:['', Validators.required]
    })
    if(this.data && this.data.id) {
      if(this.data.memberDetails && this.data.memberDetails.length !== 0) {
        const name = this.data.memberDetails[0].name
        this.trelloListOfListFormGroup.controls['name'].setValue(name);
      }
    }
  }
  close() {
    this.dialogRef.close();
  }
  addTrelloList(value: TrelloList) {
    if(value.name === '' || value.name === undefined || value.name === null) {
      return false;
    }
    let addFlag = false;
    if (!(this.data && this.data.memberDetails && this.data.memberDetails.length !== 0)) {
      addFlag = true;
    }
    if(addFlag) {
      let trelloList: TrelloList = {
        id: Math.floor((Math.random()*1000000)+1),
        name: value.name
      }
      this.store.dispatch(new AddTrelloListOfList(this.data.id, trelloList));
    } else {
      this.store.dispatch(new UpdateTrelloListOfList(this.data.id , {
        id: this.data.memberDetails[0].id,
        name: value.name
      }));
    }
    // this.data.name = value.name;
    this.close()
  }
}
