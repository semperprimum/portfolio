import styled from "styled-components";

export const Button = styled.button<{ $secondary?: boolean }>`
  margin: 0;
  padding: 0;
  border: none;
  background-color: ${(props) =>
    props.$secondary ? "#0A84FF26" : props.theme.button};
  color: ${(props) => (props.$secondary ? "#0A84FF" : "#FFF")};
  line-height: 1.3;
  font-size: 1rem;
  border-radius: 0.875rem;
  padding: 0.625rem 1rem;
`;
