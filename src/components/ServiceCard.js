import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
  background-color: rgba(30, 30, 30, 0.5);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
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

const CardDescription = styled.p`
  color: var(--gray);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const CardLink = styled.a`
  color: var(--primary);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--secondary);
    transform: translateX(5px);
  }
`;

const ServiceCard = ({ icon, title, description, link, linkText }) => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CardIcon>
        <i className={icon}></i>
      </CardIcon>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      {link && (
        <CardLink href={link}>
          {linkText || 'Learn More'} <i className="fas fa-arrow-right"></i>
        </CardLink>
      )}
    </CardContainer>
  );
};

export default ServiceCard;
