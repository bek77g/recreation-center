import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeAttractionsFields {
    title_ru: EntryFields.Symbol;
    title_ky: EntryFields.Symbol;
    title_en: EntryFields.Symbol;
    description_ru: EntryFields.Text;
    description_ky: EntryFields.Text;
    description_en: EntryFields.Text;
    cover?: Asset[];
}

export type TypeAttractions = Entry<TypeAttractionsFields>;
