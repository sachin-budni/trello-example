import { Action } from '@ngrx/store';
import { Trello } from './../models/trello.model';
import * as TrelloActions from './../actions/trello.actions';
import { TrelloList } from '../models/trelloList.model';

const initialState: Trello[] = [
    {
        name: 'One',
        id: 1,
        memberDetails: [
            {
                name: 'One-One',
                id: 1
            },
            {
                name: 'One-Two',
                id: 2
            }
        ]
    },
    {
        name: 'Two',
        id: 2,
        memberDetails: [
            {
                name: 'One-Three',
                id: 3
            }
        ]
    },
    {
        name: 'Three',
        id: 3,
        memberDetails: []
    }
]

export function reducer(state: Trello[] = initialState, action: TrelloActions.Actions) {
    switch(action.type) {
        case TrelloActions.ADD_TRELLO :
            return [...state, action.playoad];
        case TrelloActions.ADD_TRELLOLISTOFLIST :
            const mems = state.filter(s => s.id === action.id)[0].memberDetails;
            const l = [...mems, action.playoad];
            return state.map(item => {
                if(item.id === action.id) {
                    const updateData: Trello = {
                        id: action.id,
                        name: item.name,
                        memberDetails: l
                    }
                    return updateData;
                }
                return item;
            });
        case TrelloActions.UPDATE_TRELLOLISTOFLIST :
            const data1 = state.filter(s => s.id === action.id)[0].memberDetails.map((item: TrelloList) => {
                if(item.id === action.playoad.id) {
                    return {
                        id: action.playoad.id,
                        name:action.playoad.name
                    } as TrelloList;
                }
                return item;
            })
            return state.map(item => {
                if(item.id === action.id) {
                    const updateData: Trello = {
                        id: action.id,
                        name: item.name,
                        memberDetails: data1
                    }
                    return updateData;
                }
                return item;
            });
        case TrelloActions.REMOVE_TRELLO :
            return state.filter(item => item.id !== action.playoad);
        case TrelloActions.UPDATE_TRELLO :
            const data = state.map(item => {
                if(item.id === action.playoad.id) {
                    const updateData: Trello = {
                        id: action.playoad.id,
                        name:action.playoad.name,
                        memberDetails: action.playoad.memberDetails
                    }
                    return updateData;
                }
                return item;
            })
            return [...data];
        case TrelloActions.REMOVE_TRELLOLISTOFLIST :
            const data3 = state.map(item => {
                if(item.id === action.id) {
                    const updateData: Trello = {
                        id: action.id,
                        name: item.name,
                        memberDetails: item.memberDetails.filter(d => d.id !== action.playoad)
                    }
                    return updateData;
                }
                return item;
            })
            return [...data3];
        default: 
            return state;
    }
}