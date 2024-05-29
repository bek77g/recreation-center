import type { Entry, EntryFields } from "contentful";

export interface TypeReserveTypeFields {
    label_ru: EntryFields.Symbol;
    label_ky: EntryFields.Symbol;
    label_en: EntryFields.Symbol;
    slug: EntryFields.Symbol;
}

export type TypeReserveType = Entry<TypeReserveTypeFields>;
