import { portfolioData } from "@/app/data";
import { Card, CardContent } from "@/src/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function TestimonialsPage() {
  const { testimonials } = portfolioData;

  const detailedTestimonials = [
    {
      ...testimonials[0],
      project: "Application E-commerce",
      rating: 5,
      fullContent: "Jean a transformé notre vision en une application exceptionnelle. Son professionnalisme et sa créativité ont dépassé nos attentes. Il a su comprendre nos besoins et proposer des solutions innovantes. La communication était fluide et les délais respectés. Je recommande vivement ses services pour tout projet web ambitieux.",
    },
    {
      ...testimonials[1],
      project: "Refonte Dashboard Analytics",
      rating: 5,
      fullContent: "Collaboration parfaite ! Jean est réactif, compétent et toujours force de proposition. Il a apporté une vraie valeur ajoutée à notre projet avec ses suggestions pertinentes. Son expertise technique et sa compréhension des enjeux business font de lui un partenaire idéal pour des projets complexes.",
    },
    {
      ...testimonials[2],
      project: "Plateforme SaaS",
      rating: 5,
      fullContent: "Un développeur talentueux qui comprend les enjeux business. Son code est propre et maintenable. Jean a mis en place une architecture solide qui nous permet de scaler facilement. Sa rigueur et son attention aux détails ont été déterminantes pour le succès du projet.",
    },
  ];

  const additionalTestimonials = [
    {
      id: "4",
      name: "Luc Bernard",
      role: "Directeur Technique",
      company: "StartupTech",
      content: "Jean a rapidement compris nos contraintes techniques et a su proposer des solutions adaptées. Son expertise en architecture logicielle est remarquable.",
      project: "API Microservices",
      rating: 5,
    },
    {
      id: "5",
      name: "Caroline Petit",
      role: "Chef de projet",
      company: "AgenceWeb+",
      content: "Professionnalisme et qualité au rendez-vous. Jean livre toujours dans les temps avec un code de qualité. Un vrai plaisir de travailler avec lui.",
      project: "Site Web Institutionnel",
      rating: 5,
    },
    {
      id: "6",
      name: "Thomas Rousseau",
      role: "Fondateur",
      company: "InnoApp",
      content: "Jean a été un acteur clé dans le développement de notre MVP. Sa capacité à itérer rapidement et son sens du détail nous ont permis de lancer à temps.",
      project: "Application Mobile",
      rating: 5,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="mx-auto mb-6 text-blue-600" size={64} />
          <h1 className="text-5xl md:text-6xl mb-6">Témoignages</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ce que mes clients disent de leur expérience de collaboration avec moi
          </p>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12 text-center">Témoignages détaillés</h2>
          <div className="grid gap-8">
            {detailedTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-2xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-yellow-500 fill-yellow-500" size={20} />
                        ))}
                      </div>
                      <Quote className="text-gray-300 mb-4" size={40} />
                      <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                        "{testimonial.fullContent}"
                      </p>
                      <div className="border-t pt-4">
                        <p className="font-semibold text-lg">{testimonial.name}</p>
                        <p className="text-gray-600">
                          {testimonial.role} - {testimonial.company}
                        </p>
                        <p className="text-sm text-blue-600 mt-2">
                          Projet : {testimonial.project}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12 text-center">Autres témoignages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-yellow-500" size={18} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                    <p className="text-xs text-blue-600 mt-2">{testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12 text-center">Satisfaction clients</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl mb-2 text-blue-600">100%</h3>
                <p className="text-gray-600">Clients satisfaits</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl mb-2 text-blue-600">50+</h3>
                <p className="text-gray-600">Projets complétés</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl mb-2 text-blue-600">5.0</h3>
                <p className="text-gray-600">Note moyenne</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl mb-2 text-blue-600">95%</h3>
                <p className="text-gray-600">Taux de recommandation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
