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
              <Card
                key={project.id}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 shadow-xl transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                  <div className={`relative h-[420px] overflow-hidden ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-900">
                        Featured
                      </span>
                      <span className="rounded-full bg-slate-900/70 px-3 py-1 text-sm text-white">
                        {project.technologies.filter(Boolean).length} techs
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="mb-6">
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <h2 className="text-3xl font-semibold text-slate-900">{project.title}</h2>
                        <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                          En ligne
                        </span>
                      </div>
                      <p className="text-lg leading-7 text-slate-700">{project.description}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.filter(Boolean).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        <ExternalLink className="mr-2" size={18} />
                        Découvrir
                      </a>
                      <a href={project.link} target="_blank" rel="noreferrer"> 
                      <Button variant="outline" className="rounded-full px-5 py-3">
                        <Github className="mr-2" size={18} />
                        Code source
                      </Button>
                      </a>
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
