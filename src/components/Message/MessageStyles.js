import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledMessage = styled(motion.div)`
  padding: 20px;
  min-height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
