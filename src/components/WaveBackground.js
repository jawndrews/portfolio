import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import * as THREE from "three";

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
`;

const WaveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Three.js setup
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

    // Create wave plane
    const planeGeometry = new THREE.PlaneGeometry(15, 15, 150, 150);
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0x6c63ff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });

    const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    planeMesh.rotation.x = -Math.PI / 2 + Math.PI / 4;
    planeMesh.position.y = -2;
    planeMesh.position.z = -2;
    scene.add(planeMesh);

    camera.position.z = 5;

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      time += 0.01;

      // Create wave effect
      const positions = planeGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        positions[i + 1] =
          Math.sin(x * 0.5 + time) * 0.5 + Math.sin(z * 0.5 + time) * 0.5;
      }

      planeGeometry.attributes.position.needsUpdate = true;

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

  return <CanvasContainer ref={canvasRef} />;
};

export default WaveBackground;
