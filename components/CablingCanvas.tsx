"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function CablingCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [diagState, setDiagState] = useState<"STANDBY" | "DIAGNOSING" | "OPTIMAL">("STANDBY");
  const [progress, setProgress] = useState(0);
  const [logMessages, setLogMessages] = useState<string[]>([
    "STRUCTURED CABLING LINK ONLINE",
    "PORTS: [1A - 24B] STANDBY",
    "READY TO INITIATE NETWORK DIAGNOSTICS..."
  ]);

  const stateRef = useRef({ diagState, progress });
  useEffect(() => {
    stateRef.current = { diagState, progress };
  }, [diagState, progress]);

  // Trigger link sweep diagnostic
  const triggerDiagnostic = () => {
    if (diagState !== "STANDBY") return;
    setDiagState("DIAGNOSING");
    setProgress(0);
    setLogMessages([
      "DIAGNOSTIC PING DETECTED",
      "SENDING TEST PACKETS (SHA-256)...",
      "ANALYZING PORT COUPLING INTEGRITY..."
    ]);
  };

  // Simulate progress and inject tech logs
  useEffect(() => {
    if (diagState !== "DIAGNOSING") return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1.5;
        if (next >= 100) {
          clearInterval(interval);
          setDiagState("OPTIMAL");
          setLogMessages((logs) => [
            ...logs,
            "LATENCY: 3.4ms (EXCELLENT)",
            "BANDWIDTH: 10 Gbps SYMMETRIC",
            "DIAGNOSTIC RESOLUTION: 100% OPTIMAL"
          ]);
          return 100;
        }

        // Periodic detailed logs
        if (Math.abs(next - 20) < 1.0) {
          setLogMessages((logs) => [...logs, "PING ROUTE: 192.168.1.1 -> SUCCESS"]);
        } else if (Math.abs(next - 45) < 1.0) {
          setLogMessages((logs) => [...logs, "CROSS-TALK NOISE LEVEL: -92dB (PASS)"]);
        } else if (Math.abs(next - 70) < 1.0) {
          setLogMessages((logs) => [...logs, "OPTICAL ATTENUATOR POWER: +2dBm"]);
        } else if (Math.abs(next - 90) < 1.0) {
          setLogMessages((logs) => [...logs, "VALIDATING TOPOLOGY HIERARCHY..."]);
        }

        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [diagState]);

  // Reset back to standby after 5 seconds of optimal state
  useEffect(() => {
    if (diagState !== "OPTIMAL") return;
    const timeout = setTimeout(() => {
      setDiagState("STANDBY");
      setProgress(0);
      setLogMessages([
        "STRUCTURED CABLING LINK ONLINE",
        "PORTS: [1A - 24B] STANDBY",
        "READY TO INITIATE NETWORK DIAGNOSTICS..."
      ]);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [diagState]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.015);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(3.2, 1.6, 8.5); // Elevated 3/4 perspective
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(ambient);

    const cyanLight = new THREE.DirectionalLight(0x06b6d4, 1.2);
    cyanLight.position.set(5, 5, 5);
    scene.add(cyanLight);

    const purpleLight = new THREE.DirectionalLight(0x8a3ffc, 1.4);
    purpleLight.position.set(-5, 3, 5);
    scene.add(purpleLight);

    // 3. Stacked Server Switches (Structured patch panels)
    const switchGeom = new THREE.BoxGeometry(4.0, 0.45, 0.3);
    const switchMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a, // dark slate metal
      roughness: 0.25,
      metalness: 0.9,
    });

    const panelGroup = new THREE.Group();
    scene.add(panelGroup);

    // Upper Switch Panel (y = 0.8)
    const upperSwitch = new THREE.Mesh(switchGeom, switchMat);
    upperSwitch.position.y = 0.8;
    panelGroup.add(upperSwitch);

    // Lower Switch Panel (y = -0.8)
    const lowerSwitch = new THREE.Mesh(switchGeom, switchMat);
    lowerSwitch.position.y = -0.8;
    panelGroup.add(lowerSwitch);

    // Glowing border frame for the rack unit
    const rackFrameGeom = new THREE.BoxGeometry(4.1, 2.3, 0.4);
    const rackFrameMat = new THREE.MeshBasicMaterial({
      color: 0x8a3ffc,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const rackFrame = new THREE.Mesh(rackFrameGeom, rackFrameMat);
    panelGroup.add(rackFrame);

    // Add ethernet port matrices on switches
    const portGeom = new THREE.BoxGeometry(0.12, 0.12, 0.05);
    const portMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.8
    });

    const portCount = 12; // Ports per switch
    const upperPortPositions: THREE.Vector3[] = [];
    const lowerPortPositions: THREE.Vector3[] = [];

    for (let i = 0; i < portCount; i++) {
      const px = -1.8 + i * 0.32;
      
      // Upper Ports
      const uPort = new THREE.Mesh(portGeom, portMat);
      uPort.position.set(px, 0.8, 0.16);
      panelGroup.add(uPort);
      upperPortPositions.push(new THREE.Vector3(px, 0.8, 0.18));

      // Lower Ports
      const lPort = new THREE.Mesh(portGeom, portMat);
      lPort.position.set(px, -0.8, 0.16);
      panelGroup.add(lPort);
      lowerPortPositions.push(new THREE.Vector3(px, -0.8, 0.18));
    }

    // 4. Fiber Optic Cabling lines (Curved Bezier loops in 3D)
    const cableCount = 8;
    const curves: THREE.QuadraticBezierCurve3[] = [];
    const cableLines: THREE.Line[] = [];
    const cableMat = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });

    for (let i = 0; i < cableCount; i++) {
      // Pick random upper and lower ports
      const startPortIdx = i; // simple direct routing offset
      const endPortIdx = (i + 4) % portCount;

      const pStart = upperPortPositions[startPortIdx];
      const pEnd = lowerPortPositions[endPortIdx];

      // Control point projecting outward along Z and slightly random on X
      const pControl = new THREE.Vector3(
        (pStart.x + pEnd.x) / 2 + (Math.random() - 0.5) * 0.4,
        0, // centered vertically
        1.8 + Math.random() * 0.8 // loops outward towards viewer
      );

      const curve = new THREE.QuadraticBezierCurve3(pStart, pControl, pEnd);
      curves.push(curve);

      // Render curve line
      const points = curve.getPoints(32);
      const curveGeom = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(curveGeom, cableMat);
      panelGroup.add(line);
      cableLines.push(line);
    }

    // 5. Flowing Photon Data Particles (glowing dots traveling curves)
    const packetCount = curves.length * 3; // 3 packets per curve
    const packetPositions = new Float32Array(packetCount * 3);
    const packetSpeeds: number[] = [];
    const packetProgresses: number[] = [];

    // Initialize packet streams
    for (let i = 0; i < packetCount; i++) {
      packetProgresses.push(Math.random()); // starting progress percentage
      packetSpeeds.push(0.005 + Math.random() * 0.005);
    }

    const packetGeom = new THREE.BufferGeometry();
    packetGeom.setAttribute("position", new THREE.BufferAttribute(packetPositions, 3));
    
    const packetMat = new THREE.PointsMaterial({
      color: 0x06b6d4,
      size: 0.12,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const packetPoints = new THREE.Points(packetGeom, packetMat);
    panelGroup.add(packetPoints);

    // 6. Animation Loop (Updating particles on curves & diagnostic sweep LERP)
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Read state
      const { diagState: currentDiagState, progress: currentProgress } = stateRef.current;

      // Oscillate rack group slightly
      panelGroup.rotation.y = Math.sin(time * 0.3) * 0.08;
      panelGroup.rotation.x = Math.cos(time * 0.3) * 0.04;

      let speedMultiplier = 1.0;

      if (currentDiagState === "STANDBY") {
        speedMultiplier = 1.0;
        cableMat.color.setHex(0x06b6d4); // Default cyan
        cableMat.opacity = 0.35;
        packetMat.color.setHex(0x06b6d4);
        rackFrameMat.color.setHex(0x8a3ffc);
        portMat.color.setHex(0x06b6d4);

      } else if (currentDiagState === "DIAGNOSING") {
        // High speed photon transmission during sweeps
        speedMultiplier = 3.5;
        
        // Pulse colors along warnings (orange/magenta/cyan)
        const colorPulse = Math.sin(time * 15) * 0.5 + 0.5;
        cableMat.color.setHex(0xff7e15); // Flashing orange
        cableMat.opacity = 0.5 + colorPulse * 0.3;
        packetMat.color.setHex(0xeab308); // Yellow packets
        rackFrameMat.color.setHex(0xeab308);

        // Port LEDs flash rapidly
        if (Math.floor(time * 12) % 2 === 0) {
          portMat.color.setHex(0xeab308);
        } else {
          portMat.color.setHex(0xff00ff);
        }

      } else if (currentDiagState === "OPTIMAL") {
        speedMultiplier = 1.5;
        cableMat.color.setHex(0x22c55e); // Secure Green
        cableMat.opacity = 0.45;
        packetMat.color.setHex(0x22c55e);
        rackFrameMat.color.setHex(0x22c55e);
        portMat.color.setHex(0x22c55e);
      }

      // Update particle positions along Bezier curves
      const positionsArr = packetPoints.geometry.attributes.position.array as Float32Array;
      const packetsPerCurve = 3;

      for (let c = 0; c < curves.length; c++) {
        const curve = curves[c];
        
        for (let p = 0; p < packetsPerCurve; p++) {
          const idx = c * packetsPerCurve + p;
          
          // Increment progress
          packetProgresses[idx] += packetSpeeds[idx] * speedMultiplier;
          if (packetProgresses[idx] > 1.0) {
            packetProgresses[idx] = 0;
          }

          // Evaluate curve position
          const pos = curve.getPointAt(packetProgresses[idx]);
          positionsArr[idx * 3] = pos.x;
          positionsArr[idx * 3 + 1] = pos.y;
          positionsArr[idx * 3 + 2] = pos.z;
        }
      }
      packetPoints.geometry.attributes.position.needsUpdate = true;

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

      switchGeom.dispose();
      switchMat.dispose();
      rackFrameGeom.dispose();
      rackFrameMat.dispose();
      portGeom.dispose();
      portMat.dispose();
      cableMat.dispose();
      cableLines.forEach((l) => l.geometry.dispose());
      packetGeom.dispose();
      packetMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[360px] md:min-h-[440px] bg-slate-950 rounded-[2.5rem] border border-slate-800 overflow-hidden shadow-2xl flex flex-col group">
      
      {/* 3D WebGL Canvas Layer */}
      <div ref={containerRef} className="absolute inset-0 z-0 w-full h-full" />

      {/* HUD Telemetry Layer */}
      <div className="absolute inset-0 z-10 p-6 pointer-events-none flex flex-col justify-between select-none">
        
        {/* Top HUD Row */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
            <span className={`w-2.5 h-2.5 rounded-full ${
              diagState === "OPTIMAL" ? "bg-emerald-500 animate-ping" : 
              diagState === "DIAGNOSING" ? "bg-amber-500 animate-pulse" : "bg-cyan-500 animate-pulse"
            }`} />
            <span className={`w-2.5 h-2.5 rounded-full absolute ${
              diagState === "OPTIMAL" ? "bg-emerald-500" : 
              diagState === "DIAGNOSING" ? "bg-amber-500" : "bg-cyan-500"
            }`} />
            <span className="font-mono text-xs text-white tracking-widest font-semibold uppercase">
              {diagState === "OPTIMAL" ? "LINK OPTIMAL" : 
               diagState === "DIAGNOSING" ? `TESTING: ${Math.round(progress)}%` : "MONITOR ACTIVE"}
            </span>
          </div>
          
          <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-xl text-right">
            <div className="text-[8px] text-gray-400 font-mono tracking-wider">THROUGHPUT</div>
            <div className="font-mono text-xs text-[#06b6d4] font-semibold">10 Gbps LINK</div>
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
                <span className="text-[#06b6d4]">&gt;</span>
                <span className={msg.includes("SUCCESS") || msg.includes("OPTIMAL") ? "text-emerald-400 font-bold" : ""}>
                  {msg}
                </span>
              </div>
            ))}
          </div>

          {/* User interactive scan button */}
          <div className="pointer-events-auto">
            {diagState === "STANDBY" ? (
              <button
                onClick={triggerDiagnostic}
                className="w-full bg-[#06b6d4] hover:bg-[#06b6d4]/80 text-black font-extrabold text-xs py-3.5 px-4 rounded-xl text-center block transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(6,182,212,0.25)] tracking-wider"
              >
                INITIATE NETWORK DIAGNOSTIC PING
              </button>
            ) : diagState === "DIAGNOSING" ? (
              <button
                disabled
                className="w-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-semibold text-xs py-3.5 px-4 rounded-xl text-center block tracking-wider"
              >
                PING COUPLINGS... LATENCY CALC... {Math.round(progress)}%
              </button>
            ) : (
              <button
                disabled
                className="w-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-extrabold text-xs py-3.5 px-4 rounded-xl text-center block shadow-[0_0_20px_rgba(34,197,94,0.2)] animate-pulse tracking-wider"
              >
                DIAGNOSTICS RESOLVED • SECURE LINK STABLE ✓
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
