import React, { useState } from 'react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');

  return (
    <section className="py-16 px-4 lg:px-8 bg-white dark:bg-background-dark">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative w-full ml-auto mr-auto lg:mr-0 lg:ml-auto pr-8 pb-8">
              <img alt="Surgery team" className="w-full rounded-[2rem] shadow-2xl relative z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi9qC2i0BOaepGTIhiXt-qPGfScAyV8SCf_tTRLFih7Yh0spfLn2k8Z5flpEtXUXm6lvgm1ZLEA0a8j2AvN8nWV2TES0lJQAE4ZamO705JPUcAqEPnNMaU_D5VPiZeUN2WY7eZ5uEFcYpYuUVares5dIisxfvWYDScst2n0dBJf4bxDcU3diNozi_i9WfERkYq-KmW5P3aIZXJnEiDIlqBTlHGh5MCc6Cdf1YuDW4iBwvaU02oOjay4FAo0XQnwUq-I4iIfHxvOeo" />
              <div className="absolute -top-6 -left-6 bg-primary rounded-[2rem] p-8 text-white z-20 shadow-xl max-w-[220px]">
                <div className="absolute top-5 right-5 opacity-50">
                  <span className="material-symbols-outlined text-4xl">verified_user</span>
                </div>
                <h3 className="text-5xl font-bold mb-1">20+</h3>
                <p className="font-medium text-purple-200 text-lg leading-tight">Yıllık Deneyim</p>
              </div>
              <div className="absolute bottom-0 right-0 w-48 h-48 border-[6px] border-white dark:border-background-dark rounded-[2rem] overflow-hidden shadow-2xl z-20 hidden md:block">
                <img alt="Doctor Portrait" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW2OAXkVFk_J2SPCmtRSsDPMo4Mp0DNQyn4Y91hkuZmPqUcbwjvg367bJe2DGkQhjFHkDgWUIAn_pwXfF7rCTNeBcYGTxCQJh3X3w2gp6CHicDWAX9FhRMDsvhONoTui0CODeWP6XD-anvxBRxe0UX4f5ikhMJQYhBAsqZQyyPi7nRkWqVEkHay3PVADGM4fbjnUWyUovJTKkbvRVsyMpf6vaVghmIFupyoeH974ct8YOrN6HEKXx5OSY9TLK6crrco67SNuC50sg" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
          <div className="lg:col-span-7 pt-10 lg:pt-0">
            <span className="text-sm font-bold text-secondary uppercase tracking-widest mb-3 block">MEDEXPERTS HAKKINDA</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">Sağlığınız ve İyiliğiniz İçin Buradayız</h2>
            <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700 mb-8">
              <button 
                onClick={() => setActiveTab('mission')}
                className={`px-6 py-4 font-bold flex items-center gap-2 transition-all ${activeTab === 'mission' ? 'text-primary border-b-2 border-primary bg-purple-50/50 dark:bg-purple-900/10' : 'text-gray-500 dark:text-gray-400 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}
              >
                <span className="material-symbols-outlined text-xl">medical_services</span> Misyonumuz
              </button>
              <button 
                onClick={() => setActiveTab('vision')}
                className={`px-6 py-4 font-bold flex items-center gap-2 transition-all ${activeTab === 'vision' ? 'text-primary border-b-2 border-primary bg-purple-50/50 dark:bg-purple-900/10' : 'text-gray-500 dark:text-gray-400 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}
              >
                <span className="material-symbols-outlined text-xl">visibility</span> Vizyonumuz
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-lg max-w-2xl">
              Akademik ve klinik mükemmeliyet anlayışımızla, her hastamıza özel, şefkatli ve yenilikçi sağlık hizmetleri sunmaya kendimizi adadık. Amacımız, en son tıbbi teknolojiler ve uzman kadromuzla yaşam kalitenizi artırmaktır.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">badge</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Uzman Kadro</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Alanında akademik kariyere sahip seçkin hekimlerimizle hizmetinizdeyiz.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">medication_liquid</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Modern Tedavi</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Güncel tanı ve tedavi yöntemleri ile iyileşme sürecinizi destekliyoruz.</p>
                </div>
              </div>
            </div>
            <a className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1" href="#">
              Bizi Yakından Tanıyın <span className="material-symbols-outlined text-sm">north_east</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;