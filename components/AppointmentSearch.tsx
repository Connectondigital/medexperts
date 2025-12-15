import React from 'react';

const AppointmentSearch: React.FC = () => {
  return (
    <section className="pb-12 px-4 lg:px-8">
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Online Appointment Card */}
        <div className="bg-secondary rounded-3xl p-8 text-white relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 opacity-10 rotate-12 transition-transform duration-500 group-hover:rotate-0">
            <span className="material-symbols-outlined text-[180px]">medical_services</span>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-6 bg-white/10 backdrop-blur-sm">
                <span className="material-symbols-outlined">calendar_month</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Online Randevu<br />Kolaylığı</h3>
              <ul className="space-y-3 mb-8 text-sm text-blue-50 font-medium">
                <li className="flex items-center gap-3"><div className="bg-white/20 p-1 rounded-full"><span className="material-symbols-outlined text-xs">check</span></div> 7/24 Online Destek</li>
                <li className="flex items-center gap-3"><div className="bg-white/20 p-1 rounded-full"><span className="material-symbols-outlined text-xs">check</span></div> Hızlı ve Pratik</li>
              </ul>
            </div>
            <a className="inline-flex items-center gap-2 border border-white/40 px-6 py-3 rounded-full text-sm font-bold hover:bg-white hover:text-secondary transition-all w-fit" href="#">
              Randevu Al <span className="material-symbols-outlined text-sm">north_east</span>
            </a>
          </div>
        </div>

        {/* Doctor Search Card */}
        <div className="bg-purple-light dark:bg-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center group md:col-span-2 lg:col-span-2 min-h-[400px]">
          <div className="absolute right-0 bottom-0 h-full w-1/2 hidden md:block">
            <img alt="Doctor holding clipboard" className="h-full w-full object-cover object-top mask-image-l-fade transition-transform duration-700 group-hover:scale-105 origin-bottom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5by1_6kerF_vJdZO5KnZ-pbErv8wYuNbIVI_oD9BZirpBjtnX6ClxG-Yp6RmAdq9wO84oDDm7s29EGGGNOpjJZR02C6dGJADve7SlhXnQbOLlcPiIyfGhEQWea8JvNIeru_yGhXJGEIS5r922K0iTRTf5wuMhYSunhc7KfYYZioNhgos97keiqlLHxZWlbsMK35cR_nPqCyTyHPfgLLD4hsn5LZ831zjayl6T8IEG3_WovFss6J-i1XtT9RLkf0O-xo25tTUNJtg" />
          </div>
          <div className="relative z-10 max-w-lg w-full">
            <h3 className="text-6xl lg:text-8xl font-bold text-primary/10 dark:text-white/5 mb-2 absolute -top-16 -left-4 select-none pointer-events-none">Doktorlar</h3>
            <div className="relative mt-8">
              <div className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-xl w-full flex items-center border border-gray-100 dark:border-gray-600 focus-within:ring-2 focus-within:ring-primary/50 transition-all">
                <span className="material-symbols-outlined text-gray-400 pl-4">search</span>
                <input className="flex-1 border-none bg-transparent focus:ring-0 text-base text-gray-700 dark:text-gray-200 placeholder-gray-400 px-4 py-3 focus:outline-none" placeholder="Doktor veya Branş Ara..." type="text" />
                <button className="bg-primary text-white p-3.5 rounded-full hover:bg-primary/90 transition-colors shrink-0 shadow-lg hover:shadow-primary/50">
                  <span className="material-symbols-outlined text-xl">search</span>
                </button>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-3xl lg:text-4xl font-bold text-primary dark:text-white leading-tight">Uzman doktorlarımızı <br />keşfetmek için <span className="relative inline-block text-secondary">arama yapın <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-40" preserveAspectRatio="none" viewBox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path></svg></span></h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSearch;