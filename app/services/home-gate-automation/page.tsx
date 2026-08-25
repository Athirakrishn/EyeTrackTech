import { Home } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const automationProducts = [
  {
    name: "Automatic Gate Opener System",
    model: "ET-GATE300",
    image: "/automation-gate.jpg",
    description: "Heavy-duty automatic sliding gate opener system with remote control, obstacle detection, and manual release key features.",
    isNew: true
  },
  {
    name: "Smart Home Touch Panel Hub",
    model: "ET-HUB50",
    image: "/automation-hub.jpg",
    description: "Sleek wall-mounted touch screen console that centralizes security, lighting, CCTV streams, and climate control.",
    isNew: true
  }
];

export default function Page() {
  return (
    <ServicePageTemplate
      title="Home/Gate Automation"
      description="Best home automation in payyoli, Transform your home or business with intelligent automation systems."
      longDescription="Our Gate automation and smart home solutions allow you to control doors, Lights, and gates remotely with just a tap on your phone. We use reliable, high-performance motors and controllers to ensure Smooth operation, durability, and enhanced safety."
      Icon={Home}
      bgImage="/door-lock.jpg"
      products={automationProducts}
    />
  );
}
