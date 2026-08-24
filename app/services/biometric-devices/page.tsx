import { Fingerprint } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function Page() {
  return (
    <ServicePageTemplate
      title="Biometric Devices"
      description="Best best cctv installation in payyoli, We provide high-quality biometric devices for secure access control and Attendance management."
      longDescription="Our systems support fingerprint, face Recognition, and RFID card options, ensuring accurate and fast Identification for offices, schools, and institutions. From installation to setup and support, we help you manage entry points Safely and efficiently."
      Icon={Fingerprint}
      bgImage="/biometric.jpg"
    />
  );
}
