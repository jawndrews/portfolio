import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const ProgressBar = styled(motion.div)`
  width: 200px;
  height: 4px;
  background-color: #333;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background-color: var(--primary);
  border-radius: 2px;
`;

const PageLoader = () => {
  return (
    <LoaderContainer>
      <LogoContainer
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo>JA</Logo>
        <ProgressBar>
          <Progress
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </ProgressBar>
      </LogoContainer>
    </LoaderContainer>
  );
};

export default PageLoader;
