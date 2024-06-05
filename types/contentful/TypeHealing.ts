import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeHealingFields {
    title_ru: EntryFields.Symbol;
    title_ky: EntryFields.Symbol;
    title_en?: EntryFields.Symbol;
    list_ru: EntryFields.Symbol[];
    list_ky: EntryFields.Symbol[];
    list_en: EntryFields.Symbol[];
    cover: Asset[];
}

export type TypeHealing = Entry<TypeHealingFields>;
