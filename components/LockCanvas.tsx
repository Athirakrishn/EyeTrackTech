"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function LockCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lockState, setLockState] = useState<"LOCKED" | "SCANNING" | "UNLOCKED">("LOCKED");
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState("SECURE LOCK ENGAGED");

  const stateRef = useRef({ lockState, progress });
  useEffect(() => {
    stateRef.current = { lockState, progress };
  }, [lockState, progress]);

  // Trigger unlock sequence
  const handleUnlock = () => {
    if (lockState !== "LOCKED") return;
    setLockState("SCANNING");
    setProgress(0);
    setStatusMessage("SCANNING BIOMETRICS...");
  };

  // Simulate scanning progress in React
  useEffect(() => {
    if (lockState !== "SCANNING") return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 2.0;
        if (next >= 100) {
          clearInterval(interval);
          setLockState("UNLOCKED");
          setStatusMessage("ACCESS GRANTED");
          return 100;
        }
        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [lockState]);

  // Auto relock after 4 seconds of unlocked state
  useEffect(() => {
    if (lockState !== "UNLOCKED") return;

    const timeout = setTimeout(() => {
      setLockState("LOCKED");
      setProgress(0);
      setStatusMessage("SECURE LOCK ENGAGED");
    }, 4000);

    return () => clearTimeout(timeout);
  }, [lockState]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.015);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    // Tilted camera position to capture deadbolts and plate bevel depth
    camera.position.set(2.8, 1.2, 7.5);
    camera.lookAt(0, 0, 0);

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xff7e15, 1.2); // Warm orange/red accent
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x8a3ffc, 1.5); // Corporate purple accent
    fillLight.position.set(-5, 3, 4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
    rimLight.position.set(0, -5, -3);
    scene.add(rimLight);

    // 5. Build Smart Lock Group
    const lockGroup = new THREE.Group();
    scene.add(lockGroup);

    // --- Mount Plate (Escutcheon) ---
    const escutcheonGeom = new THREE.BoxGeometry(1.5, 4.4, 0.25);
    const escutcheonMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a, // dark slate escutcheon
      roughness: 0.25,
      metalness: 0.85,
    });
    const escutcheon = new THREE.Mesh(escutcheonGeom, escutcheonMat);
    lockGroup.add(escutcheon);

    // Beveled frame wrapper (glowing outline border)
    const escutcheonBorderGeom = new THREE.BoxGeometry(1.54, 4.44, 0.26);
    const escutcheonBorderMat = new THREE.MeshBasicMaterial({
      color: 0x8a3ffc,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const escutcheonBorder = new THREE.Mesh(escutcheonBorderGeom, escutcheonBorderMat);
    lockGroup.add(escutcheonBorder);

    // --- Touch Keypad Panel ---
    const keypadGeom = new THREE.BoxGeometry(1.2, 1.6, 0.05);
    const keypadMat = new THREE.MeshStandardMaterial({
      color: 0x020617, // reflective dark glass
      roughness: 0.05,
      metalness: 0.95,
      transparent: true,
      opacity: 0.85,
    });
    const keypad = new THREE.Mesh(keypadGeom, keypadMat);
    keypad.position.set(0, 1.0, 0.15);
    lockGroup.add(keypad);

    // Keypad numbers (procedural matrix points)
    const numsGroup = new THREE.Group();
    numsGroup.position.set(0, 1.0, 0.18);
    lockGroup.add(numsGroup);

    const numDotGeom = new THREE.CylinderGeometry(0.04, 0.04, 0.02, 16);
    const numDotMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Cyan keypad light
      transparent: true,
      opacity: 0.8,
    });

    const keypadRows = 4;
    const keypadCols = 3;
    for (let r = 0; r < keypadRows; r++) {
      for (let c = 0; c < keypadCols; c++) {
        const numDot = new THREE.Mesh(numDotGeom, numDotMat);
        numDot.rotation.x = Math.PI / 2;
        numDot.position.set(
          (c - 1) * 0.32, // Col spacing
          (1.5 - r) * 0.35, // Row spacing
          0
        );
        numsGroup.add(numDot);
      }
    }

    // --- Status Indicator LED (Torus Ring) ---
    const ledRingGeom = new THREE.TorusGeometry(0.18, 0.035, 8, 32);
    const ledRingMat = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      emissive: 0xff0000,
      emissiveIntensity: 1.5,
      roughness: 0.2,
    });
    const ledRing = new THREE.Mesh(ledRingGeom, ledRingMat);
    ledRing.position.set(0, -1.8, 0.16);
    lockGroup.add(ledRing);

    const ledLight = new THREE.PointLight(0xff0000, 1.2, 3);
    ledLight.position.copy(ledRing.position);
    ledLight.position.z += 0.2;
    lockGroup.add(ledLight);


    // --- Door Lock Deadbolts (Translates on X axis) ---
    const boltsGroup = new THREE.Group();
    // Position on the left side of the lock (x negative)
    boltsGroup.position.set(-0.7, 0, 0); 
    lockGroup.add(boltsGroup);

    const boltGeom = new THREE.CylinderGeometry(0.15, 0.15, 0.8, 24);
    const boltMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0, // Chrome deadbolts
      roughness: 0.1,
      metalness: 0.95,
    });

    // Upper bolt
    const bolt1 = new THREE.Mesh(boltGeom, boltMat);
    bolt1.rotation.z = Math.PI / 2; // Lie horizontal
    bolt1.position.set(0, 0.45, 0);
    boltsGroup.add(bolt1);

    // Lower bolt
    const bolt2 = new THREE.Mesh(boltGeom, boltMat);
    bolt2.rotation.z = Math.PI / 2;
    bolt2.position.set(0, -0.45, 0);
    boltsGroup.add(bolt2);


    // --- Swiveling Door Handle (Rotates on Z axis) ---
    // Anchor joint at x = 0, y = -0.7
    const handleGroup = new THREE.Group();
    handleGroup.position.set(0, -0.7, 0.15);
    lockGroup.add(handleGroup);

    // Handle pivot hinge cyl
    const hingeGeom = new THREE.CylinderGeometry(0.35, 0.35, 0.25, 32);
    const hinge = new THREE.Mesh(hingeGeom, escutcheonMat);
    hinge.rotation.x = Math.PI / 2;
    handleGroup.add(hinge);

    // Fingerprint scanner reader ring inside the hinge
    const fpScannerGeom = new THREE.TorusGeometry(0.12, 0.02, 8, 32);
    const fpScannerMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Cyan ring default
      transparent: true,
      opacity: 0.8
    });
    const fpScanner = new THREE.Mesh(fpScannerGeom, fpScannerMat);
    fpScanner.position.set(0, 0, 0.13);
    handleGroup.add(fpScanner);

    // Handle horizontal lever box (Offset to swing from hinge pivot)
    const handleLeverGeom = new THREE.BoxGeometry(1.8, 0.26, 0.16);
    const handleLever = new THREE.Mesh(handleLeverGeom, escutcheonMat);
    // Offset horizontal position so handle pivots from one end
    handleLever.position.set(0.9, 0, 0.08); 
    handleGroup.add(handleLever);

    // Chrome accents on handle face
    const handleChromeGeom = new THREE.BoxGeometry(1.6, 0.08, 0.02);
    const handleChrome = new THREE.Mesh(handleChromeGeom, boltMat);
    handleChrome.position.set(0.9, 0, 0.17);
    handleGroup.add(handleChrome);


    // 6. Animation Loop (LERP swiveling & sliding bolts)
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Read current state from ref to avoid closure trapping
      const { lockState: currentLockState, progress: currentProgress } = stateRef.current;

      // Rotate lock group slowly in idle to show off 3D depth
      lockGroup.rotation.y = Math.sin(time * 0.4) * 0.06;

      let targetRotationZ = 0; // horizontal handle
      let targetBoltX = -0.7; // extended deadbolts

      if (currentLockState === "LOCKED") {
        targetRotationZ = 0;
        targetBoltX = -0.7;

        // Red LED static
        ledRingMat.color.setHex(0xff0000);
        ledRingMat.emissive.setHex(0xff0000);
        ledRingMat.emissiveIntensity = 1.2;
        ledLight.color.setHex(0xff0000);
        ledLight.intensity = 1.0;

        // Keypad default cyan
        numDotMat.color.setHex(0x06b6d4);
        fpScannerMat.color.setHex(0x06b6d4);

        escutcheonBorderMat.color.setHex(0x8a3ffc);

      } else if (currentLockState === "SCANNING") {
        targetRotationZ = 0;
        targetBoltX = -0.7;

        // Led blinking/pulsing orange
        ledRingMat.color.setHex(0xeab308);
        ledRingMat.emissive.setHex(0xeab308);
        const pulse = 0.5 + Math.sin(time * 12) * 0.5;
        ledRingMat.emissiveIntensity = pulse * 1.5;
        ledLight.color.setHex(0xeab308);
        ledLight.intensity = pulse * 1.2;

        // Keypad lights scanning
        const scanIndex = Math.floor((currentProgress / 100) * keypadRows * keypadCols);
        numDotMat.color.setHex(0xeab308);
        fpScannerMat.color.setHex(0xeab308);
        
        escutcheonBorderMat.color.setHex(0xeab308);

      } else if (currentLockState === "UNLOCKED") {
        targetRotationZ = -Math.PI / 5; // Handle down 36 degrees
        targetBoltX = -0.3; // Bolts retracted

        // Emerald Green LED success
        ledRingMat.color.setHex(0x22c55e);
        ledRingMat.emissive.setHex(0x22c55e);
        ledRingMat.emissiveIntensity = 1.8;
        ledLight.color.setHex(0x22c55e);
        ledLight.intensity = 1.5;

        // Keypad verified green
        numDotMat.color.setHex(0x22c55e);
        fpScannerMat.color.setHex(0x22c55e);
        
        escutcheonBorderMat.color.setHex(0x22c55e);
      }

      // Smooth swiveling and sliding translation LERP
      handleGroup.rotation.z += (targetRotationZ - handleGroup.rotation.z) * 0.05;
      boltsGroup.position.x += (targetBoltX - boltsGroup.position.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      escutcheonGeom.dispose();
      escutcheonMat.dispose();
      escutcheonBorderGeom.dispose();
      escutcheonBorderMat.dispose();
      keypadGeom.dispose();
      keypadMat.dispose();
      numDotGeom.dispose();
      numDotMat.dispose();
      ledRingGeom.dispose();
      ledRingMat.dispose();
      boltGeom.dispose();
      boltMat.dispose();
      hingeGeom.dispose();
      fpScannerGeom.dispose();
      fpScannerMat.dispose();
      handleLeverGeom.dispose();
      handleChromeGeom.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] md:min-h-[440px] bg-slate-950 rounded-[2.5rem] border border-slate-800 overflow-hidden shadow-2xl flex flex-col group">
      
      {/* 3D WebGL Canvas Layer */}
      <div ref={containerRef} className="absolute inset-0 z-0 w-full h-full" />

      {/* Cybernetic HUD Interface Layer */}
      <div className="absolute inset-0 z-10 p-6 pointer-events-none flex flex-col justify-between select-none">
        
        {/* Top HUD Row */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
            <span className={`w-2.5 h-2.5 rounded-full ${
              lockState === "UNLOCKED" ? "bg-emerald-500 animate-ping" : 
              lockState === "SCANNING" ? "bg-amber-500 animate-pulse" : "bg-red-500 animate-pulse"
            }`} />
            <span className={`w-2.5 h-2.5 rounded-full absolute ${
              lockState === "UNLOCKED" ? "bg-emerald-500" : 
              lockState === "SCANNING" ? "bg-amber-500" : "bg-red-500"
            }`} />
            <span className="font-mono text-xs text-white tracking-widest font-semibold uppercase">{statusMessage}</span>
          </div>
          
          <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-xl text-right">
            <div className="text-[8px] text-gray-400 font-mono tracking-wider">MECHANISM</div>
            <div className="font-mono text-xs text-[#ff7e15] font-semibold">
              {lockState === "UNLOCKED" ? "DISENGAGED" : "LOCKED"}
            </div>
          </div>
        </div>

        {/* Center alignment graphics */}
        <div className="absolute top-[40%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/5 flex items-center justify-center pointer-events-none rounded-full">
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20" />
        </div>

        {/* Bottom Section: Scan button */}
        <div className="flex flex-col gap-3.5 mt-auto">
          
          {/* User interactive scan button */}
          <div className="pointer-events-auto">
            {lockState === "LOCKED" ? (
              <button
                onClick={handleUnlock}
                className="w-full bg-[#ff7e15] hover:bg-[#ff7e15]/80 text-white font-extrabold text-xs py-3.5 px-4 rounded-xl text-center block transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,126,21,0.25)] tracking-wider"
              >
                TOUCH FINGERPRINT TO UNLOCK
              </button>
            ) : lockState === "SCANNING" ? (
              <button
                disabled
                className="w-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-semibold text-xs py-3.5 px-4 rounded-xl text-center block tracking-wider animate-pulse"
              >
                READING FINGERPRINT CREDENTIALS... {Math.round(progress)}%
              </button>
            ) : (
              <button
                disabled
                className="w-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-extrabold text-xs py-3.5 px-4 rounded-xl text-center block shadow-[0_0_20px_rgba(34,197,94,0.25)] animate-pulse tracking-wider"
              >
                ACCESS GRANTED • LOCK DISENGAGED
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Cyberpunk grid monitor screen overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-b from-transparent via-[#ff7e15]/1 to-transparent bg-[size:100%_4px] opacity-15" />
    </div>
  );
}
