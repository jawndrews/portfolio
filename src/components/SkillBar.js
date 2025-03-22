import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillBarContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  span {
    font-weight: 500;
  }
  
  .percentage {
    color: var(--primary);
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background-color: var(--primary);
  border-radius: 4px;
`;

const SkillBar = ({ name, percentage }) => {
  return (
    <SkillBarContainer>
      <SkillName>
        <span>{name}</span>
        <span className="percentage">{percentage}%</span>
      </SkillName>
      <ProgressBarContainer>
        <ProgressBar
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </ProgressBarContainer>
    </SkillBarContainer>
  );
};

export default SkillBar;
