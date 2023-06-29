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

export const DIV = styled.div`
  display: flex;
  margin-left: 15px;
  margin-right: 15px
  margin-bottom: 10px;
  @media screen and (max-width: 738px) {
    display: block;
    
  }
`;
export const DIVinfo = styled.div`
  scale: 0.9;
  padding: 5px;
`;
export const AddInfo = styled.div`
  display: block;
  padding: 10px 15px;
  border-top: 2px solid #53585354;
  border-bottom: 2px solid #53585354;
  & a {
    text-decoration: none;
    display: block;
    &:hover {
      color: orange;
      cursor: pointer;
    }
  }
`;

export const IMG = styled.img`
  width: 250px;
  margin-top: 20px;

  @media screen and (max-width: 738px) {
    max-width: 100%;
    height: 50%;
  }
`;
