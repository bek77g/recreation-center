import type { Entry, EntryFields } from "contentful";

export interface TypeGeneralFields {
    address_ru: EntryFields.Symbol;
    address_ky: EntryFields.Symbol;
    address_en: EntryFields.Symbol;
    phone: EntryFields.Symbol[];
    email: EntryFields.Symbol[];
    instagram: EntryFields.Symbol;
    facebook: EntryFields.Symbol;
    copyright: EntryFields.Symbol;
}

export type TypeGeneral = Entry<TypeGeneralFields>;
