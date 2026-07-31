import { Play, ArrowRight, Video, Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../../components/Logo';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* 1. Hero Section - Premium Design */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,rgba(255,255,255,0)_70%)] rounded-full -z-10 blur-3xl animate-pulse"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center mt-20">
          <div className="animate-fade-in-up" style={{ animationDuration: '1s' }}>
            <Logo className="h-40 sm:h-56 w-auto mb-10 text-slate-900 drop-shadow-xl" />
          </div>
          
          <h1 className="text-5xl sm:text-7xl tracking-tight mb-6 font-extrabold text-slate-900 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            {t('home.hero_title_1')} <span className="text-gradient">{t('home.hero_title_2')}</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-500 mb-10 max-w-3xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            {t('home.hero_desc')}
          </p>
          
          <p className="text-sm sm:text-base font-bold tracking-[0.3em] uppercase text-yellow-600 mb-14 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            {t('home.hero_quote')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <Link
              to="/services"
              className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-slate-900 text-white font-bold uppercase tracking-widest shadow-xl shadow-slate-900/20 hover:shadow-slate-900/40 hover:-translate-y-1 hover:bg-slate-800 transition-all"
            >
              <Play className="h-5 w-5 fill-current text-yellow-500" />
              Découvrir nos services
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white border-2 border-slate-200 text-slate-700 font-bold uppercase tracking-widest hover:border-yellow-500 hover:text-yellow-600 hover:-translate-y-1 hover:shadow-lg transition-all group"
            >
              Démarrer un projet
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Features Section - Pourquoi nous choisir */}
      <section className="py-28 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        {/* Decor pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=')] opacity-50 mask-image-linear-gradient"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-3 block">L'approche Shiny</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
              Pourquoi nous <span className="text-gradient">choisir</span> ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-yellow-400 transition-all duration-300">
                <Target className="w-8 h-8 text-yellow-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Stratégie sur mesure</h3>
              <p className="text-slate-500 leading-relaxed">
                Chaque projet est unique. Nous concevons des stratégies personnalisées pour atteindre vos objectifs avec précision et maximiser votre impact.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-yellow-400 transition-all duration-300">
                <Lightbulb className="w-8 h-8 text-yellow-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Créativité innovante</h3>
              <p className="text-slate-500 leading-relaxed">
                Nous repoussons les limites de la créativité pour vous offrir des contenus originaux, esthétiques et qui captent l'attention de votre audience.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-yellow-400 transition-all duration-300">
                <Video className="w-8 h-8 text-yellow-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Qualité de production</h3>
              <p className="text-slate-500 leading-relaxed">
                De la captation d'image au montage final, nous utilisons des équipements professionnels pour un rendu audiovisuel d'excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Preview (Bento Grid Style) */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-3 block">Nos Domaines d'Expertise</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                Solutions complètes pour votre <span className="text-gradient">communication</span>
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 font-bold text-yellow-600 hover:text-yellow-500 transition-colors uppercase tracking-widest text-sm group">
              Voir tous les services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Large */}
            <Link to="/services" className="lg:col-span-2 bg-slate-900 rounded-3xl p-10 relative overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-yellow-500/20 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-16 text-yellow-500">
                  <Video className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">Production Audiovisuelle</h3>
                  <p className="text-slate-400 text-lg max-w-md">Films institutionnels, spots publicitaires, clips et documentaires de qualité cinématographique.</p>
                </div>
              </div>
            </Link>
            
            {/* Card 2 */}
            <Link to="/services" className="bg-yellow-50 rounded-3xl p-10 border border-yellow-100 group hover:shadow-2xl hover:border-yellow-300 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 text-yellow-600 shadow-sm">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Digital & Marketing</h3>
              <p className="text-slate-600">Stratégie réseaux sociaux, publicité ciblée et gestion de communauté.</p>
            </Link>
            
            {/* List Card */}
            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Et bien plus encore...</h3>
                <p className="text-slate-500">Nous couvrons l'ensemble de vos besoins en communication visuelle et sonore pour une cohérence parfaite de votre marque.</p>
              </div>
              <div className="grid grid-cols-2 gap-x-12 gap-y-4 w-full md:w-auto">
                <div className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-yellow-500" /> Photographie</div>
                <div className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-yellow-500" /> Événementiel</div>
                <div className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-yellow-500" /> Design Graphique</div>
                <div className="flex items-center gap-3 text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-yellow-500" /> Podcasts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Prêt à donner vie à votre <span className="text-yellow-400">projet</span> ?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Discutons de vos besoins et découvrez comment notre équipe peut vous aider à atteindre vos objectifs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 font-bold uppercase tracking-widest hover:shadow-xl hover:shadow-yellow-500/30 hover:-translate-y-1 transition-all"
          >
            Contactez-nous aujourd'hui
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
