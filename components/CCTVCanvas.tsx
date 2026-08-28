"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function CCTVCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("SCANNING");
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [yawPitch, setYawPitch] = useState({ yaw: 0, pitch: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0f1d, 0.015);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.5, 7.5);
    camera.lookAt(0, 0, 0);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Spotlight pointing at the camera for premium metallic highlighting
    const dirLight1 = new THREE.DirectionalLight(0xff7e15, 1.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x8a3ffc, 1.2);
    dirLight2.position.set(-5, 3, 5);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xffffff, 0.8, 10);
    pointLight.position.set(0, 2, 2);
    scene.add(pointLight);

    // 5. Build CCTV Camera Group
    const cctvGroup = new THREE.Group();
    scene.add(cctvGroup);

    // Camera Stand/Base (mounted at the back)
    const baseGeom = new THREE.CylinderGeometry(0.6, 0.6, 0.15, 32);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.8,
      roughness: 0.2,
    });
    const base = new THREE.Mesh(baseGeom, baseMat);
    base.rotation.x = Math.PI / 2;
    base.position.set(0, 0, -2);
    cctvGroup.add(base);

    // Mounting Arm (curved bracket)
    const armGroup = new THREE.Group();
    armGroup.position.set(0, 0, -2);
    cctvGroup.add(armGroup);

    const armSeg1Geom = new THREE.CylinderGeometry(0.18, 0.18, 1.2, 16);
    const armSeg1 = new THREE.Mesh(armSeg1Geom, baseMat);
    armSeg1.rotation.x = Math.PI / 2;
    armSeg1.position.set(0, 0, 0.6);
    armGroup.add(armSeg1);

    const armSeg2Geom = new THREE.CylinderGeometry(0.15, 0.15, 0.8, 16);
    const armSeg2 = new THREE.Mesh(armSeg2Geom, baseMat);
    armSeg2.position.set(0, 0.4, 1.1);
    armSeg2.rotation.x = Math.PI / 6;
    armGroup.add(armSeg2);

    // Rotational Joint (Connecting Arm to Camera Body)
    const jointGeom = new THREE.SphereGeometry(0.22, 32, 32);
    const jointMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      metalness: 0.9,
      roughness: 0.1,
    });
    const joint = new THREE.Mesh(jointGeom, jointMat);
    joint.position.set(0, 0.7, 1.25);
    cctvGroup.add(joint);

    // Camera Head (Rotates on Y & X axis)
    const cameraHead = new THREE.Group();
    cameraHead.position.set(0, 0.7, 1.25); // Rotate relative to joint center
    cctvGroup.add(cameraHead);

    // Camera Main Body (Cylinder)
    const bodyGeom = new THREE.CylinderGeometry(0.5, 0.4, 2.0, 32);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc, // Off-white/slate body
      metalness: 0.6,
      roughness: 0.2,
    });
    const body = new THREE.Mesh(bodyGeom, bodyMat);
    body.rotation.x = Math.PI / 2; // point forward along Z-axis
    body.position.set(0, 0, 0.6);
    cameraHead.add(body);

    // Sun Shield (outer cover)
    const shieldGeom = new THREE.CylinderGeometry(0.56, 0.46, 2.1, 32, 1, true, 0, Math.PI);
    const shieldMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a, // dark slate shield
      metalness: 0.7,
      roughness: 0.3,
      side: THREE.DoubleSide,
    });
    const shield = new THREE.Mesh(shieldGeom, shieldMat);
    shield.rotation.x = Math.PI / 2;
    shield.rotation.y = Math.PI; // Cover the top half
    shield.position.set(0, 0.1, 0.65);
    cameraHead.add(shield);

    // Front Lens Bezel (Metallic ring)
    const bezelGeom = new THREE.CylinderGeometry(0.48, 0.48, 0.2, 32);
    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.9,
      roughness: 0.1,
    });
    const bezel = new THREE.Mesh(bezelGeom, bezelMat);
    bezel.rotation.x = Math.PI / 2;
    bezel.position.set(0, 0, 1.6);
    cameraHead.add(bezel);

    // Lens Glass (Black/Blue reflecting sphere)
    const lensGeom = new THREE.SphereGeometry(0.32, 32, 32);
    const lensMat = new THREE.MeshStandardMaterial({
      color: 0x020617,
      roughness: 0.05,
      metalness: 1.0,
    });
    const lens = new THREE.Mesh(lensGeom, lensMat);
    lens.position.set(0, 0, 1.6);
    lens.scale.set(1, 1, 0.5); // flatten a bit
    cameraHead.add(lens);

    // Red Recording LED
    const ledGeom = new THREE.SphereGeometry(0.06, 16, 16);
    const ledMat = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      emissive: 0xff0000,
      emissiveIntensity: 1.5,
    });
    const led = new THREE.Mesh(ledGeom, ledMat);
    led.position.set(0, 0.38, 1.55); // Top front face
    cameraHead.add(led);

    // Point Light from LED to cast subtle red glow
    const ledLight = new THREE.PointLight(0xff0000, 1.2, 3);
    ledLight.position.copy(led.position);
    cameraHead.add(ledLight);

    // Smart Scanning Cone (Light cone from lens)
    const coneGeom = new THREE.ConeGeometry(2.4, 7.0, 32, 1, true); // Open base
    const coneMat = new THREE.MeshBasicMaterial({
      color: 0xf2392c, // Orange-red brand color scan cone
      transparent: true,
      opacity: 0.12,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    const scanCone = new THREE.Mesh(coneGeom, coneMat);
    scanCone.rotation.x = -Math.PI / 2; // point forward
    scanCone.position.set(0, 0, 5.0); // project forward from lens
    cameraHead.add(scanCone);

    // Scanning Cone Wireframe Outline
    const wireframeGeom = new THREE.ConeGeometry(2.41, 7.0, 12, 1, true);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0xff7e15,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const scanConeWire = new THREE.Mesh(wireframeGeom, wireframeMat);
    scanConeWire.rotation.x = -Math.PI / 2;
    scanConeWire.position.set(0, 0, 5.0);
    cameraHead.add(scanConeWire);

    // 6. Floating Scanning Particles (Dust / Data nodes inside scanning field)
    const particleCount = 60;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      // Position particles in a narrow cone shape forward
      const theta = Math.random() * Math.PI * 2;
      const radius = Math.random() * 1.8;
      const z = Math.random() * 6.5 + 1.5; // forward distance
      
      const spreadX = Math.cos(theta) * radius * (z / 6.5);
      const spreadY = Math.sin(theta) * radius * (z / 6.5);

      particlePositions[i * 3] = spreadX;
      particlePositions[i * 3 + 1] = spreadY;
      particlePositions[i * 3 + 2] = z;

      particleSpeeds.push(Math.random() * 0.02 + 0.005);
    }

    particleGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xff7e15,
      size: 0.08,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    cameraHead.add(particles);

    // Grid Floor scanning overlay
    const gridHelper = new THREE.GridHelper(10, 20, 0x8a3ffc, 0x1e293b);
    gridHelper.position.set(0, -2.5, 3);
    gridHelper.rotation.x = Math.PI / 12; // tilt slightly for cool perspective
    scene.add(gridHelper);

    // 7. Interaction States
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;
    let lastActiveTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const rawX = e.clientX - rect.left;
      const rawY = e.clientY - rect.top;

      // Normalise between -1 and 1
      mouseX = (rawX / rect.width) * 2 - 1;
      mouseY = -(rawY / rect.height) * 2 + 1;
      isHovering = true;
      lastActiveTime = Date.now();

      // Update HUD state coordinates
      setCoords({
        x: Math.round(rawX),
        y: Math.round(rawY),
      });
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // 8. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Blinking Recording LED
      const isLedOn = Math.floor(time * 2.5) % 2 === 0;
      if (isLedOn) {
        ledMat.emissiveIntensity = 2.0;
        ledLight.intensity = 1.8;
      } else {
        ledMat.emissiveIntensity = 0.2;
        ledLight.intensity = 0.1;
      }

      // Rotate Scan Cone wireframe
      scanConeWire.rotation.y = time * 0.15;

      // Pulse Scan Cone opacity
      const opacityPulse = 0.10 + Math.sin(time * 3) * 0.03;
      coneMat.opacity = opacityPulse;

      // Animate Particles moving forward
      const positions = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        // Move along Z axis
        positions[i * 3 + 2] += particleSpeeds[i];
        
        // Wrap particles back if they go beyond cone length
        if (positions[i * 3 + 2] > 7.5) {
          positions[i * 3 + 2] = 1.5;
          const theta = Math.random() * Math.PI * 2;
          const radius = Math.random() * 0.5;
          positions[i * 3] = Math.cos(theta) * radius;
          positions[i * 3 + 1] = Math.sin(theta) * radius;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Smooth Camera Rotation (Y = Yaw, X = Pitch)
      let targetYaw = 0;
      let targetPitch = 0;

      if (isHovering && Date.now() - lastActiveTime < 2000) {
        setStatus("LOCK-ON TARGET");
        // Limit camera swivel angles to realistic range
        targetYaw = -mouseX * 0.9;   // Panning: ~50 deg each side
        targetPitch = mouseY * 0.45 - 0.2; // Pitching: slightly downward default
      } else {
        setStatus("SCANNING ACTIVE");
        // Idle camera scanning motion
        targetYaw = Math.sin(time * 0.5) * 0.6; // Pan back and forth
        targetPitch = Math.cos(time * 0.25) * 0.1 - 0.15; // Bob up and down slightly
      }

      // LERP (Linear Interpolation) for butter-smooth camera movement
      cameraHead.rotation.y += (targetYaw - cameraHead.rotation.y) * 0.04;
      cameraHead.rotation.x += (targetPitch - cameraHead.rotation.x) * 0.04;

      // Keep stats up to date
      setYawPitch({
        yaw: parseFloat(THREE.MathUtils.radToDeg(cameraHead.rotation.y).toFixed(1)),
        pitch: parseFloat(THREE.MathUtils.radToDeg(cameraHead.rotation.x).toFixed(1)),
      });

      // Ambient scan pulse on the base stand
      cctvGroup.position.y = Math.sin(time * 1.5) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Cleanups
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      
      // Dispose materials and geometries
      baseGeom.dispose();
      baseMat.dispose();
      armSeg1Geom.dispose();
      armSeg2Geom.dispose();
      jointGeom.dispose();
      jointMat.dispose();
      bodyGeom.dispose();
      bodyMat.dispose();
      shieldGeom.dispose();
      shieldMat.dispose();
      bezelGeom.dispose();
      bezelMat.dispose();
      lensGeom.dispose();
      lensMat.dispose();
      ledGeom.dispose();
      ledMat.dispose();
      coneGeom.dispose();
      coneMat.dispose();
      wireframeGeom.dispose();
      wireframeMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      gridHelper.dispose();
      renderer.dispose();
    };
  }, []);

  // Timecode HUD state
  const [timeStr, setTimeStr] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      const d = new Date();
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      const hours = String(d.getHours()).padStart(2, "0");
      const minutes = String(d.getMinutes()).padStart(2, "0");
      const seconds = String(d.getSeconds()).padStart(2, "0");
      const ms = String(d.getMilliseconds()).padStart(3, "0");
      setTimeStr(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${ms}`);
    }, 33); // Update at ~30 FPS for tech precision
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[350px] md:min-h-[450px] bg-slate-950 rounded-[2.5rem] border border-slate-800 overflow-hidden shadow-2xl flex flex-col group">
      {/* CCTV WebGL Canvas Element */}
      <div ref={containerRef} className="absolute inset-0 z-0 w-full h-full cursor-crosshair" />

      {/* Cyberpunk HUD Interface Layer */}
      <div className="absolute inset-0 z-10 p-6 pointer-events-none flex flex-col justify-between select-none">
        
        {/* Top HUD Row */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
            <span className={`w-2.5 h-2.5 rounded-full ${status.includes("LOCK-ON") ? "bg-red-500 animate-ping" : "bg-orange-500 animate-pulse"}`} />
            <span className={`w-2.5 h-2.5 rounded-full absolute ${status.includes("LOCK-ON") ? "bg-red-500" : "bg-orange-500"}`} />
            <span className="font-mono text-xs text-white tracking-widest font-semibold uppercase">{status}</span>
          </div>
          <div className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-right">
            <div className="text-[10px] text-gray-400 font-mono tracking-wider">TIMECODE SYSTEM</div>
            <div className="font-mono text-xs text-[#ff7e15] font-semibold">{timeStr || "LOADING..."}</div>
          </div>
        </div>

        {/* Center Target Box Grid (Decorations) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-dashed border-white/5 flex items-center justify-center pointer-events-none rounded-full">
          <div className="w-16 h-16 border border-white/15 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-[#ff7e15]/50 rounded-full" />
          </div>
          {/* Cyberpunk corner markers */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/30" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/30" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/30" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/30" />
        </div>

        {/* Bottom HUD Row */}
        <div className="flex justify-between items-end mt-auto">
          {/* Coordinates & Angles */}
          <div className="bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-xl font-mono text-[10px] text-gray-300 space-y-1">
            <div className="flex justify-between gap-6">
              <span>CAMERA ORIENTATION:</span>
              <span className="text-[#ff7e15] font-bold">YAW: {yawPitch.yaw}° | PITCH: {yawPitch.pitch}°</span>
            </div>
          </div>

          {/* Camera Info label */}
          <div className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-right font-mono text-[10px] text-gray-300">
            <div>STATUS: <span className="text-emerald-400 font-bold">CONNECTED</span></div>
          </div>
        </div>
      </div>

      {/* Futuristic Scanline Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-b from-transparent via-[#ff7e15]/2 to-transparent bg-[size:100%_4px] opacity-30 animate-pulse" />
    </div>
  );
}
