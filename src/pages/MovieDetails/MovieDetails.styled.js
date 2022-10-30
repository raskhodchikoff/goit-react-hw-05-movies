import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  padding: 8px;
  border-radius: 4px;
  border: #82919f solid 1px;
  margin-bottom: 10px;

  &:hover {
    background-color: #82919f;
    color: #ffffff;
  }
`;

export const Back = styled(Link)`
  display: flex;
  font-size: 14px;
  align-items: center;
  column-gap: 10px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  color: black;
`;

export const MovieDetail = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-left: 30px;
`;

export const Genres = styled.ul`
  display: flex;
  column-gap: 10px;
  padding: 0;
  margin: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  border-top: 1px solid #82919f;
  border-bottom: 1px solid #82919f;
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;
`;

export const LinkAddInfo = styled(Link)`
  text-decoration: none;
  color: black;
`;
