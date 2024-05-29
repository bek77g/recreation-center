import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeProvidesFields {
    title_ru?: EntryFields.Symbol;
    title_ky?: EntryFields.Symbol;
    title_en?: EntryFields.Symbol;
    description_ru?: EntryFields.Text;
    description_ky?: EntryFields.Text;
    description_en?: EntryFields.Text;
    cover?: Asset;
    type?: "culture" | "provide";
    slug?: EntryFields.Symbol;
}

export type TypeProvides = Entry<TypeProvidesFields>;
