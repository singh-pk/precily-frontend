import ContainerDataTypes from './containerDataTypes';

const INITIAL_STATE = {
  containerById: {},
  isFetchingById: null,
  error: null,
};

const containerDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContainerDataTypes.SET_IMG_START:
    case ContainerDataTypes.UPDATE_IMG_START:
      return {
        ...state,
        isFetchingById: action.payload.containerId,
        error: null,
      };
    case ContainerDataTypes.SET_IMG_SUCCESS:
      return {
        ...state,
        containerById: { ...state.containerById, ...action.payload },
        isFetchingById: null,
        error: null,
      };
    case ContainerDataTypes.UPDATE_IMG_SUCCESS:
      let copy = state.containerById;
      copy[action.payload.containerId] = action.payload.imageUrl;
      return {
        ...state,
        containerById: copy,
        isFetchingById: null,
        error: null,
      };
    case ContainerDataTypes.SET_IMG_FAILURE:
    case ContainerDataTypes.UPDATE_IMG_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchingById: null,
      };
    default:
      return state;
  }
};

export default containerDataReducer;
