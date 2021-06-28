import { useState, useEffect } from 'react';

import ResizerStyles from './ResizerStyles';

const Resizer = ({ side, height, width, setDimension }) => {
  const [dragging, setDragging] = useState(false);
  const [initialPos, setInitialPos] = useState(null);

  let selectedClient;

  if (side === 'top' || side === 'bottom') {
    selectedClient = 'clientY';
  } else {
    selectedClient = 'clientX';
  }

  const removeEventListeners = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('touchend', onMouseUp);
  };

  const onMouseDown = e => {
    return onStart(e[selectedClient]);
  };

  const onMouseMove = e => {
    e.preventDefault();
    return onMove(e[selectedClient]);
  };

  const onMouseUp = () => {
    setDragging(false);
    return removeEventListeners();
  };

  const onTouchStart = e => {
    return onStart(e.touches[0][selectedClient]);
  };

  const onTouchMove = e => {
    return onMove(e.touches[0][selectedClient]);
  };

  const onStart = clientPos => {
    setInitialPos(clientPos);
    return setDragging(true);
  };

  const onMove = clientPos => {
    if (dragging) {
      let newPos = clientPos - initialPos;

      setInitialPos(clientPos);

      if (selectedClient === 'clientY') {
        setDimension(height + newPos > 22 ? height + newPos : height);
      } else {
        setDimension(width + newPos > 22 ? width + newPos : width);
      }
    }
  };

  useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('touchend', onMouseUp);
    }

    return () => {
      removeEventListeners();
    };

    // eslint-disable-next-line
  }, [onMouseDown, onTouchStart]);

  return (
    <ResizerStyles
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      side={side}
    />
  );
};

export default Resizer;
