import { Project, StackItem, Certification, Testimonial, ContactInfo } from "./types";

export const portfolioData = {
  name: "Fotedou Bill Junior",
  title: "Développeur Web et Mobile",
  bio: "Étudiant en 4eme Génie Informatique à l’Ecole Nationale Supérieure Polytechnique de Yaoundé, " + 
                "je me concentre sur le développement web et mobile avec une priorité :" + 
                " concevoir des solutions qui répondent à des besoins concrets. Mon parcours m’a permis de développer des compétences, "+
                "que j’ai progressivement consolidées à travers divers projets,"+
                "en arborant des problématiques concrètes de performance et d’ergonomie. "+
                "Je me contente pas de coder une interface : je cherche à comprendre l’usage derrière pour bien bâtir des solutions utiles et bien structurées. "+
                "Structuré et pragmatique je m’attache à concevoir des solutions efficaces, pensées pour répondre aux usages réels.",
  aboutImage:"IMG_6439.JPG",
  cv: "FOTEDOU_BILL_JUNIOR_FlowCV_Resume_2026-04-05.pdf",
  // aboutImage: "https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ1Mjc3MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",

  projects: [
    {
      id: "1",
      title: "Plateforme E-commerce",
      description: "Application complète de commerce en ligne avec authentification, panier, paiement sécurisé et gestion des commandes, historiques et recommendations.",
      image: "https://images.unsplash.com/photo-1763872011479-aa293bf083a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NzQ1Mjk3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", ""],
      link: "https://github.com/hussel2004/Gestion_tiers.git"
    },
    {
      id: "2",
      title: "Gestion Tiers",
      description: "Web App de gestion des tiers liés aux entreprises, enregistrement, recherche et consultation des etreprises et de leurs tiers.",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzc0NTYwNjEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["NextJS", "Java SpringBoot", "MongoDB", "Vercel"],
      link: "https://github.com/hussel2004/Gestion_tiers.git"
    },
    {
      id: "3",
      title: "YowYop-Business book et dashboard d'analyse",
      description: "BusinessBook is a platform allowing companies to create their online presence and users to discover, rate, and contact verified professionals.",
      image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzc0NjExOTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Next.js", "TypeScript", "Java SpringBoot", "PostgreSQL"],
      link: "https://github.com/hussel2004/businessbookR.git"
    },
    {
      id: "4",
      title: "Site Vitrine Entreprise",
      description: "Site vitrine moderne pour une entreprise avec animations et design responsive.",
      image: "#",
      //image: "https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzc0NTg1MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Next.js", "Tailwind CSS", "SchadCN/ChakraUI"],
      link: "#"
    },
    {
      id: "5",
      title: "Porteffolio Personnel",
      description: "sites web en ligne representant mon parcours, mes projets et mes compétences",
      image:"Capture d’écran du 2026-04-05 19-50-18.png",
      // image: "https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzc0NTg1MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080", 
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
      technologies: ["Node.js", "Java", "Spring Boot", "MongoDB", "PostgreSQL", "Prisma"]
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

  profileViews: 1482,

  testimonials: [
    {
      id: "1",
      name: "Nadine Essimi",
      role: "Responsable produit",
      company: "Yaoundé Digital Lab",
      content: "Bill a su traduire nos besoins métiers en une application claire et responsive. Sa rigueur technique et son sens du détail ont fait la différence sur ce projet local."
    },
    {
      id: "2",
      name: "Samuel Ngatchou",
      role: "Directeur technique",
      company: "Startup Afritech",
      content: "Travailler avec Bill a été simple et efficace. Il apporte des solutions pragmatiques, respectant les contraintes de performance et d’UX que nous attendions."
    },
    {
      id: "3",
      name: "Amina Fonkou",
      role: "Chef de projet innovation",
      company: "Université Polytech",
      content: "Son approche collaborative et son sens de l’écoute ont permis de livrer une plateforme professionnelle et adaptée aux besoins des utilisateurs camerounais."
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
