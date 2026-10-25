// Replace these sample fields with verified information before publishing.
export const portfolio = {
  name: 'Jeward Mencede',
  shortName: 'JM',
  title: '4th-year BSIT Student',
  eyebrow: 'BSIT · 4TH YEAR',
  introduction: 'I’m Jeward Mencede, a fourth-year Bachelor of Science in Information Technology student at Davao Del Norte State College.',
  objective: 'To keep growing as an IT professional by taking projects from idea to completion, learning from challenges, and applying emerging technologies to build useful solutions.',
  driversTitle: 'AI enthusiast & creative coder',
  drives: 'I enjoy learning new technologies, especially AI, and exploring how they can solve real problems. I’m excited to keep experimenting, building, and applying what I learn to projects that can make a positive difference.',
  location: '',
  email: 'Jewardmencede@gmail.com',
  phone: '09455019544',
  facebook: 'https://www.facebook.com/cj.fromyt',
  discord: 'wardskie69',
  github: '',
  linkedin: '',
  profileImage: {
    dark: '/portrait-dark.webp',
    light: '/portrait-light.webp',
  },
  about: 'I’m currently in my fourth year of the BSIT program at Davao Del Norte State College. I’ll add more about my background and interests here.',
  education: [
    {
      school: 'Davao Del Norte State College',
      url: 'https://www.facebook.com/officialdnsc',
      program: 'Bachelor of Science in Information Technology',
      period: '4th Year · Current',
    },
    {
      school: 'Tubod National School',
      program: 'High School',
      period: 'High School',
    },
    {
      school: 'Don Manuel A Javellana Memorial School',
      program: 'Elementary Education',
      period: 'Elementary',
    },
  ],
  skills: {
    'Frontend & Mobile': ['React', 'React Native', 'HTML', 'CSS', 'Tailwind CSS'],
    'Backend & Data': ['Supabase', 'PostgreSQL', 'Firebase'],
    'Local Development': ['XAMPP'],
    'Computer Vision': ['Computer Vision'],
  },
  projects: [
    {
      title: 'Campus Lost & Found System',
      fullTitle: 'Computer Vision-Based Campus Lost and Found Management System with Automated Accessibility for Users with Impairments',
      featured: true,
      category: 'CAPSTONE · IN PROGRESS',
      description: 'A campus lost-and-found management capstone centered on computer vision and automated accessibility for users with impairments.',
      technologies: ['Computer Vision', 'Accessibility', 'Campus Management'],
      github: 'https://github.com/Wardjay45/Lost-and-found-system',
      images: [
        {
          src: '/projects/campus-lost-found-home.webp',
          alt: 'Desktop home and admin sign-in screen for the campus lost-and-found system',
          caption: 'Desktop experience',
        },
        {
          src: '/projects/campus-lost-found-mobile.webp',
          alt: 'Mobile sign-in screen for the campus lost-and-found system',
          caption: 'Mobile experience',
        },
      ],
    },
    {
      title: 'Drowning Detection',
      category: 'COMPUTER VISION',
      description: 'A computer vision project that analyzes pool-area footage to identify possible drowning-related activity.',
      technologies: ['Computer Vision', 'Video Analysis'],
      images: [
        {
          src: '/projects/drowning-detection.webp',
          alt: 'Drowning detection prototype running on a laptop beside a pool',
          caption: 'Pool-area detection prototype',
        },
      ],
    },
    {
      title: 'DermaLink',
      category: 'AI-ASSISTED SKIN CONSULTATION',
      description: 'An acne consultation concept combining computer-vision skin analysis with a pathway for dermatologist review and consultation.',
      note: 'The concept supports consultation and is not a medical diagnosis.',
      technologies: ['Computer Vision', 'Skin Analysis', 'Consultation Platform'],
      images: [
        {
          src: '/projects/dermalink-team.webp',
          alt: 'DermaLink student team presenting their acne consultation project',
          caption: 'DermaLink project presentation',
        },
        {
          src: '/projects/dermalink-app.webp',
          alt: 'DermaLink mobile app concept for AI-assisted skin analysis and consultation',
          caption: 'Mobile app concept',
        },
      ],
    },
    {
      title: 'EcoSort',
      category: 'WASTE CLASSIFICATION',
      description: 'A waste-classification app that identifies material from a photo and shows an estimated recycling value to help people sort waste.',
      note: 'Displayed price figures are estimates from the project interface.',
      technologies: ['Computer Vision', 'Waste Classification', 'Price Estimation'],
      images: [
        {
          src: '/projects/ecosort-login.webp',
          alt: 'EcoSort mobile app welcome and sign-in screen',
          caption: 'EcoSort app welcome screen',
        },
        {
          src: '/projects/ecosort-scanner.webp',
          alt: 'EcoSort mobile scanner screen for photographing or uploading waste',
          caption: 'Waste scanning screen',
        },
        {
          src: '/projects/ecosort-results.webp',
          alt: 'EcoSort classification result showing a sample recycling price estimate',
          caption: 'Sample classification and value estimate',
        },
      ],
    },
  ],
  achievements: [
    {
      title: 'CCNA: Switching, Routing, and Wireless Essentials',
      year: '03 Dec 2025',
      organization: 'Davao Del Norte State College · Cisco Networking Academy',
      href: '/certificates/ccna-switching-routing-wireless-essentials.pdf',
    },
  ],
  experience: [
    {
      title: 'Discord Support Assistant',
      organization: 'Dreamworld Silkroad Discord Community',
      url: 'https://discord.gg/dreamworldsilkroad',
      detail: 'Helped community members with Level 1 troubleshooting.',
    },
    {
      title: 'Social Media Marketer',
      period: '2018',
      organization: 'Fake Feelings',
    },
  ],
}
