import { portfolioData } from "@/app/data";
import { Card, CardContent } from "@/src/components/ui/card";
import { Award, Calendar, Building, ExternalLink } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export default function CertificationsPage() {
  const { certifications } = portfolioData;

  const certificationDetails = [
    {
      ...certifications[0],
      description: "Certification professionnelle couvrant la conception d'architectures cloud scalables, sécurisées et performantes sur AWS. Maîtrise des services EC2, S3, RDS, Lambda, et bien plus.",
      skills: ["Architecture Cloud", "Sécurité AWS", "Scalabilité", "Optimisation des coûts"],
    },
    {
      ...certifications[1],
      description: "Certification Scrum Master confirmant la maîtrise du framework Scrum et des pratiques agiles. Capacité à faciliter les équipes et à maximiser la valeur produite.",
      skills: ["Scrum Framework", "Facilitation", "Agile", "Leadership"],
    },
    {
      ...certifications[2],
      description: "Certification avancée React couvrant les hooks, le context API, les patterns avancés, l'optimisation des performances et les meilleures pratiques.",
      skills: ["React Hooks", "Performance", "State Management", "Testing"],
    },
    {
      ...certifications[3],
      description: "Certification professionnelle Google Cloud Platform couvrant les services cloud, l'infrastructure, et les solutions d'entreprise.",
      skills: ["GCP Services", "Cloud Architecture", "Infrastructure", "DevOps"],
    },
  ];

  const additionalCertifications = [
    { title: "MongoDB Certified Developer", issuer: "MongoDB University", date: "2023" },
    { title: "Docker Certified Associate", issuer: "Docker Inc.", date: "2023" },
    { title: "Kubernetes Administrator", issuer: "CNCF", date: "2024" },
    { title: "GraphQL Associate", issuer: "The Linux Foundation", date: "2024" },
    { title: "Node.js Application Developer", issuer: "OpenJS Foundation", date: "2023" },
    { title: "TypeScript Professional", issuer: "Microsoft", date: "2024" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="mx-auto mb-6 text-blue-600" size={64} />
          <h1 className="text-5xl md:text-6xl mb-6">Certifications</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mes certifications professionnelles attestent de mon expertise et de mon engagement 
            envers l'excellence technique
          </p>
        </div>
      </section>

      {/* Main Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12 text-center">Certifications Principales</h2>
          <div className="grid gap-8">
            {certificationDetails.map((cert) => (
              <Card key={cert.id} className="hover:shadow-2xl transition-shadow">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="md:col-span-1 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6">
                      <Award className="text-yellow-600 mb-4" size={64} />
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">Obtenu en</p>
                        <p className="text-2xl">{cert.date}</p>
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-2xl mb-2">{cert.title}</h3>
                      <div className="flex items-center gap-2 mb-4 text-gray-600">
                        <Building size={18} />
                        <span>{cert.issuer}</span>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {cert.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="text-lg mb-3">Compétences acquises</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Button variant="outline">
                        <ExternalLink className="mr-2" size={18} />
                        Vérifier la certification
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12 text-center">Autres Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalCertifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Award className="text-blue-600 mb-4" size={40} />
                  <h3 className="text-xl mb-3">{cert.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Building size={16} />
                    <span className="text-sm">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Learning */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6">Engagement envers l'excellence</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Ces certifications témoignent de mon engagement continu envers l'apprentissage 
            et le perfectionnement de mes compétences. Je reste constamment à jour avec les 
            dernières technologies et meilleures pratiques de l'industrie.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-3xl mb-2 text-blue-600">10+</h3>
                <p className="text-gray-600">Certifications obtenues</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-3xl mb-2 text-blue-600">5+</h3>
                <p className="text-gray-600">Années d'expérience</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-3xl mb-2 text-blue-600">100+</h3>
                <p className="text-gray-600">Heures de formation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
