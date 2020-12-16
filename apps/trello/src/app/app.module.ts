import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { TrelloListComponent } from './trello-list/trello-list.component';
import { reducer } from './reducers/trello.reducer';
import { reducerTrelloList } from './reducers/trelloList.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrelloListoflistComponent } from './trello-listoflist/trello-listoflist.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CreateTrelloComponent } from './create-trello/create-trello.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateTrelloListComponent } from './create-trello-list/create-trello-list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
// const routes: Routes = [
  
// ]

@NgModule({
  declarations: [AppComponent, TrelloListComponent, TrelloListoflistComponent, CreateTrelloComponent, CreateTrelloListComponent],
  entryComponents: [CreateTrelloComponent, CreateTrelloListComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    StoreModule.forRoot(
      { trello: reducer},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDialogModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
