import React from 'react';
import { Menu, X} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/crypto.png"
              alt="Crypto Elite d'Afrique"
              className='h-16 w-auto object-contain'></img>
              
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#fd5f05] transition-colors">Accueil</Link>
            <Link to="/programme" className="text-gray-700 hover:text-[#fd5f05] transition-colors">Programme</Link>
            <Link to="/certifies" className="text-gray-700 hover:text-[#fd5f05] transition-colors">Certifiés</Link>
            <Link to="/quiz" className="text-gray-700 hover:text-[#fd5f05] transition-colors">Quiz</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#fd5f05] transition-colors">À propos</Link>
            <a href="#contact" className="bg-[#fd5f05] text-white px-4 py-2 rounded-md hover:bg-[#e54d00] transition-colors">
              S'inscrire
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-[#fd5f05]">Accueil</Link>
            <Link to="/programme" className="block px-3 py-2 text-gray-700 hover:text-[#fd5f05]">Programme</Link>
            <Link to="/certifies" className="block px-3 py-2 text-gray-700 hover:text-[#fd5f05]">Certifiés</Link>
            <Link to="/quiz" className="block px-3 py-2 text-gray-700 hover:text-[#fd5f05]">Quiz</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-[#fd5f05]">À propos</Link>
            <a href="#contact" className="block px-3 py-2 text-[#fd5f05] font-medium">S'inscrire</a>
          </div>
        </div>
      )}
    </nav>
  );
}