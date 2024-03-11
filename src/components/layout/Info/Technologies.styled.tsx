import styled from "styled-components";
import { SiTypescript, SiRedux, SiTailwindcss } from "react-icons/si";
import { FaReact, FaSass } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { Heading } from "../..";

const technologies: { name: string; icon: React.ReactNode }[] = [
  {
    name: "TypeScript",
    icon: <SiTypescript style={{ color: "#007ACC" }} />,
  },
  {
    name: "React",
    icon: <FaReact style={{ color: "#7CC5D9" }} />,
  },
  {
    name: "Sass",
    icon: <FaSass style={{ color: "#CC6699" }} />,
  },
  {
    name: "Framer Motion",
    icon: <FiFramer />,
  },
  {
    name: "Redux",
    icon: <SiRedux style={{ color: "#764ABC" }} />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss style={{ color: "#06B6D4" }} />,
  },
];

export const Technologies = () => {
  return (
    <TechnologiesWrapper>
      <Heading>Technologies</Heading>
      <TechnologiesList>
        {technologies.map((technology, index) => (
          <Technology key={index}>
            <TechnologyIconWrapper>{technology.icon}</TechnologyIconWrapper>
            {technology.name}
          </Technology>
        ))}
      </TechnologiesList>
    </TechnologiesWrapper>
  );
};

const TechnologiesWrapper = styled.div`
  margin-block: 2rem;
`;

const TechnologiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 1.5rem;

  display: grid;
  gap: 1.5rem;
`;

const Technology = styled.li`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: var(--fs-200);
`;

const TechnologyIconWrapper = styled.div`
  font-size: 2rem;
  & > svg {
    display: block;
  }
`;
