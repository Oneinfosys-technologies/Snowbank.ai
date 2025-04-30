"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export function BackgroundAnimation() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true for transparent background

    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Particle system (Basic Example - Replace with sophisticated shader logic)
    const particleCount = 5000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color = new THREE.Color();
    const purple = new THREE.Color(0x8A2BE2); // Purple
    const blue = new THREE.Color(0x00BFFF); // Deep Sky Blue
    const cyan = new THREE.Color(0x00FFFF); // Cyan

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Position particles in a sphere
      const radius = Math.random() * 5 + 2; // Spread out more
      const phi = Math.acos(-1 + (2 * Math.random()));
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);


      // Assign colors (gradient or mix)
      const mixRatio = Math.random();
      if (mixRatio < 0.33) {
         color.copy(purple);
      } else if (mixRatio < 0.66) {
         color.copy(blue);
      } else {
         color.copy(cyan);
      }
      // Add some variation based on position?
      color.lerp(new THREE.Color(0xffffff), Math.random() * 0.3); // Mix slightly with white


      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Material
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true, // Use colors defined in geometry
      blending: THREE.AdditiveBlending, // Nice glow effect
      transparent: true,
      depthWrite: false, // Helps with transparency layering
      sizeAttenuation: true, // Make particles smaller further away
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);


    // Mouse interaction
    const mouse = new THREE.Vector2();
    const targetRotation = { x: 0, y: 0 };

    const onMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates (-1 to +1)
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Adjust target rotation based on mouse position
      targetRotation.y = mouse.x * 0.2; // Rotate slightly on Y-axis
      targetRotation.x = mouse.y * 0.2; // Rotate slightly on X-axis
    };
    window.addEventListener('mousemove', onMouseMove);


    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Subtle rotation / breathing effect
       const time = Date.now() * 0.0001;
       particleSystem.rotation.y = time * 0.2;
       particleSystem.rotation.x = time * 0.1;


      // Smoothly interpolate towards target rotation based on mouse
      particleSystem.rotation.y += (targetRotation.y - particleSystem.rotation.y) * 0.05;
      particleSystem.rotation.x += (targetRotation.x - particleSystem.rotation.x) * 0.05;


      // Update particle positions slightly (example: subtle drift)
      const posAttribute = particleSystem.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
          // Example: Add tiny sine wave movement - replace with more complex logic
          // posAttribute.setY(i, posAttribute.getY(i) + Math.sin(time * 5 + i * 0.1) * 0.001);
      }
      posAttribute.needsUpdate = true;


      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      // Check if currentMount and its child (renderer.domElement) exist before removing
       if (currentMount && renderer.domElement.parentNode === currentMount) {
         currentMount.removeChild(renderer.domElement);
       }
      // Dispose Three.js objects to free memory (important!)
      scene.remove(particleSystem);
      particles.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none" />;
}
