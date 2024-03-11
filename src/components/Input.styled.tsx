import styled from "styled-components";

export const Input = styled.input`
  border: none;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.interactive};
  padding: 0.875rem 1.25rem;
  border-radius: 0.875rem;
  caret-color: ${(props) => props.theme.button};

  &::placeholder {
    color: ${(props) => props.theme.textMuted};
  }

  &:focus,
  &:focus-visible {
    outline: 1px solid ${(props) => props.theme.button};
  }
`;
