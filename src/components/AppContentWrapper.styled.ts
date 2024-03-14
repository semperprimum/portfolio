import styled from "styled-components";

export const AppContentWrapper = styled.div`
  width: calc(100% - 2rem);
  margin-inline: auto;

  @media only screen and (min-width: 48em) {
    width: min(69.375rem, calc(100% - 2rem));
  }
`;
