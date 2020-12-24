import { Action } from '@ngrx/store';
import { TrelloList } from '../models/trelloList.model';
import { Trello } from './../models/trello.model';

export const ADD_TRELLO = '[TRELLO] Add';
export const ADD_TRELLOLISTOFLIST = '[TRELLO] Add list of list';
export const UPDATE_TRELLOLISTOFLIST = '[TRELLO] Update list of list';
export const UPDATE_TRELLOLISTOFLISTSAME = '[TRELLO] update list of list same';
export const REMOVE_TRELLO = '[TRELLO] Remove';
export const REMOVE_TRELLOLISTOFLIST = '[TRELLO] Remove list of list';
export const UPDATE_TRELLO = '[TRELLO] Update';


export class AddTrello implements Action {
    readonly type = ADD_TRELLO;

    constructor(public playoad: Trello){ }
}
export class AddTrelloListOfList implements Action {
    readonly type = ADD_TRELLOLISTOFLIST;

    constructor(public id: number, public playoad: TrelloList, public index?:number){ }
}
export class UpdateTrelloListOfList implements Action {
    readonly type = UPDATE_TRELLOLISTOFLIST;

    constructor(public id: number, public playoad: TrelloList){ }
}

export class RemoveTrello implements Action {
    readonly type = REMOVE_TRELLO;

    constructor(public playoad: number){ }
}
export class RemoveTrelloListOfList implements Action {
    readonly type = REMOVE_TRELLOLISTOFLIST;

    constructor(public id: number, public playoad: number){ }
}

export class UpdateTrello implements Action {
    readonly type = UPDATE_TRELLO;

    constructor(public playoad: Trello){ }
}
export class UpdateTrelloListOfListSameList implements Action {
    readonly type = UPDATE_TRELLOLISTOFLISTSAME;

    constructor(public id: number, public index: number,public preIn: number, public playoad: TrelloList){ }
}


export type Actions = AddTrello | RemoveTrello | UpdateTrello | AddTrelloListOfList | UpdateTrelloListOfList | RemoveTrelloListOfList | UpdateTrelloListOfListSameList;