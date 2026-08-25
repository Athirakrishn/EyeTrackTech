import { Lock } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const smartLockProducts = [
  {
    name: "Premium Smart Handle Lock",
    model: "ET-L900",
    image: "/smart-lock-handle.jpg",
    description: "Elegant digital door lock featuring fingerprint scanning, numeric keypad, mechanical key bypass, and smartphone app controls.",
    isNew: true
  },
  {
    name: "Glass Door Smart Rim Lock",
    model: "ET-G200",
    image: "/smart-lock-glass.jpg",
    description: "Frameless glass door smart rim lock with sleek touch keypad, card access, and remote dynamic passcode generation.",
    isNew: false
  }
];

export default function Page() {
  return (
    <ServicePageTemplate
      title="Smart Locks"
      description="Best smart lock installation in calicut, Upgrade your security with advanced smart locks that combine Convenience and protection."
      longDescription="Our smart lock systems support fingerprint, PIN, RFID card, and mobile app control, giving you full access management Without traditional keys. Perfect for homes, offices, and apartments — stay secure and in control From anywhere."
      Icon={Lock}
      bgImage="/rounded-door-lock.png"
      products={smartLockProducts}
    />
  );
}
