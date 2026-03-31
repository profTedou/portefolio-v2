"use client";
import { useState } from "react";
import { Card, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Label } from "@/src/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { Settings, User, Briefcase, Code2, Award, MessageSquare, Save, Eye, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("profile");

  // Profile data
  const [profile, setProfile] = useState({
    name: "Jean Dupont",
    title: "Développeur Full Stack",
    bio: "Passionné par le développement web et mobile...",
    email: "jean.dupont@email.com",
    phone: "+33 6 12 34 56 78",
    location: "Paris, France",
  });

  // Projects management
  const [projects, setProjects] = useState([
    { id: 1, title: "Plateforme E-commerce", status: "published" },
    { id: 2, title: "Application Mobile Fitness", status: "published" },
    { id: 3, title: "Dashboard Analytics", status: "draft" },
  ]);

  const handleSaveProfile = () => {
    toast.success("Profil mis à jour avec succès !");
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter(p => p.id !== id));
    toast.success("Projet supprimé avec succès !");
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Settings size={48} />
            <div>
              <h1 className="text-4xl md:text-5xl mb-2">Administration</h1>
              <p className="text-gray-300">Gérez le contenu de votre portfolio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Dashboard */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:w-auto">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User size={18} />
                <span className="hidden sm:inline">Profil</span>
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <Briefcase size={18} />
                <span className="hidden sm:inline">Projets</span>
              </TabsTrigger>
              <TabsTrigger value="stack" className="flex items-center gap-2">
                <Code2 size={18} />
                <span className="hidden sm:inline">Stack</span>
              </TabsTrigger>
              <TabsTrigger value="certifications" className="flex items-center gap-2">
                <Award size={18} />
                <span className="hidden sm:inline">Certifications</span>
              </TabsTrigger>
              <TabsTrigger value="testimonials" className="flex items-center gap-2">
                <MessageSquare size={18} />
                <span className="hidden sm:inline">Témoignages</span>
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl mb-6">Informations personnelles</h2>
                  <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSaveProfile(); }}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Nom complet</Label>
                        <Input
                          id="name"
                          value={profile.name}
                          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="title">Titre professionnel</Label>
                        <Input
                          id="title"
                          value={profile.title}
                          onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          value={profile.phone}
                          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Localisation</Label>
                        <Input
                          id="location"
                          value={profile.location}
                          onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="bio">Biographie</Label>
                      <Textarea
                        id="bio"
                        value={profile.bio}
                        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                        className="mt-2 min-h-[150px]"
                      />
                    </div>
                    <Button type="submit" size="lg">
                      <Save className="mr-2" size={20} />
                      Sauvegarder les modifications
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl">Gestion des projets</h2>
                  <Button>
                    <Edit className="mr-2" size={18} />
                    Nouveau projet
                  </Button>
                </div>

                <div className="grid gap-4">
                  {projects.map((project) => (
                    <Card key={project.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-xl mb-2">{project.title}</h3>
                            <span className={`px-3 py-1 rounded-full text-sm ${
                              project.status === 'published' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {project.status === 'published' ? 'Publié' : 'Brouillon'}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="mr-2" size={16} />
                              Voir
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="mr-2" size={16} />
                              Modifier
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleDeleteProject(project.id)}
                            >
                              <Trash2 className="mr-2" size={16} />
                              Supprimer
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Stack Tab */}
            <TabsContent value="stack">
              <Card>
                <CardContent className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl">Technologies & Compétences</h2>
                    <Button>
                      <Edit className="mr-2" size={18} />
                      Ajouter une technologie
                    </Button>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg">Frontend</h3>
                        <Button variant="ghost" size="sm">
                          <Edit size={16} />
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                          <span key={tech} className="px-3 py-2 bg-white rounded-lg text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg">Backend</h3>
                        <Button variant="ghost" size="sm">
                          <Edit size={16} />
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["Node.js", "Python", "Express", "Django", "PostgreSQL"].map((tech) => (
                          <span key={tech} className="px-3 py-2 bg-white rounded-lg text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Certifications Tab */}
            <TabsContent value="certifications">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl">Certifications</h2>
                  <Button>
                    <Edit className="mr-2" size={18} />
                    Ajouter une certification
                  </Button>
                </div>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {["AWS Certified Solutions Architect", "Professional Scrum Master I", "React Advanced Certification"].map((cert, index) => (
                        <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h3 className="text-lg">{cert}</h3>
                            <p className="text-sm text-gray-600">2024-2025</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Edit size={16} />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Testimonials Tab */}
            <TabsContent value="testimonials">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl">Témoignages clients</h2>
                  <Button>
                    <Edit className="mr-2" size={18} />
                    Ajouter un témoignage
                  </Button>
                </div>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {[
                        { name: "Marie Lambert", company: "TechStart" },
                        { name: "Pierre Dubois", company: "InnoWeb" },
                        { name: "Sophie Martin", company: "Digital Solutions" }
                      ].map((testimonial, index) => (
                        <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h3 className="text-lg">{testimonial.name}</h3>
                            <p className="text-sm text-gray-600">{testimonial.company}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye size={16} />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit size={16} />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
