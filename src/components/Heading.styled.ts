import styled from "styled-components";

export const Heading = styled.h2`
  font-family: var(--ff-accent);
  font-size: var(--fs-300);

  background: -webkit-linear-gradient(${(props) => props.theme.gradient});
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
