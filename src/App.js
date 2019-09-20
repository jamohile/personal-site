import React, { useState } from "react";
import styled from "styled-components";

import projects from "./projects";

const S = {};

S.Content = styled.div`
  margin: 64px 32px;
`;

S.Profile = styled.img`
  display: block;
  object-fit: contain;
  height: 200px;
  width: 200px;
  border-radius: 100px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1000px) {
    display: none;
  }
`;

S.Name = styled.h1`
  margin-top: 64px;

  font-family: Montserrat;
  font-weight: bold;
  font-size: 48px;

  color: #3b476f;

  @media (max-width: 1000px) {
    margin-top: 32px;
    text-align: center;
  }
`;

S.Headline = styled.h2`
  font-family: Lato;
  font-weight: 300;
  font-size: 24px;

  line-height: 32px;

  width: 400px;
  @media (max-width: 1000px) {
    width: 100%;
    text-align: center;
  }

  color: #989898;
`;

S.Headshot = styled.img`
  position: fixed;
  height: 125vh;
  right: 0;
  bottom: 0;

  @media (max-width: 1000px) {
    display: none;
  }
`;

S.Cards = styled.div`
  width: 700px;
  margin-top: 64px;

  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    width: 100%;
    justify-content: space-around;
  }
`;

S.ProjectCard = styled.div`
  position: relative;
  width: 170px;
  height: 170px;

  overflow: hidden;

  box-sizing: border-box;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-right: 24px;
  margin-bottom: 24px;

  @media (max-width: 1000px) {
    width: 100%;
    margin-right: 0;
    padding: 8px;
  }

  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.11), 0px 2px 7px rgba(0, 0, 0, 0.09);
  border-radius: 8px;

  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;

    @media (min-width: 1000px) {
      & > img {
        height: 100%;
        width: 100%;
        opacity: 1;
      }
    }
  }
`;

S.ProjectImage = styled.img`
  position: absolute;
  height: 140%;
  width: 140%;
  opacity: 0;

  transition: all 0.2s;
`;

S.ProjectTitle = styled.div`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 20px;
  color: #3b476f;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 16px;
  }
`;
S.ProjectSubtitle = styled.div`
  font-family: Lato;
  font-weight: 300;
  font-size: 16px;
  padding-top: 4px;
  text-align: center;
  color: #3b476f;

  @media (max-width: 1000px) {
    font-size: 16px;
  }
`;

S.Modal = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;

  z-index: 20;
`;

S.ModalDimmer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background: rgba(20, 20, 20, 0.6);
`;

S.ModalContent = styled.div`
  background: white;
  position: absolute;

  padding: 12px 24px;
  box-sizing: border-box;

  top: 30%;
  height: 40%;
  width: 50%;
  left: 25%;

  border-radius: 8px;

  @media (max-width: 1000px) {
    height: fit-content;
    top: 20%;
    width: 90%;
    left: 5%;
    padding: 24px 24px;
    padding-top: 0px;
  }
`;

S.ModalTitle = styled.h3`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 24px;

  margin-bottom: 8px;

  color: #3b476f;
`;
S.ModalSubtitle = styled.h4`
  font-family: Lato;
  font-weight: 300;
  font-size: 16px;

  margin-top: 8px;

  color: #3b476f;
`;
S.ModalProjectPoints = styled.ul`
  padding-left: 16px;
  font-family: Lato;
  font-weight: 300;
  color: #3b476f;
`;

S.ModalProjectPoint = styled.li`
  margin-bottom: 8px;
`;

S.ModalProjectLink = styled.a`
  font-family: Lato;
  color: #3b476f;
  margin-right: 8px;
`;

S.SocialLinks = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    justify-content: center;
  }
`;
S.SocialLink = styled.a`
  text-decoration: none;
  font-size: 24px;
  color: #3b476f;
  margin-right: 16px;

  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;
export default () => {
  const [selectedProject, setSelectedProject] = useState(undefined);
  return (
    <>
      {selectedProject && (
        <S.Modal>
          <S.ModalDimmer onClick={() => setSelectedProject(undefined)} />
          <S.ModalContent>
            <S.ModalTitle>{selectedProject.title}</S.ModalTitle>
            <S.ModalSubtitle>{selectedProject.subtitle}</S.ModalSubtitle>
            <S.ModalProjectPoints>
              {selectedProject.description.map(point => (
                <S.ModalProjectPoint>{point}</S.ModalProjectPoint>
              ))}
            </S.ModalProjectPoints>

            {selectedProject.links.map(link => (
              <S.ModalProjectLink href={link.link} target="_blank">
                {link.name}
              </S.ModalProjectLink>
            ))}
          </S.ModalContent>
        </S.Modal>
      )}
      <S.Content>
        <S.Profile src="https://user-images.githubusercontent.com/17712692/65325224-4580b000-db7c-11e9-9e2f-37fc7e391d84.png" />
        <S.Name>Jay Mohile</S.Name>
        <S.Headline>
          I’m a student engineer with a passion for solving real world problems
          with technology and design.
          <br />
          <br />
          Studying Engineering Science @ UofT
        </S.Headline>
        <S.Headshot src="https://user-images.githubusercontent.com/17712692/65325224-4580b000-db7c-11e9-9e2f-37fc7e391d84.png" />

        <S.SocialLinks>
          <S.SocialLink
            className="fab fa-linkedin"
            href="https://linkedin.com/in/jamohile"
            target="_blank"
          ></S.SocialLink>
          <S.SocialLink
            className="fab fa-github"
            href="https://github.com/jamohile"
            target="_blank"
          ></S.SocialLink>
          <S.SocialLink
            className="fab fa-medium"
            href="https://medium.com/@jamohile"
            target="_blank"
          ></S.SocialLink>
          <S.SocialLink
            href="https://medium.com/@jamohile"
            target="_blank"
            style={{ fontFamily: "Montserrat", fontSize: "16px" }}
          >
            Resume
          </S.SocialLink>
        </S.SocialLinks>
        <S.Cards>
          {projects.map(project => (
            <S.ProjectCard onClick={() => setSelectedProject(project)}>
              <S.ProjectImage src={project.image} />
              <S.ProjectTitle>{project.title}</S.ProjectTitle>
              <S.ProjectSubtitle>{project.subtitle}</S.ProjectSubtitle>
            </S.ProjectCard>
          ))}
        </S.Cards>
      </S.Content>
    </>
  );
};
