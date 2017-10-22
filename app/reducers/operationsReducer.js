import {
  CHANGE_INITIAL_EQUATION,
  CHANGE_OUTPUT,
  CHANGE_INITIAL_OPERATION
} from '../actions/operations';

const initialState = {
  initialOperation: 'Simplify',
  initialEquation: '1+1',
  output: '2',
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INITIAL_EQUATION:
      return { ...state, initialEquation: action.equation };
    case CHANGE_OUTPUT:
      return { ...state, output: action.output };
    case CHANGE_INITIAL_OPERATION:
      return { ...state, initialOperation: action.operation };
    default:
      return state;
  }
};
