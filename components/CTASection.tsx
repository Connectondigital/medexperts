import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-primary rounded-[2.5rem] p-10 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Sağlığınızı Önceliklendirmeye Hazır mısınız?</h2>
            <p className="text-purple-100 text-lg md:text-xl">Alanında uzman hekimlerimizle sağlığınız için ilk adımı bugün atın.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a className="bg-secondary hover:bg-teal-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2" href="#">
                Randevu Al <span className="material-symbols-outlined text-sm">calendar_month</span>
              </a>
              <a className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2" href="#">
                Bizimle İletişime Geçin <span className="material-symbols-outlined text-sm">call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;