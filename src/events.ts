import Emitter from "blink-hub";

type SearchEvents = {
    searchTermUpdated: (searchTerm: string) => void;
};

export const searchEmitter: Emitter<SearchEvents> = new Emitter<SearchEvents>();