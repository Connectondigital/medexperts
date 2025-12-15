import React from 'react';

interface Specialty {
  icon: string;
  title: string;
  description: string;
  colorClass: string;
  iconBgClass: string;
  hoverBgClass: string;
  hoverTextClass: string;
}

const specialties: Specialty[] = [
  {
    icon: 'child_care',
    title: 'Çocuk Sağlığı, Alerji ve İmmünoloji',
    description: 'Çocukluk çağı alerjik hastalıkları, astım, egzama, besin ve ilaç alerjileri başta olmak üzere çocuk sağlığına yönelik kapsamlı tanı ve tedavi hizmetleri sunuyoruz.',
    colorClass: 'text-orange-500',
    iconBgClass: 'bg-orange-50',
    hoverBgClass: 'group-hover:bg-orange-500',
    hoverTextClass: 'group-hover:text-white',
  },
  {
    icon: 'psychology',
    title: 'Nöroloji',
    description: 'Migren, baş ağrıları, Alzheimer, Parkinson, epilepsi, multiple skleroz ve diğer nörolojik hastalıkların tanı ve tedavisi.',
    colorClass: 'text-primary',
    iconBgClass: 'bg-primary/10',
    hoverBgClass: 'group-hover:bg-primary',
    hoverTextClass: 'group-hover:text-white',
  },
  {
    icon: 'vaccines',
    title: 'Nörolojik Girişimler',
    description: 'Migren botoksu, GON blokajı, spastisite tedavileri ve hareket bozukluklarında botoks uygulamaları.',
    colorClass: 'text-secondary',
    iconBgClass: 'bg-secondary/10',
    hoverBgClass: 'group-hover:bg-secondary',
    hoverTextClass: 'group-hover:text-white',
  },
  {
    icon: 'face',
    title: 'Medikal Estetik',
    description: 'Yüz botoksu, PRP tedavileri, mezoterapi ve gençlik aşısı uygulamaları ile doğal ve güvenli estetik çözümler.',
    colorClass: 'text-pink-500',
    iconBgClass: 'bg-pink-50',
    hoverBgClass: 'group-hover:bg-pink-500',
    hoverTextClass: 'group-hover:text-white',
  },
];

const Specialties: React.FC = () => {
  return (
    <section className="py-16 px-4 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-2 block">Branşlarımız</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Uzmanlık Alanlarımız</h2>
          <p className="text-gray-500 dark:text-gray-400">İhtiyacınıza uygun branşı seçerek randevunuzu hızlıca oluşturabilirsiniz.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1">
              <div className={`w-16 h-16 rounded-2xl ${item.iconBgClass} ${item.colorClass} ${item.hoverBgClass} ${item.hoverTextClass} flex items-center justify-center mb-6 transition-colors duration-300`}>
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
              <span className={`${item.colorClass} font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all`}>
                Detaylar <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;