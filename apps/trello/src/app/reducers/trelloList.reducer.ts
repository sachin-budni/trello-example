import { Action } from '@ngrx/store';
import { TrelloList } from './../models/trelloList.model';
import * as TrelloActions from './../actions/trelloList.actions';

const initialState: TrelloList[] = [
    {
        name: 'One-One',
        id: 1
    },
    {
        name: 'One-Two',
        id: 2
    },
    {
        name: 'One-Three',
        id: 3
    }
]

export function reducerTrelloList(state: TrelloList[] = initialState, action: TrelloActions.Actions) {
    switch(action.type) {
        case TrelloActions.ADD_TRELLOLIST :
            return [...state, action.playoad];
        case TrelloActions.UPDATE_TRELLOLIST :
            const data = state.map(item => {
                if(item.id === action.playoad.id) {
                    const updateData: TrelloList = {
                        id: action.playoad.id,
                        name:action.playoad.name
                    }
                    return updateData;
                }
                return item;
            })
            return [...data];
        case TrelloActions.REMOVE_TRELLOLIST :
            return state.filter(t =>t.id !== action.playoad)
        case TrelloActions.REMOVE_TRELLOLISTBYTRELLOID :
            return state.filter(t =>t.id !== action.playoad);
        default: 
            return state;
    }
}