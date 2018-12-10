import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import Actions, {ActionTypes} from './actions';

const baseUrl = 'https://swapi.co/api/';

export function* submitCredentials(action){
  const data = action.data;
  try{
    const response = yield call(axios.get,(`${baseUrl}people/?format=json&search=${data.username}`))
    if(response.data.count === 1 && data.username === response.data.results[0].name && data.password === response.data.results[0].birth_year){
    	localStorage.setItem('userToken', JSON.stringify(data));    	
    	yield put(Actions.authSuccess());
    }else{
    	yield put(Actions.authFailure('Invalid Username or Password.'));
    }
  }
  catch(e){
  	yield put(Actions.authFailure('Something went wrong.'));
    console.log(e)
  }
}

export function* logout(action){
  localStorage.removeItem('userToken');
  yield put(Actions.logoutSuccess());
}


export default function* root() {
	yield takeLatest(ActionTypes.SUBMIT_CREDENTIALS, submitCredentials);
	yield takeLatest(ActionTypes.LOGOUT, logout);
}