"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ConsultingCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [optState, setOptState] = useState<"STANDBY" | "OPTIMIZING" | "COMPLETE">("STANDBY");
  const [progress, setProgress] = useState(0);
  const [logMessages, setLogMessages] = useState<string[]>([
    "IT INFRASTRUCTURE MONITOR ACTIVE",
    "CLUSTERS: [NODE-A, NODE-B] CONNECTED",
    "STANDBY - READY FOR OPTIMIZATION SWEEP"
  ]);

  const stateRef = useRef({ optState, progress });
  useEffect(() => {
    stateRef.current = { optState, progress };
  }, [optState, progress]);

  // Trigger system optimization cycle
  const triggerOptimization = () => {
    if (optState !== "STANDBY") return;
    setOptState("OPTIMIZING");
    setProgress(0);
    setLogMessages([
      "OPTIMIZATION TASK INITIATED",
      "ANALYZING DATABASE CACHE INDEXES...",
      "POLLING INGRESS ROUTER LOAD..."
    ]);
  };

  // Progress counter and mock logs injector
  useEffect(() => {
    if (optState !== "OPTIMIZING") return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1.25;
        if (next >= 100) {
          clearInterval(interval);
          setOptState("COMPLETE");
          setLogMessages((logs) => [
            ...logs,
            "SQL CACHE INDEXED (SUCCESS)",
            "FIREWALL FIREWALLED (ACTIVE)",
            "SYSTEM STACKS OPTIMIZED SUCCESSFULLY!"
          ]);
          return 100;
        }

        // Periodic detailed logs
        if (Math.abs(next - 25) < 1.0) {
          setLogMessages((logs) => [...logs, "RE-ALLOCATING INGRESS PORTS..."]);
        } else if (Math.abs(next - 50) < 1.0) {
          setLogMessages((logs) => [...logs, "CLEANING HEAP STACK LEAKS..."]);
        } else if (Math.abs(next - 75) < 1.0) {
          setLogMessages((logs) => [...logs, "HARDENING PORT ACCESS LISTS (ACL)..."]);
        }

        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [optState]);

  // Auto reset from COMPLETE to STANDBY after 5 seconds
  useEffect(() => {
    if (optState !== "COMPLETE") return;
    const timeout = setTimeout(() => {
      setOptState("STANDBY");
      setProgress(0);
      setLogMessages([
        "IT INFRASTRUCTURE MONITOR ACTIVE",
        "CLUSTERS: [NODE-A, NODE-B] CONNECTED",
        "STANDBY - READY FOR OPTIMIZATION SWEEP"
      ]);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [optState]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.015);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.0);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambient);

    const purpleLight = new THREE.DirectionalLight(0x8a3ffc, 1.5);
    purpleLight.position.set(5, 5, 5);
    scene.add(purpleLight);

    const cyanLight = new THREE.DirectionalLight(0x06b6d4, 1.2);
    cyanLight.position.set(-5, -5, 5);
    scene.add(cyanLight);

    // 3. Central Wireframe Node Globe
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Central Sphere Core (Hologram Globe)
    const globeGeom = new THREE.SphereGeometry(1.3, 16, 16);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x8a3ffc,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });
    const globeMesh = new THREE.Mesh(globeGeom, globeMat);
    globeGroup.add(globeMesh);

    // Dynamic Orbit Nodes (database clusters)
    const nodeCount = 14;
    const nodes: THREE.Mesh[] = [];
    const nodeGeom = new THREE.SphereGeometry(0.08, 16, 16);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    const orbitRadii: number[] = [];
    const orbitSpeeds: number[] = [];
    const orbitAngles: number[] = [];
    const inclinations: number[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeom, nodeMat);
      globeGroup.add(node);
      nodes.push(node);

      // Define unique orbit properties
      orbitRadii.push(1.7 + Math.random() * 0.7);
      orbitSpeeds.push(0.3 + Math.random() * 0.5);
      orbitAngles.push(Math.random() * Math.PI * 2);
      inclinations.push((Math.random() - 0.5) * Math.PI * 0.6); // tilt angles
    }

    // Dynamic Connections (Line segments linking nodes to central sphere)
    const connLineGeom = new THREE.BufferGeometry();
    const connPositions = new Float32Array(nodeCount * 2 * 3); // 2 vertices per line, 3 coords
    connLineGeom.setAttribute("position", new THREE.BufferAttribute(connPositions, 3));
    
    const connLineMat = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });
    const connectionLines = new THREE.LineSegments(connLineGeom, connLineMat);
    globeGroup.add(connectionLines);

    // 4. Concentric HUD Orbit Rings
    const ringGeom = new THREE.RingGeometry(2.3, 2.33, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x8a3ffc,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending
    });
    
    const telemetryRing1 = new THREE.Mesh(ringGeom, ringMat);
    telemetryRing1.rotation.x = Math.PI / 2.5;
    globeGroup.add(telemetryRing1);

    const telemetryRing2 = new THREE.Mesh(ringGeom, ringMat);
    telemetryRing2.rotation.y = Math.PI / 2.5;
    globeGroup.add(telemetryRing2);

    // 5. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Read current state
      const { optState: currentOptState, progress: currentProgress } = stateRef.current;

      // Base globe group rotation
      let baseSpinSpeed = 0.15;
      if (currentOptState === "OPTIMIZING") {
        baseSpinSpeed = 1.0; // Spin fast during optimization
        globeMat.color.setHex(0x22c55e); // Green
        globeMat.opacity = 0.55;
        nodeMat.color.setHex(0x22c55e);
        connLineMat.color.setHex(0x22c55e);
        ringMat.color.setHex(0x22c55e);
      } else if (currentOptState === "COMPLETE") {
        baseSpinSpeed = 0.3;
        globeMat.color.setHex(0x22c55e);
        globeMat.opacity = 0.45;
        nodeMat.color.setHex(0x22c55e);
        connLineMat.color.setHex(0x22c55e);
        ringMat.color.setHex(0x22c55e);
      } else {
        // standby
        baseSpinSpeed = 0.15;
        globeMat.color.setHex(0x8a3ffc);
        globeMat.opacity = 0.35;
        nodeMat.color.setHex(0x06b6d4);
        connLineMat.color.setHex(0x06b6d4);
        ringMat.color.setHex(0x8a3ffc);
      }

      globeGroup.rotation.y = time * baseSpinSpeed;
      globeGroup.rotation.z = Math.sin(time * 0.1) * 0.1;

      // Spin HUD telemetry rings
      telemetryRing1.rotation.z = time * 0.2;
      telemetryRing2.rotation.z = -time * 0.15;

      // Update orbital nodes positions & lines
      const positions = connectionLines.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < nodeCount; i++) {
        // Update angle
        const speed = orbitSpeeds[i] * (currentOptState === "OPTIMIZING" ? 3.0 : 1.0);
        const theta = orbitAngles[i] + time * speed;
        const phi = inclinations[i];
        const r = orbitRadii[i];

        // Orbit Cartesian coords
        const x = r * Math.sin(theta) * Math.cos(phi);
        const y = r * Math.cos(theta);
        const z = r * Math.sin(theta) * Math.sin(phi);

        nodes[i].position.set(x, y, z);

        // Update Connection Line Segment
        // Start vertex (Center 0,0,0)
        positions[i * 6] = 0;
        positions[i * 6 + 1] = 0;
        positions[i * 6 + 2] = 0;

        // End vertex (Node Position)
        positions[i * 6 + 3] = x;
        positions[i * 6 + 4] = y;
        positions[i * 6 + 5] = z;
      }
      connectionLines.geometry.attributes.position.needsUpdate = true;

      // Pulse connection lines opacity
      const opacityPulse = 0.35 + Math.sin(time * 6) * 0.15;
      connLineMat.opacity = currentOptState === "OPTIMIZING" ? 0.7 : opacityPulse;

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

      globeGeom.dispose();
      globeMat.dispose();
      nodeGeom.dispose();
      nodeMat.dispose();
      connLineGeom.dispose();
      connLineMat.dispose();
      ringGeom.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[360px] md:min-h-[440px] bg-slate-950 rounded-[2.5rem] border border-slate-800 overflow-hidden shadow-2xl flex flex-col group">
      
      {/* 3D WebGL Canvas Layer */}
      <div ref={containerRef} className="absolute inset-0 z-0 w-full h-full" />

      {/* Cybernetic HUD Interface Layer */}
      <div className="absolute inset-0 z-10 p-6 pointer-events-none flex flex-col justify-between select-none">
        
        {/* Top HUD Row */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
            <span className={`w-2.5 h-2.5 rounded-full ${
              optState === "COMPLETE" ? "bg-emerald-500 animate-ping" : 
              optState === "OPTIMIZING" ? "bg-amber-500 animate-pulse" : "bg-cyan-500 animate-pulse"
            }`} />
            <span className={`w-2.5 h-2.5 rounded-full absolute ${
              optState === "COMPLETE" ? "bg-emerald-500" : 
              optState === "OPTIMIZING" ? "bg-amber-500" : "bg-cyan-500"
            }`} />
            <span className="font-mono text-xs text-white tracking-widest font-semibold uppercase">
              {optState === "COMPLETE" ? "STACKS OPTIMIZED" : 
               optState === "OPTIMIZING" ? `OPTIMIZING: ${Math.round(progress)}%` : "MONITOR ACTIVE"}
            </span>
          </div>
          
          <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-xl text-right">
            <div className="text-[8px] text-gray-400 font-mono tracking-wider">CONSULTING METRIC</div>
            <div className="font-mono text-xs text-[#8a3ffc] font-semibold">INFRASTRUCTURE</div>
          </div>
        </div>

        {/* Center telemetry crosshairs */}
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-44 h-44 border border-white/5 flex items-center justify-center pointer-events-none rounded-full">
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20" />
        </div>

        {/* Bottom Section: Logs & Scan button */}
        <div className="flex flex-col gap-3.5 mt-auto">
          {/* Cyberpunk log output */}
          <div className="bg-black/70 backdrop-blur-md border border-white/10 p-3 rounded-xl font-mono text-[8px] text-gray-400 max-h-[80px] overflow-hidden space-y-1 shrink-0">
            {logMessages.map((msg, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <span className="text-[#8a3ffc]">&gt;</span>
                <span className={msg.includes("SUCCESS") || msg.includes("OPTIMIZED") ? "text-emerald-400 font-bold" : ""}>
                  {msg}
                </span>
              </div>
            ))}
          </div>

          {/* User interactive scan button */}
          <div className="pointer-events-auto">
            {optState === "STANDBY" ? (
              <button
                onClick={triggerOptimization}
                className="w-full bg-[#8a3ffc] hover:bg-[#8a3ffc]/80 text-white font-extrabold text-xs py-3.5 px-4 rounded-xl text-center block transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(138,63,252,0.25)] tracking-wider"
              >
                EXECUTE SYSTEM OPTIMIZATION SWEEP
              </button>
            ) : optState === "OPTIMIZING" ? (
              <button
                disabled
                className="w-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-semibold text-xs py-3.5 px-4 rounded-xl text-center block tracking-wider"
              >
                TUNING ENGINE... CACHE COMPACTION... {Math.round(progress)}%
              </button>
            ) : (
              <button
                disabled
                className="w-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-extrabold text-xs py-3.5 px-4 rounded-xl text-center block shadow-[0_0_20px_rgba(34,197,94,0.2)] animate-pulse tracking-wider"
              >
                STACKS ALIGNED • SYSTEM HEALTH 100% ✓
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Cyberpunk grid monitor screen overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-b from-transparent via-[#8a3ffc]/1 to-transparent bg-[size:100%_4px] opacity-20" />
    </div>
  );
}
