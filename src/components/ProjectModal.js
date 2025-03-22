import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background-color: #1e1e1e;
  border-radius: 10px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #1e1e1e;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 4px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectDetails = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ProjectSubtitle = styled.h3`
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
`;

const ProjectDescription = styled.div`
  margin-bottom: 2rem;
  color: var(--gray);
  line-height: 1.8;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const ProjectTag = styled.span`
  background-color: rgba(108, 99, 255, 0.1);
  color: var(--primary);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${props => props.primary ? 'var(--primary)' : 'transparent'};
  border: ${props => props.primary ? 'none' : '2px solid var(--primary)'};
  color: ${props => props.primary ? 'white' : 'var(--primary)'};
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.primary ? 'var(--secondary)' : 'var(--primary)'};
    color: white;
    transform: translateY(-3px);
  }
  
  i {
    font-size: 1.2rem;
  }
`;

const ProjectModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);
  
  if (!isOpen || !project) return null;
  
  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <ModalContent
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}>
          <i className="fas fa-times"></i>
        </CloseButton>
        
        <ProjectImage>
          <img src={project.image} alt={project.title} />
        </ProjectImage>
        
        <ProjectDetails>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
          
          <ProjectDescription>
            <p>{project.description}</p>
            {project.longDescription && (
              <div dangerouslySetInnerHTML={{ __html: project.longDescription }} />
            )}
          </ProjectDescription>
          
          <ProjectTags>
            {project.tags.map((tag, i) => (
              <ProjectTag key={i}>{tag}</ProjectTag>
            ))}
          </ProjectTags>
          
          <ProjectLinks>
            {project.liveLink && (
              <ProjectLink href={project.liveLink} target="_blank" rel="noopener noreferrer" primary>
                <i className="fas fa-external-link-alt"></i> View Live
              </ProjectLink>
            )}
            
            {project.codeLink && (
              <ProjectLink href={project.codeLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> View Code
              </ProjectLink>
            )}
          </ProjectLinks>
        </ProjectDetails>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProjectModal;
