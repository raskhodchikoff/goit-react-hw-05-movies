import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
`;

export const SearchLink = styled(Link)`
  min-width: 100%;
  text-decoration: none;
  color: black;

  &:hover {
    padding: 2px;
  }
`;
