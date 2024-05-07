import styled from "styled-components";
import { Heading, ProjectCard } from "../..";
import projects from "../../../projects.json";
import { motion } from "framer-motion";

export const Projects = () => {
  const child = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const parent = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <ProjectsWrapper id="projects">
      <Heading
        initial={child.initial}
        whileInView={child.animate}
        viewport={{ once: true }}
      >
        Projects
      </Heading>
      <Paragraph
        initial={child.initial}
        whileInView={child.animate}
        viewport={{ once: true }}
      >
        I've included some of my projects - take a peek! I'm excited to connect
        with others about potential collaborations.
      </Paragraph>

      <ProjectCardWrapper
        variants={parent}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <ProjectCard
            variants={child}
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

const Paragraph = styled(motion.p)`
  display: block;
  color: ${(props) => props.theme.textSecondary};
  margin-top: 1rem;
  font-size: var(--fs-100);

  max-width: 45rem;
`;

const ProjectCardWrapper = styled(motion.div)`
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;

  @media only screen and (min-width: 48em) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.75rem;
    row-gap: 2.5rem;
  }
`;

const CtaText = styled.p`
  color: ${(props) => props.theme.textSecondary};
  text-align: center;
  margin-top: 2rem;
  font-size: var(--fs-100);

  & > a {
    background: -webkit-linear-gradient(${(props) => props.theme.gradient});
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
