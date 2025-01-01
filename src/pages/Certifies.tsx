import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function Certifies() {
  const [searchTerm, setSearchTerm] = useState('');

  // Example certified students data
  const certifiedStudents = [
    { id: 1, name: 'NGAKISSA Gullicya Ruudenne', edition: 1, year: 2024, specialization: '', photo: '/gu.jpg' },
    { id: 2, name: 'NKOUMBA Jude Elysée', edition: 1, year: 2024, specialization: 'Formateur Crypto Afrique Futur', photo: '/jude.jpg' },
    { id: 3, name: 'OKOUYI KONGO Laurent Franck Noel', edition: 1, year: 2024, specialization: 'Finance Décentralisé', photo: '/laurent.jpg' },
    { id: 4, name: 'KALGORA Moua', edition: 1, year: 2024, specialization: '', photo: '/image.png' },
    { id: 5, name: 'TSINGA Nicole', edition: 1, year: 2024, specialization: '', photo: '/nicole.jpg' },
    { id: 6, name: 'DOTONOU Ulrich Djidjoho', edition: 1, year: 2024, specialization: '', photo: '/image.png' },
    { id: 7, name: 'NKOGUE Louis Eddan', edition: 1, year: 2024, specialization: 'Finance Décentralisé', photo: '/louis.jpg' },
    { id: 8, name: 'GUEBEKA Jean Claude', edition: 2, year: 2024, specialization: '', photo: '/jeanclaude.jpg' },
    { id: 9, name: 'Mibessy Gregu Chadrack', edition: 2, year: 2024, specialization: 'Formateur Crypto Afrique Futur', photo: '/shadrack.png' },
    { id: 10, name: 'ZAMPOU Saharatou', edition: 2, year: 2024, specialization: 'Formatrice Crypto Afrique Futur', photo: '/saharatou.jpg' },
    // Add more students as needed
  ];

  const filteredStudents = certifiedStudents.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
  className="relative bg-cover bg-center text-white py-20"
  style={{ backgroundImage: "url('/public/Banniere.png')" }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">Nos Certifiés</h1>
    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
      Découvrez les experts formés par le programme Crypto Elite d'Afrique
      ayant réussi avec succès le test de fin de formation.
    </p>
  </div>
</section>


      {/* Search Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Rechercher un certifié..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fd5f05] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Certified Students Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {filteredStudents.map(student => (
    <div key={student.id} className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center">
        {student.photo ? (
          <img
            src={student.photo}
            alt={student.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
        ) : (
          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-500">
              {student.name.charAt(0)}
            </span>
          </div>
        )}
        <h3 className="text-xl font-bold mb-2">{student.name}</h3>
        <p className="text-gray-600">Édition {student.edition} - {student.year}</p>
        <p className="text-[#fd5f05] font-medium mt-2">
          Spécialisation: {student.specialization || 'Aucune'}
        </p>
      </div>
    </div>
  ))}
</div>


          {filteredStudents.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">Aucun certifié trouvé pour "{searchTerm}"</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}