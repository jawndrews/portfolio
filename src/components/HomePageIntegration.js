// Example integration for Home page
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import * as THREE from "three";
import CharacterModelContainer from "../components/CharacterModelContainer";

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
  
  @media (max-width: 992px) {
    margin-top: 2rem;
  }
`;

const ModelContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

// Rest of your Home page styling...

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Three.js background setup (your existing code)
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvas.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;

    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x6c63ff,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    camera.position.z = 3;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.y += 0.001;

      if (window.scrollY > 100) {
        particlesMesh.rotation.x = window.scrollY * 0.0001;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <HeroSection>
      <CanvasContainer ref={canvasRef} />

      <HeroContent>
        <TextContent>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            I'm Jonathan Andrews
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '2rem' }}
          >
            Developer & Designer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ 
              fontSize: '1.2rem', 
              maxWidth: '600px', 
              marginBottom: '2.5rem',
              color: 'var(--gray)'
            }}
          >
            With hands-on experience in Salesforce, web development, and data
            analytics, I tackle complex problems with practical solutions. Let's
            start a conversation!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ display: 'flex', gap: '1rem' }}
          >
            <Link 
              to="/projects"
              style={{
                backgroundColor: 'var(--primary)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                fontWeight: '600',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
            >
              View My Work
            </Link>
            <Link 
              to="/contact"
              style={{
                border: '2px solid var(--primary)',
                color: 'var(--primary)',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                fontWeight: '600',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
            >
              Get In Touch
            </Link>
          </motion.div>
        </TextContent>
        
        <ModelContent>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CharacterModelContainer showCaption={true} />
          </motion.div>
        </ModelContent>
      </HeroContent>
    </HeroSection>
  );
};

export default Home;
