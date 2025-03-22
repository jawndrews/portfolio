import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TimelineContainer = styled.div`
  position: relative;
  margin: 3rem 0;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: rgba(108, 99, 255, 0.3);
    
    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  
  @media (min-width: 768px) {
    width: 50%;
    margin-left: ${props => props.position === 'right' ? '50%' : '0'};
    padding-left: ${props => props.position === 'right' ? '3rem' : '0'};
    padding-right: ${props => props.position === 'left' ? '3rem' : '0'};
    text-align: ${props => props.position === 'left' ? 'right' : 'left'};
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--primary);
  top: 0;
  
  @media (max-width: 767px) {
    left: -9px;
  }
  
  @media (min-width: 768px) {
    left: ${props => props.position === 'right' ? '-10px' : 'auto'};
    right: ${props => props.position === 'left' ? '-10px' : 'auto'};
  }
`;

const TimelineContent = styled.div`
  background-color: rgba(30, 30, 30, 0.5);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 767px) {
    margin-left: 1.5rem;
  }
`;

const TimelineDate = styled.div`
  background-color: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 1rem;
`;

const TimelineTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const TimelineSubtitle = styled.h4`
  color: var(--primary);
  margin-bottom: 1rem;
  font-weight: 500;
`;

const TimelineDescription = styled.p`
  color: var(--gray);
`;

const Timeline = ({ items }) => {
  return (
    <TimelineContainer>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          position={index % 2 === 0 ? 'left' : 'right'}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <TimelineDot position={index % 2 === 0 ? 'left' : 'right'} />
          <TimelineContent>
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineSubtitle>{item.subtitle}</TimelineSubtitle>
            <TimelineDescription>{item.description}</TimelineDescription>
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
