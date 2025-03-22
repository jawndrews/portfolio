import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import FloatingShapes from "../components/FloatingShapes";
import { projectImages } from "../assets/dynamicFiles";

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  position: relative;
  overflow: hidden;
`;

const ProjectsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const ProjectsHeader = styled.div`
  margin-bottom: 4rem;
  padding-top: 3.5rem;
  text-align: center;
`;

const ProjectsTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;

  span {
    color: var(--primary);
  }
`;

const ProjectsSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectTag = styled.span`
  background-color: rgba(108, 99, 255, 0.1);
  color: var(--primary);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectCard = styled(motion.div)`
  background-color: rgba(30, 30, 30, 0.5);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    background-color: rgba(108, 99, 255, 0.1);
    backdrop-filter: blur(8px);
  }
  &:hover ${ProjectTag} {
    color: var(--light-alt);
    transition: 0.5s ease;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 0.5s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectSubtitle = styled.h4`
  font-size: 1rem;
  color: var(--primary);
  margin-bottom: 1rem;
  font-weight: 500;
`;

const ProjectDescription = styled.p`
  color: var(--gray);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(props) =>
    props.primary ? "var(--primary)" : "transparent"};
  border: ${(props) => (props.primary ? "none" : "2px solid var(--primary)")};
  color: ${(props) => (props.primary ? "white" : "var(--primary)")};
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.primary ? "var(--secondary)" : "var(--primary)"};
    color: white;
    transform: translateY(-3px);
  }

  i {
    font-size: 1.2rem;
  }
`;

const Projects = () => {
  useEffect(() => {
    document.title = "Jonathan Andrews | Projects";
  }, []);
  const projects = [
    {
      id: 1,
      title: "MemberMint V2",
      subtitle: "Custom Salesforce Application",
      description:
        "A comprehensive membership management platform, built on Salesforce for organizations to manage members, income, events, and communications.",
      image: projectImages.membermintv2,
      tags: ["SFDC", "Stripe API", "Apex", "LWC"],
      comingLink: "#",
    },
    {
      id: 2,
      title: "MemberMint",
      subtitle: "Full Stack React App",
      description:
        "A comprehensive membership management platform for organizations to manage members, income, events, and communications.",
      image: projectImages.membermint,
      tags: ["React", "Express", "Node.js", "MongoDB"],
      codeLink: "https://github.com/jawndrews/finance-web-dev-project",
    },
    {
      id: 3,
      title: "Portfolio Site",
      subtitle: "Personal Portfolio & Resume Site",
      description:
        "A dynamic personal website featuring my resume, project gallery, and contact information with a user-friendly design (the site you are on!).",
      image: projectImages.portfolio,
      tags: ["React", "Three.js", "Firebase"],
      codeLink: "https://github.com/jawndrews",
    },
    {
      id: 4,
      title: "mediahook",
      subtitle: "Media Conversion App",
      description:
        "A full stack personal project that converts media from YouTube, TikTok, Instagram, and SoundCloud into downloadable MP3 or MP4 files.",
      image: projectImages.mediahook,
      tags: ["React", "Express", "REST API"],
      codeLink: "https://github.com/jawndrews/media-converter",
    },
    {
      id: 5,
      title: "MusicCreator",
      subtitle: "E-Commerce Product Designs",
      description:
        "Product images, logos, social media kits, and creative brand identity developed for an e-commerce music store.",
      image: projectImages.musiccreator,
      tags: ["Product Design", "Brand Identity Design"],
      liveLink: "https://musiccreator.com/",
      designLink:
        "https://www.behance.net/gallery/147840085/Logo-Design-MusicCreatorcom",
    },

    {
      id: 6,
      title: "Sicily Island State Bank",
      subtitle: "Regional Bank Website Build",
      description:
        "A WordPress site for a local bank with a new layout and updated styling, enabling a mobile-friendly structure.",
      image: projectImages.sibank,
      tags: ["WordPress", "UI Redesign", "Responsive"],
      liveLink: "https://sibank.net",
    },
    {
      id: 7,
      title: "Coming Soon",
      subtitle: "More projects coming soon!",
      description:
        "As documentation is gathered and implemented for previous projects, they will be reflected here. There are plenty on the way!",
      image: projectImages.comingsoon,
      tags: ["Coming Soon"],
    },
  ];

  return (
    <ProjectsContainer>
      <FloatingShapes />
      <ProjectsContent>
        <ProjectsHeader>
          <ProjectsTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            My <span>Projects</span>
          </ProjectsTitle>
          <ProjectsSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Here are some of the projects I've worked on
          </ProjectsSubtitle>
        </ProjectsHeader>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ y: -10, transition: { duration: 0.1, delay: 0 } }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, i) => (
                    <ProjectTag key={i}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  {project.liveLink && (
                    <ProjectLink
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      primary
                    >
                      <i className="fas fa-external-link-alt"></i> View Live
                    </ProjectLink>
                  )}
                  {project.codeLink && (
                    <ProjectLink
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i> View Code
                    </ProjectLink>
                  )}
                  {project.designLink && (
                    <ProjectLink
                      href={project.designLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-solid fa-pen-nib"></i> Showcase
                    </ProjectLink>
                  )}
                  {project.comingLink && (
                    <ProjectLink
                      href={project.comingLink}
                      target=""
                      rel="noopener noreferrer"
                    >
                      Demo Coming
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default Projects;
