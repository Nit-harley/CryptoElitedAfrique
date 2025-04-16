import React, { useState } from 'react';
import { ArrowRight, Users, Award, BookOpen, TrendingUp, Youtube } from 'lucide-react';
import CountUp from "react-countup";


export default function Home() {
  const [showTotalEssentiel, setShowTotalEssentiel] = useState(false);
const [showTotalPremium, setShowTotalPremium] = useState(false);
  return (
    <div className="pt-16">
    {/* Hero Section */}
    <section className="relative bg-gradient-to-r from-gray-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Titre principal */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Devenez un Expert en Cryptomonnaies
          </h1>
  
          {/* Sous-titre */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Le Crypto Elite d'Afrique est une formation avancée de 3 mois vous permettant de devenir un véritable expert des cryptomonnaies, peu importe votre niveau de base !
          </p>
  
          {/* Boutons d'action */}
          <div className="relative inline-block flex items-center justify-center">
    {/* Flèches animées à gauche */}
    <div className="hidden sm:block absolute -left-10 top-1/2 transform -translate-y-1/2 animate-bounce">
      <svg
        className="h-6 w-6 text-[#fd5f05]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
      </svg>
    </div>
    {/* Bouton principal */}
    <a
      href="#program-details"
      className="inline-flex items-center bg-[#fd5f05] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e54d00] transition-colors"
    >
      Découvrez le Programme
    </a>
    {/* Flèches animées à droite */}
    <div className="hidden sm:block absolute -right-10 top-1/2 transform -translate-y-1/2 animate-bounce">
      <svg
        className="h-6 w-6 text-[#fd5f05]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
      </svg>
    </div>
  </div>
  {/* Flèche vers le bas */}
  <div className="mt-8 flex justify-center">
    <div className="animate-bounce">
      <svg
        className="h-6 w-6 text-[#fd5f05] sm:h-8 sm:w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
  
        </div>
      </div>
    </section>
     
     {/* Stats Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
      <div>
        <div className="text-[#fd5f05] mb-2">
          <Users className="h-8 w-8 mx-auto" />
        </div>
        <div className="text-3xl font-bold mb-2">
          <CountUp start={0} end={20} duration={20} suffix="+" />
        </div>
        <div className="text-gray-600">Experts Formés</div>
      </div>
      <div>
        <div className="text-[#fd5f05] mb-2">
          <Award className="h-8 w-8 mx-auto" />
        </div>
        <div className="text-3xl font-bold mb-2">
          <CountUp start={0} end={3} duration={25} />
        </div>
        <div className="text-gray-600">Éditions Réussies</div>
      </div>
      <div>
        <div className="text-[#fd5f05] mb-2">
          <BookOpen className="h-8 w-8 mx-auto" />
        </div>
        <div className="text-3xl font-bold mb-2">
          <CountUp start={0} end={90} duration={10} suffix="%" />
        </div>
        <div className="text-gray-600">Taux de Réussite</div>
      </div>
      <div>
        <div className="text-[#fd5f05] mb-2">
          <TrendingUp className="h-8 w-8 mx-auto" />
        </div>
        <div className="text-3xl font-bold mb-2">
          <CountUp start={0} end={24} duration={20} suffix="/7" />
        </div>
        <div className="text-gray-600">Support Continu</div>
      </div>
    </div>
  </div>
</section>

      {/* Why Crypto Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Choisir le Crypto Elite d’Afrique ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Combattre la Désinformation pour Mieux Vous Protéger</h3>
              <p className="text-gray-600"><strong>Le monde des cryptomonnaies est souvent mal compris.</strong> <br /> <br /> Beaucoup confondent cryptomonnaies et trading, avec une mauvaise comprehension du monde financier et <strong>une appetie vorace de gain rapide et d'argent facile,</strong> ce qui les exposes aux arnaques et à des pertes financières importantes. <br /> <br /> Le Crypto Elite d’Afrique vous donne les informations justes et précises, <strong>vous aidant à éviter les erreurs courantes et les jugements erronés.</strong> <br /> <br />
                <strong>Vous apprendrez à différencier les opportunités légitimes des pièges</strong>, tout en développant une compréhension claire et objective de cet écosystème en pleine expansion.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Une Formation Unique en Profondeur</h3>
              <p className="text-gray-600"> <strong>Contrairement aux autres programmes de formations</strong> qui se limitent très souvent aux aspects spéculatifs ou financiers, le Crypto Elite d’Afrique explore les cryptomonnaies dans leur totalité : <br /> <br />

<strong>✓Utilité fondamentale : </strong>Comprenez pourquoi ces technologies changent le monde. <br />
<strong>✓ Contexte élargi : </strong>Plongez dans l’histoire, l’économie, la géopolitique, et les aspects techniques des cryptomonnaies. <br />
<strong>✓ Approche intégrée :</strong> Développez un mindset d’expert avec des stratégies solides pour l’investissement et l’adoption des cryptos. <br /> <br />
Cette formation ne vous donne pas seulement des compétences techniques, <strong>elle vous offre une vision globale et approfondie</strong>, vous permettant de devenir un véritable expert. Beaucoup de nos apprenants, même ceux ayant déjà suivi d’autres formations crypto, réalisent combien ils ignoraient avant de rejoindre notre programme.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Un Accompagnement Personnalisé sur 3 Mois</h3>
              <p className="text-gray-600"><strong>Chez Crypto Afrique Futur, nous croyons en un apprentissage guidé et interactif :</strong> <br /> <br />

             <strong>✓ Cours en direct : </strong> Pas de vidéos préenregistrées ! Nous avançons à vos côtés, avec un réel accompagnement, étape par étape. <br />
<strong>✓ Mix Présentiel et En Ligne :</strong> Choisissez le format qui vous convient le mieux, tout en bénéficiant d’un accès continu à nos contenus. <br />
<strong>✓ Plateforme de Formation Exclusive :</strong> Accédez aux rediffusions des cours, aux résumés détaillés, et aux supports théoriques et pratiques pour revoir les notions clés. <br /> <br />
Nous sommes avec vous main dans la main, pour transformer vos connaissances et vous guider vers l’expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/maphoto.jpg"
                alt="NGUEMBHYT Nit harley"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Votre Formateur</h2>
              <h3 className="text-xl font-semibold text-[#fd5f05] mb-4">NGUEMBHYT Nit harley</h3>
              <p className="text-gray-600 mb-6">
                Fondateur de Crypto Afrique Futur et expert reconnu dans le vaste domaine de la technologies blockchain et des cryptomonnaies. Conférencier, Auteur du livre "De Sceptique À Passionné Par les Cryptomonnaies" et formateur de plus de 400 apprenants à travers l'Afrique. 
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Award className="h-5 w-5 text-[#fd5f05] mr-2" />
                  <span>5+ années d'expérience</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-[#fd5f05] mr-2" />
                  <span>400+ étudiants formés</span>
                </li>
                <li className="flex items-center">
                  <BookOpen className="h-5 w-5 text-[#fd5f05] mr-2" />
                  <span>Auteur et conférencier reconnu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Editions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Éditions Précédentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/ceai1.jpg"
                alt="Première édition"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">1ère Édition</h3>
                <p className="text-gray-600">8 étudiants formés avec succès</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="\ceai2.jpg"
                alt="Deuxième édition"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">2ème Édition</h3>
                <p className="text-gray-600">+10 étudiants certifiés</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="\cea3.jpg"
                alt="Troisième édition"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">3ème Édition</h3>
                <p className="text-gray-600">7 étudiants formés avec succès</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">Ressources Gratuites</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative w-full pb-[56.25%]">
        <iframe
          src="https://www.youtube.com/embed/b8dF9ElCt-k?si=f7V8oUsDCida837h"
          title="Formation Gratuite en Cryptomonnaies"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
        ></iframe>
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-4">Formation Gratuite en Cryptomonnaies</h3>
        <p className="text-gray-600 mb-6">
          Commencez votre voyage dans l'univers des cryptomonnaies avec nos ressources gratuites. Découvrez les bases et décidez si vous souhaitez approfondir vos connaissances avec notre programme complet.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <BookOpen className="h-5 w-5 text-[#fd5f05] mr-2" />
            <span>Livre "De Sceptique À Passionné Par les Cryptomonnaies"</span>
          </div>
          <div className="flex items-center">
            <Youtube className="h-5 w-5 text-[#fd5f05] mr-2" />
            <span>Contenu régulier sur notre chaîne YouTube</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Pricing Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-gray-800">
        Rejoignez le mouvement Crypto Elite d’Afrique
      </h2>
      <p className="text-lg text-gray-600 mt-4">
        Deux options pour deux niveaux d’engagement. Choisissez la formule qui correspond à vos ambitions.
      </p>
    </div>

    {/* Pricing Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* ESSENTIELLE */}
      <div className="bg-white border-2 border-[#1D4ED8] rounded-2xl shadow-xl p-8 relative hover:scale-[1.02] transition">
        <div className="absolute top-0 left-0 bg-[#1D4ED8] text-white px-4 py-1 text-sm font-semibold rounded-br-xl">
          Essentielle
        </div>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Formation 100% en ligne, sans accompagnement
        </h3>
        <div className="text-center mb-4">
          <p className="text-4xl font-extrabold text-[#1D4ED8]">45,000 FCFA</p>
          <p className="text-sm text-gray-500">par mois sur 3 mois</p>
        </div>
        <div className="text-center mb-4">
          <button
            onClick={() => setShowTotalEssentiel(!showTotalEssentiel)}
            className="text-sm text-blue-600 underline"
          >
            {showTotalEssentiel ? "Masquer le total" : "Voir le coût total"}
          </button>
          {showTotalEssentiel && (
            <p className="text-sm mt-1 text-gray-700">Total : 135,000 FCFA</p>
          )}
        </div>
        <ul className="space-y-4 text-gray-600 mb-8">
          <li>✅ Accès à 100% des vidéos pré-enregistrées</li>
          <li>✅ Apprenez à votre rythme, sans contrainte</li>
          <li>✅ Contenu structuré en 3 modules clairs</li>
          <li>✅ Certificat & test final (optionnels, payants)</li>
        </ul>
        <div className="text-center">
          <a
            href="https://api.whatsapp.com/send?phone=%2B24107976941&text=Bonjour%2C%20je%20souhaite%20m'inscrire%20à%20la%20Formule%20Essentielle"
            className="bg-[#1D4ED8] text-white font-bold px-8 py-4 rounded-full hover:bg-[#153da2] transition"
          >
            S'inscrire
          </a>
        </div>
      </div>

      {/* PREMIUM */}
      <div className="bg-white border-2 border-[#FD5F05] rounded-2xl shadow-xl p-8 relative hover:scale-[1.02] transition">
        <div className="absolute top-0 left-0 bg-[#FD5F05] text-white px-4 py-1 text-sm font-semibold rounded-br-xl">
          Premium
        </div>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Formation complète avec accompagnement personnalisé
        </h3>
        <div className="text-center mb-4">
          <p className="text-4xl font-extrabold text-[#FD5F05]">160,000 FCFA</p>
          <p className="text-sm text-gray-500">par mois sur 3 mois</p>
        </div>
        <div className="text-center mb-4">
          <button
            onClick={() => setShowTotalPremium(!showTotalPremium)}
            className="text-sm text-orange-600 underline"
          >
            {showTotalPremium ? "Masquer le total" : "Voir le coût total"}
          </button>
          {showTotalPremium && (
            <p className="text-sm mt-1 text-gray-700">Total : 500,000 FCFA</p>
          )}
        </div>
        <ul className="space-y-4 text-gray-600 mb-8">
          <li>✅ Tous les avantages de l'offre Essentielle</li>
          <li>✅ Accompagnement personnalisé chaque semaine</li>
          <li>✅ Groupe privé et accès direct à l’équipe pédagogique</li>
          <li>✅ Certificat officiel et test de fin de formation inclus</li>
          <li>✅ Accès à vie à la plateforme de formation</li>
        </ul>
        <div className="text-center">
          <a
            href="https://api.whatsapp.com/send?phone=%2B24107976941&text=Bonjour%2C%20je%20souhaite%20m'inscrire%20à%20la%20Formule%20Premium"
            className="bg-[#FD5F05] text-white font-bold px-8 py-4 rounded-full hover:bg-[#e45405] transition"
          >
            S'inscrire
          </a>
        </div>
      </div>
    </div>
  </div>
</section>




      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
          <div className="space-y-6">
            <details className="bg-white rounded-lg shadow-lg p-6">
              <summary className="text-lg font-semibold cursor-pointer">
                Qui peut suivre cette formation ?
              </summary>
              <p className="mt-4 text-gray-600">
                La formation est ouverte à tous, débutants comme initiés. Aucune connaissance préalable en cryptomonnaies n'est requise.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow-lg p-6">
              <summary className="text-lg font-semibold cursor-pointer">
                Quelle est la durée de la formation ?
              </summary>
              <p className="mt-4 text-gray-600">
                La formation dure 3 mois, avec des sessions en ligne et en présentiel.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow-lg p-6">
              <summary className="text-lg font-semibold cursor-pointer">
                Comment se déroulent les cours ?
              </summary>
              <p className="mt-4 text-gray-600">
                Les cours sont dispensés en format hybride : sessions en ligne et présentielles, avec un suivi personnalisé.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow-lg p-6">
              <summary className="text-lg font-semibold cursor-pointer">
                Quelles sont les jours et les horaires de formation ?
              </summary>
              <p className="mt-4 text-gray-600">
                La formation se déroule le samedi et le dimanche, de 15H30 à 17H30 pour les personnes en presentiel et de 18H00 à 20H00 pour les personnes en ligne. <br /> En effet, les jours de semaines permettent les revisions, et des seances privées peuvent etre sollicité si necessaire.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#fd5f05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à Devenir un Expert en Cryptomonnaies ?
          </h2>
          <p className="text-xl text-white mb-8">
            Rejoignez la 4ème édition du Crypto Elite d'Afrique
          </p>
          <a
           href="https://api.whatsapp.com/send?phone=%2B24107976941&text=Bonjour%2C%20je%20voudrais%20m%27inscrire%20%C3%A0%20la%204%C3%A8me%20%C3%A9dition%20du%20Crypto%20Elite%20d%27Afrique"
            className="inline-block bg-white text-[#fd5f05] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            S'inscrire Maintenant
          </a>
        </div>
      </section>
    </div>
  );
}