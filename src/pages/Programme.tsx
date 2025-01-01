import React from 'react';
import { Target, Users, Globe, Brain, Award, BookOpen } from 'lucide-react';

export default function Programme() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Programme de Formation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un parcours complet de 3 mois pour maîtriser les cryptomonnaies à travers la methode FPS.
          </p>
        </div>
      </section>

      {/* Programme Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <BookOpen className="h-12 w-12 text-[#fd5f05] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Fondamentaux</h3>
              <p className="text-gray-600">Mois 1 : Bases solides en blockchain et cryptomonnaies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Award className="h-12 w-12 text-[#fd5f05] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Pratique</h3>
              <p className="text-gray-600">Mois 2 : Analyse et utilisation des plateformes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Brain className="h-12 w-12 text-[#fd5f05] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Stratégie</h3>
              <p className="text-gray-600">Mois 3 : Mindset et stratégies d'investissement</p>
            </div>
          </div>

          {/* Detailed Programme */}
          <div className="space-y-16">
            {/* Mois 1 */}
            <div>
              <h2 className="text-3xl text-white font-bold mb-8">Mois 1 : Fondamentaux de la Cryptomonnaie et Blockchain</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl text-white font-bold mb-4">Semaine 1 : Introduction à Bitcoin et Contexte Historique</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Cours 1 : Contexte de Bitcoin</li>
                      <li>Cours 2 : Histoire de la monnaie</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl text-white font-bold mb-4">Semaine 2 : Introduction à la Blockchain</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Cours 3 : Blockchain - Définitions et Contexte</li>
                      <li>Cours 4 : Fonctionnement de la Blockchain</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl text-white font-bold mb-4">Semaine 3 : Outils de Base</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Cours 5 : Maîtrise de Trust Wallet</li>
                      <li>Cours 6 : Lightning Network</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl text-white font-bold mb-4">Semaine 4 : Suivi de Transactions et Résumé</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Cours 7 : Explorer de Blockchain</li>
                      <li>Cours 8 : Résumé du Mois 1 et Atelier Q&A</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mois 2 */}
            <div>
              <h2 className="text-3xl text-white font-bold mb-8">Mois 2 : Analyse de Projets et Échanges Pratiques</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl text-white font-bold mb-4">Semaine 1 : Analyse des Cryptomonnaies</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Cours 1 : Introduction à CoinMarketCap</li>
                      <li>Cours 2 : Analyse de Projet Pratique</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl text-white font-bold mb-4">Semaine 2 : Initiation aux DEX</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Cours 3 : Utilisation de PancakeSwap et Uniswap</li>
                      <li>Cours 4 : Cas Pratique d'Apport de Liquidité</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl text-white font-bold mb-4">Semaine 3 : Plateformes d'Échange</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Cours 5 : Introduction à Binance et CoinEx</li>
                      <li>Cours 6 : Transactions Complexes</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl text-white font-bold mb-4">Semaine 4 : Résumé</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Cours 7 : Cas Pratique d'Échange de Crypto</li>
                      <li>Cours 8 : Résumé et Atelier de Fin de Mois</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mois 3 */}
            <div>
              <h2 className="text-3xl text-white font-bold mb-8">Mois 3 : Mindset et Stratégies d'Investissement</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl text-white font-bold mb-4">Semaine 1 : Mindset</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Cours 1 : Développement du Mindset Investisseur</li>
                      <li>Cours 2 : Stratégies d'Investissement Long Terme</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl text-white font-bold mb-4">Semaine 2 : Gestion des Risques</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Cours 3 : Niveaux de Risques</li>
                      <li>Cours 4 : Stratégies Personnalisées</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl text-white font-bold mb-4">Semaine 3 : Cycles de Marché</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Cours 5 : Cycles du Marché Crypto</li>
                      <li>Cours 6 : Suivi de Portefeuille</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl text-white font-bold mb-4">Semaine 4 : Opportunités</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Cours 7 : Opportunités Entrepreneuriales</li>
                      <li>Cours 8 : Résumé et Évaluation Finale</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compétences Acquises */}
          <div className="mt-16">
            <h2 className="text-3xl text-white font-bold mb-8">Compétences Acquises</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl text-[#fd5f05] font-bold mb-4">Compétences Techniques</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Maîtrise des fondamentaux de la blockchain</li>
                  <li>✓ Utilisation avancée des portefeuilles crypto</li>
                  <li>✓ Navigation sur les plateformes d'échange</li>
                  <li>✓ Analyse technique et fondamentale des projets</li>
                  <li>✓ Gestion sécurisée des actifs numériques</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl text-[#fd5f05] font-bold mb-4">Compétences Stratégiques</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Développement d'une stratégie d'investissement</li>
                  <li>✓ Gestion des risques et du portefeuille</li>
                  <li>✓ Identification des opportunités de marché</li>
                  <li>✓ Mindset d'investisseur professionnel</li>
                  <li>✓ Capacité à former et conseiller les autres</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#fd5f05] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à Commencer Votre Formation ?
          </h2>
          <p className="text-xl text-white mb-8">
            Rejoignez la prochaine session et transformez votre avenir
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=%2B24160422342&context=ARDitGLoGOK3cBCqVGYoeIMhvGoan8JkAczlzu1mM868nyW6_g8wnXXEdCSAKnAcCNqMBjblMTGltULkNXu4Ai9x0GeX53YIlvU80D7f5eo3qI7kVTd2_i9kUozLKY6_jKkGYDKC_w7Qnb__3Kuy58E2uQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawHhMaVleHRuA2FlbQIxMAABHejG-cod0nAlo_yI0wE2QI_HfJe7DAktXucDacBjrXv9MtBc4wR7tZmBuQ_aem_gKyBZhBq94k0QBOlvN2OAgt"
            className="inline-block bg-white text-[#fd5f05] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            S'inscrire à la Formation
          </a>
        </div>
      </section>
    </div>
  );
}