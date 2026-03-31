import { portfolioData } from "@/app/data";
import { Card, CardContent } from "@/src/components/ui/card";
import { Code2, Database, Server, Cloud, GitBranch, Terminal } from "lucide-react";

const iconMap: { [key: string]: any } = {
  Frontend: Code2,
  Backend: Server,
  DevOps: Cloud,
};

export default function StackPage() {
  const { stack } = portfolioData;

  const detailedStack = [
    {
      category: "Frontend Development",
      icon: Code2,
      technologies: [
        { name: "React", level: 95, description: "Framework JavaScript pour interfaces utilisateur" },
        { name: "Vue.js", level: 90, description: "Framework progressif pour applications web" },
        { name: "Next.js", level: 88, description: "Framework React avec SSR et SSG" },
        { name: "TypeScript", level: 92, description: "JavaScript avec typage statique" },
        { name: "Tailwind CSS", level: 95, description: "Framework CSS utility-first" },
      ],
    },
    {
      category: "Backend Development",
      icon: Server,
      technologies: [
        { name: "Node.js", level: 93, description: "Runtime JavaScript côté serveur" },
        { name: "Python", level: 85, description: "Langage polyvalent pour backend et data" },
        { name: "Express", level: 90, description: "Framework web minimaliste pour Node.js" },
        { name: "Django", level: 82, description: "Framework Python full-stack" },
        { name: "GraphQL", level: 87, description: "Langage de requête pour API" },
      ],
    },
    {
      category: "Databases",
      icon: Database,
      technologies: [
        { name: "PostgreSQL", level: 90, description: "Base de données relationnelle avancée" },
        { name: "MongoDB", level: 88, description: "Base de données NoSQL orientée documents" },
        { name: "Redis", level: 85, description: "Store clé-valeur en mémoire" },
        { name: "MySQL", level: 83, description: "Système de gestion de base de données" },
      ],
    },
    {
      category: "DevOps & Cloud",
      icon: Cloud,
      technologies: [
        { name: "Docker", level: 92, description: "Plateforme de conteneurisation" },
        { name: "Kubernetes", level: 80, description: "Orchestration de conteneurs" },
        { name: "AWS", level: 87, description: "Services cloud Amazon" },
        { name: "CI/CD", level: 90, description: "Intégration et déploiement continus" },
        { name: "Nginx", level: 85, description: "Serveur web et reverse proxy" },
      ],
    },
    {
      category: "Tools & Others",
      icon: Terminal,
      technologies: [
        { name: "Git", level: 95, description: "Système de contrôle de version" },
        { name: "GitHub Actions", level: 88, description: "Automatisation CI/CD" },
        { name: "Jest", level: 90, description: "Framework de test JavaScript" },
        { name: "Webpack", level: 85, description: "Module bundler" },
        { name: "Linux", level: 87, description: "Système d'exploitation" },
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl mb-6 text-center">Stack Technique</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Technologies, frameworks et outils que je maîtrise pour créer des applications performantes
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {stack.map((item, index) => {
              const Icon = iconMap[item.category] || Code2;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <Icon className="mx-auto mb-4 text-blue-600" size={48} />
                    <h3 className="text-2xl mb-4">{item.category}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Detailed Stack */}
          <div className="space-y-12">
            {detailedStack.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="text-blue-600" size={36} />
                    <h2 className="text-3xl">{category.category}</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.technologies.map((tech) => (
                      <Card key={tech.name} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-center mb-3">
                            <h3 className="text-xl">{tech.name}</h3>
                            <span className="text-blue-600 font-semibold">{tech.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all"
                              style={{ width: `${tech.level}%` }}
                            />
                          </div>
                          <p className="text-gray-600 text-sm">{tech.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <GitBranch className="text-blue-600" size={36} />
            <h2 className="text-3xl">Apprentissage Continu</h2>
          </div>
          <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">
            La technologie évolue rapidement, et je m'engage à rester à jour avec les dernières 
            tendances et meilleures pratiques. Je consacre régulièrement du temps à l'apprentissage 
            de nouvelles technologies, à l'expérimentation et à la contribution aux projets open source.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl mb-2">Actuellement en apprentissage</h3>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  <span className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm">
                    Rust
                  </span>
                  <span className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm">
                    Web3
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl mb-2">Intérêts futurs</h3>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  <span className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm">
                    AI/ML
                  </span>
                  <span className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm">
                    WebAssembly
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl mb-2">Spécialisations</h3>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  <span className="px-3 py-2 bg-green-100 text-green-700 rounded-lg text-sm">
                    Performance
                  </span>
                  <span className="px-3 py-2 bg-green-100 text-green-700 rounded-lg text-sm">
                    Security
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
