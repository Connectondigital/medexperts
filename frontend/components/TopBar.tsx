import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-2 hidden lg:block">
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center text-xs text-gray-600 dark:text-gray-400 font-medium">
        <div className="flex items-center space-x-6">
          <span>Profesyonel sağlık hizmetine mi ihtiyacınız var?</span>
          <div className="flex items-center space-x-1">
            <span className="material-symbols-outlined text-[16px] text-primary">call</span>
            <span>Telefon : +90 548 858 85 86</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="material-symbols-outlined text-[16px] text-primary">mail</span>
            <span>E-posta : medexpertshealthcare@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            <span>Çalışma Saatleri : Pzt-Cuma, 09:00 - 18:00</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-500">
            <a className="hover:text-primary transition-colors" href="#"><i className="fab fa-facebook-f"></i></a>
            <a className="hover:text-primary transition-colors" href="https://instagram.com/medexpertshealthcare"><i className="fab fa-instagram"></i></a>
            <a className="hover:text-primary transition-colors" href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;