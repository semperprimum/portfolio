import styled from "styled-components";
import { Heading } from "../..";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <AboutWrapper
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
      }}
      viewport={{ once: true }}
      id="about"
    >
      <Heading>About</Heading>
      <Paragraph>
        I'm Bogdan Kim, an ambitious 19-year-old Software Developer
        based in Toronto, Canada. I'm driven by the desire to bring ideas to
        life and actively seek out exciting projects to broaden my skills.
      </Paragraph>

      <Paragraph><a href="mailto:bogdan@thekim.ca">bogdan@thekim.ca</a></Paragraph>
    </AboutWrapper>
  );
};

const AboutWrapper = styled(motion.div)`
  margin-top: 1rem;

  @media only screen and (min-width: 48em) {
    max-width: 45rem;
  }
`;

const Paragraph = styled.p`
  display: block;
  color: ${(props) => props.theme.textSecondary};
  margin-top: 1rem;
  font-size: var(--fs-100);

  & + & {
    margin-top: 1.5rem;
  }

  &:last-child {
    font-weight: var(--fw-bold);
  }
`;
