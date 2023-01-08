import styled from 'styled-components';

export const Label = styled.label`
  margin-top: 10px;
  margin-left: 30px;
  font-weight: 400;
`;

export const Input = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  margin-left: 30px;
`;

export const Button = styled.button`
  margin-top: 10px;
  margin-left: 30px;
  width: 100px;
  padding: 5px 10px;
  :hover {
    background-color: #fbd051;
    border: 2px solid gray;
    border-radius: 3px;
  }
`;
