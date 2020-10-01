import styled from 'styled-components';
import { motion } from 'framer-motion';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const NavWrapper = styled(motion.div)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: ${({ theme }) => theme.black};
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const ListItem = styled(motion.li)`
  list-style: none;
`;

export const ListItemFirst = styled(ListItem)`
  margin: 0 auto 0 0;
`;

export const StyledNavLink = styled(AniLink)`
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.s};
  padding: 10px;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.l};
    margin: 0 12px;
  }

  :hover,
  :focus {
    color: ${({ theme }) => theme.grey};
    svg {
      path {
        fill: ${({ theme }) => theme.grey};
      }
    }
  }

  :focus {
    outline: none;
  }

  transition: color 0.3s;
`;

export const Quantity = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.white};
  transform: translate(3px, 4px);
  font-size: ${({ theme }) => theme.xxs};

  @media (min-width: 768px) {
    transform: translate(5px, 4px);
    font-size: ${({ theme }) => theme.s};
  }
`;
