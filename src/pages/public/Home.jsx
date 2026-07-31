import { Play, ArrowRight, Video, Target, Lightbulb, CheckCircle2, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../../components/Logo';
import PartnersTicker from '../../components/PartnersTicker';
import TestimonialsCarousel from '../../components/TestimonialsCarousel';

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
              {t('home.btn_services', "Découvrir nos services")}
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white border-2 border-slate-200 text-slate-700 font-bold uppercase tracking-widest hover:border-yellow-500 hover:text-yellow-600 hover:-translate-y-1 hover:shadow-lg transition-all group"
            >
              {t('home.btn_contact', "Démarrer un projet")}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Pourquoi nous choisir */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-3 block">{t('home.why_us_sub', "L'approche Shiny")}</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">{t('home.why_us_title_1', "Pourquoi nous")} <span className="text-gradient">{t('home.why_us_title_2', "choisir")}</span>{t('home.why_us_qmark', "?")}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('home.feat_1_title', "Stratégie sur mesure")}</h3>
              <p className="text-slate-500 leading-relaxed">{t('home.feat_1_desc', "Chaque projet est unique. Nous concevons des stratégies personnalisées pour atteindre vos objectifs avec précision et maximiser votre impact.")}</p>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-3xl shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl"></div>
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-yellow-500 mb-6">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t('home.feat_2_title', "Créativité innovante")}</h3>
              <p className="text-slate-400 leading-relaxed">{t('home.feat_2_desc', "Nous repoussons les limites de la créativité pour vous offrir des contenus originaux, esthétiques et qui captent l'attention de votre audience.")}</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                <Video className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('home.feat_3_title', "Qualité de production")}</h3>
              <p className="text-slate-500 leading-relaxed">{t('home.feat_3_desc', "De la captation d'image au montage final, nous utilisons des équipements professionnels pour un rendu audiovisuel d'excellence.")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Nos Services (Aperçu) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-3 block">{t('home.serv_sub', "Nos Domaines d'Expertise")}</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 max-w-2xl leading-tight">
                {t('home.serv_title_1', "Solutions complètes pour votre")} <span className="text-gradient">{t('home.serv_title_2', "communication")}</span>
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-yellow-600 transition-colors uppercase tracking-widest text-sm group">
              {t('home.serv_see_all', "Voir tous les services")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Link to="/services" className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
              <img src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2071&auto=format&fit=crop" alt="Production Vidéo" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-slate-900 mb-4 group-hover:-translate-y-2 transition-transform">
                  <Video className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('home.serv_1_title', "Production Audiovisuelle")}</h3>
                <p className="text-slate-300 line-clamp-2">{t('home.serv_1_desc', "Films institutionnels, spots publicitaires, clips et documentaires de qualité cinématographique.")}</p>
              </div>
            </Link>

            {/* Service 2 */}
            <Link to="/services" className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Marketing Digital" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-slate-900 mb-4 group-hover:-translate-y-2 transition-transform">
                  <Share2 className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('home.serv_2_title', "Digital & Marketing")}</h3>
                <p className="text-slate-300 line-clamp-2">{t('home.serv_2_desc', "Stratégie réseaux sociaux, publicité ciblée et gestion de communauté.")}</p>
              </div>
            </Link>
            
            {/* List Card */}
            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200 md:col-span-2 lg:col-span-1 flex flex-col items-start justify-center gap-6">
              <h3 className="text-2xl font-bold text-slate-900">{t('home.serv_3_title', "Et bien plus encore...")}</h3>
              <p className="text-slate-500 mb-4">{t('home.serv_3_desc', "Nous couvrons l'ensemble de vos besoins en communication visuelle et sonore pour une cohérence parfaite de votre marque.")}</p>
              
              <ul className="space-y-4 w-full">
                <li className="flex items-center gap-3 text-slate-700 font-medium bg-white p-4 rounded-xl border border-slate-100 shadow-sm"><CheckCircle2 className="text-yellow-500 w-5 h-5" /> {t('home.serv_3_li_1', "Photographie")}</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium bg-white p-4 rounded-xl border border-slate-100 shadow-sm"><CheckCircle2 className="text-yellow-500 w-5 h-5" /> {t('home.serv_3_li_2', "Événementiel")}</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium bg-white p-4 rounded-xl border border-slate-100 shadow-sm"><CheckCircle2 className="text-yellow-500 w-5 h-5" /> {t('home.serv_3_li_3', "Design Graphique")}</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium bg-white p-4 rounded-xl border border-slate-100 shadow-sm"><CheckCircle2 className="text-yellow-500 w-5 h-5" /> {t('home.serv_3_li_4', "Podcasts")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <PartnersTicker />

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-slate-900 border-t-4 border-yellow-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute -left-20 top-0 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-6">
            {t('home.cta_title_1', "Prêt à donner vie à votre")} <span className="text-yellow-500">{t('home.cta_title_2', "projet")}</span>{t('home.cta_title_3', "?")}
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            {t('home.cta_desc', "Discutons de vos besoins et découvrez comment notre équipe peut vous aider à atteindre vos objectifs.")}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 font-bold uppercase tracking-widest hover:shadow-xl hover:shadow-yellow-500/30 hover:-translate-y-1 transition-all"
          >
            {t('home.cta_btn', "Contactez-nous aujourd'hui")}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
