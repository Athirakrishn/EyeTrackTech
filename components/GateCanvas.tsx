"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function GateCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [gateState, setGateState] = useState<"CLOSED" | "OPENING" | "OPEN" | "CLOSING">("CLOSED");
  const [progress, setProgress] = useState(0);
  const [telemetryText, setTelemetryText] = useState("SYSTEM SECURE / GATE LOCKED");

  const stateRef = useRef({ gateState, progress });
  useEffect(() => {
    stateRef.current = { gateState, progress };
  }, [gateState, progress]);

  // Trigger Gate Operation Cycle
  const triggerGate = () => {
    const { gateState: current } = stateRef.current;
    if (current === "CLOSED") {
      setGateState("OPENING");
      setProgress(0);
      setTelemetryText("DISENGAGING LOCKS... OPENING GATE");
    } else if (current === "OPEN") {
      setGateState("CLOSING");
      setProgress(0);
      setTelemetryText("WARNING: GATE CLOSING...");
    }
  };

  // Manage Gate Transition Timings
  useEffect(() => {
    const { gateState: current } = stateRef.current;
    if (current !== "OPENING" && current !== "CLOSING") return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1.25;
        if (next >= 100) {
          clearInterval(interval);
          if (gateState === "OPENING") {
            setGateState("OPEN");
            setTelemetryText("GATE OPEN / DRIVEWAY CLEAR");
          } else {
            setGateState("CLOSED");
            setTelemetryText("SYSTEM SECURE / GATE LOCKED");
          }
          return 100;
        }
        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [gateState]);

  // Auto close gate after 6 seconds of being open
  useEffect(() => {
    if (gateState !== "OPEN") return;
    const timeout = setTimeout(() => {
      setGateState("CLOSING");
      setProgress(0);
      setTelemetryText("WARNING: GATE AUTO-CLOSING...");
    }, 6000);
    return () => clearTimeout(timeout);
  }, [gateState]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.015);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(3.4, 2.5, 8.5); // Elevated 3/4 perspective looking at driveway
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xff7e15, 1.2); // orange accent
    keyLight.position.set(5, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x8a3ffc, 1.4); // purple/blue accent
    fillLight.position.set(-6, 4, 3);
    scene.add(fillLight);

    // 3. Ground / Driveway Floor
    const roadGeom = new THREE.BoxGeometry(7.0, 0.15, 9.0);
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b, // dark slate road
      roughness: 0.8,
    });
    const road = new THREE.Mesh(roadGeom, roadMat);
    road.position.y = -1.2;
    scene.add(road);

    // Driveway road lines (yellow center divider)
    const lineGeom = new THREE.BoxGeometry(0.12, 0.02, 9.0);
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xeab308 });
    const roadLine = new THREE.Mesh(lineGeom, lineMat);
    roadLine.position.set(0, 0.08, 0);
    road.add(roadLine);

    // 4. Pillars & Walls
    const pillarGeom = new THREE.BoxGeometry(0.6, 2.6, 0.6);
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0x475569, // Slate gray concrete
      roughness: 0.5,
    });

    // Left Hinge Pillar
    const leftPillar = new THREE.Mesh(pillarGeom, pillarMat);
    leftPillar.position.set(-2.4, 0.1, 0);
    scene.add(leftPillar);

    // Right Hinge Pillar
    const rightPillar = new THREE.Mesh(pillarGeom, pillarMat);
    rightPillar.position.set(2.4, 0.1, 0);
    scene.add(rightPillar);

    // Left wall panel extending outward
    const wallGeom = new THREE.BoxGeometry(2.2, 1.9, 0.18);
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.6,
    });
    const leftWall = new THREE.Mesh(wallGeom, wallMat);
    leftWall.position.set(-3.8, -0.25, 0);
    scene.add(leftWall);

    // Right wall panel extending outward
    const rightWall = new THREE.Mesh(wallGeom, wallMat);
    rightWall.position.set(3.8, -0.25, 0);
    scene.add(rightWall);

    // 5. Automatic Double Swing Gate Leaves
    const leftGateGroup = new THREE.Group();
    // Anchor pivot exactly on left pillar edge
    leftGateGroup.position.set(-2.1, -0.2, 0); 
    scene.add(leftGateGroup);

    const rightGateGroup = new THREE.Group();
    // Anchor pivot exactly on right pillar edge
    rightGateGroup.position.set(2.1, -0.2, 0); 
    scene.add(rightGateGroup);

    // Helper function to build modern slatted gate leaf
    const buildGateLeaf = (isLeft: boolean) => {
      const leafGroup = new THREE.Group();
      
      const frameMat = new THREE.MeshStandardMaterial({
        color: 0x0f172a, // matte black steel frame
        metalness: 0.9,
        roughness: 0.15,
      });

      // Outer Gate Frame Outline
      const frameW = 2.0;
      const frameH = 1.4;
      const frameD = 0.08;

      const topBar = new THREE.Mesh(new THREE.BoxGeometry(frameW, 0.08, frameD), frameMat);
      topBar.position.y = frameH / 2;
      leafGroup.add(topBar);

      const bottomBar = new THREE.Mesh(new THREE.BoxGeometry(frameW, 0.08, frameD), frameMat);
      bottomBar.position.y = -frameH / 2;
      leafGroup.add(bottomBar);

      const hingeBar = new THREE.Mesh(new THREE.BoxGeometry(0.08, frameH, frameD), frameMat);
      hingeBar.position.x = isLeft ? -frameW / 2 : frameW / 2;
      leafGroup.add(hingeBar);

      const endBar = new THREE.Mesh(new THREE.BoxGeometry(0.08, frameH, frameD), frameMat);
      endBar.position.x = isLeft ? frameW / 2 : -frameW / 2;
      leafGroup.add(endBar);

      // Inner slats (Modern horizontal wooden-slat styling)
      const slatMat = new THREE.MeshStandardMaterial({
        color: 0xff7e15, // warm orange accent slats
        roughness: 0.35,
        metalness: 0.7,
      });

      const slatCount = 6;
      for (let i = 0; i < slatCount; i++) {
        const slat = new THREE.Mesh(new THREE.BoxGeometry(frameW - 0.12, 0.1, 0.04), slatMat);
        slat.position.y = -0.5 + i * 0.2;
        leafGroup.add(slat);
      }

      // Offset gate leaf position relative to group pivot
      // If left gate, pivot is at left edge (-1.0), so offset gate center to right (+1.0)
      leafGroup.position.x = isLeft ? 1.0 : -1.0;
      return leafGroup;
    };

    const leftGateLeaf = buildGateLeaf(true);
    leftGateGroup.add(leftGateLeaf);

    const rightGateLeaf = buildGateLeaf(false);
    rightGateGroup.add(rightGateLeaf);


    // --- Articulated Actuator Piston Motor Drive Arms ---
    // Actuators mount on pillars (fixed points) and push/pull gate brackets (moving points)
    // Left actuator cylinder
    const actuatorBodyGeom = new THREE.CylinderGeometry(0.06, 0.06, 1.1, 16);
    const actuatorMat = new THREE.MeshStandardMaterial({
      color: 0x334155, // dark metal drive
      metalness: 0.9,
      roughness: 0.2,
    });
    
    // Left arm group mounted on Left Pillar
    const leftArmGroup = new THREE.Group();
    // Mount behind the hinge on pillar face
    leftArmGroup.position.set(-2.4, -0.5, 0.25);
    scene.add(leftArmGroup);

    const leftArmBody = new THREE.Mesh(actuatorBodyGeom, actuatorMat);
    leftArmBody.rotation.x = Math.PI / 2; // Lie horizontal pointing forward
    leftArmGroup.add(leftArmBody);

    // Sliding inner piston shaft (chrome steel)
    const pistonGeom = new THREE.CylinderGeometry(0.035, 0.035, 0.9, 16);
    const pistonMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0, // bright chrome
      metalness: 0.95,
      roughness: 0.05,
    });
    const leftPiston = new THREE.Mesh(pistonGeom, pistonMat);
    leftPiston.rotation.x = Math.PI / 2;
    leftArmGroup.add(leftPiston);

    // Right arm group mounted on Right Pillar
    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(2.4, -0.5, 0.25);
    scene.add(rightArmGroup);

    const rightArmBody = new THREE.Mesh(actuatorBodyGeom, actuatorMat);
    rightArmBody.rotation.x = Math.PI / 2;
    rightArmGroup.add(rightArmBody);

    const rightPiston = new THREE.Mesh(pistonGeom, pistonMat);
    rightPiston.rotation.x = Math.PI / 2;
    rightArmGroup.add(rightPiston);


    // --- Warning Strobe Alarm Beacon (Pillar-top flasher) ---
    const strobeBaseGeom = new THREE.CylinderGeometry(0.12, 0.12, 0.08, 16);
    const strobeBase = new THREE.Mesh(strobeBaseGeom, actuatorMat);
    strobeBase.position.set(2.4, 1.45, 0);
    scene.add(strobeBase);

    const strobeCoverGeom = new THREE.CylinderGeometry(0.08, 0.08, 0.15, 16);
    const strobeCoverMat = new THREE.MeshStandardMaterial({
      color: 0xeab308, // Translucent orange strobe cover
      transparent: true,
      opacity: 0.7,
      roughness: 0.1,
    });
    const strobeCover = new THREE.Mesh(strobeCoverGeom, strobeCoverMat);
    strobeCover.position.set(2.4, 1.55, 0);
    scene.add(strobeCover);

    const strobeLight = new THREE.PointLight(0xeab308, 0, 4);
    strobeLight.position.set(2.4, 1.7, 0.2);
    scene.add(strobeLight);


    // --- Path Clearance Lights (Pillars front LEDs) ---
    const pathLedGeom = new THREE.SphereGeometry(0.06, 16, 16);
    const pathLedMat = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      emissive: 0xff0000,
      emissiveIntensity: 1.0,
    });
    
    const leftLed = new THREE.Mesh(pathLedGeom, pathLedMat);
    leftLed.position.set(-2.4, 0.6, 0.32);
    scene.add(leftLed);

    const rightLed = new THREE.Mesh(pathLedGeom, pathLedMat);
    rightLed.position.set(2.4, 0.6, 0.32);
    scene.add(rightLed);


    // 6. Animation Loop (Solver for mechanical actuator pistons)
    let animationFrameId: number;
    const clock = new THREE.Clock();

    // Pivot positions vectors
    const leftPillarJoint = new THREE.Vector3(-2.4, -0.5, 0.25);
    const rightPillarJoint = new THREE.Vector3(2.4, -0.5, 0.25);
    
    // Actuator brackets relative coordinates on closed gate leaves
    // Left closed bracket relative to pivot is x = 0.55, y = -0.3, z = 0.08
    const leftBracketRel = new THREE.Vector3(0.55, -0.3, 0.08);
    const rightBracketRel = new THREE.Vector3(-0.55, -0.3, 0.08);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Read current state ref
      const { gateState: currentGateState, progress: currentProgress } = stateRef.current;

      // Slowly oscillate camera angle for dynamic look
      camera.position.x = 3.4 + Math.sin(time * 0.2) * 0.4;

      let targetAngle = 0; // closed (horizontal)

      if (currentGateState === "CLOSED") {
        targetAngle = 0;
        
        // Red indicator path LEDs
        pathLedMat.color.setHex(0xff0000);
        pathLedMat.emissive.setHex(0xff0000);
        pathLedMat.emissiveIntensity = 1.0;
        
        // Strobe off
        strobeLight.intensity = 0;
        strobeCoverMat.emissive.setHex(0x000000);

      } else if (currentGateState === "OPENING" || currentGateState === "CLOSING") {
        const radFactor = Math.PI / 2.15; // Swing up to ~84 degrees
        if (currentGateState === "OPENING") {
          targetAngle = (currentProgress / 100) * radFactor;
        } else {
          targetAngle = (1.0 - currentProgress / 100) * radFactor;
        }

        // Path LEDs flashing yellow warning
        const pathFlash = Math.floor(time * 5) % 2 === 0;
        if (pathFlash) {
          pathLedMat.color.setHex(0xeab308);
          pathLedMat.emissive.setHex(0xeab308);
          pathLedMat.emissiveIntensity = 1.5;
        } else {
          pathLedMat.emissiveIntensity = 0.1;
        }

        // Amber flashing strobe beacon
        const strobeFlash = Math.floor(time * 8) % 2 === 0;
        if (strobeFlash) {
          strobeLight.intensity = 2.0;
          strobeCoverMat.emissive.setHex(0xeab308);
          strobeCoverMat.emissiveIntensity = 2.0;
        } else {
          strobeLight.intensity = 0.1;
          strobeCoverMat.emissiveIntensity = 0.1;
        }

      } else if (currentGateState === "OPEN") {
        targetAngle = Math.PI / 2.15; // Fully open

        // Green clear path LEDs
        pathLedMat.color.setHex(0x22c55e);
        pathLedMat.emissive.setHex(0x22c55e);
        pathLedMat.emissiveIntensity = 1.5;

        // Strobe off
        strobeLight.intensity = 0;
        strobeCoverMat.emissiveIntensity = 0;
      }

      // Smooth swing swivels
      leftGateGroup.rotation.y += (targetAngle - leftGateGroup.rotation.y) * 0.05;
      rightGateGroup.rotation.y += (-targetAngle - rightGateGroup.rotation.y) * 0.05;


      // --- Mechanical Actuator IK Solver ---
      // Update Left actuator arm lookAt and piston scale
      const leftGateWorldMatrix = leftGateLeaf.matrixWorld;
      const leftBracketWorld = leftBracketRel.clone().applyMatrix4(leftGateWorldMatrix);

      // Distance from Left Pillar joint to Left Gate bracket
      const leftDist = leftPillarJoint.distanceTo(leftBracketWorld);
      leftArmGroup.lookAt(leftBracketWorld);
      // Piston slides out as distance increases
      // Cylinder default length 1.1, piston default 0.9. Offset position Z to look like it extends
      leftPiston.position.z = 0.55 + (leftDist - 1.15) * 0.5;

      // Update Right actuator arm lookAt and piston scale
      const rightGateWorldMatrix = rightGateLeaf.matrixWorld;
      const rightBracketWorld = rightBracketRel.clone().applyMatrix4(rightGateWorldMatrix);

      const rightDist = rightPillarJoint.distanceTo(rightBracketWorld);
      rightArmGroup.lookAt(rightBracketWorld);
      rightPiston.position.z = 0.55 + (rightDist - 1.15) * 0.5;

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

      roadGeom.dispose();
      roadMat.dispose();
      lineGeom.dispose();
      lineMat.dispose();
      pillarGeom.dispose();
      pillarMat.dispose();
      wallGeom.dispose();
      wallMat.dispose();
      actuatorBodyGeom.dispose();
      actuatorMat.dispose();
      pistonGeom.dispose();
      pistonMat.dispose();
      strobeBaseGeom.dispose();
      strobeCoverGeom.dispose();
      strobeCoverMat.dispose();
      pathLedGeom.dispose();
      pathLedMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] md:min-h-[440px] bg-slate-950 rounded-[2.5rem] border border-slate-800 overflow-hidden shadow-2xl flex flex-col group">
      
      {/* 3D Canvas Layer */}
      <div ref={containerRef} className="absolute inset-0 z-0 w-full h-full" />

      {/* Cybernetic HUD Interface Overlay */}
      <div className="absolute inset-0 z-10 p-6 pointer-events-none flex flex-col justify-between select-none">
        
        {/* Top HUD Row */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
            <span className={`w-2.5 h-2.5 rounded-full ${
              gateState === "OPEN" ? "bg-emerald-500 animate-ping" : 
              gateState === "OPENING" || gateState === "CLOSING" ? "bg-amber-500 animate-pulse" : "bg-red-500 animate-pulse"
            }`} />
            <span className={`w-2.5 h-2.5 rounded-full absolute ${
              gateState === "OPEN" ? "bg-emerald-500" : 
              gateState === "OPENING" || gateState === "CLOSING" ? "bg-amber-500" : "bg-red-500"
            }`} />
            <span className="font-mono text-xs text-white tracking-widest font-semibold uppercase">{telemetryText}</span>
          </div>
          
          <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-xl text-right">
            <div className="text-[8px] text-gray-400 font-mono tracking-wider">LOOP SENSOR</div>
            <div className="font-mono text-xs text-[#ff7e15] font-semibold">
              {gateState === "CLOSED" ? "SECURED" : gateState === "OPEN" ? "CLEAR" : "TRANSIT"}
            </div>
          </div>
        </div>

        {/* Center telemetry radar crosshair */}
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/5 flex items-center justify-center pointer-events-none rounded-full">
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20" />
        </div>

        {/* Bottom Section: Operation trigger button */}
        <div className="flex flex-col gap-3.5 mt-auto">
          
          {/* User interactive scan button */}
          <div className="pointer-events-auto">
            {gateState === "CLOSED" ? (
              <button
                onClick={triggerGate}
                className="w-full bg-[#ff7e15] hover:bg-[#ff7e15]/80 text-white font-extrabold text-xs py-3.5 px-4 rounded-xl text-center block transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,126,21,0.25)] tracking-wider"
              >
                TRIGGER AUTOMATION GATE (OPEN)
              </button>
            ) : gateState === "OPEN" ? (
              <button
                onClick={triggerGate}
                className="w-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 font-extrabold text-xs py-3.5 px-4 rounded-xl text-center block transition-all duration-300 tracking-wider cursor-pointer"
              >
                GATE OPEN • CLICK TO CLOSE IMMEDIATELY
              </button>
            ) : gateState === "OPENING" ? (
              <button
                disabled
                className="w-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-semibold text-xs py-3.5 px-4 rounded-xl text-center block tracking-wider animate-pulse"
              >
                GATE DISENGAGING: OPENING IN PROGRESS... {Math.round(progress)}%
              </button>
            ) : (
              <button
                disabled
                className="w-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-semibold text-xs py-3.5 px-4 rounded-xl text-center block tracking-wider animate-pulse"
              >
                GATE ENGAGING: CLOSING IN PROGRESS... {Math.round(progress)}%
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
