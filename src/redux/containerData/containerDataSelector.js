import { createSelector } from 'reselect';

const selectContainerData = state => state.containerData;

export const selectIsFetchingById = createSelector(
  [selectContainerData],
  containerData => containerData.isFetchingById
);

export const selectContainerDataById = containerId =>
  createSelector(
    [selectContainerData],
    containerData => containerData.containerById[containerId]
  );
