import styled from "styled-components";
import { About } from "./About.styled";
import { AppContentWrapper, Footer } from "../..";
import { Projects } from "./Projects.styled";
import { Technologies } from "./Technologies.styled";

export const Info = () => {
  return (
    <InfoWrapper>
      <AppContentWrapper>
        <About />

        <Projects />

        <Technologies />
      </AppContentWrapper>

      <Footer />
    </InfoWrapper>
  );
};

const InfoWrapper = styled.section`
  min-height: 100vh;
`;
