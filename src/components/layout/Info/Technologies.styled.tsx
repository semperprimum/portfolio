import styled from "styled-components";
import { SiTypescript, SiRedux, SiTailwindcss } from "react-icons/si";
import { FaReact, FaSass, FaVuejs, FaGolang } from "react-icons/fa6";
import { FiFramer } from "react-icons/fi";
import { Heading } from "../..";
import { motion } from "framer-motion";

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
    name: "Vue.js",
    icon: <FaVuejs style={{ color: "#42b883" }} />,
  },
  {
    name: "Golang",
    icon: <FaGolang style={{ color: "#00ADD8" }} />,
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
  const child = {
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        damping: 25,
        mass: 0.5,
        stiffness : 75, 
      },
    },
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
    <TechnologiesWrapper>
      <Heading>Technologies</Heading>
      <TechnologiesList
        variants={parent}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {technologies.map((technology, index) => (
          <Technology variants={child} key={index}>
            <TechnologyIconWrapper aria-hidden="true">
              {technology.icon}
            </TechnologyIconWrapper>
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

const TechnologiesList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 1.5rem;

  display: grid;
  gap: 1.5rem;
`;

const Technology = styled(motion.li)`
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
