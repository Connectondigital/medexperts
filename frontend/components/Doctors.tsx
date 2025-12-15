import React from 'react';

const doctors = [
  {
    name: "Prof. Dr. Nilüfer Galip Çelik",
    title: "Çocuk Sağlığı, Alerji ve İmmünoloji",
    description: "Çocukluk çağı alerjik hastalıkları ve immünoloji alanında akademik ve klinik uzmanlık.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLQoutldDU9zXrrgnQQ4BvXjVHzn5KNjpDj4N44CGFFdqNsfdRSLtiLiYbexN70bBhL6tjxwOi5Ae939_l0M5IDHW6j2buCx0NkW6JkHzr6TQbnzNLohaRUYNqq1gLwDaSTqWtK4GsZJM_VXyyi2BIbVsSviJL2KPK-uvP6CXJ9_y-euvy2JAlz7TtSBIBv4Ew64el18c3FnaGLmsQBNI7yEKaCoxzucAgQVSr2kfmQnU4iBZApo9l6YycPeFmJh_X3ANJxqPaFW0"
  },
  {
    name: "Prof. Dr. Arzu Babayiğit",
    title: "Çocuk Alerji, Astım ve İmmünoloji",
    description: "Alerjik hastalıklar, astım, besin ve ilaç alerjileri ile çocuk sağlığı hastalıklarının tanı ve tedavisi.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW2OAXkVFk_J2SPCmtRSsDPMo4Mp0DNQyn4Y91hkuZmPqUcbwjvg367bJe2DGkQhjFHkDgWUIAn_pwXfF7rCTNeBcYGTxCQJh3X3w2gp6CHicDWAX9FhRMDsvhONoTui0CODeWP6XD-anvxBRxe0UX4f5ikhMJQYhBAsqZQyyPi7nRkWqVEkHay3PVADGM4fbjnUWyUovJTKkbvRVsyMpf6vaVghmIFupyoeH974ct8YOrN6HEKXx5OSY9TLK6crrco67SNuC50sg"
  },
  {
    name: "Doç. Dr. Senem Ertuğrul Mut",
    title: "Nöroloji & Medikal Estetik",
    description: "Migren, demans, Parkinson, MS, epilepsi ve nörolojik girişimsel uygulamalar.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5by1_6kerF_vJdZO5KnZ-pbErv8wYuNbIVI_oD9BZirpBjtnX6ClxG-Yp6RmAdq9wO84oDDm7s29EGGGNOpjJZR02C6dGJADve7SlhXnQbOLlcPiIyfGhEQWea8JvNIeru_yGhXJGEIS5r922K0iTRTf5wuMhYSunhc7KfYYZioNhgos97keiqlLHxZWlbsMK35cR_nPqCyTyHPfgLLD4hsn5LZ831zjayl6T8IEG3_WovFss6J-i1XtT9RLkf0O-xo25tTUNJtg"
  }
];

const Doctors: React.FC = () => {
  return (
    <section className="py-16 px-4 lg:px-8 bg-white dark:bg-background-dark">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-2 block">Kadromuz</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Alanında Uzman Hekimlerimiz</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Akademik ve klinik deneyime sahip hekimlerimizle güven veren sağlık hizmeti sunuyoruz.</p>
          </div>
          <a className="px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-full font-bold text-sm hover:bg-primary hover:text-white hover:border-primary transition-all" href="#">
            Tüm Doktorları Gör
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-800 shadow-lg bg-white dark:bg-gray-800 flex flex-col">
              <div className="h-[350px] w-full overflow-hidden relative">
                <img alt={doctor.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" src={doctor.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight mb-1">
                    {doctor.name.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
                    {/* Note: The name is not actually split with \n in the array, but in the original design it was br-ed. 
                        Let's handle the visual split by splitting by 'Dr.' if needed, but flex wrap is usually fine. 
                        Actually, let's just render the string, standard wrapping is fine. */}
                    {doctor.name}
                  </h3>
                  <span className="text-secondary text-sm font-bold uppercase tracking-wider">{doctor.title}</span>
                </div>
                <div className="mb-6 flex-1">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{doctor.description}</p>
                </div>
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                  <a className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2" href="#">
                    Randevu Al <span className="material-symbols-outlined text-sm">calendar_month</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;