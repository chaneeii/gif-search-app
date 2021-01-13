import types from "./types";

export const getSearchResults = value => ({ //'WATCH_GET_SEARCH_RESULTS'
    type: types.watchGetSearchResults,
    value
});

export const setSearchResults = results => ({
    type: types.setSearchResults,
    results
})