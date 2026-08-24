import { Lock } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function Page() {
  return (
    <ServicePageTemplate
      title="Smart Locks"
      description="Best smart lock installation in calicut, Upgrade your security with advanced smart locks that combine Convenience and protection."
      longDescription="Our smart lock systems support fingerprint, PIN, RFID card, and mobile app control, giving you full access management Without traditional keys. Perfect for homes, offices, and apartments — stay secure and in control From anywhere."
      Icon={Lock}
    />
  );
}
