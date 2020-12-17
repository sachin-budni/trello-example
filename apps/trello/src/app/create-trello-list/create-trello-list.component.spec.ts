import { DragDropModule } from '@angular/cdk/drag-drop';
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
import { TrelloListComponent } from '../trello-list/trello-list.component';
import { TrelloListoflistComponent } from '../trello-listoflist/trello-listoflist.component';

import { CreateTrelloListComponent } from './create-trello-list.component';

describe('CreateTrelloListComponent', () => {
  let component: CreateTrelloListComponent;
  let fixture: ComponentFixture<CreateTrelloListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [RouterTestingModule, BrowserAnimationsModule, MatCardModule,
          MatButtonModule,
          MatIconModule,
          ReactiveFormsModule,FormsModule,
          MatInputModule,
          MatFormFieldModule,
          MatToolbarModule,
          MatDialogModule,
          DragDropModule],
        declarations: [ CreateTrelloListComponent],
      })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTrelloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addTrelloList', () => {
    expect(component.addTrelloList({ name: 'sachin', id: undefined })).toBeCalled();
  });
});
