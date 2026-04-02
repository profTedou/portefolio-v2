import Link from "next/link";
import { portfolioData } from "@/app/data";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";
import { Code2, Award, Briefcase, Download, GraduationCap } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";

export default function AboutPage() {
  const { name, title, bio, aboutImage } = portfolioData;

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl mb-6 text-center text-black bold">À propos de moi</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Découvrez mon parcours, mes compétences et ma passion pour le développement
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={aboutImage}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl mb-6">{name}</h2>
              <h3 className="text-xl text-gray-600 mb-6">{title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{bio}</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ma philosophie est simple : créer des solutions élégantes à des problèmes complexes. 
                Je crois fermement en l'importance du code propre, de l'architecture solide et de 
                l'expérience utilisateur exceptionnelle.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Au-delà du code, je suis passionné par l'apprentissage continu, le partage de 
                connaissances et la contribution aux communautés open source.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button variant="outline" className="rounded-full px-6 py-3">
                    Me contacter
                  </Button>
                </Link>
                <Button asChild className="rounded-full bg-slate-900 text-white hover:bg-slate-800 px-6 py-3 transition">
                  <a href="/cv.pdf" target="_blank" rel="noreferrer">
                    Télécharger mon CV
                    <Download className="ml-2" size={18} />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card>
              <CardContent className="p-8 text-center">
                <Briefcase className="mx-auto mb-4 text-blue-600" size={48} />
                <h3 className="text-3xl mb-2">4+</h3>
                <p className="text-gray-600">Apprentissage et depoiment de solutions!</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <Code2 className="mx-auto mb-4 text-blue-600" size={48} />
                <h3 className="text-3xl mb-2">20+</h3>
                <p className="text-gray-600">Projets réalisés</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <Award className="mx-auto mb-4 text-blue-600" size={48} />
                <h3 className="text-3xl mb-2">5+</h3>
                <p className="text-gray-600">Certifications dans le devellopement</p>
              </CardContent>
            </Card>
          </div>

          {/* Skills & Expertise */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-blue-600" size={36} />
              <h2 className="text-3xl">Compétences & Expertise</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl mb-4">Développement Frontend</h3>
                <p className="text-gray-700 mb-4">
                  Expert en React, Angular et frameworks modernes. Création d'interfaces 
                  utilisateur intuitives et performantes avec attention particulière à 
                  l'accessibilité et l'UX.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Angular", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-white text-gray-700 rounded-lg text-sm shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-4">Développement Backend</h3>
                <p className="text-gray-700 mb-4">
                  Maîtrise des architectures serveur, API REST/GraphQL, bases de données 
                  et microservices. Focus sur la scalabilité et la sécurité.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Java, Spring Boot", "PostgreSQL", "MongoDB", "Docker"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-white text-gray-700 rounded-lg text-sm shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
