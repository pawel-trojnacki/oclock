import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProductListMobie = styled.ul`
  padding: 0;
  margin: 100px 20px;
`;

export const ProductListBrowser = styled(motion.ul)`
  display: flex;
  padding-top: 15vh;
  margin-left: 5vw;
  height: 100vh;
`;
