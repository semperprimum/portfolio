import styled from "styled-components";

export const AppContentWrapper = styled.div`
  width: calc(100% - 2rem);
  margin-inline: auto;

  @media only screen and (min-width: 90em) {
    width: min(60em, calc(100% - 2rem));
  }
`;
