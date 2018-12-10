import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import Actions, {ActionTypes} from './actions';

const baseUrl = 'https://swapi.co/api/';

export function* planetSearch(action){
  try{
  	const url = `${baseUrl}planets/?format=json&search=${action.name}`
    const response = yield call(axios.get, url)
    yield put(Actions.planetSearchSuccess(response.data));
    if(response.data.next){
    	yield call(planetSearchMerge, response.data.next)
    }else{
    	yield put(Actions.planetSearchLoaded());
    }
  }
  catch(e){
    console.log(e)
  }
}

export function* planetSearchMerge(nextUrl){
  try{
    const response = yield call(axios.get, nextUrl)
    yield put(Actions.planetSearchMerge(response.data));
    if(response.data.next){
    	yield call(planetSearchMerge, response.data.next)
    }else{
    	yield put(Actions.planetSearchLoaded());
    }
  }
  catch(e){
    console.log(e)
  }
}

export default function* root() {
	yield takeLatest(ActionTypes.PLANET_SEARCH, planetSearch);
}