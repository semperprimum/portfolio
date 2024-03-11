import { Cloudinary } from "@cloudinary/url-gen/index";
import styled from "styled-components";
import { Button } from ".";

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    preview: string;
    code: string;
    technologies: string[];
    image: string;
  };
}

const cloudName = import.meta.env.VITE_CLOUD_NAME;

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const cld = new Cloudinary({ cloud: { cloudName } });

  const url = cld.image(props.project.image).toURL();

  return (
    <ProjectCardWrapper>
      <ImageWrapper>
        <Image
          src={url}
          alt={props.project.name}
        />
      </ImageWrapper>

      <ProjectName>{props.project.name}</ProjectName>

      <TechnologyList>
        {props.project.technologies.map((technology, index) => (
          <Technology key={index}>{technology}</Technology>
        ))}
      </TechnologyList>

      <MobileButtons>
        <Button
          as={"a"}
          href={props.project.preview}
        >
          Live Preview
        </Button>
        <Button
          $secondary
          as={"a"}
          href={props.project.code}
        >
          View Code
        </Button>
      </MobileButtons>
    </ProjectCardWrapper>
  );
};

const ProjectCardWrapper = styled.div``;

const ImageWrapper = styled.div`
  width: 100%;
  height: 15.625rem;
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

const Technology = styled.li`
  font-size: var(--fs-50);
  color: ${(props) => props.theme.textSecondary};
  background-color: ${(props) => props.theme.interactive};
  padding: 0.25rem 0.75rem;
  border-radius: 100vmax;
`;

const MobileButtons = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 0.75rem;
`;
