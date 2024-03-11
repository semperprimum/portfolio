import styled from "styled-components";
import { AppContentWrapper, Button } from "..";

export const Hero = () => {
  return (
    <AppContentWrapper>
      <HeroWrapper>
        <Role>Front-End developer</Role>
        <Name>Bogdan Kim</Name>
        <Description>
          A front-end developer, passionate about building web apps that users
          love.
        </Description>
        <Button
          as={"a"}
          style={{ maxWidth: "fit-content", padding: ".75rem 1rem" }}
          href="#contact"
        >
          Let's build something great
        </Button>
      </HeroWrapper>
    </AppContentWrapper>
  );
};

const HeroWrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-content: center;
`;

const Role = styled.span`
  font-size: var(--fs-200);

  background: -webkit-linear-gradient(${(props) => props.theme.gradient});
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Name = styled.h1`
  font-family: var(--ff-accent);
  font-size: var(--fs-300);
  font-weight: var(--fw-bold);

  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: var(--fs-100);
  color: ${(props) => props.theme.textSecondary};
  line-height: 1.75;

  margin-bottom: 1rem;
`;
