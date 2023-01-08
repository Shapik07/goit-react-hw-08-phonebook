import styled from 'styled-components';

export const Text = styled.p`
  color: #a8d1e7;
  font-size: 10px;
`;

export const Button = styled.button`
  background-color: #fbd051;
  border-radius: 4px;
  font-size: 10px;
  color: black;
  border: 1px solid black;
  font-weight: 500;
  height: 25px;
  width: 70px;
  :hover {
    background-color: #a8d1e7;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;
