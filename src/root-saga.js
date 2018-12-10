import {fork} from 'redux-saga/effects';

import LoginIndexSaga from './views/auth/login/saga';
import PlanetIndexSaga from './views/planets/index/saga';
//import AuthServiceSaga from './services/auth/saga';
//import PlanetsServiceSaga from './services/planets/saga';

export default function* rootSaga() {
  // Services
  yield fork(LoginIndexSaga);
  yield fork(PlanetIndexSaga);
  //yield fork(AuthServiceSaga);
  //yield fork(PlanetServiceSaga);
}