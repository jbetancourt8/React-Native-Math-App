export const CHANGE_INITIAL_EQUATION = 'CHANGE_INITIAL_EQUATION';
export const CHANGE_OUTPUT = 'CHANGE_OUTPUT';
export const CHANGE_INITIAL_OPERATION = 'CHANGE_INITIAL_OPERATION';

export const changeInitialEquation = equation => ({
  type: CHANGE_INITIAL_EQUATION,
  equation
});

export const changeOutput = output => ({
  type: CHANGE_OUTPUT,
  output
});

export const changeInitialOperation = operation => ({
  type: CHANGE_INITIAL_OPERATION,
  operation
});
