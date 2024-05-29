import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeGalleryFields {
    covers?: Asset[];
    name: EntryFields.Symbol;
}

export type TypeGallery = Entry<TypeGalleryFields>;
