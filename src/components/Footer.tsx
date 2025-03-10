import { Github, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <div className="text-center w-[300px]">
            <h3 className="text-xl font-bold mb-4">PhysicsLab</h3>
            <p className="text-gray-400">
              Fizika fanini o'rganish uchun interaktiv simulyatsiyalar
              platformasi
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Simulyatsiyalar</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Mexanika</li>
              <li>Elektr va Magnit</li>
              <li>Termodinamika</li>
              <li>Optika</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Bog'lanish</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} PhysicsLab. Barcha huquqlar
            himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
