import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: "Qu'est-ce que bitcoin ?",
    options: [
      "Une monnaie numérique décentralisée",
      "Une banque en ligne",
      "Un système de paiement centralisé",
      "Une application mobile"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Qu'est-ce que la blockchain ?",
    options: [
      "Un réseau social",
      "Un registre distribué et immuable",
      "Un logiciel antivirus",
      "Une application de trading"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Que signifie DeFi ?",
    options: [
      "Digital Finance",
      "Decentralized Factory",
      "Decentralized Finance",
      "Digital Factory"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Qu'est-ce qu'un wallet crypto ?",
    options: [
      "Un portefeuille physique",
      "Un compte bancaire",
      "Un portefeuille numérique pour stocker des cryptomonnaies",
      "Une carte de crédit"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Qu'est-ce que le minage de cryptomonnaies ?",
    options: [
      "L'extraction de minerais",
      "La création de nouveaux tokens",
      "Le processus de validation des transactions",
      "L'achat de cryptomonnaies"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "Quel est le nombre maximal de Bitcoins pouvant être créés ?",
    options: [
      "21 millions",
      "100 millions",
      "1 milliard",
      "Illimité"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "Quel terme décrit la réduction périodique des récompenses de minage de Bitcoin ?",
    options: [
      "Mining Split",
      "Halving",
      "Blockchain Reset",
      "Reward Adjustment"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Quel algorithme est utilisé par Bitcoin pour sécuriser son réseau ?",
    options: [
      "Proof of Stake (PoS)",
      "Proof of Work (PoW)",
      "Delegated Proof of Stake (DPoS)",
      "Proof of Authority (PoA)"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Qu'est-ce qu'une adresse publique en cryptomonnaie ?",
    options: [
      "Un code secret pour accéder à son wallet",
      "Une clé utilisée pour envoyer et recevoir des cryptomonnaies",
      "Un numéro d'identification gouvernemental",
      "Un mot de passe pour accéder à une blockchain"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Quelle cryptomonnaie est souvent appelée l'« or numérique » ?",
    options: [
      "Ethereum",
      "Ripple",
      "Bitcoin",
      "Litecoin"
    ],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "Qu'est-ce qu'un fork en blockchain ?",
    options: [
      "Un type de transaction rapide",
      "Une division de la blockchain en deux chaînes distinctes",
      "Un système de validation alternatif",
      "Un moyen de créer des wallets"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Qu'est-ce qu'un stablecoin ?",
    options: [
      "Une cryptomonnaie dont la valeur est stable par rapport à un actif sous-jacent",
      "Une cryptomonnaie qui augmente toujours en valeur",
      "Une cryptomonnaie protégée par des assurances",
      "Une cryptomonnaie utilisée uniquement pour le trading"
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "Qu'est-ce que le staking dans l'écosystème crypto ?",
    options: [
      "Un processus de minage physique",
      "Le verrouillage de cryptomonnaies pour participer à la validation des transactions",
      "Un type d'investissement risqué",
      "Une technique pour pirater un réseau"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Quel est le rôle des smart contracts sur Ethereum ?",
    options: [
      "Créer de nouveaux tokens",
      "Automatiser l'exécution d'accords sans intermédiaire",
      "Augmenter la vitesse des transactions",
      "Assurer la confidentialité des transactions"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "Que signifie un 51% attack dans une blockchain ?",
    options: [
      "Une réduction de moitié des récompenses des mineurs",
      "Une situation où plus de 51% des tokens sont brûlés",
      "Un contrôle majoritaire d'une blockchain par un groupe malveillant",
      "Une mise à jour qui affecte 51% des utilisateurs"
    ],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "Qu'est-ce qu'un noeud dans le réseau Bitcoin ?",
    options: [
      "Un point de transaction dans une banque centrale",
      "Un ordinateur connecté au réseau Bitcoin qui stocke une copie de la blockchain",
      "Une application mobile permettant d'envoyer des Bitcoin",
      "Un type de clé privée utilisé pour sécuriser les wallets"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "Quel problème spécifique Bitcoin cherche-t-il à résoudre dans le système financier ?",
    options: [
      "La lenteur des transactions interbancaires",
      "La double dépense dans les paiements numériques",
      "La régulation excessive par les gouvernements",
      "La volatilité des monnaies fiduciaires"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Qu'est-ce qu'un token ERC-20 sur Ethereum ?",
    options: [
      "Un type de jeton non fongible",
      "Un standard technique pour créer des smart contracts",
      "Un standard technique pour créer des tokens fongibles",
      "Un outil de staking sur Ethereum"
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    question: "Qu'est-ce que la preuve d'enjeu (Proof of Stake) améliore par rapport à la preuve de travail (Proof of Work) ?",
    options: [
      "La vitesse de création des blocs",
      "L'utilisation énergétique et la scalabilité",
      "La sécurité des smart contracts",
      "La création automatique de stablecoins"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Quel est l'objectif principal du Lightning Network sur Bitcoin ?",
    options: [
      "Créer de nouveaux Bitcoin rapidement",
      "Permettre des microtransactions rapides et à faible coût",
      "Augmenter la décentralisation de la blockchain",
      "Assurer une gouvernance décentralisée du réseau"
    ],
    correctAnswer: 1
  },
  {
    id: 21,
    question: "Qu'est-ce qu'une clé privée en cryptomonnaie ?",
    options: [
      "Un mot de passe pour se connecter à un wallet en ligne",
      "Une clé unique permettant d'accéder et de gérer les fonds d'un wallet",
      "Un code partagé avec d'autres utilisateurs pour recevoir des paiements",
      "Une méthode utilisée pour miner de nouvelles cryptomonnaies"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "Comment une adresse Bitcoin est-elle générée ?",
    options: [
      "En combinant une clé publique et une clé privée via un algorithme cryptographique",
      "En demandant une nouvelle adresse à une banque",
      "En envoyant une requête au réseau Bitcoin",
      "En utilisant directement la clé privée comme adresse"
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    question: "Quelle est la principale différence entre un DEX (échange décentralisé) et un CEX (échange centralisé) ?",
    options: [
      "Un DEX nécessite un KYC obligatoire, contrairement à un CEX",
      "Un CEX est basé sur des smart contracts, tandis qu'un DEX ne l'est pas",
      "Un DEX permet aux utilisateurs de garder le contrôle de leurs clés privées, contrairement à un CEX",
      "Un CEX ne permet pas le trading de tokens ERC-20, contrairement à un DEX"
    ],
    correctAnswer: 2
  },
  {
    id: 24,
    question: "Qu'est-ce qu'un rug pull dans l'écosystème crypto ?",
    options: [
      "Une attaque de 51% sur une blockchain",
      "Une fraude où les développeurs abandonnent un projet après avoir collecté des fonds",
      "Un processus de validation malveillant dans un consensus PoS",
      "Un bug technique affectant les smart contracts"
    ],
    correctAnswer: 1
  },
  {
    id: 25,
    question: "Qu'est-ce que la TVL (Total Value Locked) dans un projet DeFi ?",
    options: [
      "La valeur totale des transactions effectuées sur une blockchain",
      "La valeur totale des actifs bloqués dans un protocole DeFi",
      "Le montant maximal pouvant être échangé sur un DEX",
      "La valeur totale des stablecoins utilisés pour sécuriser le réseau"
    ],
    correctAnswer: 1
  }  

];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerClick = (selectedOption: number) => {
    setSelectedAnswer(selectedOption);
    setShowExplanation(true);
    
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Testez Vos Connaissances
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Évaluez votre niveau en cryptomonnaies avec notre quiz
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {showScore ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Quiz Terminé !</h2>
                <p className="text-xl mb-6">
                  Votre score : {score} sur {questions.length}
                </p>
                {score === questions.length ? (
                  <p className="text-green-600 mb-6">Excellent ! Vous maîtrisez les bases des cryptomonnaies !</p>
                ) : score >= questions.length / 2 ? (
                  <p className="text-[#fd5f05] mb-6">Bon travail ! Continuez d'apprendre pour progresser.</p>
                ) : (
                  <p className="text-red-600 mb-6">Vous pouvez améliorer vos connaissances en suivant notre formation !</p>
                )}
                <button
                  onClick={resetQuiz}
                  className="bg-[#fd5f05] text-white px-6 py-3 rounded-full hover:bg-[#e54d00] transition-colors"
                >
                  Recommencer le Quiz
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">
                    Question {currentQuestion + 1}/{questions.length}
                  </h2>
                  <p className="text-lg mb-6">{questions[currentQuestion].question}</p>
                  <div className="space-y-4">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerClick(index)}
                        disabled={showExplanation}
                        className={`w-full text-left p-4 rounded-lg border transition-colors ${
                          showExplanation
                            ? index === questions[currentQuestion].correctAnswer
                              ? 'bg-green-100 border-green-500'
                              : selectedAnswer === index
                              ? 'bg-red-100 border-red-500'
                              : 'bg-gray-50 border-gray-200'
                            : 'hover:bg-gray-50 border-gray-200'
                        }`}
                      >
                        <div className="flex items-center">
                          {showExplanation && index === questions[currentQuestion].correctAnswer && (
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          )}
                          {showExplanation && selectedAnswer === index && index !== questions[currentQuestion].correctAnswer && (
                            <XCircle className="h-5 w-5 text-red-500 mr-2" />
                          )}
                          {option}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                {showExplanation && (
                  <div className="text-center">
                    <button
                      onClick={handleNextQuestion}
                      className="bg-[#fd5f05] text-white px-6 py-3 rounded-full hover:bg-[#e54d00] transition-colors"
                    >
                      {currentQuestion === questions.length - 1 ? 'Voir le Résultat' : 'Question Suivante'}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}