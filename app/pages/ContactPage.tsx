"use client";
import { useState } from "react";
import { portfolioData } from "@/app/data";
import { Card, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Label } from "@/src/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="mx-auto mb-6 text-blue-600" size={64} />
          <h1 className="text-5xl md:text-6xl mb-6">Contactez-moi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter. 
            Je serais ravi d'échanger avec vous !
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl mb-6">Envoyez-moi un message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre.email@exemple.com"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sujet de votre message"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet ou votre demande..."
                      required
                      className="mt-2 min-h-[150px]"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2" size={20} />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl mb-6">Informations de contact</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <Mail className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg mb-1">Email</h3>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <Phone className="text-green-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg mb-1">Téléphone</h3>
                        <a
                          href={`tel:${contact.phone}`}
                          className="text-gray-600 hover:text-green-600 transition-colors"
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <MapPin className="text-purple-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg mb-1">Localisation</h3>
                        <p className="text-gray-600">{contact.location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl mb-6">Suivez-moi</h2>
                  <div className="space-y-4">
                    {contact.socialLinks.github && (
                      <a
                        href={contact.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Github className="text-gray-700" size={28} />
                        <div>
                          <p className="font-semibold">GitHub</p>
                          <p className="text-sm text-gray-600">Voir mes projets open source</p>
                        </div>
                      </a>
                    )}
                    {contact.socialLinks.linkedin && (
                      <a
                        href={contact.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Linkedin className="text-blue-600" size={28} />
                        <div>
                          <p className="font-semibold">LinkedIn</p>
                          <p className="text-sm text-gray-600">Connectons-nous professionnellement</p>
                        </div>
                      </a>
                    )}
                    {contact.socialLinks.twitter && (
                      <a
                        href={contact.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Twitter className="text-blue-400" size={28} />
                        <div>
                          <p className="font-semibold">Twitter</p>
                          <p className="text-sm text-gray-600">Suivez mes actualités</p>
                        </div>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-4">Disponibilité</h3>
                  <p className="mb-4">
                    Je suis actuellement disponible pour de nouveaux projets freelance 
                    ou opportunités de collaboration.
                  </p>
                  <p className="text-blue-100">
                    Temps de réponse moyen : 24-48 heures
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12 text-center">Questions fréquentes</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Quels types de projets acceptez-vous ?</h3>
                <p className="text-gray-700">
                  J'accepte une variété de projets web et mobile, du développement d'applications 
                  complètes aux missions de conseil technique. N'hésitez pas à me contacter pour 
                  discuter de votre projet spécifique.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Quels sont vos tarifs ?</h3>
                <p className="text-gray-700">
                  Mes tarifs varient selon la complexité et la durée du projet. Je propose des 
                  devis personnalisés après une première discussion pour comprendre vos besoins 
                  et vos objectifs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Travaillez-vous à distance ?</h3>
                <p className="text-gray-700">
                  Oui, je travaille principalement à distance mais je peux me déplacer pour des 
                  réunions importantes si nécessaire. J'utilise des outils de collaboration 
                  modernes pour assurer une communication fluide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
