import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Facebook, MessageCircle } from "lucide-react";
import { portfolioData } from "@/app/data";

export default function Footer() {
  const { contact } = portfolioData;

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href={`mailto:${contact.email}`} className="hover:text-gray-300">
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a href={`tel:${contact.phone}`} className="hover:text-gray-300">
                  {contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{contact.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link href="/about" className="block hover:text-gray-300">
                À propos
              </Link>
              <Link href="/projects" className="block hover:text-gray-300">
                Projets
              </Link>
              <Link href="/stack" className="block hover:text-gray-300">
                Stack Technique
              </Link>
              <Link href="/certifications" className="block hover:text-gray-300">
                Certifications
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Réseaux sociaux</h3>
            <div className="flex gap-4">
              {contact.socialLinks.github && (
                <a
                  href={contact.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
              )}
              {contact.socialLinks.linkedin && (
                <a
                  href={contact.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              )}
              {contact.socialLinks.twitter && (
                <a
                  href={contact.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
              )}
              {contact.socialLinks.facebook && (
                <a
                  href={contact.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
              )}
              {contact.socialLinks.whatsapp && (
                <a
                  href={contact.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={24} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {portfolioData.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
