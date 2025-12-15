export interface Experience {
  period: string;
  title: string;
  institution: string;
  type: 'education' | 'work'; // To style the timeline dots differently if needed
}

export interface Doctor {
  id: string;
  slug: string;
  name: string;
  title: string; // e.g., "Prof. Dr."
  fullTitle: string; // e.g., "Profesör Doktor"
  specialty: string; // Short version for cards
  fullSpecialty: string; // Long version for hero
  rating: number;
  reviewCount: number;
  image: string;
  yearsOfExperience: number;
  
  // Quick Stats
  education: string; // University name
  expertise: string; // Main area
  languages: string[];
  location: string;

  // Content
  about: string[]; // Paragraphs
  specialties: string[]; // List of specific skills
  timeline: Experience[];
}

export interface ClinicInfo {
  phone: string;
  email: string;
  address: string;
  instagram: string;
  hours: {
    weekdays: string;
    weekend: string;
  }
}