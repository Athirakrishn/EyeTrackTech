import { Video } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function Page() {
  return (
    <ServicePageTemplate
      title="CCTV Installation"
      description="Best best cctv installation in payyoli, We provide expert CCTV installation services designed to keep your Property safe and secure."
      longDescription="Our technicians ensure perfect camera Placement, quality cabling, and seamless system setup for maximum Coverage and clear monitoring. Get real-time access through your mobile app and enjoy 24/7 protection With our reliable HD and IP camera systems."
      Icon={Video}
    />
  );
}
