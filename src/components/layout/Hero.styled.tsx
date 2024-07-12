import styled from "styled-components";
import { AppContentWrapper, Button } from "..";
import { motion } from "framer-motion";

export const Hero = () => {
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
    <AppContentWrapper>
      <HeroWrapper variants={parent} initial="initial" animate="animate">
        <Role variants={child}>Software Developer</Role>
        <Name variants={child}>Bogdan Kim</Name>
        <Description variants={child}>
          A front-end developer, passionate about building web apps that users
          love.
        </Description>
        <Button
          style={{ maxWidth: "fit-content", display: "block" }}
          href="#contact"
          variants={child}
        >
          Let's build something great
        </Button>
      </HeroWrapper>
    </AppContentWrapper>
  );
};

const HeroWrapper = styled(motion.section)`
  min-height: 100vh;
  display: grid;
  place-content: center;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 48em) {
    margin-top: -5.5rem;
  }
`;

const Role = styled(motion.span)`
  font-size: var(--fs-200);

  background: -webkit-linear-gradient(${(props) => props.theme.gradient});
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Name = styled(motion.h1)`
  font-family: var(--ff-accent);
  font-size: var(--fs-300);
  font-weight: var(--fw-bold);

  margin-bottom: 1rem;

  @media only screen and (min-width: 48em) {
    line-height: 1;
  }
`;

const Description = styled(motion.p)`
  font-size: var(--fs-100);
  color: ${(props) => props.theme.textSecondary};
  line-height: 1.75;

  margin-bottom: 1rem;

  @media only screen and (min-width: 48em) {
    max-width: min(37.5rem, 80%);
    line-height: 2rem;
  }
`;
