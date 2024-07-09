import { Cloudinary } from "@cloudinary/url-gen/index";
import styled from "styled-components";
import { Button } from ".";
import { useMedia } from "../hooks/useMedia";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    preview: string;
    code: string;
    technologies: string[];
    image: string;
    description?: string;
  };
  variants: {
    initial: { opacity: number; x: number };
    animate: { opacity: number; x: number; transition: { duration: number } };
  };
}

const cloudName = import.meta.env.VITE_CLOUD_NAME;

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const cld = new Cloudinary({ cloud: { cloudName } });

  const url = cld.image(props.project.image).toURL();

  const isMobile = useMedia("(max-width: 69.375em)");

  return (
    <ProjectCardWrapper variants={props.variants}>
      <ImageWrapper>
        <Image src={url} alt={props.project.name} />

        {!isMobile && (
          <ButtonContainer>
            <Button as={"a"} href={props.project.preview}>
              Live Preview
            </Button>
            <Button $secondary as={"a"} href={props.project.code}>
              View Code
            </Button>
          </ButtonContainer>
        )}
      </ImageWrapper>

      <ProjectName>{props.project.name}</ProjectName>

      {props.project.description && (
        <Description>{props.project.description}</Description>
      )}

      <TechnologyList>
        {props.project.technologies.map((technology, index) => (
          <Technology key={index}>{technology}</Technology>
        ))}
      </TechnologyList>

      {isMobile && (
        <ButtonContainer>
          <Button as={"a"} href={props.project.preview}>
            Live Preview
          </Button>
          <Button $secondary as={"a"} href={props.project.code}>
            View Code
          </Button>
        </ButtonContainer>
      )}
    </ProjectCardWrapper>
  );
};

const ProjectCardWrapper = styled(motion.div)`
  @media only screen and (min-width: 48em) {
    &:first-child {
      grid-column: span 2;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  /* height: 15.625rem; */
  aspect-ratio: 11 / 8;

  @media only screen and (min-width: 48em) {
    height: 25rem;
    aspect-ratio: auto;
  }

  @media only screen and (min-width: 69.375em) {
    position: relative;

    &:hover {
      &::before {
        opacity: 0.8;
      }

      & > div {
        opacity: 1;
      }
    }

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: black;
      opacity: 0;
      transition: opacity 200ms ease;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectName = styled.h3`
  font-family: var(--ff-accent);
  font-size: var(--fs-200);
  font-weight: var(--fw-bold);
  margin-top: 1rem;
  margin-bottom: 0.75rem;
  text-transform: capitalize;
`;

const TechnologyList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Description = styled.p`
  font-size: var(--fs-100);
  color: ${(props) => props.theme.textSecondary};
  margin-bottom: 0.75rem;
`;

const Technology = styled.li`
  font-size: var(--fs-50);
  color: ${(props) => props.theme.textSecondary};
  background-color: ${(props) => props.theme.interactive};
  padding: 0.25rem 0.75rem;
  border-radius: 100vmax;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 0.75rem;

  @media only screen and (min-width: 69.375em) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    display: grid;
    margin: 0;
    opacity: 0;
    transition: opacity 200ms ease;

    & > a {
      display: block;
      max-width: fit-content;
      margin-inline: auto;
    }
  }
`;
