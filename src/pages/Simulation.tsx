import React, { useState, useMemo } from 'react';
import { simulations } from '../data/simulations';
import SimulationCard from '../components/SimulationCard';

const categories = {
  all: 'Hammasi',
  mechanics: 'Mexanika',
  waves: "To'lqinlar",
  electricity: 'Elektr',
  light: "Yorug'lik va optika",
  heat: 'Issiqlik va termodinamika',
  quantum: 'Kvant fizikasi',
};

const types = {
  all: 'Hammasi',
  Interaktiv: 'Interaktiv',
  Laboratoriya: 'Laboratoriya',
};

const Simulation = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSimulations = useMemo(() => {
    return simulations.filter((sim) => {
      const matchesCategory =
        selectedCategory === 'all' || sim.categories.includes(selectedCategory);
      const matchesType = selectedType === 'all' || sim.type === selectedType;
      const matchesSearch =
        sim.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sim.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesType && matchesSearch;
    });
  }, [selectedCategory, selectedType, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-24">
      {/* Filters */}
      <div className="bg-white rounded-xl shadow-[0px_5px_17px_1px_rgba(0,_0,_0,_0.1)] p-6 mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Search */}
          <div>
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Qidirish
            </label>
            <input
              type="text"
              id="search"
              className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none p-3"
              placeholder="Simulyatsiya nomini kiriting..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Kategoriya
            </label>
            <select
              id="category"
              className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none p-3"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {Object.entries(categories).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Turi
            </label>
            <select
              id="type"
              className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none p-3"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {Object.entries(types).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Jami:{' '}
          <span className="font-semibold">{filteredSimulations.length}</span> ta
          simulyatsiya
        </p>
      </div>

      {/* Simulations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSimulations.map((simulation) => (
          <SimulationCard key={simulation.id} simulation={simulation} />
        ))}
      </div>

      {/* No results message */}
      {filteredSimulations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Simulyatsiyalar topilmadi.</p>
        </div>
      )}
    </div>
  );
};

export default Simulation;
