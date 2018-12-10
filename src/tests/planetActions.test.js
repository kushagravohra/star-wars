import Actions, {ActionTypes} from '../views/planets/index/actions';

describe('actions', () => {
  it('should create an action to search planet', () => {
    const name = 'Test Planet';
    const expectedAction = {
      type: ActionTypes.PLANET_SEARCH,
      name
    }
    expect(Actions.planetSearch(name)).toEqual(expectedAction)
  })

  it('should create an action on receiving planets data', () => {
    const data = {results: [{name: 'test1'},{name: 'test1'}]};
    const expectedAction = {
      type: ActionTypes.PLANET_SEARCH_SUCCESS,
      data
    }
    expect(Actions.planetSearchSuccess(data)).toEqual(expectedAction)
  })

  it('should create an action on send planets data loaded check', () => {
    const data = {loading : false};
    const expectedAction = {
      type: ActionTypes.PLANET_SEARCH_LOADED,
      data
    }
    expect(Actions.planetSearchLoaded(data)).toEqual(expectedAction)
  })
})