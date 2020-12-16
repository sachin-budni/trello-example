import { TrelloList } from "./trelloList.model";

export interface Trello {
    id: number;
    name: string;
    memberDetails: TrelloList[];
}