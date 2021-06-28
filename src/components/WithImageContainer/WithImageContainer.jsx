import { useState, useRef } from 'react';
import { connect } from 'react-redux';

import withImageContainerStyles from './WithImageContainer.module.scss';
import CustomButton from '../CustomButton/CustomButton';

import {
  setContainerDataStart,
  updateContainerDataStart,
} from '../../redux/containerData/containerDataAction';
import {
  selectContainerDataById,
  selectIsFetchingById,
} from '../../redux/containerData/containerDataSelector';

const WithImageContainer = WrapperComponent => {
  const inputRef = useRef(null);
  const [hover, setHover] = useState(false);

  const InputRef = ({
    setContainerDataStart,
    updateContainerDataStart,
    containerId,
    height,
    isFetchingById,
    imageUrl,
    children,
    ...props
  }) => {
    const handleFileChange = e => {
      const file = e.target.files[0];
      !imageUrl
        ? setContainerDataStart(file, containerId)
        : updateContainerDataStart(file, containerId);
    };

    const onMouseOver = () => {
      if (!imageUrl) return;

      return setHover(true);
    };

    const onMouseLeave = () => {
      return hover && setHover(false);
    };

    return (
      <>
        <input
          type='file'
          accept='image/*'
          onChange={handleFileChange}
          className={withImageContainerStyles.input}
          ref={inputRef}
        />

        <WrapperComponent
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
          {...props}
        >
          {imageUrl && <img src={imageUrl} alt='' height='100%' width='100%' />}

          {!imageUrl ? (
            <CustomButton
              handleClick={() => inputRef.current?.click()}
              disabled={isFetchingById === containerId}
            >
              Choose an image
            </CustomButton>
          ) : (
            hover && (
              <CustomButton
                handleClick={() => inputRef.current?.click()}
                disabled={isFetchingById === containerId}
              >
                Update
              </CustomButton>
            )
          )}

          {children}
        </WrapperComponent>
      </>
    );
  };

  const mapStateToProps = (state, ownProps) => ({
    imageUrl: selectContainerDataById(ownProps.containerId)(state),
    isFetchingById: selectIsFetchingById(state),
  });

  const mapDispatchToProps = dispatch => ({
    setContainerDataStart: (file, containerId) =>
      dispatch(setContainerDataStart({ file, containerId })),
    updateContainerDataStart: (file, containerId) =>
      dispatch(updateContainerDataStart({ file, containerId })),
  });

  return connect(mapStateToProps, mapDispatchToProps)(InputRef);
};

export default WithImageContainer;
