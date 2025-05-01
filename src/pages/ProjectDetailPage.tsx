
import React from 'react';
import ProjectDetail from '@/components/projects/ProjectDetail';

// Project data with descriptions
const projectsData = [
  {
    id: '1',
    title: 'Luxury Gates',
    category: 'Commercial',
    image: '/lovable-uploads/WhatsApp Image 2025-04-24 at 13.01.41 (1).jpeg',
    location: 'Guzape, FCT Abuja',
    description: 'This stunning luxury gate project showcases our expertise in creating elegant, secure entrances for high-end properties. Featuring precision steel fabrication with decorative elements, this gate was designed to enhance security while maintaining aesthetic appeal. We incorporated automated systems for convenience and durability-focused materials to withstand Abuja's climate conditions.'
  },
  {
    id: '2',
    title: 'Industrial Factory',
    category: 'Industrial',
    image: '/lovable-uploads/WhatsApp Image 2025-04-24 at 13.01.40.jpeg',
    location: 'Kano, Nigeria',
    description: 'Our industrial factory project in Kano demonstrates our capability to deliver large-scale steel structures for manufacturing facilities. This project involved designing and constructing a comprehensive steel framework to support heavy machinery while ensuring optimal space utilization. We implemented advanced structural engineering techniques to achieve maximum stability and safety standards for industrial operations.'
  },
  {
    id: '3',
    title: 'Residential Building',
    category: 'Residential',
    image: '/lovable-uploads/WhatsApp Image 2025-04-24 at 13.01.41.jpeg',
    location: 'Maitama, Abuja',
    description: 'This luxury residential project in Maitama features innovative steel construction solutions that blend modern design with practical functionality. Our team developed custom steel frameworks to create spacious, open-concept living spaces while maintaining structural integrity. The project highlights our ability to work with architects to bring sophisticated residential designs to life through premium steel fabrication.'
  },
  {
    id: '4',
    title: 'Cool Cover and Canopy',
    category: 'Infrastructure',
    image: '/lovable-uploads/WhatsApp Image 2025-04-24 at 13.00.27 (1).jpeg',
    location: 'Wuse, Abuja, Nigeria',
    description: 'This innovative canopy structure provides both aesthetic appeal and practical shelter in a busy Wuse commercial area. Designed with weather resistance and longevity in mind, we utilized specialized steel treatments to ensure durability against sun exposure and heavy rainfall. The sleek, modern design complements the surrounding architecture while offering functional protection.'
  },
  {
    id: '5',
    title: 'Luxury Apartment',
    category: 'Commercial',
    image: '/lovable-uploads/WhatsApp Image 2025-04-24 at 13.00.28.jpeg',
    location: 'Lifecamp, Abuja',
    description: 'Our luxury apartment project in Lifecamp showcases premium steel construction techniques that allow for modern architectural expressions. The project features custom steel frameworks that support contemporary design elements while maintaining structural integrity. We implemented noise-reducing construction methods and high-quality finishes to create an exclusive residential experience.'
  },
  {
    id: '6',
    title: 'Industrial Structure',
    category: 'Industrial',
    image: '/lovable-uploads/WhatsApp Image 2025-04-24 at 13.00.27.jpeg',
    location: 'Lifecamp, FCT Abuja',
    description: 'This industrial structure project demonstrates our expertise in creating robust, functional spaces for business operations. The design prioritizes efficiency and durability, with strategic steel placement to maximize usable space while providing essential support. Our team implemented specialized welding techniques to ensure the structure meets international safety standards for industrial facilities.'
  },
  {
    id: '7',
    title: 'Apartment Complex',
    category: 'Residential',
    image: '/lovable-uploads/WhatsApp Image 2025-04-24 at 13.01.42.jpeg',
    location: 'Jabi, Abuja',
    description: 'This modern apartment complex in Jabi features our advanced steel construction methods to create a secure, stylish multi-unit residential building. The project incorporated steel framework solutions that allow for flexible interior layouts while maintaining structural strength. We utilized precision engineering to ensure even weight distribution and long-term stability throughout the complex.'
  },
];

const ProjectDetailPage = () => {
  return <ProjectDetail projects={projectsData} />;
};

export default ProjectDetailPage;
