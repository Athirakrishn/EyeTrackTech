import { Monitor } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function Page() {
  return (
    <ServicePageTemplate
      title="IT Consulting"
      description="Our IT consulting services help you make the right technology decisions for your business."
      longDescription="We analyze your current systems, identify areas for Improvement, and design customized solutions that boost efficiency, Security, and scalability. Whether you need network setup, data management, or digital Transformation support — our experts ensure smooth, reliable, and future-Ready IT operations."
      Icon={Monitor}
      bgImage="/laptop.jpg"
    />
  );
}
