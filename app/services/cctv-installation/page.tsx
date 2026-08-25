import { Video } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const cctvProducts = [
  {
    name: "4MP Dual Light Dome Camera",
    model: "CP-UNC-DA41L3C-D-LQ2",
    image: "/cctv-dome.jpg",
    description: "4MP Network Dome Camera with 30-meter dual-light night vision range and high-quality lens for clear indoor monitoring.",
    isNew: true
  },
  {
    name: "4MP Network IR Bullet Camera",
    model: "CP-UNC-TA41L3C-D-Q2",
    image: "/cctv-bullet.jpg",
    description: "4MP outdoor network bullet camera equipped with smart IR night vision up to 30 meters and IP67 weather resistance.",
    isNew: false
  },
  {
    name: "16-Channel Video Recorder (NVR)",
    model: "CP-UVR-1604K4",
    image: "/cctv-nvr.jpg",
    description: "16-Channel 5M-N high definition digital video recorder supporting smart search and high-capacity storage drives.",
    isNew: false
  }
];

export default function Page() {
  return (
    <ServicePageTemplate
      title="CCTV Installation"
      description="Best best cctv installation in payyoli, We provide expert CCTV installation services designed to keep your Property safe and secure."
      longDescription="Our technicians ensure perfect camera Placement, quality cabling, and seamless system setup for maximum Coverage and clear monitoring. Get real-time access through your mobile app and enjoy 24/7 protection With our reliable HD and IP camera systems."
      Icon={Video}
      bgImage="/cctv-office.jpg"
      products={cctvProducts}
    />
  );
}
