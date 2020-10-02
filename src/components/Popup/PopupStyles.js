import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PopupWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000e2;
`;

export const StyledPopup = styled(motion.div)`
  width: 90%;
  height: 90%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    height: 80%;
    width: 50%;
  }
`;

export const ButtonsWrapper = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
