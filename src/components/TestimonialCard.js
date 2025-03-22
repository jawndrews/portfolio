import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialContainer = styled(motion.div)`
  background-color: rgba(30, 30, 30, 0.5);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  
  &:before {
    content: '"';
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 4rem;
    color: rgba(108, 99, 255, 0.2);
    font-family: serif;
    line-height: 1;
  }
`;

const TestimonialText = styled.p`
  font-style: italic;
  color: var(--gray);
  margin-bottom: 1.5rem;
  padding-left: 1rem;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  h4 {
    margin: 0 0 0.3rem;
    font-size: 1rem;
  }
  
  p {
    margin: 0;
    color: var(--primary);
    font-size: 0.9rem;
  }
`;

const TestimonialCard = ({ text, author, position, image }) => {
  return (
    <TestimonialContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TestimonialText>"{text}"</TestimonialText>
      <TestimonialAuthor>
        <AuthorImage>
          <img src={image || 'https://via.placeholder.com/50'} alt={author} />
        </AuthorImage>
        <AuthorInfo>
          <h4>{author}</h4>
          <p>{position}</p>
        </AuthorInfo>
      </TestimonialAuthor>
    </TestimonialContainer>
  );
};

export default TestimonialCard;
