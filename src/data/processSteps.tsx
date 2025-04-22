
import React from 'react';
import { FileText, Ruler, Construction, Hammer, Shield, Repeat } from 'lucide-react';

export const processSteps = [
  {
    number: 1,
    title: 'Consultation & Planning',
    description: 'We start with understanding your needs, site assessment, and developing initial concepts aligned with your goals and budget.',
    icon: <FileText size={48} className="text-orange" />,
  },
  {
    number: 2,
    title: 'Design & Engineering',
    description: 'Our engineers create detailed structural designs, perform necessary calculations, and prepare technical drawings for approval.',
    icon: <Ruler size={48} className="text-orange" />,
  },
  {
    number: 3,
    title: 'Fabrication',
    description: 'Using premium materials, we fabricate all components in our state-of-the-art facility with rigorous quality control checks.',
    icon: <Construction size={48} className="text-orange" />,
  },
  {
    number: 4,
    title: 'Installation',
    description: 'Our expert installation teams deploy on-site with modern equipment to assemble your steel structure safely and efficiently.',
    icon: <Hammer size={48} className="text-orange" />,
  },
  {
    number: 5,
    title: 'Quality Assurance',
    description: 'Comprehensive inspections and testing ensure your structure meets all safety standards and quality requirements.',
    icon: <Shield size={48} className="text-orange" />,
  },
  {
    number: 6,
    title: 'Support & Maintenance',
    description: 'We provide ongoing support, maintenance services, and warranty coverage to ensure lasting performance.',
    icon: <Repeat size={48} className="text-orange" />,
  },
];
