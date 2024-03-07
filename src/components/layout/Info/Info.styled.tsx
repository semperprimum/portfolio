import styled from "styled-components";
import { About } from "./About.styled";
import { AppContentWrapper } from "../..";
import { Projects } from "./Projects.styled";

export const Info = () => {
  return (
    <InfoWrapper className="snap-section">
      <AppContentWrapper>
        <About />

        <Projects />
      </AppContentWrapper>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.section`
  min-height: 100vh;
`;
