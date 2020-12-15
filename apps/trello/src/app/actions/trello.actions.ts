import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Trello } from './../models/trello.model';

export const ADD_TRELLO = '[TRELLO] Add';
export const REMOVE_TRELLO = '[TRELLO] Remove';
export const UPDATE_TRELLO = '[TRELLO] Update';


export class AddTrello implements Action {
    readonly type = ADD_TRELLO;

    constructor(public playoad: Trello){ }
}

export class RemoveTrello implements Action {
    readonly type = REMOVE_TRELLO;

    constructor(public playoad: number){ }
}

export class UpdateTrello implements Action {
    readonly type = UPDATE_TRELLO;

    constructor(public playoad: Trello){ }
}


export type Actions = AddTrello | RemoveTrello | UpdateTrello ;