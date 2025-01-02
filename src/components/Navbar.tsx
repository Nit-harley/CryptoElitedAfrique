import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Ferme le menu
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={handleLinkClick}>
              <img
                src="/crypto.png"
                alt="Crypto Elite d'Afrique"
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#fd5f05] transition-colors">
              Accueil
            </Link>
            <Link to="/programme" className="text-gray-700 hover:text-[#fd5f05] transition-colors">
              Programme
            </Link>
            <Link to="/certifies" className="text-gray-700 hover:text-[#fd5f05] transition-colors">
              Certifiés
            </Link>
            <Link to="/quiz" className="text-gray-700 hover:text-[#fd5f05] transition-colors">
              Quiz
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#fd5f05] transition-colors">
              À propos
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=%2B24160422342&context=ARDitGLoGOK3cBCqVGYoeIMhvGoan8JkAczlzu1mM868nyW6_g8wnXXEdCSAKnAcCNqMBjblMTGltULkNXu4Ai9x0GeX53YIlvU80D7f5eo3qI7kVTd2_i9kUozLKY6_jKkGYDKC_w7Qnb__3Kuy58E2uQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawHhMaVleHRuA2FlbQIxMAABHejG-cod0nAlo_yI0wE2QI_HfJe7DAktXucDacBjrXv9MtBc4wR7tZmBuQ_aem_gKyBZhBq94k0QBOlvN2OAgt"
              className="bg-[#fd5f05] text-white px-4 py-2 rounded-md hover:bg-[#e54d00] transition-colors"
            >
              S'inscrire
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-[#fd5f05]"
              onClick={handleLinkClick}
            >
              Accueil
            </Link>
            <Link
              to="/programme"
              className="block px-3 py-2 text-gray-700 hover:text-[#fd5f05]"
              onClick={handleLinkClick}
            >
              Programme
            </Link>
            <Link
              to="/certifies"
              className="block px-3 py-2 text-gray-700 hover:text-[#fd5f05]"
              onClick={handleLinkClick}
            >
              Certifiés
            </Link>
            <Link
              to="/quiz"
              className="block px-3 py-2 text-gray-700 hover:text-[#fd5f05]"
              onClick={handleLinkClick}
            >
              Quiz
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-[#fd5f05]"
              onClick={handleLinkClick}
            >
              À propos
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=%2B24160422342&context=ARDitGLoGOK3cBCqVGYoeIMhvGoan8JkAczlzu1mM868nyW6_g8wnXXEdCSAKnAcCNqMBjblMTGltULkNXu4Ai9x0GeX53YIlvU80D7f5eo3qI7kVTd2_i9kUozLKY6_jKkGYDKC_w7Qnb__3Kuy58E2uQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawHhMaVleHRuA2FlbQIxMAABHejG-cod0nAlo_yI0wE2QI_HfJe7DAktXucDacBjrXv9MtBc4wR7tZmBuQ_aem_gKyBZhBq94k0QBOlvN2OAgt"
              className="block px-3 py-2 text-[#fd5f05] font-medium"
              onClick={handleLinkClick}
            >
              S'inscrire
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
