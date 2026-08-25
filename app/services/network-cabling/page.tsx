import { Network } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const cablingProducts = [
  {
    name: "24-Port Cat6 Patch Panel",
    model: "ET-PATCH24",
    image: "/cabling-patch.jpg",
    description: "Standard rack-mounted 24-port Cat6 patch panel designed for gigabit ethernet structured cabling networks.",
    isNew: true
  },
  {
    name: "Cat6 Outdoor Ethernet Spool",
    model: "ET-CAT6",
    image: "/cabling-spool.jpg",
    description: "Premium 500FT roll of Cat6 shielded, pure copper, UV-resistant outdoor network cable for reliable connectivity.",
    isNew: false
  }
];

export default function Page() {
  return (
    <ServicePageTemplate
      title="Network Cabling"
      description="Best best cctv installation in payyoli, We provide professional structured network cabling solutions for offices, Buildings, and homes."
      longDescription="Our team designs and installs secure data networks Using CAT6, and fiber optic cables to ensure fast and stable internet and Device connections. From planning to installation and testing, we deliver clean, efficient, and Long-lasting networking setups."
      Icon={Network}
      bgImage="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      products={cablingProducts}
    />
  );
}
