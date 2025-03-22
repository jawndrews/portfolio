import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/MediaQueries';

const TestWrapper = styled.div`
  padding: 2rem;
  background-color: #1e1e1e;
  min-height: 100vh;
`;

const TestSection = styled.section`
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: rgba(30, 30, 30, 0.5);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const TestTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--primary);
  
  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: var(--primary);
    margin-top: 0.5rem;
  }
`;

const TestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  
  @media ${device.mobileOnly} {
    grid-template-columns: 1fr;
  }
  
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TestItem = styled.div`
  background-color: rgba(108, 99, 255, 0.1);
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  
  h3 {
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--gray);
  }
`;

const TestButton = styled.button`
  background-color: var(--primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 1rem;
  margin-bottom: 1rem;
  
  &:hover {
    background-color: var(--secondary);
    transform: translateY(-3px);
  }
  
  &:disabled {
    background-color: #555;
    cursor: not-allowed;
    transform: none;
  }
`;

const TestInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--light);
  font-size: 1rem;
  margin-bottom: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.2);
  }
`;

const TestForm = styled.form`
  max-width: 500px;
  margin-bottom: 2rem;
`;

const TestLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--light);
`;

const TestFormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const TestImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgba(108, 99, 255, 0.1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const ResponsiveTester = () => {
  return (
    <TestWrapper>
      <TestSection>
        <TestTitle>Responsive Grid Test</TestTitle>
        <TestGrid>
          <TestItem>
            <h3>Item 1</h3>
            <p>This is a test item to check grid responsiveness</p>
          </TestItem>
          <TestItem>
            <h3>Item 2</h3>
            <p>This is a test item to check grid responsiveness</p>
          </TestItem>
          <TestItem>
            <h3>Item 3</h3>
            <p>This is a test item to check grid responsiveness</p>
          </TestItem>
          <TestItem>
            <h3>Item 4</h3>
            <p>This is a test item to check grid responsiveness</p>
          </TestItem>
        </TestGrid>
      </TestSection>
      
      <TestSection>
        <TestTitle>Button and Input Test</TestTitle>
        <TestForm>
          <TestFormGroup>
            <TestLabel>Name</TestLabel>
            <TestInput type="text" placeholder="Enter your name" />
          </TestFormGroup>
          <TestFormGroup>
            <TestLabel>Email</TestLabel>
            <TestInput type="email" placeholder="Enter your email" />
          </TestFormGroup>
          <TestButton>Submit</TestButton>
          <TestButton disabled>Disabled</TestButton>
        </TestForm>
      </TestSection>
      
      <TestSection>
        <TestTitle>Image Responsiveness Test</TestTitle>
        <TestGrid>
          <TestItem>
            <TestImage>
              <img src="https://via.placeholder.com/150" alt="Placeholder" />
            </TestImage>
            <h3>Image 1</h3>
          </TestItem>
          <TestItem>
            <TestImage>
              <img src="https://via.placeholder.com/150" alt="Placeholder" />
            </TestImage>
            <h3>Image 2</h3>
          </TestItem>
          <TestItem>
            <TestImage>
              <img src="https://via.placeholder.com/150" alt="Placeholder" />
            </TestImage>
            <h3>Image 3</h3>
          </TestItem>
          <TestItem>
            <TestImage>
              <img src="https://via.placeholder.com/150" alt="Placeholder" />
            </TestImage>
            <h3>Image 4</h3>
          </TestItem>
        </TestGrid>
      </TestSection>
      
      <TestSection>
        <TestTitle>Typography Test</TestTitle>
        <h1 style={{ marginBottom: '1rem' }}>Heading 1</h1>
        <h2 style={{ marginBottom: '1rem' }}>Heading 2</h2>
        <h3 style={{ marginBottom: '1rem' }}>Heading 3</h3>
        <h4 style={{ marginBottom: '1rem' }}>Heading 4</h4>
        <h5 style={{ marginBottom: '1rem' }}>Heading 5</h5>
        <h6 style={{ marginBottom: '1rem' }}>Heading 6</h6>
        <p style={{ marginBottom: '1rem' }}>
          This is a paragraph of text. This is a paragraph of text. This is a paragraph of text.
          This is a paragraph of text. This is a paragraph of text. This is a paragraph of text.
        </p>
        <a href="#" style={{ marginBottom: '1rem', display: 'inline-block' }}>This is a link</a>
      </TestSection>
    </TestWrapper>
  );
};

export default ResponsiveTester;
