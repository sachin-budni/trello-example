import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloListoflistComponent } from './trello-listoflist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from '../app.component';
import { TrelloListComponent } from '../trello-list/trello-list.component';

describe('TrelloListoflistComponent', () => {
  let component: TrelloListoflistComponent;
  let fixture: ComponentFixture<TrelloListoflistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [BrowserAnimationsModule, MatCardModule,
          MatButtonModule,
          MatIconModule,
          MatInputModule,
          MatFormFieldModule,
          MatToolbarModule,
          MatDialogModule,
          DragDropModule],
        declarations: [ TrelloListoflistComponent],
      })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrelloListoflistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
