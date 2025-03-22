import React, { useRef } from 'react';
import styled from 'styled-components';
import CharacterModel from './CharacterModel';

const ModelContainer = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 250px;
    height: 350px;
  }
  
  @media (max-width: 480px) {
    width: 200px;
    height: 300px;
  }
`;

// Optional caption styling
const Caption = styled.p`
  text-align: center;
  color: var(--gray);
  font-size: 0.9rem;
  margin-top: 1rem;
`;

const CharacterModelContainer = ({ showCaption = false }) => {
  const containerRef = useRef(null);
  
  return (
    <>
      <ModelContainer ref={containerRef}>
        <CharacterModel containerRef={containerRef} />
      </ModelContainer>
      {showCaption && (
        <Caption>Interactive 3D avatar - move your cursor to interact!</Caption>
      )}
    </>
  );
};

export default CharacterModelContainer;
