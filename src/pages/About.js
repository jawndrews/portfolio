import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import FloatingShapes from "../components/FloatingShapes";

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  position: relative;
  overflow: hidden;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const AboutHeader = styled.div`
  margin-bottom: 4rem;
  padding-top: 3.5rem;
  text-align: center;
`;

const AboutTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;

  span {
    color: var(--primary);
  }
`;

const AboutSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const AboutCard = styled(motion.div)`
  background-color: rgba(30, 30, 30, 0.5);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    background-color: rgba(108, 99, 255, 0.1);
    backdrop-filter: blur(8px);
  }
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(108, 99, 255, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  i {
    font-size: 1.8rem;
    color: var(--primary);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  color: var(--gray);
  line-height: 1.6;
`;

const SkillsSection = styled.div`
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: var(--primary);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const SkillItem = styled(motion.div)`
  background-color: rgba(30, 30, 30, 0.5);
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    background-color: rgba(108, 99, 255, 0.1);
    backdrop-filter: blur(8px);
  }

  i {
    font-size: 2rem;
    color: var(--primary);
    margin-bottom: 1rem;
    display: block;
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--gray);
    font-size: 0.9rem;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <FloatingShapes />

      <AboutContent>
        <AboutHeader>
          <AboutTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            About <span>Me</span>
          </AboutTitle>
          <AboutSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Passionate about Salesforce, I combine full-stack development
            expertise with a drive to create outstanding user experiences
          </AboutSubtitle>
        </AboutHeader>

        <AboutGrid>
          <AboutCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <CardIcon>
              <i className="fas fa-laptop-code"></i>
            </CardIcon>
            <CardTitle>Salesforce Development</CardTitle>
            <CardText>
              Experienced in building custom Salesforce solutions, with an
              emphasis on business process automation and efficient workflow
              management.
            </CardText>
          </AboutCard>

          <AboutCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <CardIcon>
              <i className="fas fa-mobile-alt"></i>
            </CardIcon>
            <CardTitle>Full-Stack Development</CardTitle>
            <CardText>
              Knowledgeable in both front-end and back-end technologies,
              creating seamless and responsive web applications with modern
              frameworks and tools.
            </CardText>
          </AboutCard>

          <AboutCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <CardIcon>
              <i className="fas fa-paint-brush"></i>
            </CardIcon>
            <CardTitle>UI/UX Design</CardTitle>
            <CardText>
              Passionate about creating intuitive and visually appealing user
              interfaces that enhance overall user experience and engagement.
            </CardText>
          </AboutCard>
        </AboutGrid>

        <SkillsSection className="Skills">
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            My Skills
          </SectionTitle>

          <SkillsGrid>
            <SkillItem
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{
                y: -5,
                backgroundColor: "rgba(108, 99, 255, 0.1)",
                transition: { duration: 0.1, delay: 0 },
              }}
            >
              <i className="fab fa-salesforce"></i>
              <h4>Salesforce</h4>
              <p>Admin, Flows, DevOps</p>
            </SkillItem>

            <SkillItem
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{
                y: -5,
                backgroundColor: "rgba(108, 99, 255, 0.1)",
                transition: { duration: 0.1, delay: 0 },
              }}
            >
              <i className="fab fa-r-project"></i>
              <h4>Data Analytics</h4>
              <p>R, Python</p>
            </SkillItem>

            <SkillItem
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{
                y: -5,
                backgroundColor: "rgba(108, 99, 255, 0.1)",
                transition: { duration: 0.1, delay: 0 },
              }}
            >
              <i className="fab fa-js"></i>
              <h4>JavaScript</h4>
              <p>React, Node.js</p>
            </SkillItem>

            <SkillItem
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{
                y: -5,
                backgroundColor: "rgba(108, 99, 255, 0.1)",
                transition: { duration: 0.1, delay: 0 },
              }}
            >
              <i className="fab fa-html5"></i>
              <h4>HTML/CSS</h4>
              <p>Responsive Design</p>
            </SkillItem>

            <SkillItem
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{
                y: -5,
                backgroundColor: "rgba(108, 99, 255, 0.1)",
                transition: { duration: 0.1, delay: 0 },
              }}
            >
              <i className="fas fa-database"></i>
              <h4>Databases</h4>
              <p>SQL, MongoDB</p>
            </SkillItem>

            <SkillItem
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{
                y: -5,
                backgroundColor: "rgba(108, 99, 255, 0.1)",
                transition: { duration: 0.1, delay: 0 },
              }}
            >
              <i className="fab fa-git-alt"></i>
              <h4>Git</h4>
              <p>Version Control</p>
            </SkillItem>

            <SkillItem
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{
                y: -5,
                backgroundColor: "rgba(108, 99, 255, 0.1)",
                transition: { duration: 0.1, delay: 0 },
              }}
            >
              <i className="fas fa-cloud"></i>
              <h4>Cloud</h4>
              <p>Google Cloud Platform</p>
            </SkillItem>
          </SkillsGrid>
        </SkillsSection>

        <SkillsSection className="Interests">
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            My Interests
          </SectionTitle>

          <SkillsGrid>
            <SkillItem
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{
                y: -5,
                backgroundColor: "rgba(108, 99, 255, 0.1)",
                transition: { duration: 0.1, delay: 0 },
              }}
            >
              <i className="fa-solid fa-music"></i>
              <h4>Music Production</h4>
              <p>Ableton Live</p>
            </SkillItem>

            <SkillItem
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{
                y: -5,
                backgroundColor: "rgba(108, 99, 255, 0.1)",
                transition: { duration: 0.1, delay: 0 },
              }}
            >
              <i className="fa-solid fa-pen-nib"></i>
              <h4>Graphic Design</h4>
              <p>Adobe Creative Suite</p>
            </SkillItem>

            <SkillItem
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{
                y: -5,
                backgroundColor: "rgba(108, 99, 255, 0.1)",
                transition: { duration: 0.1, delay: 0 },
              }}
            >
              <i className="fa-solid fa-circle-nodes"></i>
              <h4>Generative AI</h4>
              <p>Local LLMs, ComfyUI</p>
            </SkillItem>

            <SkillItem
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{
                y: -5,
                backgroundColor: "rgba(108, 99, 255, 0.1)",
                transition: { duration: 0.1, delay: 0 },
              }}
            >
              <i className="fa-solid fa-water"></i>
              <h4>Scuba Diving</h4>
              <p>PADI / SSI Advanced</p>
            </SkillItem>

            <SkillItem
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{
                y: -5,
                backgroundColor: "rgba(108, 99, 255, 0.1)",
                transition: { duration: 0.1, delay: 0 },
              }}
            >
              <i className="fa-solid fa-person-snowboarding"></i>
              <h4>Snowboarding</h4>
              <p>Intermediate</p>
            </SkillItem>
          </SkillsGrid>
        </SkillsSection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
