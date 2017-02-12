import {OPEN, CLOSE, SUBMIT} from '../actions'

const initialState = {
	isOpen: false
}

export default (state = initialState, action) => {
  // console.log(action)
  // console.log(state)

  switch (action.type) {
    case OPEN:
      return  Object.assign({}, state, {
        isOpen: true
      })
    case CLOSE:
      return  Object.assign({}, state, {
        isOpen: false
      })
    case SUBMIT:
      return Object.assign({}, state, {
        isOpen: true
      })
    default:
      return state
  }
};
