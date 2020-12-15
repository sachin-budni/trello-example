import { createSelector } from "@ngrx/store";
import { AppState } from './../app.state';
// import { Trello } from "./trello.model";

export interface TrelloList {
    name: string;
    id: number;
    trelloId: number;
}


export const selectAllBooks = (state: AppState) => state.trelloList;
 
export const selectVisibleBooks = (id: number) => createSelector(
  selectAllBooks,
  (allBooks: TrelloList[]) => {
    if (id && allBooks) {
      return allBooks.filter((book: TrelloList) => {
          return book.trelloId === id;
      });
    } else {
      return allBooks;
    }
  }
);