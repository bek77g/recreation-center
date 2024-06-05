import type { Entry, EntryFields } from "contentful";
import type { TypeReserveTypeFields } from "./TypeReserveType";

export interface TypeApplicationFields {
    name: EntryFields.Symbol;
    phone: EntryFields.Integer;
    note?: EntryFields.Symbol;
    quests?: EntryFields.Integer;
    dateIn?: EntryFields.Date;
    dateOut?: EntryFields.Date;
    reserveType?: Entry<TypeReserveTypeFields>;
}

export type TypeApplication = Entry<TypeApplicationFields>;
