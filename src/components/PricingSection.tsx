import React, { useState } from "react";

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("individual");
  const [groupSize, setGroupSize] = useState(5);

  const handlePlanChange = (plan) => setSelectedPlan(plan);

  // Tarifs
  const individualMonthly = 100000;
  const registrationFee = 10000;
  const groupDiscountRate = 0.05;
  const personalFollowUpMonthly = 500000;

  const calculateGroupPrice = (size) => {
    const discountMultiplier = Math.floor(size / 5) * groupDiscountRate;
    const discountedMonthly = individualMonthly * (1 - discountMultiplier);
    return Math.max(discountedMonthly, individualMonthly * 0.5); // Limite de réduction : 50%
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Une Formation Unique en Cryptomonnaies
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Choisissez le plan qui correspond le mieux à vos besoins, qu’il s’agisse d’un suivi personnel, de groupe ou individuel.
          </p>
        </div>

        {/* Plan Selector */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-6 py-3 rounded-full text-lg font-bold ${
              selectedPlan === "individual"
                ? "bg-[#FD5F05] text-white"
                : "bg-white text-[#FD5F05] border border-[#FD5F05]"
            }`}
            onClick={() => handlePlanChange("individual")}
          >
            Particuliers
          </button>
          <button
            className={`px-6 py-3 rounded-full text-lg font-bold ${
              selectedPlan === "group"
                ? "bg-[#FD5F05] text-white"
                : "bg-white text-[#FD5F05] border border-[#FD5F05]"
            }`}
            onClick={() => handlePlanChange("group")}
          >
            Entreprises
          </button>
          <button
            className={`px-6 py-3 rounded-full text-lg font-bold ${
              selectedPlan === "personal"
                ? "bg-[#FD5F05] text-white"
                : "bg-white text-[#FD5F05] border border-[#FD5F05]"
            }`}
            onClick={() => handlePlanChange("personal")}
          >
            Suivi Personnel
          </button>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden border-2 border-[#FD5F05]">
          <div className="p-8">
            {selectedPlan === "individual" && (
              <>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                  Tarif pour Particuliers
                </h3>
                <p className="text-center text-gray-600 mb-4">
                  Inscription : <span className="text-[#FD5F05]">10,000 FCFA</span>
                </p>
                <p className="text-4xl font-extrabold text-[#FD5F05] text-center">
                  {individualMonthly.toLocaleString()} FCFA / mois
                </p>
              </>
            )}

            {selectedPlan === "group" && (
              <>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                  Tarif de Groupe (Entreprises)
                </h3>
                <p className="text-center text-gray-600 mb-4">
                  Réduction de 5% pour chaque tranche de 5 personnes.
                </p>
                <div className="text-center mb-4">
                  <label htmlFor="groupSize" className="block text-gray-600 mb-2">
                    Nombre de personnes :
                  </label>
                  <input
                    type="number"
                    id="groupSize"
                    value={groupSize}
                    onChange={(e) => setGroupSize(parseInt(e.target.value, 10) || 5)}
                    min="1"
                    className="w-24 text-center border border-gray-300 rounded-md py-2"
                  />
                </div>
                <p className="text-4xl font-extrabold text-[#FD5F05] text-center">
                  {calculateGroupPrice(groupSize).toLocaleString()} FCFA / mois
                </p>
              </>
            )}

            {selectedPlan === "personal" && (
              <>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                  Suivi Personnel
                </h3>
                <p className="text-center text-gray-600 mb-4">
                  Accompagnement personnalisé pour maximiser votre apprentissage.
                </p>
                <p className="text-4xl font-extrabold text-[#FD5F05] text-center">
                  {personalFollowUpMonthly.toLocaleString()} FCFA / mois
                </p>
              </>
            )}
          </div>
          <div className="bg-[#FD5F05] py-4 text-center text-white">
            <p className="text-sm">
              Dépêchez-vous, les places sont limitées !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
