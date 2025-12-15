import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark text-white pt-20 pb-10 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a className="flex items-center gap-3" href="#">
              <div className="bg-primary text-white p-1.5 rounded-lg">
                <span className="material-symbols-outlined text-2xl">local_hospital</span>
              </div>
              <div>
                <h2 className="text-xl font-bold leading-none uppercase tracking-wide text-white">MEDEXPERTS</h2>
                <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">HEALTHCARE</span>
              </div>
            </a>
            <p className="text-gray-400 leading-relaxed text-sm">Akademik Sağlık Merkezi olarak, sağlığınız için en güvenilir ve modern çözümleri sunuyoruz.</p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors" href="#"><i className="fab fa-twitter"></i></a>
              <a className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors" href="https://instagram.com/medexpertshealthcare"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Hızlı Bağlantılar</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Hakkımızda</a></li>
              <li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Doktorlarımız</a></li>
              <li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Hizmetler</a></li>
              <li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Blog</a></li>
              <li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> İletişim</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Bölümler</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Çocuk Sağlığı</a></li>
              <li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Nöroloji</a></li>
              <li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Alerji ve İmmünoloji</a></li>
              <li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Medikal Estetik</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">İletişim</h3>
            <ul className="space-y-6 text-gray-400">
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-primary shrink-0">location_on</span>
                <span className="text-sm">Çubuklu Sokak, Blue Palm Residence A Blok Kat 2 Daire 20–21 Doğanköy, Girne, Kyrenia, Cyprus 99300</span>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-primary shrink-0">call</span>
                <span>+90 548 858 85 86</span>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-primary shrink-0">mail</span>
                <span>medexpertshealthcare@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 MEDEXPERTS Healthcare. Tüm Hakları Saklıdır.</p>
          <div className="flex gap-6">
            <a className="hover:text-white transition-colors" href="#">Gizlilik Politikası</a>
            <a className="hover:text-white transition-colors" href="#">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;