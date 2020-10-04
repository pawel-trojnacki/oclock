import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledForm = styled(motion.form)`
  padding: 10px;
`;

export const FormField = styled.div`
  margin: 20px 0;
  @media (min-width: 1024px) {
    display: inline-block;
    margin: 20px 0;

    :nth-child(odd) {
      margin: 20px 6vw 20px 0;
    }
  }
`;

export const PaymentField = styled(FormField)`
  display: block;
  width: 100%;
`;

export const PaymentWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.white};
  padding: 8px 14px;
  margin-top: 4px;
`;

export const BottomWrapper = styled(PaymentField)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
