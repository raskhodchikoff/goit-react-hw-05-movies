import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  padding-top: 20px;
  min-width: 400px;
  margin-left: 10px;
`;

export const Input = styled.input`
  border: 1px solid #82919f;
  padding: 10px 20px;
  min-width: 250px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 33px;
  height: 33px;
  margin-left: -35px;
  border: 2px #82919f;
  background-repeat: 2px;
  transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: #82919f;
  color: white;

  &:hover {
    background-color: #a4bbd1;
  }
`;
