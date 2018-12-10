import {ActionTypes} from './actions';

let initState = {
    planetList: [],
    loading: false,
}

const planetsReducer = (state = initState, action) => {
    
    switch(action.type){
      case ActionTypes.PLANET_SEARCH:
            state = {...state, loading:true}
            return state;
      case ActionTypes.PLANET_SEARCH_SUCCESS:
            state = {...state, planetList:action.data.results}
            return state;
      case ActionTypes.PLANET_SEARCH_MERGE:
            state = {...state, planetList:[...state.planetList, ...action.data.results]}
            return state;
      case ActionTypes.PLANET_SEARCH_LOADED:
            state = {...state, loading: false}
            return state;
      default:
          return state;

    }

}
export default planetsReducer;