import styled from 'styled-components';

export const ContactWrapper = styled.section`
  margin: 0 auto 60px;
  padding: 0 20px;
  max-width: 1280px;
  @media (min-width: 1024px) and (orientation: landscape) {
    margin: 100px auto 0;
  }
`;

export const ContactList = styled.ul`
  margin: 40px 20px 0;
  padding: 0;
`;
export const ContactListItem = styled.li`
  margin: 20px 0;
`;
