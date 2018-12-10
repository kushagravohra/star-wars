import Actions, {ActionTypes} from '../views/auth/login/actions';

describe('actions', () => {
  it('should create an action to submit credentials', () => {
    const data = {username: 'testuser', password: 'pass'};
    const expectedAction = {
      type: ActionTypes.SUBMIT_CREDENTIALS,
      data
    }
    expect(Actions.submitCredentials(data)).toEqual(expectedAction)
  })

  it('should show create an action error message on auth failure', () => {
    const errorMessage = 'Test error message.';
    const expectedAction = {
      type: ActionTypes.AUTHENTICATION_FAILURE,
      errorMessage
    }
    expect(Actions.authFailure(errorMessage)).toEqual(expectedAction)
  })
})