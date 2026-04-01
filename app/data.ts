import { Project, StackItem, Certification, Testimonial, ContactInfo } from "./types";

export const portfolioData = {
  name: "Fotedou Bill Junior",
  title: "Développeur Web et Mobile",
  bio: "Passionné par le développement web et mobile, je me positionne également comme concepteur de solutions technologiques orientées impact. Actuellement en 4ᵉ année de Génie Informatique à Polytech, j’ai acquis une solide base théorique complétée par une expérience pratique à travers plusieurs projets académiques et professionnels.Au fil de mon parcours, j’ai conçu et développé des applications modernes en mettant l’accent sur la performance, l’expérience utilisateur et la robustesse des architectures. Curieux et rigoureux, je suis constamment à la recherche de nouveaux défis techniques et d’opportunités d’apprentissage afin d’améliorer mes compétences et proposer des solutions innovantes adaptées aux besoins réels.",
  aboutImage:"IMG_6439.JPG",
  // aboutImage: "https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ1Mjc3MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",

  projects: [
    {
      id: "1",
      title: "Plateforme E-commerce",
      description: "Application complète de commerce en ligne avec panier, paiement sécurisé et gestion des commandes, suivi des commandes, historqiues et recommendations.",
      image: "https://images.unsplash.com/photo-1763872011479-aa293bf083a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NzQ1Mjk3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", ""],
      link: "https://github.com/hussel2004/Gestion_tiers.git"
    },
    {
      id: "2",
      title: "Gestion Tiers",
      description: "Web App de gestion des tiers liés aux entreprises, enregistrement, recherche et consultation des etreprises et de leurs tiers",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzc0NTYwNjEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["NextJS", "Java SpringBoot", "MongoDB", "Vercel"],
      link: "https://github.com/hussel2004/Gestion_tiers.git"
    },
    {
      id: "3",
      title: "YowYop-Business book et dashboard d'analyse",
      description: "BusinessBook is a platform allowing companies to create their online presence and users to discover, rate, and contact verified professionals.",
      image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzc0NjExOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Next.js", "D3.js", "Jva SpringBoot", "PostgreSQL"],
      link: "https://github.com/hussel2004/businessbookR.git"
    },
    {
      id: "4",
      title: "Site Vitrine Entreprise",
      description: "Site vitrine moderne pour une entreprise avec animations et design responsive.",
      image: "https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzc0NTg1MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Next.js", "Tailwind CSS", "SchadCN/ChakraUI"],
      link: "#"
    },
    {
      id: "5",
      title: "Porteffolio Personnel",
      description: "sites web en ligne representant mon parcours, mes projets et mes compétences",
      image: "https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzc0NTg1MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Node.js", "Docker", "Kubernetes", "AWS"],
      link: "https://github.com/profTedou/portefolio-v2.git"
    }
  ] as Project[],

  stack: [
    {
      category: "Frontend",
      technologies: ["React", "Angular", "Next.js", "TypeScript", "Tailwind CSS", "Chakra UI"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Java", "Spring Boot", "MongoDB", "PostgreSQL", "Prissma"]
    },
    {
      category: "DevOps",
      technologies: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"]
    }
  ] as StackItem[],

  certifications: [
    {
      id: "1",
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2025"
    },
    {
      id: "2",
      title: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2024"
    },
    {
      id: "3",
      title: "React Advanced Certification",
      issuer: "Meta",
      date: "2024"
    },
    {
      id: "4",
      title: "Google Cloud Professional",
      issuer: "Google",
      date: "2023"
    }
  ] as Certification[],

  testimonials: [
    {
      id: "1",
      name: "Marie Lambert",
      role: "CEO",
      company: "TechStart",
      content: "Jean a transformé notre vision en une application exceptionnelle. Son professionnalisme et sa créativité ont dépassé nos attentes."
    },
    {
      id: "2",
      name: "Pierre Dubois",
      role: "Product Manager",
      company: "InnoWeb",
      content: "Collaboration parfaite ! Jean est réactif, compétent et toujours force de proposition. Je recommande vivement."
    },
    {
      id: "3",
      name: "Sophie Martin",
      role: "CTO",
      company: "Digital Solutions",
      content: "Un développeur talentueux qui comprend les enjeux business. Son code est propre et maintenable."
    }
  ] as Testimonial[],

  contact: {
    email: "billjuniorfotedou@gmail.com",
    phone: "+237 6 97 61 05 18",
    location: "Yaounde, Cameroun",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      whatsapp: "https://wa.me/237697610518"
    }
  } as ContactInfo
};
