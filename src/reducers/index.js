import { combineReducers } from 'redux'


const INITIAL_GENERAL_STATE = {
    userInfo: {
      name: '',
      age: 0
    },
    isAuthenticated: false
}

const general = (state = INITIAL_GENERAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TO_ALERTS':
      return state
    default:
      return state
  }
}

const reducers = combineReducers({
    general,
})

export default reducers
