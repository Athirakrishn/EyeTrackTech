export interface LocationInfo {
  slug: string;
  name: string;
  district: string;
  title: string;
  description: string;
  keywords: string[];
  jsonLd: Record<string, any>;
}

export const locationData: Record<string, LocationInfo> = {
  vadakara: {
    slug: 'vadakara',
    name: 'Vadakara',
    district: 'Kozhikode',
    title: 'CCTV Installation & Home Automation in Vadakara | Eye Track Solutions',
    description: 'Professional CCTV camera installation, automatic gate openers, smart digital locks, and biometric access systems in Vadakara, Kerala.',
    keywords: [
      'cctv installation vadakara',
      'home automation vadakara',
      'smart locks vadakara',
      'biometric systems vadakara',
      'security camera service vadakara'
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Eye Track Solutions - Vadakara',
      description: 'Professional CCTV installation, home and gate automation, smart digital locks, and biometric access control in Vadakara.',
      url: 'https://eyetrack-tech.com/locations/vadakara',
      telephone: '+917994357565',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Vadakara',
        addressRegion: 'Kerala',
        addressCountry: 'IN'
      },
      areaServed: 'Vadakara'
    }
  },
  perambra: {
    slug: 'perambra',
    name: 'Perambra',
    district: 'Kozhikode',
    title: 'CCTV Installation & Smart Automation in Perambra | Eye Track Solutions',
    description: 'Trusted CCTV surveillance, sliding gate automation, smart door locks, and biometric attendance systems in Perambra, Kerala.',
    keywords: [
      'cctv installation perambra',
      'gate automation perambra',
      'smart locks perambra',
      'biometric attendance perambra',
      'security cameras perambra'
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Eye Track Solutions - Perambra',
      description: 'Trusted CCTV surveillance, sliding gate automation, smart door locks, and biometric attendance systems in Perambra.',
      url: 'https://eyetrack-tech.com/locations/perambra',
      telephone: '+917994357565',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Perambra',
        addressRegion: 'Kerala',
        addressCountry: 'IN'
      },
      areaServed: 'Perambra'
    }
  },
  calicut: {
    slug: 'calicut',
    name: 'Calicut',
    district: 'Kozhikode',
    title: 'CCTV Installation & Automation Services in Calicut | Eye Track Solutions',
    description: 'High-definition CCTV installation, automatic sliding gates, smart biometric locks, and network cabling solutions in Calicut (Kozhikode).',
    keywords: [
      'cctv installation calicut',
      'home automation calicut',
      'gate opener calicut',
      'smart locks calicut',
      'biometric access calicut'
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Eye Track Solutions - Calicut',
      description: 'High-definition CCTV installation, automatic sliding gates, smart biometric locks, and network cabling solutions in Calicut.',
      url: 'https://eyetrack-tech.com/locations/calicut',
      telephone: '+917994357565',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Calicut',
        addressRegion: 'Kerala',
        postalCode: '673001',
        addressCountry: 'IN'
      },
      areaServed: ['Calicut', 'Kozhikode']
    }
  },
  kannur: {
    slug: 'kannur',
    name: 'Kannur',
    district: 'Kannur',
    title: 'CCTV Surveillance & Gate Automation in Kannur | Eye Track Solutions',
    description: 'Expert CCTV surveillance setups, automatic gate motors, biometric attendance machines, and digital door locks in Kannur, Kerala.',
    keywords: [
      'cctv installation kannur',
      'home automation kannur',
      'gate motors kannur',
      'smart locks kannur',
      'biometric attendance kannur'
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Eye Track Solutions - Kannur',
      description: 'Expert CCTV surveillance setups, automatic gate motors, biometric attendance machines, and digital door locks in Kannur.',
      url: 'https://eyetrack-tech.com/locations/kannur',
      telephone: '+917994357565',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kannur',
        addressRegion: 'Kerala',
        addressCountry: 'IN'
      },
      areaServed: 'Kannur'
    }
  },
  malappuram: {
    slug: 'malappuram',
    name: 'Malappuram',
    district: 'Malappuram',
    title: 'CCTV Systems & Smart Security in Malappuram | Eye Track Solutions',
    description: 'Commercial and residential CCTV camera installation, automatic sliding gates, digital door locks, and structured cabling in Malappuram.',
    keywords: [
      'cctv installation malappuram',
      'gate automation malappuram',
      'smart locks malappuram',
      'biometric systems malappuram',
      'network cabling malappuram'
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Eye Track Solutions - Malappuram',
      description: 'Commercial and residential CCTV camera installation, automatic sliding gates, digital door locks, and structured cabling in Malappuram.',
      url: 'https://eyetrack-tech.com/locations/malappuram',
      telephone: '+917994357565',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Malappuram',
        addressRegion: 'Kerala',
        addressCountry: 'IN'
      },
      areaServed: 'Malappuram'
    }
  },
  payyoli: {
    slug: 'payyoli',
    name: 'Payyoli',
    district: 'Kozhikode',
    title: 'CCTV Installation & Automation in Payyoli | Eye Track Solutions',
    description: 'Expert CCTV camera setups, automatic gate systems, biometric devices, and digital locks in Payyoli. Headquartered in Kizhur, Payyoli.',
    keywords: [
      'cctv installation payyoli',
      'gate automation payyoli',
      'smart locks payyoli',
      'biometric systems payyoli',
      'network cabling payyoli'
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Eye Track Solutions - Payyoli',
      description: 'Expert CCTV camera setups, automatic gate systems, biometric devices, and digital locks in Payyoli.',
      url: 'https://eyetrack-tech.com/locations/payyoli',
      telephone: '+917994357565',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kizhur, Perambra road',
        addressLocality: 'Payyoli',
        addressRegion: 'Kerala',
        postalCode: '673522',
        addressCountry: 'IN'
      },
      areaServed: 'Payyoli'
    }
  },
  koyilandy: {
    slug: 'koyilandy',
    name: 'Koyilandy',
    district: 'Kozhikode',
    title: 'CCTV Camera & Automation Services in Koyilandy | Eye Track Solutions',
    description: 'Reliable CCTV surveillance, automatic sliding gate openers, smart door locks, and networking services across Koyilandy.',
    keywords: [
      'cctv installation koyilandy',
      'gate automation koyilandy',
      'smart locks koyilandy',
      'biometric systems koyilandy',
      'network cabling koyilandy'
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Eye Track Solutions - Koyilandy',
      description: 'Reliable CCTV surveillance, automatic sliding gate openers, smart door locks, and networking services across Koyilandy.',
      url: 'https://eyetrack-tech.com/locations/koyilandy',
      telephone: '+917994357565',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Koyilandy',
        addressRegion: 'Kerala',
        addressCountry: 'IN'
      },
      areaServed: 'Koyilandy'
    }
  }
};

