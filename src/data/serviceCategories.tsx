
import React from 'react';
import { Construction, Ruler, Hammer, Building2, Wrench, FileText } from 'lucide-react';

export const serviceCategories = [
  {
    id: 'fabrication',
    title: 'Steel Fabrication',
    description: 'Custom fabrication of structural steel components with precision engineering and quality materials.',
    icon: <Construction size={48} />,
    details: [
      'Structural steel beams and columns fabrication',
      'Custom metal fabrication for specialized projects',
      'Precision cutting and welding of steel components',
      'Quality control and testing of all fabricated products',
      'Large-scale industrial fabrication capabilities',
    ],
    image: '/lovable-uploads/7547f88b-3fb4-448e-a802-8983ddd56f46.jpg',
  },
  {
    id: 'design',
    title: 'Structural Design',
    description: 'Expert structural engineering and design services for optimal performance and safety compliance.',
    icon: <Ruler size={48} />,
    details: [
      'Comprehensive structural analysis and design',
      'BIM (Building Information Modeling) implementation',
      'Engineering consultation for complex projects',
      '3D modeling and visualization services',
      'Value engineering to optimize cost and performance',
    ],
    image: '/lovable-uploads/939d6a45-d043-477a-a77d-5dcb191fc887.jpg',
  },
  {
    id: 'installation',
    title: 'Installation Services',
    description: 'Professional on-site installation with skilled technicians and modern equipment.',
    icon: <Hammer size={48} />,
    details: [
      'Certified installation teams with safety training',
      'Crane and heavy equipment operation',
      'Bolt-up and welded connections on-site',
      'Project schedule adherence and milestone tracking',
      'Quality inspection and documentation',
    ],
    image: '/lovable-uploads/photo_6028199742439277780_x (1).jpg',
  },
  {
    id: 'construction',
    title: 'Building Construction',
    description: 'Complete steel building construction from foundation to finishing with turnkey solutions.',
    icon: <Building2 size={48} />,
    details: [
      'Pre-engineered steel building systems',
      'Industrial and commercial construction projects',
      'Warehouses and storage facilities',
      'Office buildings and multi-story structures',
      'Architectural features and decorative steel elements',
    ],
    image: '/lovable-uploads/photo_6028199742439277781_x (1).jpg',
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Repairs',
    description: 'Ongoing maintenance, inspection and structural repair services for steel structures.',
    icon: <Wrench size={48} />,
    details: [
      'Regular inspection and maintenance programs',
      'Structural assessments and integrity evaluations',
      'Repair of damaged steel components',
      'Reinforcement of existing structures',
      'Emergency repair services',
    ],
    image: '/lovable-uploads/photo_6028199742439277763_y (2).jpg',
  },
  {
    id: 'consultation',
    title: 'Consultation Services',
    description: 'Expert advice and guidance for all aspects of steel construction projects.',
    icon: <FileText size={48} />,
    details: [
      'Pre-construction planning and feasibility studies',
      'Material selection and specification guidance',
      'Budget development and cost analysis',
      'Regulatory compliance and permit assistance',
      'Project timeline development',
    ],
    image: '/lovable-uploads/74beb545-679c-4dc6-9bdd-48ffedab8179.png',
  },
];
