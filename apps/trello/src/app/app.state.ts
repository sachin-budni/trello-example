import { Trello } from './models/trello.model';

export interface AppState {
    readonly trello: Trello[];
}