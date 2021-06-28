import styled from 'styled-components';

const ResizerStyles = styled.div`
  position: absolute;
  ${({ side }) =>
    side === 'top' || side === 'bottom'
      ? 'width: 100%; height: 20px; cursor: row-resize;'
      : 'height: 100%; width: 20px; cursor: col-resize;'}
  ${({ side }) => `${side}: -12px;`}
  z-index: 100;
`;

export default ResizerStyles;
