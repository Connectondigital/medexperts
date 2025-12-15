import React, { useState } from 'react';
import { clinicInfo } from '../data';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => {
        // Simple active check logic
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    const linkClass = (path: string) => `flex items-center gap-1 transition-colors ${isActive(path) ? 'text-primary font-bold' : 'hover:text-primary'}`;

    return (
        <>
            <div className="bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 py-2 hidden lg:block">
                <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center text-xs text-gray-600 dark:text-gray-400 font-medium">
                    <div className="flex items-center space-x-6">
                        <span>Profesyonel sağlık hizmetine mi ihtiyacınız var?</span>
                        <div className="flex items-center space-x-1">
                            <span className="material-symbols-outlined text-[16px] text-primary">call</span>
                            <span>Telefon : {clinicInfo.phone}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="material-symbols-outlined text-[16px] text-primary">mail</span>
                            <span>E-posta : {clinicInfo.email}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-1">
                            <span className="material-symbols-outlined text-[16px]">schedule</span>
                            <span>Çalışma Saatleri : Pzt-Cuma, {clinicInfo.hours.weekdays}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-500">
                            <a href="#" className="hover:text-primary transition-colors"><i className="fab fa-facebook-f"></i></a>
                            <a href={`https://instagram.com/${clinicInfo.instagram}`} className="hover:text-primary transition-colors"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="hover:text-primary transition-colors"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 py-4">
                <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="bg-primary text-white p-1.5 rounded-lg">
                            <span className="material-symbols-outlined text-2xl">local_hospital</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900 dark:text-white leading-none uppercase tracking-wide">MEDEXPERTS</h1>
                            <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">HEALTHCARE</span>
                        </div>
                    </Link>
                    <nav className="hidden lg:flex items-center space-x-8 font-medium text-sm text-gray-700 dark:text-gray-300">
                        <Link to="/" className={linkClass('/')}>Anasayfa</Link>
                        <a href="#" className={linkClass('/kurumsal')}>Kurumsal</a>
                        <a href="#" className={linkClass('/hizmetler')}>Hizmetler</a>
                        <Link to="/" className={linkClass('/doktorlar')}>Doktorlar</Link>
                        <a href="#" className={linkClass('/iletisim')}>İletişim</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">search</span>
                        </button>
                        <a href="#appointment" className="hidden md:flex bg-primary hover:bg-primary/90 text-white text-sm font-semibold py-3 px-6 rounded-full transition-all items-center gap-2 group">
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
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 py-4 px-4 flex flex-col space-y-4 shadow-lg">
                         <Link to="/" className="text-gray-700 dark:text-gray-200 font-medium">Anasayfa</Link>
                         <Link to="/" className="text-primary font-bold">Doktorlar</Link>
                         <a href="#" className="text-gray-700 dark:text-gray-200 font-medium">İletişim</a>
                    </div>
                )}
            </header>
        </>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-background-dark text-white pt-20 pb-10 px-4 lg:px-8">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="bg-primary text-white p-1.5 rounded-lg">
                                <span className="material-symbols-outlined text-2xl">local_hospital</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold leading-none uppercase tracking-wide text-white">MEDEXPERTS</h2>
                                <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">HEALTHCARE</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm">Akademik Sağlık Merkezi olarak, sağlığınız için en güvenilir ve modern çözümleri sunuyoruz.</p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"><i className="fab fa-twitter"></i></a>
                            <a href={`https://instagram.com/${clinicInfo.instagram}`} className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-6">Hızlı Bağlantılar</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Hakkımızda</a></li>
                            <li><Link to="/" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Doktorlarımız</Link></li>
                            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Hizmetler</a></li>
                            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> İletişim</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-6">Bölümler</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Çocuk Sağlığı</a></li>
                            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Nöroloji</a></li>
                            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Alerji ve İmmünoloji</a></li>
                            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Medikal Estetik</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-6">İletişim</h3>
                        <ul className="space-y-6 text-gray-400">
                            <li className="flex gap-4">
                                <span className="material-symbols-outlined text-primary shrink-0">location_on</span>
                                <span className="text-sm">{clinicInfo.address}</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="material-symbols-outlined text-primary shrink-0">call</span>
                                <span>{clinicInfo.phone}</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="material-symbols-outlined text-primary shrink-0">mail</span>
                                <span>{clinicInfo.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2024 MEDEXPERTS Healthcare. Tüm Hakları Saklıdır.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
                        <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};