import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { TrelloList } from './../models/trelloList.model';

export const ADD_TRELLOLIST = '[TRELLOLIST] Add';
export const REMOVE_TRELLOLIST = '[TRELLOLIST] Remove';
export const REMOVE_TRELLOLISTBYTRELLOID = '[TRELLOLISTBYTRELLOID] Remove';
export const UPDATE_TRELLOLIST = '[TRELLOLIST] Update';

export class AddTrelloList implements Action {
    readonly type = ADD_TRELLOLIST;

    constructor(public playoad: TrelloList){ }
}

export class UpdateTrelloList implements Action {
    readonly type = UPDATE_TRELLOLIST;

    constructor(public playoad: TrelloList){ }
}

export class RemoveTrelloList implements Action {
    readonly type = REMOVE_TRELLOLIST;

    constructor(public playoad: number){ }
}

export class RemoveTrelloListById implements Action {
    readonly type = REMOVE_TRELLOLISTBYTRELLOID;

    constructor(public playoad: number){ }
}

export type Actions = AddTrelloList | RemoveTrelloList | UpdateTrelloList | RemoveTrelloListById;