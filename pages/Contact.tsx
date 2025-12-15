import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Hide toast after 3 seconds
      setTimeout(() => setShowToast(false), 3000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-purple-light/40 dark:bg-gray-800/50 py-20 lg:py-24 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white dark:bg-gray-700 border border-primary/10 text-primary dark:text-purple-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            Bize Ulaşın
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">İletişim</h1>
          <nav aria-label="Breadcrumb" className="flex justify-center">
            <ol className="flex items-center space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Anasayfa</Link></li>
              <li><span className="text-gray-300 dark:text-gray-600">/</span></li>
              <li className="text-primary dark:text-white">İletişim</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Info Cards */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Size Nasıl Yardımcı Olabiliriz?</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Sağlığınızla ilgili her türlü soru, görüş ve randevu talebiniz için bize aşağıdaki kanallardan ulaşabilirsiniz. Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Address Card */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <span className="material-symbols-outlined text-2xl">location_on</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">Adresimiz</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Çubuklu Sokak, Blue Palm Residence A Blok Kat 2 Daire 20–21 Doğanköy, Girne, Kyrenia, Cyprus 99300
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Info Card */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                      <span className="material-symbols-outlined text-2xl">contact_support</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">İletişim</h3>
                      <div className="space-y-2">
                        <a href="tel:+905488588586" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-sm">call</span> +90 548 858 85 86
                        </a>
                        <a href="mailto:medexpertshealthcare@gmail.com" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-sm">mail</span> medexpertshealthcare@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Card */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
                      <span className="material-symbols-outlined text-2xl">share</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">Sosyal Medya</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Güncel paylaşımlarımızı takip edin.</p>
                      <a href="https://instagram.com/medexpertshealthcare" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors">
                        <i className="fab fa-instagram text-lg"></i> @medexpertshealthcare
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-8">
              <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-xl p-8 lg:p-12 relative overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-20 -mt-20"></div>
                
                <div className="relative z-10 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Mesaj Gönderin</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Formu doldurarak bize ulaşabilirsiniz. En kısa sürede size dönüş yapacağız.</p>
                </div>

                <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-1">
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Adınız Soyadınız</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-xl">person</span>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">E-posta Adresiniz</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-xl">mail</span>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Konu</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-xl">topic</span>
                      <input 
                        type="text" 
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none"
                        placeholder="Mesajınızın konusu"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Mesajınız</label>
                    <div className="relative">
                      <span className="absolute left-4 top-6 text-gray-400 material-symbols-outlined text-xl">chat</span>
                      <textarea 
                        id="message" 
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none resize-none"
                        placeholder="Sorularınız veya talebiniz..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="md:col-span-2 pt-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`w-full md:w-auto bg-secondary hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                      {!isSubmitting && <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative w-full h-[500px] bg-gray-100 z-0">
        <iframe 
          title="MedExperts Location"
          className="grayscale-[20%] hover:grayscale-0 transition-all duration-500 w-full h-full border-0"
          loading="lazy" 
          allowFullScreen 
          referrerPolicy="no-referrer-when-downgrade" 
          src="https://maps.google.com/maps?q=Blue+Palm+Residence+Doğanköy+Girne&t=&z=15&ie=UTF8&iwloc=&output=embed" 
        />
        
        {/* Map Overlay Card */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white dark:bg-background-dark p-4 rounded-2xl shadow-2xl flex items-center gap-3 max-w-sm w-[90%] md:w-auto border border-gray-100 dark:border-gray-700">
          <div className="bg-primary text-white p-2 rounded-lg">
            <span className="material-symbols-outlined">local_hospital</span>
          </div>
          <div>
            <p className="text-xs font-bold text-secondary uppercase tracking-wider">Lokasyon</p>
            <p className="font-bold text-gray-900 dark:text-white">MEDEXPERTS HEALTHCARE</p>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-gray-900 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce-in z-50">
          <span className="material-symbols-outlined text-green-400">check_circle</span>
          <div>
            <h4 className="font-bold text-sm">Mesajınız Alındı</h4>
            <p className="text-xs text-gray-400">En kısa sürede dönüş yapacağız.</p>
          </div>
          <button onClick={() => setShowToast(false)} className="ml-2 text-gray-500 hover:text-white">
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}
    </>
  );
};

export default Contact;