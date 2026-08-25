"use client";

import React from 'react';

export default function WhatsAppButton() {
  // WhatsApp Link with pre-filled message
  const whatsappUrl = "https://wa.me/917994357565?text=Hello!%20I'm%20interested%20in%20your%20security%20and%20automation%20services.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Outer Ripple Pulsing Animation */}
      <span className="absolute w-16 h-16 rounded-full bg-[#8a3ffc]/40 animate-ping pointer-events-none" />
      
      {/* Floating Button */}
      <div className="relative w-14 h-14 bg-[#8a3ffc] hover:bg-[#7427eb] text-white rounded-full shadow-[0_8px_30px_rgba(138,63,252,0.4)] flex items-center justify-center transition-all duration-300 group-hover:scale-110 active:scale-95">
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.006 14.054.982 11.432.98 6.012.98 1.587 5.35 1.583 10.78c-.001 1.745.462 3.447 1.343 4.95l-.996 3.638 3.722-.976zm11.514-6.818c-.29-.145-1.713-.846-1.977-.942-.264-.096-.456-.145-.648.145-.192.29-.744.942-.912 1.134-.168.192-.336.216-.626.071-.29-.145-1.226-.451-2.335-1.44-1.011-.902-1.606-2.015-1.803-2.352-.197-.337-.02-.519.148-.686.151-.151.336-.393.505-.59.168-.196.224-.337.336-.563.112-.225.056-.421-.028-.566-.084-.145-.648-1.56-.888-2.138-.233-.562-.47-.486-.648-.495-.168-.008-.36-.008-.552-.008s-.504.072-.768.361c-.264.29-1.008.987-1.008 2.406 0 1.419 1.032 2.791 1.176 2.984.144.192 2.03 3.1 4.916 4.344.686.296 1.224.474 1.643.607.69.219 1.319.19 1.815.115.553-.083 1.714-.699 1.953-1.374.24-.675.24-1.253.168-1.374-.072-.121-.264-.193-.553-.338z" />
        </svg>
      </div>
    </a>
  );
}
