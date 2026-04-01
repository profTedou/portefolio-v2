import Link from "next/link";
import { ArrowRight, Code2, Award, MessageSquare, Mail } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { portfolioData } from "@/app/data";
import { ImageWithFallback } from "@/src/components/figma/ImageWithFallback";

export default function HomePage() {
  const { name, title, bio, aboutImage, projects, stack, certifications, testimonials } = portfolioData;

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-150 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl mb-6">{name}</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">{title}</p>
          <Link href="/contact">
            <Button size="lg" className="text-lg px-8 py-6 hover:bg-blue-700 transition-colors">
              Me contacter
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-black">À propos</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{bio}</p>
              <Link href="/about">
                <Button variant="outline">
                  En savoir plus
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src={aboutImage}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl text-black">Projets</h2>
            <Link href="/projects">
              <Button variant="outline">
                Voir plus
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => {
              const techs = project.technologies.filter(Boolean);

              return (
                <Card
                  key={project.id}
                  className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow">
                      {techs[0] || "Web"}
                    </span>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold text-slate-950">{project.title}</h3>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        Stack
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6 max-h-24 overflow-hidden">{project.description}</p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {techs.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <Button asChild variant="outline" size="sm" className="w-full md:w-auto">
                        <a href={project.link} target="_blank" rel="noreferrer">
                          Voir le projet
                        </a>
                      </Button>
                      <span className="text-sm text-slate-500">
                        {project.link.includes("github.com") ? "Code ouvert" : "Lien projet"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section id="stack" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-black">Stack Technique</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stack.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="text-blue-600" size={32} />
                  <h3 className="text-2xl text-black">{item.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/stack" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
              Voir plus
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
  
      {/* Certifications Section */}
      {/* <section id="certifications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-black">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.id} className="text-center p-6 hover:shadow-lg transition-shadow">
                <Award className="mx-auto mb-4 text-yellow-600" size={48} />
                <h3 className="text-lg mb-2 text-black">{cert.title}</h3>
                <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm text-black">{cert.date}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/certifications">
              <Button variant="outline">
                Voir tous les certificats
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-black">Témoignages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6">
                <MessageSquare className="text-blue-600 mb-4" size={32} />
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-sm text-black">
                    {testimonial.role} - {testimonial.company}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          {/* <div className="text-center mt-8">
            <Link href="/testimonials">
              <Button variant="outline">
                Voir plus de témoignages
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
          */}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="mx-auto mb-6" size={64} />
          <h2 className="text-4xl mb-6">Travaillons ensemble</h2>
          <p className="text-xl mb-8 text-blue-100">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Me contacter
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
