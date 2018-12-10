export const ActionTypes = {
  PLANET_SEARCH: 'planets/planet_search',
  PLANET_SEARCH_SUCCESS: 'planets/planet_search_success',
  PLANET_SEARCH_MERGE: 'planets/planet_search_merge',
  PLANET_SEARCH_LOADED: 'planets/planet_search_loaded',
};

const planetSearch = (name) => {
  return {
    name,
    type: ActionTypes.PLANET_SEARCH,
  };
};

const planetSearchSuccess = (data) => {
  return {
    data,
    type: ActionTypes.PLANET_SEARCH_SUCCESS,
  };
};

const planetSearchMerge = (data) => {
  return {
    data,
    type: ActionTypes.PLANET_SEARCH_MERGE,
  };
};

const planetSearchLoaded = (data) => {
  return {
    data,
    type: ActionTypes.PLANET_SEARCH_LOADED,
  };
};

export default {
  planetSearch,
  planetSearchSuccess,
  planetSearchMerge,
  planetSearchLoaded,
};
