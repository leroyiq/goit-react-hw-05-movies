import styled from 'styled-components';

export const UL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  & li {
    list-style: none;
    max-width: 150px;
    transition: transform 250ms ease-out;
    &:hover {
      transform: translate(0px, 0px) scale(1.03, 1.03);
    }

    & img {
      width: 150px;
      min-height: 225px;
    }
  }
`;
