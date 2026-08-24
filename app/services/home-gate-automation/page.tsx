import { Home } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function Page() {
  return (
    <ServicePageTemplate
      title="Home/Gate Automation"
      description="Best home automation in payyoli, Transform your home or business with intelligent automation systems."
      longDescription="Our Gate automation and smart home solutions allow you to control doors, Lights, and gates remotely with just a tap on your phone. We use reliable, high-performance motors and controllers to ensure Smooth operation, durability, and enhanced safety."
      Icon={Home}
    />
  );
}
