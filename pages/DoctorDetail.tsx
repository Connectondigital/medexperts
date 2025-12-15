import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doctors } from '../data';

const DoctorDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const doctor = doctors.find(d => d.slug === slug);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Aradığınız doktor bulunamadı.</p>
            <Link to="/" className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors">
                Doktorlar Listesine Dön
            </Link>
        </div>
      </div>
    );
  }

  const handleQuickAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Mock API call
    setTimeout(() => {
        setFormStatus('success');
        // Reset after 3 seconds
        setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <>
      <section className="bg-primary pt-32 pb-24 relative overflow-hidden rounded-b-[3rem]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute bottom-0 right-0 opacity-10 translate-y-1/2 translate-x-1/4">
          <span className="material-symbols-outlined text-[400px] text-white">stethoscope</span>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Doktor Detayı</h1>
          <nav className="flex justify-center text-sm font-medium text-purple-200 gap-2">
            <Link to="/" className="hover:text-white transition-colors">Anasayfa</Link>
            <span>/</span>
            <Link to="/" className="hover:text-white transition-colors">Doktorlar</Link>
            <span>/</span>
            <span className="text-white">{doctor.title} {doctor.name}</span>
          </nav>
        </div>
      </section>

      <section className="relative -mt-20 px-4 lg:px-8 pb-12">
        <div className="container mx-auto">
          {/* Hero Profile Card */}
          <div className="bg-white dark:bg-gray-800 rounded-[2rem] p-6 lg:p-10 shadow-xl mb-8 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start border border-gray-100 dark:border-gray-700">
            <div className="w-full lg:w-1/3 shrink-0 relative group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative shadow-lg">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 pt-20">
                  <div className="flex gap-3 justify-center">
                    <button className="bg-white/20 hover:bg-white hover:text-primary text-white p-2 rounded-full backdrop-blur-sm transition-all"><i className="fab fa-facebook-f"></i></button>
                    <button className="bg-white/20 hover:bg-white hover:text-primary text-white p-2 rounded-full backdrop-blur-sm transition-all"><i className="fab fa-twitter"></i></button>
                    <button className="bg-white/20 hover:bg-white hover:text-primary text-white p-2 rounded-full backdrop-blur-sm transition-all"><i className="fab fa-instagram"></i></button>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-white dark:border-gray-800 z-10 hidden md:flex">
                <span className="text-2xl font-bold">{doctor.yearsOfExperience}+</span>
                <span className="text-[10px] font-medium uppercase tracking-wider">Yıl</span>
              </div>
            </div>

            <div className="w-full lg:w-2/3 pt-2">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-purple-100 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">{doctor.fullTitle}</span>
                <div className="flex text-yellow-400 text-xs items-center">
                  {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fas fa-star ${i < Math.floor(doctor.rating) ? '' : 'text-gray-300'}`}></i>
                  ))}
                  <span className="text-gray-400 ml-2">({doctor.reviewCount}+ Görüş)</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                {doctor.title} {doctor.name}
              </h2>
              <p className="text-secondary font-bold text-lg mb-6">{doctor.fullSpecialty}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-y border-gray-100 dark:border-gray-700 py-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 p-3 rounded-xl shrink-0">
                    <span className="material-symbols-outlined">school</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Eğitim</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{doctor.education}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-green-50 dark:bg-green-900/20 text-green-600 p-3 rounded-xl shrink-0">
                    <span className="material-symbols-outlined">workspace_premium</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Uzmanlık</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{doctor.expertise}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 p-3 rounded-xl shrink-0">
                    <span className="material-symbols-outlined">language</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Diller</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{doctor.languages.join(', ')}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 p-3 rounded-xl shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Lokasyon</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{doctor.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#appointment-form" className="bg-secondary hover:bg-teal-600 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2">
                  Randevu Al <span className="material-symbols-outlined text-sm">calendar_month</span>
                </a>
                <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2">
                  İletişime Geç <span className="material-symbols-outlined text-sm">chat</span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-secondary rounded-full"></span>
                  Hakkında
                </h3>
                <div className="prose prose-lg text-gray-600 dark:text-gray-300 max-w-none">
                  {doctor.about.map((paragraph, idx) => (
                    <p key={idx} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Specialties Section */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-secondary rounded-full"></span>
                  Uzmanlık Alanları
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {doctor.specialties.map((specialty, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-600 text-primary flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-sm">check</span>
                      </div>
                      <span className="font-semibold text-gray-700 dark:text-gray-200">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Experience */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Education Column */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                      <div className="bg-blue-100 text-blue-600 p-2 rounded-lg"><span className="material-symbols-outlined">school</span></div>
                      Eğitim Bilgileri
                    </h3>
                    <ul className="space-y-6 border-l-2 border-blue-100 dark:border-blue-900 ml-3 pl-6 relative">
                      {doctor.timeline.filter(t => t.type === 'education').map((item, idx) => (
                        <li key={idx} className="relative">
                          <span className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 ${idx === 0 ? 'bg-blue-500' : 'bg-blue-300'}`}></span>
                          <span className="text-xs font-bold text-blue-500 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded mb-1 inline-block">{item.period}</span>
                          <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{item.institution}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Experience Column */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                      <div className="bg-secondary/20 text-secondary p-2 rounded-lg"><span className="material-symbols-outlined">medical_services</span></div>
                      Deneyim
                    </h3>
                    <ul className="space-y-6 border-l-2 border-secondary/30 ml-3 pl-6 relative">
                      {doctor.timeline.filter(t => t.type === 'work').map((item, idx) => (
                        <li key={idx} className="relative">
                          <span className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 ${idx === 0 ? 'bg-secondary' : 'bg-secondary/60'}`}></span>
                          <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded mb-1 inline-block">{item.period}</span>
                          <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{item.institution}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Appointment Form */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border-t-4 border-secondary sticky top-24" id="appointment-form">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Hızlı Randevu</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Bilgilerinizi bırakın, sizi arayalım.</p>
                </div>
                {formStatus === 'success' ? (
                    <div className="bg-green-50 text-green-700 p-4 rounded-xl text-center">
                        <span className="material-symbols-outlined text-4xl mb-2">check_circle</span>
                        <p className="font-bold">Randevu talebiniz alındı!</p>
                        <p className="text-sm">En kısa sürede size dönüş yapacağız.</p>
                    </div>
                ) : (
                    <form className="space-y-4" onSubmit={handleQuickAppointment}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ad Soyad</label>
                        <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400 text-sm">person</span>
                        <input className="w-full pl-9 pr-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent text-sm" placeholder="Adınız Soyadınız" type="text" required />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Telefon Numarası</label>
                        <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400 text-sm">call</span>
                        <input className="w-full pl-9 pr-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent text-sm" placeholder="+90 5XX XXX XX XX" type="tel" required />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mesajınız (Opsiyonel)</label>
                        <textarea className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent text-sm" placeholder="Şikayetiniz veya notunuz..." rows={3}></textarea>
                    </div>
                    <button 
                        type="submit" 
                        disabled={formStatus === 'submitting'}
                        className="w-full bg-secondary hover:bg-teal-600 text-white font-bold py-3 rounded-xl shadow-md transition-colors flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {formStatus === 'submitting' ? 'Gönderiliyor...' : 'Randevu Oluştur'}
                        <span className="material-symbols-outlined text-sm">send</span>
                    </button>
                    </form>
                )}
              </div>

              {/* Working Hours */}
              <div className="bg-primary text-white rounded-3xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-2xl bg-white/10 p-2 rounded-lg">schedule</span>
                  <h3 className="text-xl font-bold">Çalışma Saatleri</h3>
                </div>
                <div className="space-y-3 text-sm">
                  {['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'].map(day => (
                    <div key={day} className="flex justify-between border-b border-white/10 pb-2">
                        <span className="opacity-80">{day}</span>
                        <span className="font-bold">09:00 - 18:00</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-secondary bg-white rounded px-2 py-1 mt-4">
                    <span className="font-bold">Cumartesi - Pazar</span>
                    <span className="font-bold">Kapalı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorDetail;