import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
`;

const FloatingShapes = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    // Three.js setup
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvas.appendChild(renderer.domElement);
    
    // Create shapes
    const shapes = [];
    const shapeCount = 15;
    const colors = [0x6c63ff, 0x8c83ff, 0x4c43df];
    
    for (let i = 0; i < shapeCount; i++) {
      let geometry;
      const shapeType = Math.floor(Math.random() * 3);
      
      // Create different geometric shapes
      if (shapeType === 0) {
        // Sphere
        geometry = new THREE.SphereGeometry(0.2, 16, 16);
      } else if (shapeType === 1) {
        // Icosahedron (more complex polyhedron)
        geometry = new THREE.IcosahedronGeometry(0.3, 0);
      } else {
        // Torus
        geometry = new THREE.TorusGeometry(0.2, 0.1, 16, 32);
      }
      
      const material = new THREE.MeshBasicMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        wireframe: true,
        transparent: true,
        opacity: 0.3
      });
      
      const shape = new THREE.Mesh(geometry, material);
      
      // Position shapes randomly in 3D space
      shape.position.x = (Math.random() - 0.5) * 10;
      shape.position.y = (Math.random() - 0.5) * 10;
      shape.position.z = (Math.random() - 0.5) * 5 - 2;
      
      // Random rotation
      shape.rotation.x = Math.random() * Math.PI;
      shape.rotation.y = Math.random() * Math.PI;
      
      // Random rotation speed and movement
      shape.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        },
        movementSpeed: {
          x: (Math.random() - 0.5) * 0.005,
          y: (Math.random() - 0.5) * 0.005
        },
        movementRange: {
          x: Math.random() * 2 + 1,
          y: Math.random() * 2 + 1
        },
        initialPosition: {
          x: shape.position.x,
          y: shape.position.y
        },
        phase: Math.random() * Math.PI * 2
      };
      
      scene.add(shape);
      shapes.push(shape);
    }
    
    camera.position.z = 5;
    
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;
      
      // Animate each shape
      shapes.forEach(shape => {
        // Rotate
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
        
        // Floating movement (sine wave)
        const userData = shape.userData;
        shape.position.x = userData.initialPosition.x + 
          Math.sin(time + userData.phase) * userData.movementRange.x * userData.movementSpeed.x;
        shape.position.y = userData.initialPosition.y + 
          Math.cos(time + userData.phase) * userData.movementRange.y * userData.movementSpeed.y;
      });
      
      // Subtle camera movement based on mouse position
      camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      canvas.removeChild(renderer.domElement);
    };
  }, []);
  
  return <CanvasContainer ref={canvasRef} />;
};

export default FloatingShapes;
