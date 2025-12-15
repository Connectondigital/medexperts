import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-6 px-4 lg:px-8">
      <div className="container mx-auto grid lg:grid-cols-12 gap-6 min-h-[600px]">
        {/* Left Hero Card */}
        <div className="lg:col-span-7 bg-primary rounded-3xl overflow-hidden relative flex flex-col justify-center p-8 lg:p-12 text-white shadow-xl">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none select-none">
            <span className="text-[180px] font-bold whitespace-nowrap leading-none absolute -top-10 -left-10">Akademik</span>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row h-full items-center">
            <div className="flex-1 space-y-6 pt-10 md:pt-0">
              <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block">Akademik Sağlık Merkezi</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Sağlığınız İçin <br />Akademik Çözümler</h2>
              <p className="text-purple-100 text-lg">Alanında uzman kadromuzla, en güncel tıbbi yaklaşımları bir araya getiriyoruz.</p>
              <div className="flex flex-wrap gap-4">
                <a className="inline-flex items-center gap-2 bg-secondary hover:bg-teal-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="#">
                  Randevu Al
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </a>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full p-2 pr-6 w-fit mt-6">
                <div className="flex -space-x-2">
                  <img alt="Patient" className="w-8 h-8 rounded-full border-2 border-primary object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNES6AuN4SxyDmzPWoeSbmyQM8EbdwMEgIFVf3jMQtH8tNMhQeiA0GG3n32477VCnH8R7gQNtlSBDiCTmNpoaCvjMjKRftW8wnJlPpq1YaqudIKUNlp7pv1LbvvsZJWa5NaRZ7Rc4HtX8sE6_wBXUcS0l2YsWNASnQP7NlxboO7_EOWwTBThHS9nj8rdLoyb-8R_K9WFWat5fzkFWuXMJr86d3jHyn462hVfl3uesTof2tnbkDXzZb2EFAiB46d81mDzLvpKS01dA" />
                  <img alt="Patient" className="w-8 h-8 rounded-full border-2 border-primary object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACWd0DUt9N-H1iEt4Aa1G-pn8Y3nQb92H75kxjhhZubBphXvm--pIY_6OwCoNr625zehhxO_4y9IBsoBmS8iVi_NSuipuuiVjUHsJMHJY95fumhTK30tBr-7rhhC0OQhPF0golAPt2DBswOJg8iDXj7Hkxes1Z4aKFcLKSOGRoZAYfXC45_p1Jxo3ldWQLmYTrOSRanF4VyZHvyFIWNjaoIXXPOUIL9011nMiwxywC8CzwbX2OO7rHvh2dk4cxdFpgdOhY475op3g" />
                  <div className="w-8 h-8 rounded-full border-2 border-primary bg-white text-primary flex items-center justify-center text-[10px] font-bold">+2k</div>
                </div>
                <div className="text-xs font-medium">
                  <span className="block font-bold">Binlerce Mutlu</span>
                  <span className="text-gray-200">Hasta</span>
                </div>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
              <div className="absolute top-0 right-0 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl max-w-[200px] text-xs hidden md:block">
                <p className="mb-3">Güvenilir, hasta odaklı ve şefkatli bakım sunmayı taahhüt ediyoruz.</p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check</span> Uzman Hekimler</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">check</span> Modern Teknoloji</li>
                </ul>
                <button className="mt-4 bg-secondary w-full py-2 rounded-lg font-semibold flex items-center justify-center gap-1 hover:bg-teal-600 transition text-white">
                  Detaylı Bilgi <span className="material-symbols-outlined text-[10px]">north_east</span>
                </button>
              </div>
              <img alt="Doctor with stethoscope" className="relative z-10 w-auto h-[400px] object-cover object-top md:h-[500px] drop-shadow-2xl mask-image-b-fade" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLQoutldDU9zXrrgnQQ4BvXjVHzn5KNjpDj4N44CGFFdqNsfdRSLtiLiYbexN70bBhL6tjxwOi5Ae939_l0M5IDHW6j2buCx0NkW6JkHzr6TQbnzNLohaRUYNqq1gLwDaSTqWtK4GsZJM_VXyyi2BIbVsSviJL2KPK-uvP6CXJ9_y-euvy2JAlz7TtSBIBv4Ew64el18c3FnaGLmsQBNI7yEKaCoxzucAgQVSr2kfmQnU4iBZApo9l6YycPeFmJh_X3ANJxqPaFW0" />
            </div>
          </div>
        </div>
        
        {/* Right Hero Card */}
        <div className="lg:col-span-5 rounded-3xl overflow-hidden relative h-[400px] lg:h-auto group">
          <img alt="Happy Patient" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqqGDqjnAqEhvOVcDR1JwQk9YNkzZ-U0t32XG8l7Q-orEuCtruqBHSO4ALLbRY9zDBJIgILvPHV88dIXMQr2xvEkFrKy2D6CamqZ8QSV2xk3sVW7UUT_bcBPBSfDHnJ5IOcT8fmJ1t0QafN5DXKBI1XsriQUvxAOk_sPH7jH7fQ48qSZD4Ja2exhJFFcDk_sKH0wwkijPBRs83Zo29TwG6YPVX6Y_01leOx0oLs7gkTVPM7_e0Cuft0L-A2l8cIC-h5W6YoZzG-9g" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <span className="bg-secondary text-xs font-bold px-2 py-1 rounded mb-2 inline-block">ÖNE ÇIKAN</span>
            <h3 className="text-2xl font-bold">Hasta Odaklı Yaklaşım</h3>
            <p className="text-sm opacity-90 mt-2">Sizin konforunuz ve sağlığınız bizim önceliğimiz.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;