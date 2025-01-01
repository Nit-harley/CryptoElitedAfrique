import React from 'react';
import { Target, Users, Globe, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            À Propos de Nous
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez Crypto Afrique Futur et notre vision pour l'Afrique
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Vision</h2>
              <p className="text-gray-600 mb-6">
                Crypto Afrique Futur est né d'une vision audacieuse : démocratiser l'accès aux cryptomonnaies en Afrique et former la prochaine génération d'experts du domaine.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Target className="h-6 w-6 text-[#fd5f05] mr-3" />
                  <span>Éduquer et former les leaders de demain</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-[#fd5f05] mr-3" />
                  <span>Créer une communauté d'experts en crypto</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-[#fd5f05] mr-3" />
                  <span>Positionner l'Afrique dans la révolution blockchain</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/imagevision.jpg"
                alt="Notre vision"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Fondateur</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              NGUEMBHYT Nit harley, visionnaire et expert en cryptomonnaies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/maphoto.jpg"
                alt="NGUEMBHYT Nit harley"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-600 mb-6">
                Passionné par la technologie blockchain et son potentiel pour l'Afrique, NGUEMBHYT Nit harley a fondé Crypto Afrique Futur avec une mission claire : rendre les cryptomonnaies accessibles à tous les Africains.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <BookOpen className="h-6 w-6 text-[#fd5f05] mr-3" />
                  <span>Auteur de "De Sceptique À Passionné Par les Cryptomonnaies"</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-[#fd5f05] mr-3" />
                  <span>Plus de 400 étudiants formés</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-[#fd5f05] mr-3" />
                  <span>Conférencier international</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Resources Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">Ressources Payantes et Gratuites</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">Formation Gratuite</h3>
        <div className="relative w-full pb-[56.25%] mb-4">
          <iframe
            src="https://www.youtube.com/embed/b8dF9ElCt-k?si=f7V8oUsDCida837h"
            title="Formation Gratuite en Cryptomonnaies"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg"
          ></iframe>
        </div>
        <p className="text-gray-600">
          Commencez votre voyage dans l'univers des cryptomonnaies avec notre formation gratuite.
        </p>
        <a
          href="https://youtu.be/b8dF9ElCt-k?si=_9jl7znz7L402XUV"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block"
        >
          Visionner la Formation
        </a>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">Livre</h3>
        <img
          src="/livre1.jpg"
          alt="Livre De Sceptique À Passionné"
          className="w-full h-70 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-600">
          Découvrez l'histoire complète dans "De Sceptique À Passionné Par les Cryptomonnaies"
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=%2B24107976941&context=ARDitGLoGOK3cBCqVGYoeIMhvGoan8JkAczlzu1mM868nyW6_g8wnXXEdCSAKnAcCNqMBjblMTGltULkNXu4Ai9x0GeX53YIlvU80D7f5eo3qI7kVTd2_i9kUozLKY6_jKkGYDKC_w7Qnb__3Kuy58E2uQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawHhMaVleHRuA2FlbQIxMAABHejG-cod0nAlo_yI0wE2QI_HfJe7DAktXucDacBjrXv9MtBc4wR7tZmBuQ_aem_gKyBZhBq94k0QBOlvN2OAg"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 inline-block"
        >
          Acheter le Livre
        </a>
      </div>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contactez-nous</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Adresse</h3>
              <p className="text-gray-600">Gabon, Libreville - Ancienne Sobraga en face de multiPress</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <p className="text-gray-600">cryptoafriquefutur@gmail.com</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Téléphone</h3>
              <p className="text-gray-600">Whatsapp : +241 77 97 69 41</p> 
              <p className="text-gray-600">Appel : +241 66 00 24 01</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}