import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CharacterModel = ({ containerRef }) => {
  const modelRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const touchPosition = useRef({ x: 0, y: 0 });
  const headRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    camera.position.y = 1;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0); // Transparent background
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Character creation
    const character = new THREE.Group();
    scene.add(character);

    // Materials
    const skinMaterial = new THREE.MeshStandardMaterial({
      color: 0xffe0bd,
      flatShading: true,
    });

    const hairMaterial = new THREE.MeshStandardMaterial({
      color: 0xf7e68f, // Blonde hair
      flatShading: true,
    });

    const blackMaterial = new THREE.MeshStandardMaterial({
      color: 0x222222, // Black t-shirt
      flatShading: true,
    });

    const blueMaterial = new THREE.MeshStandardMaterial({
      color: 0x3e5f8a, // Blue jeans
      flatShading: true,
    });

    const whiteMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff, // White sneakers
      flatShading: true,
    });

    // Head
    const head = new THREE.Group();
    character.add(head);
    headRef.current = head;

    const headGeometry = new THREE.BoxGeometry(1, 1, 1);
    const headMesh = new THREE.Mesh(headGeometry, skinMaterial);
    head.add(headMesh);

    // Hair
    const hairGeometry = new THREE.BoxGeometry(1.1, 0.4, 1.1);
    const hairMesh = new THREE.Mesh(hairGeometry, hairMaterial);
    hairMesh.position.y = 0.6;
    hairMesh.position.z = 0.05;
    head.add(hairMesh);

    // Eyes
    const eyeGeometry = new THREE.SphereGeometry(0.12, 8, 8);
    const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x444444 });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.25, 0.1, 0.5);
    head.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.25, 0.1, 0.5);
    head.add(rightEye);

    // Mustache
    const mustacheGeometry = new THREE.BoxGeometry(0.7, 0.1, 0.1);
    const mustacheMesh = new THREE.Mesh(mustacheGeometry, hairMaterial);
    mustacheMesh.position.set(0, -0.15, 0.5);
    head.add(mustacheMesh);

    // Body
    const bodyGeometry = new THREE.BoxGeometry(1.5, 2, 0.8);
    const bodyMesh = new THREE.Mesh(bodyGeometry, blackMaterial);
    bodyMesh.position.y = -1.5;
    character.add(bodyMesh);

    // Arms
    const armGeometry = new THREE.BoxGeometry(0.4, 1.5, 0.4);

    const leftArm = new THREE.Mesh(armGeometry, skinMaterial);
    leftArm.position.set(-0.95, -1.5, 0);
    character.add(leftArm);

    const rightArm = new THREE.Mesh(armGeometry, skinMaterial);
    rightArm.position.set(0.95, -1.5, 0);
    character.add(rightArm);

    // Legs
    const legGeometry = new THREE.BoxGeometry(0.5, 1.5, 0.5);

    const leftLeg = new THREE.Mesh(legGeometry, blueMaterial);
    leftLeg.position.set(-0.4, -3.25, 0);
    character.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeometry, blueMaterial);
    rightLeg.position.set(0.4, -3.25, 0);
    character.add(rightLeg);

    // Shoes
    const shoeGeometry = new THREE.BoxGeometry(0.6, 0.3, 0.8);

    const leftShoe = new THREE.Mesh(shoeGeometry, whiteMaterial);
    leftShoe.position.set(-0.4, -4.15, 0.15);
    character.add(leftShoe);

    const rightShoe = new THREE.Mesh(shoeGeometry, whiteMaterial);
    rightShoe.position.set(0.4, -4.15, 0.15);
    character.add(rightShoe);

    // Position the entire character
    character.position.y = 2;
    character.rotation.y = Math.PI / 8;

    // Optional: Add orbit controls for testing
    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    // controls.dampingFactor = 0.05;

    // Mouse movement tracking
    const handleMouseMove = (event) => {
      // Calculate normalized device coordinates (-1 to +1)
      const rect = containerRef.current.getBoundingClientRect();
      mousePosition.current.x =
        ((event.clientX - rect.left) / containerRef.current.clientWidth) * 2 -
        1;
      mousePosition.current.y =
        -((event.clientY - rect.top) / containerRef.current.clientHeight) * 2 +
        1;
    };

    // Touch movement tracking for mobile
    const handleTouchMove = (event) => {
      if (event.touches.length > 0) {
        const rect = containerRef.current.getBoundingClientRect();
        touchPosition.current.x =
          ((event.touches[0].clientX - rect.left) /
            containerRef.current.clientWidth) *
            2 -
          1;
        touchPosition.current.y =
          -(
            (event.touches[0].clientY - rect.top) /
            containerRef.current.clientHeight
          ) *
            2 +
          1;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Make the character slightly bounce
      character.position.y = 2 + Math.sin(Date.now() * 0.001) * 0.1;

      // Head follows mouse/touch position with limited rotation
      if (headRef.current) {
        const position = mousePosition.current;

        // Use touch position if available (for mobile)
        if (
          window.matchMedia("(max-width: 768px)").matches &&
          (touchPosition.current.x !== 0 || touchPosition.current.y !== 0)
        ) {
          position.x = touchPosition.current.x;
          position.y = touchPosition.current.y;
        }

        // Limit rotation range
        const targetRotationX = Math.max(
          Math.min(-position.y * 0.5, 0.5),
          -0.5
        );
        const targetRotationY = Math.max(Math.min(position.x * 0.5, 0.5), -0.5);

        // Smooth rotation
        headRef.current.rotation.x =
          headRef.current.rotation.x +
          (targetRotationX - headRef.current.rotation.x) * 0.1;
        headRef.current.rotation.y =
          headRef.current.rotation.y +
          (targetRotationY - headRef.current.rotation.y) * 0.1;
      }

      // if (controls) controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;

      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);

      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }

      // Dispose geometries and materials
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, [containerRef]);

  return null;
};

export default CharacterModel;
