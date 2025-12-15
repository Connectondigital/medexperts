import React from 'react';
import { Link } from 'react-router-dom';
import { doctors } from '../data';

const DoctorList: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-24 relative overflow-hidden rounded-b-[3rem]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute bottom-0 right-0 opacity-10 translate-y-1/2 translate-x-1/4">
          <span className="material-symbols-outlined text-[400px] text-white">groups</span>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Doktorlarımız</h1>
          <p className="text-purple-100 text-lg max-w-2xl mx-auto">
            Alanında uzman, akademik kariyere sahip seçkin hekim kadromuzla sağlığınız emin ellerde.
          </p>
        </div>
      </section>

      {/* List Section */}
      <section className="relative -mt-16 px-4 lg:px-8 pb-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700 flex flex-col">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative mb-4 group">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
                     <span className="bg-secondary text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                        {doctor.yearsOfExperience}+ Yıl Deneyim
                     </span>
                  </div>
                </div>
                
                <div className="flex-grow px-2">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-1">{doctor.title}</span>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{doctor.name}</h3>
                        </div>
                        <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg">
                            <span className="text-yellow-500 material-symbols-outlined text-sm">star</span>
                            <span className="text-xs font-bold text-gray-700 dark:text-gray-200">{doctor.rating}</span>
                        </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2 h-10">
                        {doctor.fullSpecialty}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                        {doctor.specialties.slice(0, 3).map((s, i) => (
                            <span key={i} className="text-[10px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                                {s}
                            </span>
                        ))}
                        {doctor.specialties.length > 3 && (
                            <span className="text-[10px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                                +{doctor.specialties.length - 3}
                            </span>
                        )}
                    </div>
                </div>

                <Link 
                    to={`/doktorlar/${doctor.slug}`}
                    className="w-full bg-primary/5 hover:bg-primary hover:text-white text-primary font-bold py-3 rounded-xl transition-all flex justify-center items-center gap-2 group"
                >
                    Randevu ve Detay
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorList;