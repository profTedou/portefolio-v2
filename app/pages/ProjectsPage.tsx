import { portfolioData } from "@/app/data";
import { Card, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
  const { projects } = portfolioData;

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl mb-6 text-center">Mes Projets</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations et projets les plus significatifs
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                  <div className={`relative h-[400px] ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h2 className="text-3xl mb-4">{project.title}</h2>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="text-lg mb-3">Technologies utilisées</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button>
                        <ExternalLink className="mr-2" size={18} />
                        Voir le projet
                      </Button>
                      <Button variant="outline">
                        <Github className="mr-2" size={18} />
                        Code source
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Projects Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6">Plus de projets à venir</h2>
          <p className="text-lg text-gray-600 mb-8">
            Je travaille constamment sur de nouveaux projets passionnants. 
            Restez connecté pour voir mes dernières réalisations.
          </p>
          <Button variant="outline" size="lg">
            <Github className="mr-2" size={20} />
            Voir mon GitHub
          </Button>
        </div>
      </section>
    </div>
  );
}
