import { DragDropModule } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import { TrelloListoflistComponent } from '../trello-listoflist/trello-listoflist.component';

import { TrelloListComponent } from './trello-list.component';

describe('TrelloListComponent', () => {
  let component: TrelloListComponent;
  let fixture: ComponentFixture<TrelloListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatDialogModule,
        DragDropModule
      ],
      declarations: [TrelloListComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrelloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should show TEST INPUT', () => {
  //   // expect(fixture.nativeElement.querySelector('div').innerText).toEqual('TEST INPUT');
  // });

  // @Component({
  //   selector: `host-component`,
  //   template: `<trello-workspace-trello-listoflist [input]="trello"></trello-workspace-trello-listoflist>`
  // })
  // class TestHostComponent {
  //   trello = {
  //     name: 'One',
  //     id: 1,
  //     memberDetails: [
  //         {
  //             name: 'One-One',
  //             id: 1
  //         },
  //         {
  //             name: 'One-Two',
  //             id: 2
  //         }
  //     ]
  //   }
  // }
});
