import styled from 'styled-components';
import Heading from '../Heading/Heading';

const Caption = styled(Heading)`
  color: ${({ theme }) => theme.dark};
  font-size: 15vw;
`;

export default Caption;
