import { Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden animate-fade-in">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,rgba(255,255,255,0)_70%)] rounded-full -z-10 blur-xl"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <Logo className="h-44 sm:h-56 w-auto mb-8 text-slate-900" />
          <h1 className="text-gradient text-5xl sm:text-7xl tracking-widest mb-4 font-extrabold uppercase">
            Shiny Média
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 mb-6">
            Bienvenue sur SHINY MÉDIA
          </h2>
          <p className="text-base sm:text-lg text-slate-500 mb-8 max-w-3xl leading-relaxed">
            Nous sommes heureux de vous accueillir sur votre plateforme de référence en information, communication et création de contenus. Notre engagement est de produire des contenus professionnels qui informent, inspirent et valorisent les talents tout en contribuant au développement de notre communauté.
          </p>
          <p className="text-lg sm:text-xl font-bold tracking-widest uppercase text-yellow-600 mb-12">
            « Éclairer les talents, inspirer l'avenir. »
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold uppercase tracking-wider shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:-translate-y-1 transition-all"
            >
              <Play className="h-5 w-5 fill-current" />
              Découvrir nos services
            </Link>
            <Link
              to="/apropos"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-slate-200 text-slate-700 font-bold uppercase tracking-wider hover:border-yellow-400 hover:text-yellow-600 hover:-translate-y-1 transition-all"
            >
              À propos
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900 mb-4">
            Tout ce que nous <span className="text-gradient">offrons</span>
          </h2>
          <p className="text-center text-slate-500 mb-14 max-w-xl mx-auto">
            De la production multimédia à la communication digitale, explorez nos domaines d'expertise.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            <Link to="/services" className="group bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-yellow-400 transition-all text-center">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-yellow-600 transition-colors">Nos Services</h3>
              <p className="text-slate-500 text-sm mb-4">Production audiovisuelle, photo, digital, formation et bien plus encore.</p>
              <span className="inline-flex items-center gap-1 text-yellow-600 font-semibold text-sm">Voir tout <ArrowRight className="h-4 w-4" /></span>
            </Link>
            <Link to="/apropos" className="group bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-yellow-400 transition-all text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-yellow-600 transition-colors">À propos</h3>
              <p className="text-slate-500 text-sm mb-4">Notre vision, mission, valeurs et les fondateurs de SHINY MÉDIA.</p>
              <span className="inline-flex items-center gap-1 text-yellow-600 font-semibold text-sm">En savoir plus <ArrowRight className="h-4 w-4" /></span>
            </Link>
            <Link to="/contact" className="group bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-yellow-400 transition-all text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-yellow-600 transition-colors">Contact</h3>
              <p className="text-slate-500 text-sm mb-4">Discutons de votre projet et donnons vie à vos idées ensemble.</p>
              <span className="inline-flex items-center gap-1 text-yellow-600 font-semibold text-sm">Nous écrire <ArrowRight className="h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
