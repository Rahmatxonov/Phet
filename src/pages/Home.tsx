import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Magnet, 
  Lightbulb, 
  Waves, 
  Thermometer,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Atom
} from 'lucide-react';

const simulations = [
  {
    title: "Mexanika",
    icon: <Waves className="w-12 h-12 text-blue-500" />,
    description: "Harakat, kuch va energiya bo'yicha interaktiv simulyatsiyalar",
    topics: ["Kinematika", "Dinamika", "Energiya", "Tebranishlar"]
  },
  {
    title: "Elektr va Magnit",
    icon: <Magnet className="w-12 h-12 text-purple-500" />,
    description: "Elektr va magnit maydonlari bo'yicha tajribalar",
    topics: ["Elektrostatika", "Tok", "Magnetizm", "Elektromagnit induksiya"]
  },
  {
    title: "Optika",
    icon: <Lightbulb className="w-12 h-12 text-yellow-500" />,
    description: "Yorug'lik va optik hodisalar simulyatsiyalari",
    topics: ["Geometrik optika", "To'lqin optikasi", "Interferensiya", "Difraksiya"]
  },
  {
    title: "Termodinamika",
    icon: <Thermometer className="w-12 h-12 text-red-500" />,
    description: "Issiqlik va termodinamik jarayonlar",
    topics: ["Issiqlik uzatish", "Gaz qonunlari", "Termodinamika qonunlari"]
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Fizikani Interaktiv Tarzda O'rganing
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Zamonaviy simulyatsiyalar orqali fizika qonunlarini kashf eting va 
              murakkab tushunchalarni oson o'zlashtiring
            </p>
            <Link 
              to="/simulation" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Simulyatsiyalarni ko'rish
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {simulations.map((sim, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex flex-col items-center text-center">
                {sim.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{sim.title}</h3>
                <p className="text-gray-600 mb-4">{sim.description}</p>
                <ul className="text-sm text-gray-500">
                  {sim.topics.map((topic, i) => (
                    <li key={i} className="mb-1">• {topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Nima uchun PhysicsLab?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interaktiv Ta'lim</h3>
              <p className="text-gray-600">Nazariy bilimlarni amaliy tajribalar bilan mustahkamlang</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Keng Qamrovli</h3>
              <p className="text-gray-600">Fizikaning barcha asosiy bo'limlari bo'yicha simulyatsiyalar</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Atom className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Zamonaviy Yondashuv</h3>
              <p className="text-gray-600">Eng so'nggi texnologiyalar asosida yaratilgan simulyatsiyalar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;