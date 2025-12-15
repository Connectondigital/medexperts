import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 py-4">
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        <a className="flex items-center gap-3" href="#">
          <div className="bg-primary text-white p-1.5 rounded-lg">
            <span className="material-symbols-outlined text-2xl">local_hospital</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white leading-none uppercase tracking-wide">MEDEXPERTS</h1>
            <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">HEALTHCARE</span>
          </div>
        </a>
        <nav className="hidden lg:flex items-center space-x-8 font-medium text-sm text-gray-700 dark:text-gray-300">
          <a className="text-primary font-bold flex items-center gap-1" href="#">Anasayfa</a>
          <a className="hover:text-primary transition-colors flex items-center gap-1" href="#">Kurumsal</a>
          <a className="hover:text-primary transition-colors flex items-center gap-1" href="#">Hizmetler</a>
          <a className="hover:text-primary transition-colors flex items-center gap-1" href="#">Doktorlar</a>
          <a className="hover:text-primary transition-colors" href="#">İletişim</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <a className="hidden md:flex bg-primary hover:bg-primary/90 text-white text-sm font-semibold py-3 px-6 rounded-full transition-all items-center gap-2 group" href="#">
            Randevu Al
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">north_east</span>
          </a>
          <button 
            className="lg:hidden p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 p-4 shadow-lg">
           <nav className="flex flex-col space-y-4 font-medium text-sm text-gray-700 dark:text-gray-300">
            <a className="text-primary font-bold flex items-center gap-2" href="#">Anasayfa</a>
            <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">Kurumsal</a>
            <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">Hizmetler</a>
            <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">Doktorlar</a>
            <a className="hover:text-primary transition-colors" href="#">İletişim</a>
            <a className="bg-primary hover:bg-primary/90 text-white text-sm font-semibold py-3 px-6 rounded-full transition-all flex items-center gap-2 justify-center" href="#">
              Randevu Al
              <span className="material-symbols-outlined text-sm">north_east</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;