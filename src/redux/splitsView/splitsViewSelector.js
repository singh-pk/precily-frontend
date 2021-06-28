import { createSelector } from 'reselect';

const selectSplitsView = state => state.splitsView;

export const selectSplitsViewHeight = createSelector(
  [selectSplitsView],
  splitsView => splitsView.height
);

export const selectSplitsViewWidth = createSelector(
  [selectSplitsView],
  splitsView => splitsView.width
);
