import styled from 'styled-components';

const ResizerStyles = styled.div`
  position: absolute;
  ${({ side }) =>
    side === 'top' || side === 'bottom'
      ? 'width: 100%; height: 10px; cursor: row-resize;'
      : 'height: 100%; width: 10px; cursor: col-resize;'}
  ${({ side }) => `${side}: -6px;`}
  z-index: 999999;
`;

export default ResizerStyles;
