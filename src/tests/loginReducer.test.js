import reducer from '../views/auth/login/reducer'
import Actions, {ActionTypes} from '../views/auth/login/actions';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        username: localStorage.getItem('userToken') ? JSON.parse(localStorage.getItem('userToken')).username : '',
        password: '',
        loading: false,
        authenticated: localStorage.getItem('userToken') ? true : false,
        errorMessage: '',
      }
    )
  })

  it('should handle AUTHENTICATION_SUCCESS', () => {
    expect(
      reducer([], {
        type: ActionTypes.AUTHENTICATION_SUCCESS,
      })
    ).toEqual(
      {
        loading: false,
        authenticated: true,
        errorMessage: '',
      }
    )
  })
})