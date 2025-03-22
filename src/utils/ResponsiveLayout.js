import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/MediaQueries';

// Responsive grid system
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media ${device.mobileOnly} {
    padding: 0 1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
`;

export const Column = styled.div`
  flex: ${props => props.size || 1};
  padding: 0 1rem;
  margin-bottom: 2rem;
  
  @media ${device.mobileOnly} {
    flex: 1 1 100%;
  }
  
  @media ${device.tablet} {
    flex: ${props => props.tabletSize || props.size || 1};
  }
`;

// Grid system with specific column sizes
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 12}, 1fr);
  gap: ${props => props.gap || '1rem'};
  
  @media ${device.mobileOnly} {
    grid-template-columns: repeat(${props => props.mobileColumns || 1}, 1fr);
  }
  
  @media ${device.tablet} {
    grid-template-columns: repeat(${props => props.tabletColumns || 2}, 1fr);
  }
`;

export const GridItem = styled.div`
  grid-column: span ${props => props.span || 1};
  
  @media ${device.mobileOnly} {
    grid-column: span ${props => props.mobileSpan || props.span || 1};
  }
  
  @media ${device.tablet} {
    grid-column: span ${props => props.tabletSpan || props.span || 1};
  }
`;

// Responsive spacing
export const Spacer = styled.div`
  height: ${props => props.height || '1rem'};
  
  @media ${device.mobileOnly} {
    height: ${props => props.mobileHeight || props.height || '1rem'};
  }
`;

// Responsive text
export const ResponsiveText = styled.div`
  font-size: ${props => props.size || '1rem'};
  
  @media ${device.mobileOnly} {
    font-size: ${props => props.mobileSize || (parseFloat(props.size) * 0.8) + 'rem' || '0.8rem'};
  }
  
  @media ${device.desktopUp} {
    font-size: ${props => props.desktopSize || props.size || '1rem'};
  }
`;

// Responsive visibility
export const Hide = styled.div`
  display: ${props => props.mobile ? 'none' : 'block'};
  
  @media ${device.tabletUp} {
    display: ${props => props.tablet ? 'none' : 'block'};
  }
  
  @media ${device.desktopUp} {
    display: ${props => props.desktop ? 'none' : 'block'};
  }
`;

export const Show = styled.div`
  display: ${props => props.mobile ? 'block' : 'none'};
  
  @media ${device.tabletUp} {
    display: ${props => props.tablet ? 'block' : 'none'};
  }
  
  @media ${device.desktopUp} {
    display: ${props => props.desktop ? 'block' : 'none'};
  }
`;

// Responsive layout components
export const ResponsiveLayout = {
  Container,
  Row,
  Column,
  Grid,
  GridItem,
  Spacer,
  ResponsiveText,
  Hide,
  Show
};

export default ResponsiveLayout;
