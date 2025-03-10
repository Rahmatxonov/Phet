import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Magnet,
  Lightbulb,
  Waves,
  Thermometer,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Atom,
} from 'lucide-react';

// Typewriter Effekt
const TypingText = ({ text = '', delay = 50, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const textRef = useRef(null);

  useEffect(() => {
    let index = 0;
    setDisplayedText('');

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="absolute top-0 left-0 whitespace-nowrap overflow-hidden">
        {displayedText}
      </span>

      <span className="opacity-0 select-none">{text}</span>
    </span>
  );
};

const simulations = [
  {
    title: 'Mexanika',
    icon: <Waves className="w-12 h-12 text-blue-500" />,
    description:
      "Harakat, kuch va energiya bo'yicha interaktiv simulyatsiyalar",
    topics: ['Kinematika', 'Dinamika', 'Energiya', 'Tebranishlar'],
  },
  {
    title: 'Elektr va Magnit',
    icon: <Magnet className="w-12 h-12 text-purple-500" />,
    description: "Elektr va magnit maydonlari bo'yicha tajribalar",
    topics: ['Elektrostatika', 'Tok', 'Magnetizm', 'Elektromagnit induksiya'],
  },
  {
    title: 'Optika',
    icon: <Lightbulb className="w-12 h-12 text-yellow-500" />,
    description: "Yorug'lik va optik hodisalar simulyatsiyalari",
    topics: [
      'Geometrik optika',
      "To'lqin optikasi",
      'Interferensiya',
      'Difraksiya',
    ],
  },
  {
    title: 'Termodinamika',
    icon: <Thermometer className="w-12 h-12 text-red-500" />,
    description: 'Issiqlik va termodinamik jarayonlar',
    topics: ['Issiqlik uzatish', 'Gaz qonunlari', 'Termodinamika qonunlari'],
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      {/* Hero Bo'limi */}
      <div className="header bg-gradient-to-r bg-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 opacity-90">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center bg-gray-600 py-10 px-5 rounded-xl opacity-90"
          >
            <h1 className="text-5xl font-bold md:mb-8 md:leading-tight">
              <TypingText text="Fizikani Interaktiv Tarzda O'rganing" />
            </h1>
            <p className="text-lg md:text-xl mb-8 mx-auto leading-relaxed">
              <TypingText
                text="Zamonaviy simulyatsiyalar orqali fizika qonunlarini kashf eting va murakkab tushunchalarni oson o'zlashtiring"
                delay={20}
              />
            </p>

            <Link
              to="/simulation"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Simulyatsiyalarni ko'rish
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Asosiy Kontent */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {simulations.map((sim, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center text-center">
                {sim.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{sim.title}</h3>
                <p className="text-gray-600 mb-4">{sim.description}</p>
                <ul className="text-sm text-gray-500">
                  {sim.topics.map((topic, i) => (
                    <li key={i} className="mb-1">
                      • {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Afzalliklar */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <TypingText text="Nima uchun PhysicsLab?" delay={80} />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Interaktiv Ta'lim",
                icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
                text: 'Nazariy bilimlarni amaliy tajribalar bilan mustahkamlang',
              },
              {
                title: 'Keng Qamrovli',
                icon: <BookOpen className="w-8 h-8 text-purple-600" />,
                text: "Fizikaning barcha asosiy bo'limlari bo'yicha simulyatsiyalar",
              },
              {
                title: 'Zamonaviy Yondashuv',
                icon: <Atom className="w-8 h-8 text-green-600" />,
                text: "Eng so'nggi texnologiyalar asosida yaratilgan simulyatsiyalar",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.3 }}
              >
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
