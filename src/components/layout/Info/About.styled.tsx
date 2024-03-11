import styled from "styled-components";
import { Heading } from "../..";

export const About = () => {
  return (
    <AboutWrapper id="about">
      <Heading>About</Heading>
      <Paragraph>
        I'm Bogdan Kim, an ambitious 18-year-old Front-End Developer based in
        Kazakhstan. I'm driven by the desire to bring ideas to life and actively
        seek out exciting projects to broaden my skills.
      </Paragraph>

      <Paragraph>
        Currently, I'm enhancing my knowledge at Astana Polytechnic College.
      </Paragraph>

      <Paragraph>kim.bogdan0266@gmail.com</Paragraph>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  padding-top: 1rem;
`;

const Paragraph = styled.p`
  display: block;
  color: ${(props) => props.theme.textSecondary};
  margin-top: 1rem;

  & + & {
    margin-top: 1.5rem;
  }

  &:last-child {
    font-weight: var(--fw-bold);
  }
`;
