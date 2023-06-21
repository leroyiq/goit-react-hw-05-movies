import styled from 'styled-components';

export const ButtonBack = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #d6e1e3;
  margin-left: 15px;
  margin-top: 15px;
  cursor: pointer;
  transition: transform 250ms ease-out;
  &:hover {
    background-color: #20329d;
    color: #d6e1e3;
    transform: translate(0px, 0px) scale(1.03, 1.03);
  }
`;
