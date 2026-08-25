import { Fingerprint } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const biometricProducts = [
  {
    name: "Fingerprint & RFID Time Attendance",
    model: "ET-FP100",
    image: "/biometric-fingerprint.jpg",
    description: "High-speed fingerprint sensor with built-in RFID card reader. Offers accurate attendance logs and easy USB reports export.",
    isNew: true
  },
  {
    name: "Facial Recognition Access Terminal",
    model: "ET-FACE500",
    image: "/biometric-face.jpg",
    description: "Premium facial recognition and palm verification access terminal with built-in thermal sensor and live detection security.",
    isNew: true
  }
];

export default function Page() {
  return (
    <ServicePageTemplate
      title="Biometric Devices"
      description="Best best cctv installation in payyoli, We provide high-quality biometric devices for secure access control and Attendance management."
      longDescription="Our systems support fingerprint, face Recognition, and RFID card options, ensuring accurate and fast Identification for offices, schools, and institutions. From installation to setup and support, we help you manage entry points Safely and efficiently."
      Icon={Fingerprint}
      bgImage="/biometric.jpg"
      products={biometricProducts}
    />
  );
}
