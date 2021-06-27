import { useState } from 'react';

import ResizingDivStyles from './ResizingDivStyles';
import Resizer from '../Resizer/Resizer';

const ResizingDiv = ({
  top,
  bottom,
  right,
  left,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  height,
  setHeight,
  children,
  ...otherProps
}) => {
  const [width, setWidth] = useState(maxWidth || 450);

  let sides = [];

  if (top) sides = [...sides, 'top'];
  if (bottom) sides = [...sides, 'bottom'];
  if (right) sides = [...sides, 'right'];
  if (left) sides = [...sides, 'left'];

  return (
    <ResizingDivStyles
      minWidth={minWidth}
      minHeight={minHeight}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      height={height}
      width={width}
      {...otherProps}
    >
      {sides.map(side => (
        <Resizer
          key={side}
          side={side}
          setDimension={
            side === 'top' || side === 'bottom' ? setHeight : setWidth
          }
        />
      ))}

      {children}
    </ResizingDivStyles>
  );
};

export default ResizingDiv;
