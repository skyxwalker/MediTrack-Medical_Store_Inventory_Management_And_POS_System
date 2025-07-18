import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create abstract geometric shapes
    const objects: THREE.Mesh[] = [];

    // Create different geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 8, 6),
      new THREE.ConeGeometry(0.6, 1.2, 6),
      new THREE.OctahedronGeometry(0.8),
      new THREE.TetrahedronGeometry(0.9),
    ];

    const materials = [
      new THREE.MeshPhongMaterial({ 
        color: 0x3B82F6,
        transparent: true,
        opacity: 0.3,
        wireframe: false
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x06B6D4,
        transparent: true,
        opacity: 0.25,
        wireframe: true
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x8B5CF6,
        transparent: true,
        opacity: 0.2,
        wireframe: false
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x10B981,
        transparent: true,
        opacity: 0.3,
        wireframe: true
      }),
    ];

    // Create floating geometric elements
    for (let i = 0; i < 20; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Random scale
      const scale = 0.5 + Math.random() * 1.5;
      mesh.scale.setScalar(scale);

      scene.add(mesh);
      objects.push(mesh);
    }

    // Add some particle-like small spheres
    for (let i = 0; i < 30; i++) {
      const geometry = new THREE.SphereGeometry(0.1, 4, 4);
      const material = new THREE.MeshBasicMaterial({ 
        color: Math.random() > 0.5 ? 0x3B82F6 : 0x06B6D4,
        transparent: true,
        opacity: 0.6
      });
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40
      );

      scene.add(mesh);
      objects.push(mesh);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0x3B82F6, 0.6);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x06B6D4, 0.4);
    directionalLight2.position.set(-5, -5, -5);
    scene.add(directionalLight2);

    camera.position.z = 20;

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      objects.forEach((obj, index) => {
        // Rotation
        obj.rotation.x += 0.002 + index * 0.0001;
        obj.rotation.y += 0.003 + index * 0.0001;
        obj.rotation.z += 0.001 + index * 0.0001;
        
        // Floating motion
        obj.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
        obj.position.x += Math.cos(Date.now() * 0.0008 + index) * 0.001;
        
        // Subtle scale pulsing for some objects
        if (index % 3 === 0) {
          const scale = 1 + Math.sin(Date.now() * 0.002 + index) * 0.1;
          obj.scale.setScalar(scale);
        }
      });

      // Slowly rotate the entire scene
      scene.rotation.y += 0.0005;

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

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default ThreeBackground;