// Map alternate spellings or aliases
const aliasMap: Record<string, string> = {
  kozhikode: 'calicut',
  quilandy: 'koyilandy',
  badagara: 'vadakara'
};

export function getLocationData(slug: string): LocationInfo {
  const normalized = (slug || '').toLowerCase().trim();
  const resolvedSlug = aliasMap[normalized] || normalized;

  if (locationData[resolvedSlug]) {
    return locationData[resolvedSlug];
  }

  // Fallback for any other area slug
  const formattedName = normalized.charAt(0).toUpperCase() + normalized.slice(1);
  return {
    slug: normalized,
    name: formattedName,
    district: 'Kerala',
    title: `CCTV Installation & Automation in ${formattedName} | Eye Track Solutions`,
    description: `Professional CCTV camera installation, smart locks, automatic gate systems, and biometric solutions in ${formattedName}, Kerala.`,
    keywords: [
      `cctv installation ${formattedName.toLowerCase()}`,
      `home automation ${formattedName.toLowerCase()}`,
      `smart locks ${formattedName.toLowerCase()}`,
      `biometric systems ${formattedName.toLowerCase()}`
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: `Eye Track Solutions - ${formattedName}`,
      description: `Professional CCTV camera installation, smart locks, automatic gate systems, and biometric solutions in ${formattedName}.`,
      url: `https://eyetrack-tech.com/locations/${normalized}`,
      telephone: '+917994357565',
      address: {
        '@type': 'PostalAddress',
        addressLocality: formattedName,
        addressRegion: 'Kerala',
        addressCountry: 'IN'
      },
      areaServed: formattedName
    }
  };
}
