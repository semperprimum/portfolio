import styled from "styled-components";
import { Heading, ProjectCard } from "../..";
import projects from "../../../projects.json";

export const Projects = () => {
  return (
    <ProjectsWrapper id="projects">
      <Heading>Projects</Heading>
      <Paragraph>
        I've included some of my projects - take a peek! I'm excited to connect
        with others about potential collaborations.
      </Paragraph>

      <ProjectCardWrapper>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </ProjectCardWrapper>

      <CtaText>
        For more projects, check out my{" "}
        <a href="https://www.frontendmentor.io/profile/semperprimum/solutions">
          frontendmentor.io
        </a>{" "}
        profile
      </CtaText>
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

const ProjectCardWrapper = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const CtaText = styled.p`
  color: ${(props) => props.theme.textSecondary};
  text-align: center;
  margin-top: 1.5rem;
  & > a {
    background: -webkit-linear-gradient(${(props) => props.theme.gradient});
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
