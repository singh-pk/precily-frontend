import { useRef, useState, useEffect } from 'react';

import ResizerStyles from './ResizerStyles';

const Resizer = ({ side, setDimension }) => {
  const resizerRef = useRef(null);
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
      setDimension(prevDim =>
        prevDim + newPos > 22 ? prevDim + newPos : prevDim
      );
    }
  };

  useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('touchend', onMouseUp);
    } else {
      removeEventListeners();
    }

    return () => {
      return removeEventListeners();
    };

    // eslint-disable-next-line
  }, [onMouseDown, onTouchStart]);
  return (
    <ResizerStyles
      ref={resizerRef}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      side={side}
    />
  );
};

export default Resizer;
