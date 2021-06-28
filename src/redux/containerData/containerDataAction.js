import ContainerDataTypes from './containerDataTypes';

export const setContainerDataStart = fileAndId => ({
  type: ContainerDataTypes.SET_IMG_START,
  payload: fileAndId,
});

export const setContainerDataSuccess = imgUrl => ({
  type: ContainerDataTypes.SET_IMG_SUCCESS,
  payload: imgUrl,
});

export const setContainerDataFailure = error => ({
  type: ContainerDataTypes.SET_IMG_FAILURE,
  payload: error,
});

export const updateContainerDataStart = fileAndId => ({
  type: ContainerDataTypes.UPDATE_IMG_START,
  payload: fileAndId,
});

export const updateContainerDataSuccess = imgUrlAndId => ({
  type: ContainerDataTypes.UPDATE_IMG_SUCCESS,
  payload: imgUrlAndId,
});

export const updateContainerDataFailure = error => ({
  type: ContainerDataTypes.UPDATE_IMG_FAILURE,
  payload: error,
});
