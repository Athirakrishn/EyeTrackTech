"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function BiometricCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scanState, setScanState] = useState<"STANDBY" | "SCANNING" | "VERIFIED">("STANDBY");
  const [progress, setProgress] = useState(0);
  const [logMessages, setLogMessages] = useState<string[]>([
    "DUAL-BIOMETRIC TERMINAL ACTIVE",
    "DEVICES: [FINGERPRINT, FACE-ID] ONLINE",
    "AWAITING INPUT IDENTITY AUTH..."
  ]);

  // Ref to state for Three.js render loop to prevent closure staleness
  const stateRef = useRef({ scanState, progress });
  useEffect(() => {
    stateRef.current = { scanState, progress };
  }, [scanState, progress]);

  // Trigger Biometric verification cycle
  const triggerScan = () => {
    if (scanState !== "STANDBY") return;
    setScanState("SCANNING");
    setProgress(0);
    setLogMessages([
      "SCANNER AWAKENED",
      "FINGERPRINT ENROLLING...",
      "FACIAL 3D DEPTH MAPPING INITIATED..."
    ]);
  };

  // Simulate progress and streaming tech logs
  useEffect(() => {
    if (scanState !== "SCANNING") return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1.2;
        if (next >= 100) {
          clearInterval(interval);
          setScanState("VERIFIED");
          setLogMessages((logs) => [
            ...logs,
            "FINGERPRINT MATCH: 99.82% (VALID)",
            "FACIAL MATCH: 99.94% (VALID)",
            "LINK AUTHENTICATED. WELCOME AUTHORIZED USER!"
          ]);
          return 100;
        }

        // Periodic detailed logs
        if (Math.abs(next - 20) < 1.0) {
          setLogMessages((logs) => [...logs, "[FP-01] ACQUIRING DERMAL MINUTIAE..."]);
        } else if (Math.abs(next - 40) < 1.0) {
          setLogMessages((logs) => [...logs, "[FACE-02] CALCULATING EYE-SPAN & CHIN BRIDGE..."]);
        } else if (Math.abs(next - 60) < 1.0) {
          setLogMessages((logs) => [...logs, "[CRYPT-0] HASHING DATA TOKEN (SHA-256)..."]);
        } else if (Math.abs(next - 80) < 1.0) {
          setLogMessages((logs) => [...logs, "[GATEWAY] VALIDATING SECURITY CERTIFICATE..."]);
        }

        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [scanState]);

  // Reset back to standby after 6 seconds
  useEffect(() => {
    if (scanState !== "VERIFIED") return;
    const timeout = setTimeout(() => {
      setScanState("STANDBY");
      setProgress(0);
      setLogMessages([
        "DUAL-BIOMETRIC TERMINAL ACTIVE",
        "DEVICES: [FINGERPRINT, FACE-ID] ONLINE",
        "AWAITING INPUT IDENTITY AUTH..."
      ]);
    }, 6000);
    return () => clearTimeout(timeout);
  }, [scanState]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.015);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 9.0);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambient);

    const redLight = new THREE.DirectionalLight(0xff7e15, 0.8);
    redLight.position.set(5, 5, 5);
    scene.add(redLight);

    const blueLight = new THREE.DirectionalLight(0x06b6d4, 1.2);
    blueLight.position.set(-5, -5, 5);
    scene.add(blueLight);

    const greenLight = new THREE.DirectionalLight(0x22c55e, 1.0);
    greenLight.position.set(0, 5, 0);
    scene.add(greenLight);

    // 3. Stacked Visual Groups
    // Top Group: Facial Depth Scan
    const faceGroup = new THREE.Group();
    faceGroup.position.set(0, 1.3, 0);
    scene.add(faceGroup);

    // Bottom Group: Fingerprint Scan Pad
    const fpGroup = new THREE.Group();
    fpGroup.position.set(0, -1.4, 0);
    scene.add(fpGroup);

    // --- BUILD FACE DESIGN ---
    // Sculpt a 3D facial depth mask point-cloud
    const faceCount = 750;
    const facePositions: number[] = [];
    const faceColors: number[] = [];

    for (let i = 0; i < faceCount; i++) {
      // Position points on a hemisphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1); // 0 to PI
      
      let r = 1.0;
      let x = r * Math.sin(phi) * Math.cos(theta);
      let y = r * Math.cos(phi);
      let z = r * Math.sin(phi) * Math.sin(theta);
      
      // Face front hemisphere projection (Z > 0)
      if (z < 0) z = -z;

      // Sculpt nose bridge
      const noseDist = Math.sqrt(x * x + (y - 0.08) * (y - 0.08));
      if (noseDist < 0.28) {
        z += (0.28 - noseDist) * 1.1;
      }

      // Sculpt eye sockets
      const leftEyeDist = Math.sqrt((x - 0.28) * (x - 0.28) + (y - 0.32) * (y - 0.32));
      const rightEyeDist = Math.sqrt((x + 0.28) * (x + 0.28) + (y - 0.32) * (y - 0.32));
      if (leftEyeDist < 0.2) {
        z -= (0.2 - leftEyeDist) * 0.6;
      }
      if (rightEyeDist < 0.2) {
        z -= (0.2 - rightEyeDist) * 0.6;
      }

      // Sculpt mouth lips
      const mouthDist = Math.sqrt(x * x + (y + 0.28) * (y + 0.28));
      if (mouthDist < 0.22) {
        z += (0.22 - mouthDist) * 0.3 * Math.sin(x * 12);
      }

      // Sculpt chin protrusion
      const chinDist = Math.sqrt(x * x + (y + 0.6) * (y + 0.6));
      if (chinDist < 0.2) {
        z += (0.2 - chinDist) * 0.45;
      }

      facePositions.push(x * 1.1, y * 1.25, z * 1.0);
      faceColors.push(0.02, 0.71, 0.83); // default cyan
    }

    const faceGeom = new THREE.BufferGeometry();
    faceGeom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(facePositions), 3));
    faceGeom.setAttribute("color", new THREE.BufferAttribute(new Float32Array(faceColors), 3));

    const faceMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const facePoints = new THREE.Points(faceGeom, faceMat);
    faceGroup.add(facePoints);

    // Rotating HUD Ring around Face
    const ringGeom = new THREE.RingGeometry(1.4, 1.42, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });
    const orbitRing1 = new THREE.Mesh(ringGeom, ringMat);
    orbitRing1.rotation.x = Math.PI / 2;
    faceGroup.add(orbitRing1);

    const orbitRing2 = new THREE.Mesh(ringGeom, ringMat);
    orbitRing2.rotation.y = Math.PI / 2;
    faceGroup.add(orbitRing2);

    // Horizontal Face Scan Laser Bar (Circular grid)
    const faceLaserGeom = new THREE.RingGeometry(1.15, 1.18, 32);
    const faceLaserMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    const faceLaser = new THREE.Mesh(faceLaserGeom, faceLaserMat);
    faceLaser.rotation.x = Math.PI / 2;
    faceLaser.visible = false;
    faceGroup.add(faceLaser);


    // --- BUILD FINGERPRINT DESIGN ---
    // Curved base scanner plate
    const padGeom = new THREE.BoxGeometry(2.8, 2.2, 0.1);
    const padMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.1,
      metalness: 0.9
    });
    const fpPad = new THREE.Mesh(padGeom, padMat);
    fpPad.rotation.x = -Math.PI / 5; // Tilt backward
    fpGroup.add(fpPad);

    // Glowing border frame
    const fpBorderGeom = new THREE.BoxGeometry(2.4, 1.8, 0.05);
    const fpBorderMat = new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const fpBorder = new THREE.Mesh(fpBorderGeom, fpBorderMat);
    fpBorder.position.z = 0.08;
    fpPad.add(fpBorder);

    // Procedural Fingerprint ridges
    const fpCount = 950;
    const fpPositions: number[] = [];
    const fpColors: number[] = [];

    const printRids = 9;
    const ptsPerRid = 100;
    for (let r = 0; r < printRids; r++) {
      const rx = 0.12 + r * 0.12;
      const ry = 0.16 + r * 0.16;
      
      const openGap = Math.PI * 0.45;
      const startAngle = -Math.PI / 2 + openGap;
      const endAngle = Math.PI * 1.5 - openGap;

      for (let p = 0; p < ptsPerRid; p++) {
        const t = startAngle + (p / ptsPerRid) * (endAngle - startAngle);
        const wave = Math.sin(t * 8) * 0.02;
        const offset = Math.cos(r * 0.3) * 0.03;

        const x = (rx + wave + offset) * Math.cos(t);
        const y = (ry + wave + offset) * Math.sin(t);
        const z = 0.1 + Math.sin(rx * 5) * 0.03;

        fpPositions.push(x, y, z);
        fpColors.push(0.02, 0.71, 0.83); // default cyan
      }
    }

    const fpGeom = new THREE.BufferGeometry();
    fpGeom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(fpPositions), 3));
    fpGeom.setAttribute("color", new THREE.BufferAttribute(new Float32Array(fpColors), 3));

    const fpMat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const fpPoints = new THREE.Points(fpGeom, fpMat);
    fpPoints.rotation.x = -Math.PI / 5; // Tilt flat to match pad
    fpPoints.position.z = 0.1;
    fpGroup.add(fpPoints);

    // Green Fingerprint Laser Bar
    const fpLaserGeom = new THREE.BoxGeometry(2.1, 0.04, 0.04);
    const fpLaserMat = new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending
    });
    const fpLaser = new THREE.Mesh(fpLaserGeom, fpLaserMat);
    fpLaser.rotation.x = -Math.PI / 5;
    fpLaser.position.z = 0.15;
    fpLaser.visible = false;
    fpGroup.add(fpLaser);

    const fpLaserLight = new THREE.PointLight(0x22c55e, 1.2, 2);
    fpLaserLight.visible = false;
    fpGroup.add(fpLaserLight);


    // 7. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Read current state from ref to avoid closure trapping
      const { scanState: currentScanState, progress: currentProgress } = stateRef.current;

      // Rotate Face point cloud slowly
      facePoints.rotation.y = time * 0.15;

      // Spin HUD rings
      orbitRing1.rotation.z = time * 0.25;
      orbitRing2.rotation.z = -time * 0.25;

      if (currentScanState === "STANDBY") {
        // Subtle floating / bobbing
        faceGroup.position.y = 1.3 + Math.sin(time * 1.5) * 0.05;
        fpGroup.position.y = -1.4 + Math.cos(time * 1.5) * 0.03;
        
        // Reset HUD ring colors
        ringMat.color.setHex(0x06b6d4);
        fpBorderMat.color.setHex(0x06b6d4);

        // Hide lasers
        faceLaser.visible = false;
        fpLaser.visible = false;
        fpLaserLight.visible = false;

      } else if (currentScanState === "SCANNING") {
        // Faster vibrations during active biometrics check
        faceGroup.position.y = 1.3 + Math.sin(time * 8.0) * 0.02;
        fpGroup.position.y = -1.4 + Math.cos(time * 8.0) * 0.01;

        // Change frames to orange warning during mapping
        ringMat.color.setHex(0xeab308);
        fpBorderMat.color.setHex(0xeab308);

        // --- Active lasers sweep ---
        faceLaser.visible = true;
        fpLaser.visible = true;
        fpLaserLight.visible = true;

        // Face scanner sweeps circular grid down Y-axis
        const faceSweep = (currentProgress / 100) * Math.PI * 4;
        faceLaser.position.y = Math.cos(faceSweep) * 1.2;

        // Fingerprint scanner sweeps green bar down Pad
        const fpSweep = (currentProgress / 100) * Math.PI * 3;
        fpLaser.position.y = Math.sin(fpSweep) * 0.8;
        fpLaserLight.position.copy(fpLaser.position);

      } else if (currentScanState === "VERIFIED") {
        // Smooth floating on verified state
        faceGroup.position.y = 1.3 + Math.sin(time * 0.4) * 0.04;
        fpGroup.position.y = -1.4 + Math.cos(time * 0.4) * 0.02;

        // Frames turn secure emerald green
        ringMat.color.setHex(0x22c55e);
        fpBorderMat.color.setHex(0x22c55e);

        // Hide lasers
        faceLaser.visible = false;
        fpLaser.visible = false;
        fpLaserLight.visible = false;
      }

      // --- Reactive Face Color Shading ---
      const faceColorAttr = facePoints.geometry.attributes.color;
      const facePosAttr = facePoints.geometry.attributes.position;
      const faceCount = facePosAttr.count;

      for (let i = 0; i < faceCount; i++) {
        let r = 0.02, g = 0.71, b = 0.83; // default cyan

        if (currentScanState === "SCANNING") {
          const py = facePosAttr.getY(i);
          const distToLaser = Math.abs(py - faceLaser.position.y);
          if (distToLaser < 0.12) {
            r = 0.95; g = 0.9; b = 0.15; // glowing yellow
          } else if (py > faceLaser.position.y) {
            r = 0.13; g = 0.77; b = 0.36; // green verified mesh
          }
        } else if (currentScanState === "VERIFIED") {
          const successPulse = 0.6 + Math.sin(time * 6) * 0.3;
          r = 0.13 * successPulse;
          g = 0.82 * successPulse;
          b = 0.36 * successPulse;
        } else {
          // standby breath
          const breath = 0.7 + Math.sin(time * 2.0 + facePosAttr.getY(i) * 2) * 0.25;
          r *= breath; g *= breath; b *= breath;
        }
        faceColorAttr.setXYZ(i, r, g, b);
      }
      faceColorAttr.needsUpdate = true;


      // --- Reactive Fingerprint Color Shading ---
      const fpColorAttr = fpPoints.geometry.attributes.color;
      const fpPosAttr = fpPoints.geometry.attributes.position;
      const fpCount = fpPosAttr.count;

      for (let i = 0; i < fpCount; i++) {
        let r = 0.02, g = 0.71, b = 0.83; // default cyan

        if (currentScanState === "SCANNING") {
          // Adjust vertical position to match tilted Y-plane coordinates
          const py = fpPosAttr.getY(i);
          const distToLaser = Math.abs(py - fpLaser.position.y);
          if (distToLaser < 0.12) {
            r = 0.95; g = 0.9; b = 0.15;
          } else if (py > fpLaser.position.y) {
            r = 0.13; g = 0.77; b = 0.36;
          }
        } else if (currentScanState === "VERIFIED") {
          const successPulse = 0.6 + Math.sin(time * 6) * 0.3;
          r = 0.13 * successPulse;
          g = 0.82 * successPulse;
          b = 0.36 * successPulse;
        } else {
          // standby breath
          const breath = 0.65 + Math.sin(time * 2.5 + fpPosAttr.getY(i) * 3) * 0.3;
          r *= breath; g *= breath; b *= breath;
        }
        fpColorAttr.setXYZ(i, r, g, b);
      }
      fpColorAttr.needsUpdate = true;

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
      
      // Dispose WebGL structures
      faceGeom.dispose();
      faceMat.dispose();
      ringGeom.dispose();
      ringMat.dispose();
      faceLaserGeom.dispose();
      faceLaserMat.dispose();
      padGeom.dispose();
      padMat.dispose();
      fpBorderGeom.dispose();
      fpBorderMat.dispose();
      fpGeom.dispose();
      fpMat.dispose();
      fpLaserGeom.dispose();
      fpLaserMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[420px] bg-slate-950 rounded-[2.5rem] border border-slate-800 overflow-hidden shadow-2xl flex flex-col group">
      
      {/* 3D WebGL Canvas Layer */}
      <div ref={containerRef} className="absolute inset-0 z-0 w-full h-full" />

      {/* Cyberpunk HUD Telemetry Layer */}
      <div className="absolute inset-0 z-10 p-6 pointer-events-none flex flex-col justify-between select-none">
        
        {/* Top HUD Row */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
            <span className={`w-2.5 h-2.5 rounded-full ${
              scanState === "VERIFIED" ? "bg-emerald-500 animate-ping" : 
              scanState === "SCANNING" ? "bg-amber-500 animate-pulse" : "bg-cyan-500 animate-pulse"
            }`} />
            <span className={`w-2.5 h-2.5 rounded-full absolute ${
              scanState === "VERIFIED" ? "bg-emerald-500" : 
              scanState === "SCANNING" ? "bg-amber-500" : "bg-cyan-500"
            }`} />
            <span className="font-mono text-[10px] text-white tracking-widest font-semibold uppercase">
              {scanState === "VERIFIED" ? "AUTH GRANTED" : 
               scanState === "SCANNING" ? `SCANNING: ${Math.round(progress)}%` : "TERMINAL STANDBY"}
            </span>
          </div>
          
          <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-xl text-right">
            <div className="text-[8px] text-gray-400 font-mono tracking-wider">MODE</div>
            <div className="font-mono text-[10px] text-[#06b6d4] font-semibold">DUAL MATCH</div>
          </div>
        </div>

        {/* Dual telemetry tags overlay */}
        <div className="flex justify-between items-center w-full px-2 mt-4">
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 px-2.5 py-1 rounded-lg font-mono text-[8px] text-cyan-400">
            [FACIAL SCANNER: READY]
          </div>
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 px-2.5 py-1 rounded-lg font-mono text-[8px] text-cyan-400">
            [FINGERPRINT: READY]
          </div>
        </div>

        {/* HUD grid alignment markers */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 flex items-center justify-center pointer-events-none rounded-full">
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#06b6d4]/40" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#06b6d4]/40" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#06b6d4]/40" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#06b6d4]/40" />
        </div>

        {/* Bottom Section: Scan button */}
        <div className="flex flex-col gap-3.5 mt-auto">
          {/* User interactive scan button */}
          <div className="pointer-events-auto">
            {scanState === "STANDBY" ? (
              <button
                onClick={triggerScan}
                className="w-full bg-[#06b6d4] hover:bg-[#06b6d4]/80 text-black font-extrabold text-xs py-3.5 px-4 rounded-xl text-center block transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(6,182,212,0.25)] tracking-wider"
              >
                INITIATE DUAL BIOMETRIC SCAN
              </button>
            ) : scanState === "SCANNING" ? (
              <button
                disabled
                className="w-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-semibold text-xs py-3.5 px-4 rounded-xl text-center block tracking-wider"
              >
                ACQUIRING SECURE TARGET DATA... {Math.round(progress)}%
              </button>
            ) : (
              <button
                disabled
                className="w-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-extrabold text-xs py-3.5 px-4 rounded-xl text-center block shadow-[0_0_20px_rgba(34,197,94,0.2)] animate-pulse tracking-wider"
              >
                ACCESS GRANTED • ID VERIFIED ✓
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Cyberpunk grid monitor screen overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-b from-transparent via-[#06b6d4]/1 to-transparent bg-[size:100%_4px] opacity-20" />
    </div>
  );
}
