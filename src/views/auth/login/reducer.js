import {ActionTypes} from './actions';

let initState = {
    username: localStorage.getItem('userToken') ? JSON.parse(localStorage.getItem('userToken')).username : '',
    password: '',
    loading: false,
    authenticated: localStorage.getItem('userToken') ? true : false,
    errorMessage: '',
}

const loginReducer = (state = initState, action) => {
    
    switch(action.type){
      case ActionTypes.SUBMIT_CREDENTIALS:
            state.loading = true;
            state = {...state, ...action.data}
            return state;
      case ActionTypes.AUTHENTICATION_SUCCESS:
            state.loading = false;
            state.errorMessage = '';
            state = {...state, authenticated:true};;
            return state;
      case ActionTypes.AUTHENTICATION_FAILURE:
            state.loading = false;
            state.errorMessage = action.errorMessage;
            state={...state, authenticated:false}
            return state;
      case ActionTypes.LOGOUT_SUCCESS:
            state.loading = false;
            state={...state, authenticated:false}
            return state;
      default:
          return state;

    }

}
export default loginReducer;