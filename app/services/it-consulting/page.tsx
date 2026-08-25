import { Monitor } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const consultingProducts = [
  {
    name: "12U Network Server Cabinet",
    model: "ET-RACK12U",
    image: "/consulting-rack.jpg",
    description: "Premium wall-mounted 12U server cabinet with lockable glass front door, cooling fans, and structured cable access.",
    isNew: true
  },
  {
    name: "Gigabit Enterprise Firewall Router",
    model: "ET-FW100",
    image: "/consulting-firewall.jpg",
    description: "High-performance enterprise hardware firewall router featuring gigabit WAN/LAN ports, VPN tunnel supports, and threat security.",
    isNew: false
  }
];

export default function Page() {
  return (
    <ServicePageTemplate
      title="IT Consulting"
      description="Our IT consulting services help you make the right technology decisions for your business."
      longDescription="We analyze your current systems, identify areas for Improvement, and design customized solutions that boost efficiency, Security, and scalability. Whether you need network setup, data management, or digital Transformation support — our experts ensure smooth, reliable, and future-Ready IT operations."
      Icon={Monitor}
      bgImage="/laptop.jpg"
      products={consultingProducts}
    />
  );
}
