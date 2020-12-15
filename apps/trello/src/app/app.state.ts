import { Trello } from './models/trello.model';
import { TrelloList } from './models/trelloList.model';

export interface AppState {
    readonly trello: Trello[];
    readonly trelloList: TrelloList[];
}