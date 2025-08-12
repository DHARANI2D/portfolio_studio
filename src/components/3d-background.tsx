"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeDBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Particles
    const particlesCount = 7000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);
    
    const particleGeometry = new THREE.BufferGeometry();
    const sphere = new THREE.SphereGeometry(2.5, 64, 64);
    const spherePositions = sphere.attributes.position.array;

    for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        const p_i = Math.floor(Math.random() * (spherePositions.length / 3)) * 3;
        
        positions[i3] = spherePositions[p_i] + (Math.random() - 0.5) * 0.1;
        positions[i3 + 1] = spherePositions[p_i+1] + (Math.random() - 0.5) * 0.1;
        positions[i3 + 2] = spherePositions[p_i+2] + (Math.random() - 0.5) * 0.1;
        
        const color = new THREE.Color();
        color.setHSL(Math.random(), 0.7, 0.7);
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;

        sizes[i] = Math.random() * 0.05 + 0.01;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.8,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Mouse tracking
    const mouse = new THREE.Vector2(0,0);
    const targetRotation = new THREE.Vector2(0,0);
    
    const handleMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
        const elapsedTime = clock.getElapsedTime();
      
        targetRotation.y = mouse.x * 0.5;
        targetRotation.x = mouse.y * 0.5;

        particles.rotation.y += (targetRotation.y - particles.rotation.y) * 0.05;
        particles.rotation.x += (targetRotation.x - particles.rotation.x) * 0.05;
        
        particles.rotation.y += 0.001;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (renderer.domElement.parentNode === currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
}
