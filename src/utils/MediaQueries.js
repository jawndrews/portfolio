// Media query breakpoints for responsive design
const size = {
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1600px'
};

export const device = {
  mobile: `(max-width: ${size.xs})`,
  tablet: `(min-width: ${size.xs}) and (max-width: ${size.md})`,
  laptop: `(min-width: ${size.md}) and (max-width: ${size.lg})`,
  desktop: `(min-width: ${size.lg})`,
  
  // Simplified queries
  mobileOnly: `(max-width: ${size.sm})`,
  tabletUp: `(min-width: ${size.sm})`,
  desktopUp: `(min-width: ${size.md})`,
  largeDesktop: `(min-width: ${size.lg})`,
  extraLargeDesktop: `(min-width: ${size.xl})`
};

// Usage example:
// import { device } from '../utils/MediaQueries';
// const Component = styled.div`
//   font-size: 16px;
//   
//   @media ${device.mobileOnly} {
//     font-size: 14px;
//   }
//   
//   @media ${device.desktopUp} {
//     font-size: 18px;
//   }
// `;
