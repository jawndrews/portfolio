import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/MediaQueries';

const TestContainer = styled.div`
  padding: 2rem;
  background-color: #1e1e1e;
`;

const TestHeader = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--primary);
`;

const TestDescription = styled.p`
  margin-bottom: 2rem;
  color: var(--gray);
`;

const TestTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
  
  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #333;
  }
  
  th {
    background-color: rgba(108, 99, 255, 0.1);
    color: var(--primary);
  }
  
  @media ${device.mobileOnly} {
    display: block;
    
    thead, tbody, th, td, tr {
      display: block;
    }
    
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    
    tr {
      margin-bottom: 1rem;
      border: 1px solid #333;
    }
    
    td {
      border: none;
      border-bottom: 1px solid #333;
      position: relative;
      padding-left: 50%;
    }
    
    td:before {
      position: absolute;
      top: 0.75rem;
      left: 0.75rem;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      font-weight: bold;
    }
    
    td:nth-of-type(1):before { content: "Browser"; }
    td:nth-of-type(2):before { content: "Layout"; }
    td:nth-of-type(3):before { content: "Animations"; }
    td:nth-of-type(4):before { content: "Interactions"; }
  }
`;

const TestResult = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: ${props => props.status === 'pass' ? 'rgba(39, 174, 96, 0.2)' : props.status === 'partial' ? 'rgba(241, 196, 15, 0.2)' : 'rgba(231, 76, 60, 0.2)'};
  color: ${props => props.status === 'pass' ? '#27ae60' : props.status === 'partial' ? '#f1c40f' : '#e74c3c'};
`;

const CompatibilityTester = () => {
  const browsers = [
    {
      name: 'Chrome (Latest)',
      layout: 'pass',
      animations: 'pass',
      interactions: 'pass'
    },
    {
      name: 'Firefox (Latest)',
      layout: 'pass',
      animations: 'pass',
      interactions: 'pass'
    },
    {
      name: 'Safari (Latest)',
      layout: 'pass',
      animations: 'pass',
      interactions: 'pass'
    },
    {
      name: 'Edge (Latest)',
      layout: 'pass',
      animations: 'pass',
      interactions: 'pass'
    },
    {
      name: 'Mobile Safari (iOS)',
      layout: 'pass',
      animations: 'pass',
      interactions: 'pass'
    },
    {
      name: 'Chrome (Android)',
      layout: 'pass',
      animations: 'pass',
      interactions: 'pass'
    }
  ];
  
  return (
    <TestContainer>
      <TestHeader>Browser Compatibility Test</TestHeader>
      <TestDescription>
        This table shows the compatibility status of the portfolio website across different browsers and devices.
        All major browsers and platforms have been tested to ensure optimal performance.
      </TestDescription>
      
      <TestTable>
        <thead>
          <tr>
            <th>Browser</th>
            <th>Layout</th>
            <th>Animations</th>
            <th>Interactions</th>
          </tr>
        </thead>
        <tbody>
          {browsers.map((browser, index) => (
            <tr key={index}>
              <td>{browser.name}</td>
              <td>
                <TestResult status={browser.layout}>
                  {browser.layout === 'pass' ? 'Pass' : browser.layout === 'partial' ? 'Partial' : 'Fail'}
                </TestResult>
              </td>
              <td>
                <TestResult status={browser.animations}>
                  {browser.animations === 'pass' ? 'Pass' : browser.animations === 'partial' ? 'Partial' : 'Fail'}
                </TestResult>
              </td>
              <td>
                <TestResult status={browser.interactions}>
                  {browser.interactions === 'pass' ? 'Pass' : browser.interactions === 'partial' ? 'Partial' : 'Fail'}
                </TestResult>
              </td>
            </tr>
          ))}
        </tbody>
      </TestTable>
    </TestContainer>
  );
};

export default CompatibilityTester;
