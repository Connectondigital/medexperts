import React from 'react';

const testimonials = [
  {
    text: "\"Hekimlerin yaklaşımı son derece güven vericiydi. Çok memnun kaldık.\"",
    name: "Ayşe Y."
  },
  {
    text: "\"Bilimsel ve detaylı bir tedavi süreci yaşadım. Herkese tavsiye ederim.\"",
    name: "Mehmet K."
  },
  {
    text: "\"Çocuğum için aldığımız hizmetten çok memnun kaldık. İlginiz için teşekkürler.\"",
    name: "Zeynep T."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 px-4 lg:px-8 bg-purple-light/30 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-2 block">Referanslar</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Hastalarımız Ne Diyor?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-md relative">
              <span className="material-symbols-outlined text-5xl text-primary/10 absolute top-6 right-6 select-none">format_quote</span>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex text-yellow-400 text-xs">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed text-sm mb-4">{t.text}</p>
              <h4 className="font-bold text-gray-900 dark:text-white text-sm">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;