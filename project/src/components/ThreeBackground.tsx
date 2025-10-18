import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const cameraRef = useRef<THREE.PerspectiveCamera>();

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
    cameraRef.current = camera;

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

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      // Camera follows mouse with smooth interpolation
      if (cameraRef.current) {
        const targetX = mouseRef.current.x * 2;
        const targetY = mouseRef.current.y * 2;
        
        cameraRef.current.position.x += (targetX - cameraRef.current.position.x) * 0.02;
        cameraRef.current.position.y += (targetY - cameraRef.current.position.y) * 0.02;
        
        // Look at center with slight offset based on mouse
        cameraRef.current.lookAt(
          mouseRef.current.x * 0.5,
          mouseRef.current.y * 0.5,
          0
        );
      }

      objects.forEach((obj, index) => {
        // Rotation
        const mouseInfluence = (mouseRef.current.x + mouseRef.current.y) * 0.001;
        obj.rotation.x += 0.002 + index * 0.0001 + mouseInfluence;
        obj.rotation.y += 0.003 + index * 0.0001 + mouseInfluence * 0.5;
        obj.rotation.z += 0.001 + index * 0.0001 + mouseInfluence * 0.3;
        
        // Floating motion
        const time = Date.now() * 0.001;
        obj.position.y += Math.sin(time + index) * 0.002;
        obj.position.x += Math.cos(time * 0.8 + index) * 0.001;
        
        // Mouse influence on position
        const distance = Math.sqrt(
          Math.pow(obj.position.x - mouseRef.current.x * 5, 2) +
          Math.pow(obj.position.y - mouseRef.current.y * 5, 2)
        );
        
        if (distance < 8) {
          const force = (8 - distance) * 0.01;
          const angle = Math.atan2(
            obj.position.y - mouseRef.current.y * 5,
            obj.position.x - mouseRef.current.x * 5
          );
          obj.position.x += Math.cos(angle) * force;
          obj.position.y += Math.sin(angle) * force;
        }
        
        // Subtle scale pulsing for some objects
        if (index % 3 === 0) {
          const scale = 1 + Math.sin(time * 2 + index) * 0.1;
          obj.scale.setScalar(scale);
        }
      });

      // Slowly rotate the entire scene
      scene.rotation.y += 0.0005 + mouseRef.current.x * 0.0001;

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
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default ThreeBackground;