import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  border-bottom: solid 1px #82919f;
`;

export const Nav = styled.nav`
  display: flex;
  column-gap: 20px;
`;

export const Link = styled(NavLink)`
  padding: 8px 26px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  width: fit-content;
  color: white;
  /* background-color: #c7d0da; */
  /* background-color: #a4bbd1; */
  background-color: #82919f;

  &.active {
    color: black;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: #a4bbd1;
  }
`;
