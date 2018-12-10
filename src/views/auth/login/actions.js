export const ActionTypes = {
  SUBMIT_CREDENTIALS: 'login/submit_credentials',
  AUTHENTICATION_SUCCESS: 'login/auth_success',
  AUTHENTICATION_FAILURE: 'login/auth_failure',
  LOGOUT: 'login/logout',
  LOGOUT_SUCCESS: 'login/logout_success',
};

const submitCredentials = (data) => {
  return {
    data,
    type: ActionTypes.SUBMIT_CREDENTIALS,
  };
};

const authSuccess = () => {
  return {
    type: ActionTypes.AUTHENTICATION_SUCCESS,
  };
};

const authFailure = (errorMessage) => {
  return {
    errorMessage,
    type: ActionTypes.AUTHENTICATION_FAILURE,
  };
};

const logout = () => {
  return {
    type: ActionTypes.LOGOUT,
  };
};

const logoutSuccess = () => {
  return {
    type: ActionTypes.LOGOUT_SUCCESS,
  };
};

export default {
  submitCredentials,
  authSuccess,
  authFailure,
  logout,
  logoutSuccess,
};
