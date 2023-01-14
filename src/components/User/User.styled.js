import styled from 'styled-components';
export const Text = styled.p`
  color: red;
  font-size: 24px;
  background-color: beige;
  &:hover {
    background-color: green;
  }
`;

export const NameText = styled.span`
  color: blue;
  background-color: blueviolet;
  ${Text}:hover & {
    background-color: pink;
  }
`;
