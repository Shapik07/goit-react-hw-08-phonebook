import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  background-color: #a8d1e7;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled.button`
  margin-left: 60px;
  :hover {
    background-color: #fbd051;
    border: 2px solid gray;
    border-radius: 3px;
  }
`;
