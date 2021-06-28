import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ResizingDivStyles from './ResizingDivStyles';
import Resizer from '../Resizer/Resizer';

import { setHeight, setWidth } from '../../redux/splitsView/splitsViewAction';
import {
  selectSplitsViewHeight,
  selectSplitsViewWidth,
} from '../../redux/splitsView/splitsViewSelector';

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
  width,
  style,
  setWidth,
  children,
  ...otherProps
}) => {
  let sides = [];

  if (top) sides = [...sides, 'top'];
  if (bottom) sides = [...sides, 'bottom'];
  if (right) sides = [...sides, 'right'];
  if (left) sides = [...sides, 'left'];

  let styleObj = { height, width, ...style };

  return (
    <ResizingDivStyles
      minWidth={minWidth}
      minHeight={minHeight}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      style={styleObj}
      {...otherProps}
    >
      {sides.map(side => (
        <Resizer
          key={side}
          side={side}
          setDimension={
            side === 'top' || side === 'bottom' ? setHeight : setWidth
          }
          height={height}
          width={width}
        />
      ))}

      {children}
    </ResizingDivStyles>
  );
};

const mapStateToProps = createStructuredSelector({
  height: selectSplitsViewHeight,
  width: selectSplitsViewWidth,
});

const mapDispatchToProps = dispatch => ({
  setHeight: height => dispatch(setHeight(height)),
  setWidth: width => dispatch(setWidth(width)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResizingDiv);
