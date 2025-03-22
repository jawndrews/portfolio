import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled components with animations
export const FadeIn = styled.div`
  animation: ${fadeIn} ${props => props.duration || '1s'} ${props => props.delay || '0s'} ${props => props.timing || 'ease'} forwards;
  opacity: 0;
`;

export const SlideUp = styled.div`
  animation: ${slideUp} ${props => props.duration || '1s'} ${props => props.delay || '0s'} ${props => props.timing || 'ease'} forwards;
  opacity: 0;
`;

export const SlideInLeft = styled.div`
  animation: ${slideInLeft} ${props => props.duration || '1s'} ${props => props.delay || '0s'} ${props => props.timing || 'ease'} forwards;
  opacity: 0;
`;

export const SlideInRight = styled.div`
  animation: ${slideInRight} ${props => props.duration || '1s'} ${props => props.delay || '0s'} ${props => props.timing || 'ease'} forwards;
  opacity: 0;
`;

export const Rotate = styled.div`
  animation: ${rotate} ${props => props.duration || '10s'} linear infinite;
`;

export const Pulse = styled.div`
  animation: ${pulse} ${props => props.duration || '2s'} ${props => props.timing || 'ease-in-out'} infinite;
`;

// Staggered animation container
export const StaggerContainer = styled.div`
  & > *:nth-child(${props => props.startIndex || 1}) { animation-delay: ${props => props.baseDelay || '0.1'}s; }
  & > *:nth-child(${props => (props.startIndex || 1) + 1}) { animation-delay: ${props => (props.baseDelay || 0.1) * 2}s; }
  & > *:nth-child(${props => (props.startIndex || 1) + 2}) { animation-delay: ${props => (props.baseDelay || 0.1) * 3}s; }
  & > *:nth-child(${props => (props.startIndex || 1) + 3}) { animation-delay: ${props => (props.baseDelay || 0.1) * 4}s; }
  & > *:nth-child(${props => (props.startIndex || 1) + 4}) { animation-delay: ${props => (props.baseDelay || 0.1) * 5}s; }
  & > *:nth-child(${props => (props.startIndex || 1) + 5}) { animation-delay: ${props => (props.baseDelay || 0.1) * 6}s; }
  & > *:nth-child(${props => (props.startIndex || 1) + 6}) { animation-delay: ${props => (props.baseDelay || 0.1) * 7}s; }
  & > *:nth-child(${props => (props.startIndex || 1) + 7}) { animation-delay: ${props => (props.baseDelay || 0.1) * 8}s; }
  & > *:nth-child(${props => (props.startIndex || 1) + 8}) { animation-delay: ${props => (props.baseDelay || 0.1) * 9}s; }
  & > *:nth-child(${props => (props.startIndex || 1) + 9}) { animation-delay: ${props => (props.baseDelay || 0.1) * 10}s; }
`;

// Scroll animation component
export const ScrollReveal = ({ children, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const domRef = React.useRef();
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold });
    
    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }
    
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [threshold]);
  
  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}
    >
      {children}
    </div>
  );
};

export default {
  FadeIn,
  SlideUp,
  SlideInLeft,
  SlideInRight,
  Rotate,
  Pulse,
  StaggerContainer,
  ScrollReveal
};
