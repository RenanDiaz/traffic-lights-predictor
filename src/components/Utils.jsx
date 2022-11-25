import { Row } from 'reactstrap';
import styled from 'styled-components';

export const SeparatorRow = styled(Row).attrs((props) => ({
  style: {
    height: `${props.height}px`,
  },
}))`
  user-select: none;
`;
