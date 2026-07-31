import { Eye, Target, CheckCircle2, ChevronRight, Award, Zap, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function APropos() {
  const { t } = useTranslation();

  const values = [
    { name: t('apropos.val1_name', "Excellence"), desc: t('apropos.val1_desc', "Nous visons l'excellence dans chaque production et chaque service que nous offrons."), icon: <Award className="w-6 h-6" /> },
    { name: t('apropos.val2_name', "Innovation"), desc: t('apropos.val2_desc', "Nous adoptons les technologies modernes pour des solutions créatives et avant-gardistes."), icon: <Zap className="w-6 h-6" /> },
    { name: t('apropos.val3_name', "Intégrité"), desc: t('apropos.val3_desc', "Nous agissons avec honnêteté et transparence envers nos clients et partenaires."), icon: <HeartHandshake className="w-6 h-6" /> },
    { name: t('apropos.val4_name', "Impact social"), desc: t('apropos.val4_desc', "Nous croyons au rôle des médias dans le développement et la transformation de la société."), icon: <Target className="w-6 h-6" /> }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Hero Section - Premium Design */}
      <section className="bg-slate-900 text-white py-32 text-center relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.15)_0%,transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 mb-6 animate-fade-in-up">
            {t('apropos.hero_badge', "Notre Histoire")}
          </span>
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-8 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t('apropos.hero_title_1', "À propos de")} <span className="text-gradient">{t('apropos.hero_title_2', "Nous")}</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('apropos.hero_desc', "Découvrez l'équipe, la vision et la passion qui animent SHINY MÉDIA pour créer des contenus à fort impact.")}
          </p>
        </div>
      </section>

      {/* 2. Qui sommes-nous */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side text */}
            <div className="relative">
              <div className="absolute -left-8 -top-8 w-24 h-24 bg-yellow-100 rounded-full blur-2xl opacity-50"></div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-8 relative z-10">
                {t('apropos.who_title_1', "L'Agence des")} <span className="text-gradient">{t('apropos.who_title_2', "Talents")}</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed relative z-10">
                <p>
                  <strong className="text-slate-900 font-extrabold">SHINY MEDIA</strong> {t('apropos.who_p1', "est une agence de communication et de production multimédia dédiée à l'information, à la création de contenus et à la valorisation des talents.")}
                </p>
                <p>
                  {t('apropos.who_p2', "Nous mettons notre expertise au service des entreprises, des organisations, des institutions, des artistes et des particuliers afin de produire des contenus innovants, créatifs et à fort impact.")}
                </p>
                <p>
                  {t('apropos.who_p3', "Animée par une vision d'excellence, notre équipe utilise les technologies modernes pour raconter des histoires, promouvoir les initiatives locales et accompagner ses partenaires dans leur stratégie de communication.")}
                </p>
              </div>
              
              <Link to="/contact" className="inline-flex items-center gap-2 mt-10 font-bold text-yellow-600 hover:text-yellow-500 transition-colors uppercase tracking-widest text-sm group">
                {t('apropos.who_link', "Rencontrer notre équipe")}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Right side Vision & Mission Cards */}
            <div className="space-y-8 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-100 rounded-full blur-3xl -z-10"></div>
              
              <div className="bg-white border border-slate-100 shadow-xl shadow-slate-200/40 rounded-3xl p-10 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                <div className="flex items-center gap-5 mb-6">
                  <div className="p-4 bg-yellow-100 rounded-2xl text-yellow-600">
                    <Eye className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{t('apropos.vision_title', "Notre Vision")}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {t('apropos.vision_desc', "Devenir une référence incontournable en Afrique dans les médias, la communication digitale et la production audiovisuelle, en inspirant le changement à travers des contenus de qualité supérieure.")}
                </p>
              </div>
              
              <div className="bg-slate-900 border border-slate-800 shadow-xl shadow-slate-900/20 rounded-3xl p-10 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_70%)] -z-10"></div>
                <div className="flex items-center gap-5 mb-6">
                  <div className="p-4 bg-slate-800 rounded-2xl text-yellow-500">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t('apropos.mission_title', "Notre Mission")}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed text-lg">
                  {t('apropos.mission_desc', "Informer avec rigueur professionnelle, inspirer par une créativité sans limite et produire des contenus qui génèrent un impact positif et durable sur la société.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Valeurs */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        {/* Decor */}
        <div className="absolute -left-40 top-40 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -right-40 bottom-40 w-96 h-96 bg-slate-300/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-3 block">{t('apropos.val_badge', "L'ADN Shiny")}</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">{t('apropos.val_title_1', "Nos")} <span className="text-gradient">{t('apropos.val_title_2', "Valeurs")}</span></h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t('apropos.val_desc', "Ces principes fondamentaux guident chacune de nos actions, façonnent notre culture et garantissent l'excellence de nos services.")}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 group text-center">
                <div className="w-16 h-16 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{val.name}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Fondateurs & Partenaires (Premium Citation Block) */}
      <section className="py-24 relative bg-slate-900 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-yellow-500 mb-8 flex justify-center">
            {/* Large Quotes Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="opacity-50">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
          <blockquote className="text-3xl md:text-4xl font-light text-white leading-tight italic mb-16 max-w-4xl mx-auto">
            {t('apropos.quote', "« Chez SHINY MEDIA, nous croyons que chaque image, chaque son et chaque histoire ont le pouvoir de transformer des vies et de bâtir un avenir meilleur. »")}
          </blockquote>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="px-8 py-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white font-medium hover:bg-white/10 transition-colors">
              <span className="text-slate-400 block text-sm mb-1 uppercase tracking-widest">{t('apropos.founders', "Membres fondateurs")}</span>
              <span className="text-xl text-yellow-400 font-bold">SHINY COMPANY</span>
            </div>
            
            {/* Plus divider */}
            <div className="hidden md:block text-slate-600 font-light text-2xl">+</div>
            
            <div className="px-8 py-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white font-medium hover:bg-white/10 transition-colors">
              <span className="text-slate-400 block text-sm mb-1 uppercase tracking-widest">{t('apropos.partners', "Partenaires officiels")}</span>
              <span className="text-xl text-yellow-400 font-bold">ASDPE-Asbl</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
