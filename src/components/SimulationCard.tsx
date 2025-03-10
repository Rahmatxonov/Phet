import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Simulation } from '../types';

interface SimulationCardProps {
  simulation: Simulation;
}

const SimulationCard: React.FC<SimulationCardProps> = ({ simulation }) => {
  const getCategoryName = (categoryId: string): string => {
    const categories: Record<string, string> = {
      mechanics: 'Mexanika',
      waves: "To'lqinlar",
      electricity: 'Elektr',
      light: "Yorug'lik va optika",
      heat: 'Issiqlik va termodinamika',
      quantum: 'Kvant fizikasi',
    };

    return categories[categoryId] || categoryId;
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={simulation.imageUrl}
          alt={simulation.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 text-xs rounded-bl-lg">
          {simulation.type}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {simulation.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {simulation.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-4">
          {simulation.categories.map((category, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
            >
              {getCategoryName(category)}
            </span>
          ))}
        </div>
        <a
          href={simulation.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
        >
          Simulyatsiyani ochish <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default SimulationCard;