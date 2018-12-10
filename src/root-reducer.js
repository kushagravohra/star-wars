import { combineReducers } from 'redux';

import loginReducer from './views/auth/login/reducer';
import PlanetsReducer from './views/planets/index/reducer';

const rootReducer = combineReducers({
  loginView: loginReducer,
  planetsView: PlanetsReducer,
});

export default rootReducer;