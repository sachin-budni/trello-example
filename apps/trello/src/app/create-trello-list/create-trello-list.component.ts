import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AddTrelloList, UpdateTrelloList } from '../actions/trelloList.actions';
import { AppState } from '../app.state';
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
    @Inject(MAT_DIALOG_DATA) public data: TrelloList) { }

  ngOnInit(): void {
    this.trelloListOfListFormGroup = this.fb.group({
      name:['', Validators.required]
    })
    console.log(this.data)
    if(this.data && this.data.trelloId) {
      if(this.data.id) {
        this.trelloListOfListFormGroup.controls['name'].setValue(this.data.name);
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
    if (!this.data.id) {
      this.data.id =  Math.floor((Math.random()*1000000)+1);
      addFlag = true;
    }
    let trelloList: TrelloList = {
      id: this.data.id,
      name: value.name,
      trelloId: this.data.trelloId
    }
    if(addFlag) {
      this.store.dispatch(new AddTrelloList(trelloList));
    } else {
      this.store.dispatch(new UpdateTrelloList(trelloList));
    }
    // this.data.name = value.name;
    this.close()
  }
}
