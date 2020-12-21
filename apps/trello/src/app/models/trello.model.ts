import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { TrelloList } from "./trelloList.model";

export interface Trello {
    id: number;
    name: string;
    memberDetails: TrelloList[];
}

export const $trellos = (state: AppState) => state.trello;

export const selectVisibleBooks = (search: string) => createSelector(
    $trellos,
  (trellos: TrelloList[]) => {
    if (search && trellos) {
      const sm = trellos.map((trello: Trello) => {
          const l =  trello.memberDetails.map(list => {
              if(list.name.toLowerCase().indexOf(search) !== -1) {
                  const ls = {...list, listName: trello.name}
                  return ls;
                } 
                return null;
                }).filter(s => s?.name);
                return l
            }).filter(m => m.length !== 0);
            return [].concat.apply([], sm);
    } else {
      return [];
    }
  }
);