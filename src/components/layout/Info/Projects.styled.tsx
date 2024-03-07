import styled from "styled-components";
import { Heading } from "../..";

export const Projects = () => {
  return (
    <ProjectsWrapper>
      <Heading>Projects</Heading>
      <Paragraph>
        I've included some of my projects - take a peek! I'm excited to connect
        with others about potential collaborations.
      </Paragraph>
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.div`
  margin-top: 2rem;
`;

const Paragraph = styled.p`
  display: block;
  color: ${(props) => props.theme.textSecondary};
  margin-top: 1rem;
`;
