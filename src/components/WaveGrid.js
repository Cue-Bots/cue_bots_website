import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const CONFIG = {
  rows: 50,
  cols: 100,
  separation: 1.0,
  waveAmplitude: 0.9,
  waveFrequencyX: 0.2,
  waveFrequencyZ: 0.3,
  waveSpeed: 0.02,
  pressureRadius: 10,
  pressureStrength: 0.1,
  pointSize: 0.2
};

const WaveGrid = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 10, 35);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const { rows, cols, separation } = CONFIG;
    const positions = [];
    const colors = [];

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const xpos = (x - cols / 2) * separation;
        const zpos = (y - rows / 2) * separation;
        positions.push(xpos, 0, zpos);

        const dx = x / cols - 0.5;
        const dy = y / rows - 0.5;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const alpha = Math.max(0, 1 - dist * 2);
        colors.push(1, 1, 1, alpha);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 4));

    const material = new THREE.PointsMaterial({
      size: CONFIG.pointSize,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let mouseX = 0;
    let mouseZ = 0;
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / width - 0.5) * cols * separation;
      mouseZ = (event.clientY / height - 0.5) * rows * separation;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += CONFIG.waveSpeed;

      const pos = geometry.attributes.position.array;
      for (let i = 0; i < pos.length; i += 3) {
        const x = pos[i];
        const z = pos[i + 2];

        const dx = x - mouseX;
        const dz = z - mouseZ;
        const dist = Math.sqrt(dx * dx + dz * dz);
        const pressure = Math.max(0, CONFIG.pressureRadius - dist) * CONFIG.pressureStrength;

        pos[i + 1] =
          Math.sin((x + time * 2) * CONFIG.waveFrequencyX) * CONFIG.waveAmplitude +
          Math.cos((z + time) * CONFIG.waveFrequencyZ) * CONFIG.waveAmplitude -
          pressure;

      }

      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default WaveGrid;
