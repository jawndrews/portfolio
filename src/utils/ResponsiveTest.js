import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TestContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 12px;
  z-index: 9999;
  display: ${props => props.visible ? 'block' : 'none'};
`;

const ResponsiveTest = ({ visible = false }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  const [deviceType, setDeviceType] = useState('');
  
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
      
      // Determine device type based on width
      if (window.innerWidth < 576) {
        setDeviceType('Mobile (XS)');
      } else if (window.innerWidth >= 576 && window.innerWidth < 768) {
        setDeviceType('Mobile (SM)');
      } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
        setDeviceType('Tablet (MD)');
      } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
        setDeviceType('Desktop (LG)');
      } else {
        setDeviceType('Large Desktop (XL)');
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <TestContainer visible={visible}>
      <div>Width: {dimensions.width}px</div>
      <div>Height: {dimensions.height}px</div>
      <div>Device: {deviceType}</div>
    </TestContainer>
  );
};

export default ResponsiveTest;
