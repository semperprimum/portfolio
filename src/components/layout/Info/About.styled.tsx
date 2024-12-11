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
      <Heading>About Me</Heading>
      <Paragraph>
        My love for coding started at age 14, sparked by a single online game’s community that needed to automate some tedious mechanics. I was wondering if I could help, so I stumbled upon AHK—a Windows scripting language I barely understood—and pieced together scripts in Notepad++. Within a week, more than 50 players were using what I had built. Witnessing something I made simplify lives and bring genuine value—well, that’s what truly drives me; it lit a spark in me.
      </Paragraph>

      <Paragraph>By 15, I was learning Python basics, experimenting with Linux on virtual machines, and taking online courses to build my foundation. Later, I got into a college with the top Software Engineering program available, diving deep into a broad range of technologies and career paths. Ultimately, I graduated with honors among the best students.
      </Paragraph>

      <Paragraph>Today, based in Toronto, I can proudly call myself a full-stack developer with hands-on experience in production-grade projects. I am keenly interested in continuous learning, staying ahead in the current tech trends, and refinement of best practices. I am excited to join a wonderful team where I can get a scope to contribute to meaningful projects, keep growing, and make my potential impact.
      </Paragraph>

      <Paragraph>Fast-paced environments like startups and new ventures don’t scare me—they motivate and excite me.
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
