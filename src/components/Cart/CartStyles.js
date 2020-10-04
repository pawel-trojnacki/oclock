import styled from 'styled-components';
import { motion } from 'framer-motion';
import Heading from '../../components/Heading/Heading';
import Paragraph from '../../components/Paragraph/Paragraph';

export const CartWrapper = styled(motion.div)`
  margin: 100px auto 0;
  max-width: 1200px;
  padding: 0 20px 200px;
  @media (min-width: 1024px) and (orientation: landscape) {
    display: flex;
  }
`;

export const CartList = styled.ul`
  list-style: none;
  padding: 0;
  @media (min-width: 1024px) and (orientation: landscape) {
    width: 60%;
    margin: 0;
  }
`;

export const CartItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;

  @media (min-width: 1024px) and (orientation: landscape) {
    flex-direction: row;
    align-items: flex-start;
    margin: 60px 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 70%;
  @media (min-width: 600px) {
    width: 50%;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    width: 25%;
  }
`;

export const InnerWrapper = styled.div`
  padding: 20px;
  @media (min-width: 1024px) and (orientation: landscape) {
    padding: 0 40px;
  }
`;

export const CartHeading = styled(Heading)`
  text-align: center;
  @media (min-width: 1024px) and (orientation: landscape) {
    text-align: left;
  }
`;

export const Quantity = styled.div`
  text-align: center;
  margin: 14px auto;
  @media (min-width: 1024px) and (orientation: landscape) {
    margin: 30px 10px;
    text-align: left;
  }
`;

export const QuantitySpan = styled(Paragraph)`
  display: inline-block;
  margin: 0 14px;
  font-size: 1.2em;
  @media (min-width: 768px) {
    margin: 0 20px;
  }
`;

export const Summary = styled.div`
  margin: 40px 10px;
  @media (min-width: 600px) {
    padding: 0 7vw;
    margin: 60px 0;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    padding: 0;
    width: 40%;
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  :nth-of-type(3) {
    margin-top: 20px;
  }
`;

export const CartParagraph = styled(Paragraph)`
  margin: 0 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
  @media (min-width: 600px) {
    margin: 20px 0;
  }
`;
