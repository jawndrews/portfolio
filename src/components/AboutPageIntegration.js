// Example integration for About page
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import FloatingShapes from "../components/FloatingShapes";
import CharacterModelContainer from "../components/CharacterModelContainer";

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

const ModelSection = styled.div`
  margin: 2rem auto 4rem;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModelTitle = styled(motion.h3)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--primary);
`;

// Rest of your About page code...

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

        {/* 3D Character Model Section */}
        <ModelSection>
          <ModelTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Interactive Portfolio Avatar
          </ModelTitle>
          <CharacterModelContainer />
        </ModelSection>

        {/* Rest of your About page content... */}
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
