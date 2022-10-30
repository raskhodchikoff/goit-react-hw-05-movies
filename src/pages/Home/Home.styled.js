import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h2`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
`;

export const ListMovies = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  padding-left: 10px;
`;

export const MovieLink = styled(Link)`
  min-width: 100%;
  text-decoration: none;
  color: black;

  &:hover {
    padding: 2px;
    border-radius: 4px;
  }
`;
