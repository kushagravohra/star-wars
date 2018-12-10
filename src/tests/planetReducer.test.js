import reducer from '../views/planets/index/reducer'
import Actions, {ActionTypes} from '../views/planets/index/actions';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        planetList: [],
        loading: false,
      }
    )
  })

  it('should handle PLANET_SEARCH', () => {
    expect(
      reducer([], {
        type: ActionTypes.PLANET_SEARCH,
      })
    ).toEqual(
      {
        loading: true,
      }
    )
  })

  it('should handle PLANET_SEARCH_SUCCESS data', () => {
    expect(
      reducer([], {
        type: ActionTypes.PLANET_SEARCH_SUCCESS,
        data: {results: [{name: 'planet1'}, {name: 'planet2'}]}
      })
    ).toEqual(
      { 
        planetList: [{name: 'planet1'}, {name: 'planet2'}],
      }
    )
  })
})