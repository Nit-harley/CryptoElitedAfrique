import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Crypto Elite d'Afrique</h3>
            <p className="text-gray-400">
              Formation d'excellence en cryptomonnaies propulsée par Crypto Afrique Futur.
            </p>
            <a 
              href="https://cryptoafriquefutur.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center mt-4 text-[#fd5f05] hover:text-[#e54d00] transition-colors"
            >
              Visitez notre site web
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Accueil</a></li>
              <li><a href="/programme" className="text-gray-400 hover:text-white">Programme</a></li>
              <li><a href="/certifies" className="text-gray-400 hover:text-white">Certifiés</a></li>
              <li><a href="/quiz" className="text-gray-400 hover:text-white">Quiz</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">À propos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Gabon, Libreville - Ancienne Sobraga en face de multiPress</li>
              <li>Email: cryptoafriquefutur@gmail.com</li>
              <li>Tel: +241 77 97 69 41</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/cryptoafriquefuturr" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://x.com/CryptoAfriqueF1" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://youtube.com/@cryptoafriquefutur?si=oGo38Xi5ZVQZG3PX" className="text-gray-400 hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/crypto_afrique_futur/" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Crypto Elite d'Afrique. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}