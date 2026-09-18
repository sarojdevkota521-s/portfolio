"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3DObject() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let isVisible = true;

    // SCENE & CAMERA
    const scene = new THREE.Scene();
    const width = container.clientWidth || 380;
    const height = container.clientHeight || 380;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6.2;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // GROUP FOR ROTATION
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const emeraldLight = new THREE.PointLight(0x10b981, 4, 15);
    emeraldLight.position.set(4, 3, 3);
    scene.add(emeraldLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 3.5, 15);
    cyanLight.position.set(-4, -3, 3);
    scene.add(cyanLight);

    const topWhiteLight = new THREE.DirectionalLight(0xffffff, 1.2);
    topWhiteLight.position.set(0, 6, 4);
    scene.add(topWhiteLight);

    // INNER GEOMETRIC CRYSTAL CORE
    const innerGeo = new THREE.IcosahedronGeometry(1.25, 0);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x064e3b,
      emissive: 0x047857,
      emissiveIntensity: 0.35,
      roughness: 0.15,
      metalness: 0.8,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
      flatShading: true,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // INNER WIREFRAME ACCENT
    const innerWireGeo = new THREE.IcosahedronGeometry(1.26, 0);
    const innerWireMat = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const innerWireMesh = new THREE.Mesh(innerWireGeo, innerWireMat);
    mainGroup.add(innerWireMesh);

    // OUTER CYBERNETIC GEODESIC CAGE
    const outerGeo = new THREE.IcosahedronGeometry(1.85, 1);
    const outerWireMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerWireMat);
    mainGroup.add(outerMesh);

    // GYROSCOPIC ORBIT RINGS
    const ringGeo1 = new THREE.TorusGeometry(2.2, 0.015, 16, 100);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
      emissiveIntensity: 0.6,
      roughness: 0.3,
      metalness: 0.8,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.4, 0.012, 16, 100);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x059669,
      emissiveIntensity: 0.5,
      roughness: 0.3,
      metalness: 0.8,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // PARTICLE ORBIT DUST
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePos[i * 3 + 2] = radius * Math.cos(phi);

      particleScales[i] = Math.random() * 0.04 + 0.02;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x6ee7b7,
      size: 0.05,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // THEME ADAPTATION
    const updateThemeColors = () => {
      const isDark = document.documentElement.getAttribute("data-theme") !== "light";
      if (isDark) {
        innerMat.color.setHex(0x064e3b);
        innerMat.emissive.setHex(0x047857);
        innerMat.emissiveIntensity = 0.4;
        outerWireMat.color.setHex(0x10b981);
        outerWireMat.opacity = 0.38;
        particleMat.color.setHex(0x6ee7b7);
      } else {
        innerMat.color.setHex(0x047857);
        innerMat.emissive.setHex(0x059669);
        innerMat.emissiveIntensity = 0.2;
        outerWireMat.color.setHex(0x059669);
        outerWireMat.opacity = 0.28;
        particleMat.color.setHex(0x059669);
      }
    };
    updateThemeColors();

    const themeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          updateThemeColors();
        }
      });
    });
    themeObserver.observe(document.documentElement, { attributes: true });

    // INTERACTION HANDLING (MOUSE / TOUCH)
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isDragging = false;
    let prevPointerX = 0;
    let prevPointerY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (isDragging) {
        const deltaX = e.clientX - prevPointerX;
        const deltaY = e.clientY - prevPointerY;
        targetRotationY += deltaX * 0.012;
        targetRotationX += deltaY * 0.012;
        prevPointerX = e.clientX;
        prevPointerY = e.clientY;
      } else {
        mouseX = x * 0.4;
        mouseY = y * 0.4;
      }
    };

    const onPointerDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      prevPointerX = e.clientX;
      prevPointerY = e.clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    container.addEventListener("mousemove", onPointerMove);
    container.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mouseup", onPointerUp);

    // Touch support for mobile
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1 && isDragging) {
        const touch = e.touches[0];
        const deltaX = touch.clientX - prevPointerX;
        const deltaY = touch.clientY - prevPointerY;
        targetRotationY += deltaX * 0.012;
        targetRotationX += deltaY * 0.012;
        prevPointerX = touch.clientX;
        prevPointerY = touch.clientY;
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsInteracting(true);
        prevPointerX = e.touches[0].clientX;
        prevPointerY = e.touches[0].clientY;
      }
    };

    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onPointerUp);

    // RESIZE OBSERVER
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = entry.contentRect.width;
        const newHeight = entry.contentRect.height;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    // INTERSECTION OBSERVER (Performance optimization)
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    intersectionObserver.observe(container);

    // ANIMATION LOOP
    let clock = new THREE.Clock();
    setIsLoaded(true);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Continuous ambient rotation
      if (!isDragging) {
        targetRotationY += 0.45 * delta;
        targetRotationX = Math.sin(time * 0.5) * 0.15 + mouseY;
      }

      // Smooth damping interpolation
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.08;
      mainGroup.rotation.x += (targetRotationX + mouseX * 0.3 - mainGroup.rotation.x) * 0.08;

      // Independent multi-axis oscillations
      innerMesh.rotation.y -= 0.6 * delta;
      innerMesh.rotation.z += 0.3 * delta;
      innerWireMesh.rotation.y -= 0.6 * delta;
      innerWireMesh.rotation.z += 0.3 * delta;

      outerMesh.rotation.y += 0.25 * delta;
      outerMesh.rotation.x -= 0.18 * delta;

      ring1.rotation.z += 0.5 * delta;
      ring2.rotation.z -= 0.4 * delta;

      particles.rotation.y += 0.12 * delta;

      // Subtle breath pulse
      const breath = 1 + Math.sin(time * 2.2) * 0.03;
      innerMesh.scale.set(breath, breath, breath);
      innerWireMesh.scale.set(breath, breath, breath);

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP
    return () => {
      cancelAnimationFrame(animationFrameId);
      themeObserver.disconnect();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      container.removeEventListener("mousemove", onPointerMove);
      container.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mouseup", onPointerUp);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onPointerUp);

      renderer.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      innerWireGeo.dispose();
      innerWireMat.dispose();
      outerGeo.dispose();
      outerWireMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] md:h-[460px] flex items-center justify-center select-none">
      {/* Background ambient radial glow */}
      <div className="ambient-glow-emerald w-[280px] h-[280px] -top-10 -right-10 opacity-70" />
      <div className="ambient-glow-cyan w-[240px] h-[240px] -bottom-10 -left-10 opacity-60" />

      {/* 3D Canvas Mount */}
      <div
        ref={containerRef}
        className={`w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        title="Interactive 3D Core — Drag to inspect"
      />

      {/* Floating Interactive Badge */}
      <div className="absolute bottom-2 sm:bottom-4 px-3 py-1 rounded-full glass-panel border border-white/10 text-[11px] mono flex items-center gap-2 pointer-events-none text-ink-faint shadow-lg">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="tracking-wide">
          {isInteracting ? "ORBITING CORE" : "INTERACTIVE 3D · DRAG TO ROTATE"}
        </span>
      </div>
    </div>
  );
}
