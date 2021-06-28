import SplitsViewTypes from './splitsViewTypes';

export const setHeight = height => ({
  type: SplitsViewTypes.SET_HEIGHT,
  payload: height,
});

export const setWidth = width => ({
  type: SplitsViewTypes.SET_WIDTH,
  payload: width,
});
