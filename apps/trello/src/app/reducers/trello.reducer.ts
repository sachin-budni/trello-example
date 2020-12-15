import { Action } from '@ngrx/store';
import { Trello } from './../models/trello.model';
import * as TrelloActions from './../actions/trello.actions';

const initialState: Trello[] = [
    {
        name: 'One',
        id: 1
    },
    {
        name: 'Two',
        id: 2
    },
    {
        name: 'Three',
        id: 3
    }
]

export function reducer(state: Trello[] = initialState, action: TrelloActions.Actions) {
    switch(action.type) {
        case TrelloActions.ADD_TRELLO :
            return [...state, action.playoad];
        case TrelloActions.REMOVE_TRELLO :
            return state.filter(item => item.id !== action.playoad);
        case TrelloActions.UPDATE_TRELLO :
            const data = state.map(item => {
                if(item.id === action.playoad.id) {
                    const updateData: Trello = {
                        id: action.playoad.id,
                        name:action.playoad.name
                    }
                    return updateData;
                }
                return item;
            })
            return [...data];
        default: 
            return state;
    }
}