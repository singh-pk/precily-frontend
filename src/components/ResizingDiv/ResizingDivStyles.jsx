import styled from 'styled-components';

const ResizingDivStyles = styled.div`
  border: 1px solid black;
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minHeight }) => minHeight};
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  max-height: ${({ maxHeight }) => maxHeight || '100%'};
  width: ${({ width }) => width && `${width}px`};
  height: ${({ height }) => height && `${height}px`};
  overflow: hidden;
  position: relative;
`;

export default ResizingDivStyles;
