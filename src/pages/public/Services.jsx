import { Video, Camera, Presentation, Share2, PenTool, Target, Mic, BookOpen, MessageSquare, Wand2, Rocket, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function Services() {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setSelectedService(null); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedService ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedService]);

  const services = [
    {
      name: t('services.s1_name', "Production audiovisuelle"),
      desc: t('services.s1_desc', "Vidéos, documentaires, reportages, clips musicaux et publicitaires de haute qualité."),
      icon: <Video className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=800&auto=format&fit=crop",
      details: [t('services.s1_d1', "Tournage & réalisation"), t('services.s1_d2', "Montage professionnel"), t('services.s1_d3', "Motion design"), t('services.s1_d4', "Effets spéciaux")],
      longDesc: t('services.s1_long', "Notre équipe de production audiovisuelle transforme vos idées en œuvres visuelles percutantes. De la conception du scénario au rendu final, nous accompagnons chaque étape avec professionnalisme et créativité. Documentaires, films institutionnels, spots TV, clips musicaux — chaque projet bénéficie d'une approche cinématographique unique et d'équipements de pointe.")
    },
    {
      name: t('services.s2_name', "Photographie professionnelle"),
      desc: t('services.s2_desc', "Couvertures photo pour tous vos événements, portraits et campagnes visuelles."),
      icon: <Camera className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
      details: [t('services.s2_d1', "Portraits & branding"), t('services.s2_d2', "Événementiel"), t('services.s2_d3', "Produits & publicité"), t('services.s2_d4', "Retouche photo")],
      longDesc: t('services.s2_long', "Chaque image raconte une histoire. Nos photographes professionnels capturent l'essence de vos événements, valorisent votre image de marque et subliment vos produits. Portraits corporate, couverture événementielle, photographies publicitaires — nos clichés font la différence et marquent les esprits.")
    },
    {
      name: t('services.s3_name', "Couverture médiatique"),
      desc: t('services.s3_desc', "Présence complète lors de vos événements pour une couverture médiatique professionnelle."),
      icon: <Presentation className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
      details: [t('services.s3_d1', "Live reporting"), t('services.s3_d2', "Conférences & congrès"), t('services.s3_d3', "Cérémonies & galas"), t('services.s3_d4', "Événements culturels")],
      longDesc: t('services.s3_long', "Votre événement mérite une couverture à la hauteur de son importance. SHINY MÉDIA déploie une équipe complète — journalistes, cameramen, photographes et techniciens — pour documenter, diffuser et valoriser chacun de vos moments forts. Live, reportages et archives de qualité professionnelle.")
    },
    {
      name: t('services.s4_name', "Communication digitale"),
      desc: t('services.s4_desc', "Gestion de vos réseaux sociaux et stratégie de communication en ligne."),
      icon: <Share2 className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
      details: [t('services.s4_d1', "Gestion des réseaux sociaux"), t('services.s4_d2', "Création de contenu"), t('services.s4_d3', "Community management"), t('services.s4_d4', "Stratégie digitale")],
      longDesc: t('services.s4_long', "Dans un monde où le digital est roi, votre présence en ligne est votre vitrine. Nous gérons vos réseaux sociaux, créons du contenu engageant, animons votre communauté et développons des stratégies qui augmentent votre visibilité, génèrent de l'engagement et convertissent votre audience en clients fidèles.")
    },
    {
      name: t('services.s5_name', "Identité visuelle"),
      desc: t('services.s5_desc', "Design de logos, chartes graphiques et supports de communication visuels."),
      icon: <PenTool className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
      details: [t('services.s5_d1', "Logo & charte graphique"), t('services.s5_d2', "Affiches & flyers"), t('services.s5_d3', "Infographies"), t('services.s5_d4', "Supports print & web")],
      longDesc: t('services.s5_long', "Une identité visuelle forte est le fondement de toute marque réussie. Nos designers créent des logos mémorables, des chartes graphiques cohérentes et des supports de communication qui reflètent parfaitement vos valeurs. De la carte de visite au panneau publicitaire, chaque élément visuel est conçu pour marquer les esprits.")
    },
    {
      name: t('services.s6_name', "Marketing digital"),
      desc: t('services.s6_desc', "Campagnes publicitaires ciblées pour maximiser votre visibilité et votre impact."),
      icon: <Target className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=800&auto=format&fit=crop",
      details: [t('services.s6_d1', "Campagnes sponsorisées"), t('services.s6_d2', "SEO & SEA"), t('services.s6_d3', "Email marketing"), t('services.s6_d4', "Analyse & reporting")],
      longDesc: t('services.s6_long', "Atteignez vos cibles avec précision grâce à nos stratégies de marketing digital. Publicités Meta, Google Ads, SEO, email marketing — nous maîtrisons tous les leviers d'acquisition pour maximiser votre ROI. Chaque campagne est analysée et optimisée en temps réel pour des résultats concrets et mesurables.")
    },
    {
      name: t('services.s7_name', "Podcasts & audio"),
      desc: t('services.s7_desc', "Production et diffusion de podcasts et d'émissions audio professionnelles."),
      icon: <Mic className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800&auto=format&fit=crop",
      details: [t('services.s7_d1', "Enregistrement studio"), t('services.s7_d2', "Montage audio"), t('services.s7_d3', "Diffusion multi-plateformes"), t('services.s7_d4', "Émissions thématiques")],
      longDesc: t('services.s7_long', "Le podcast est devenu l'un des formats les plus puissants pour créer du lien avec votre audience. Notre studio d'enregistrement professionnel et notre équipe de production audio vous accompagnent de la conception au lancement. Nous gérons également la diffusion sur toutes les plateformes : Spotify, Apple Podcasts, Deezer et plus encore.")
    },
    {
      name: t('services.s8_name', "Formation & médias"),
      desc: t('services.s8_desc', "Formations pratiques pour les jeunes talents dans les métiers des médias."),
      icon: <BookOpen className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
      details: [t('services.s8_d1', "Journalisme & rédaction"), t('services.s8_d2', "Photographie & vidéo"), t('services.s8_d3', "Communication digitale"), t('services.s8_d4', "Création de contenu")],
      longDesc: t('services.s8_long', "Investir dans les talents de demain est notre engagement. Nos formations pratiques en journalisme, photographie, vidéo et communication digitale permettent aux jeunes professionnels de développer des compétences concrètes et directement applicables. Encadrés par des experts du secteur, nos stagiaires repartent avec un portfolio solide et des bases professionnelles.")
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* === MODAL === */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm animate-fade-in" />

          {/* Modal content */}
          <div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fade-in-up z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image header */}
            <div className="relative h-56 overflow-hidden rounded-t-3xl">
              <img
                src={selectedService.image}
                alt={selectedService.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              {/* Icon badge */}
              <div className="absolute bottom-5 left-6 flex items-center gap-4">
                <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center text-slate-900 shadow-lg">
                  {selectedService.icon}
                </div>
                <h2 className="text-2xl font-extrabold text-white drop-shadow">{selectedService.name}</h2>
              </div>
              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-8">
              <p className="text-slate-600 leading-relaxed text-lg mb-8">{selectedService.longDesc}</p>

              {/* Details */}
              <h3 className="text-sm font-bold tracking-widest uppercase text-yellow-600 mb-4">Ce qui est inclus</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {selectedService.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl border border-slate-100 text-slate-700 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                onClick={() => setSelectedService(null)}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-yellow-600 transition-all"
              >
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 1. Hero Section */}
      <section className="bg-slate-900 text-white py-32 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_70%)] rounded-full -z-10 blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 mb-6 animate-fade-in-up">
            {t('services.hero_badge', "Nos expertises")}
          </span>
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-8 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t('services.hero_title_1', "Des solutions pour")} <span className="text-gradient">{t('services.hero_title_2', "inspirer")}</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('services.hero_desc', "De la production audiovisuelle à la communication digitale, nous concevons des stratégies sur mesure pour valoriser votre image et atteindre vos objectifs.")}
          </p>
        </div>
      </section>

      {/* 2. Méthodologie */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">{t('services.meth_title_1', "Notre")} <span className="text-gradient">{t('services.meth_title_2', "Méthodologie")}</span></h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t('services.meth_desc', "Une approche structurée et collaborative pour garantir le succès de votre projet de A à Z.")}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
            
            <div className="relative bg-white z-10 text-center px-6">
              <div className="w-24 h-24 mx-auto bg-slate-50 rounded-full border-4 border-white shadow-xl shadow-slate-200/50 flex items-center justify-center mb-6 text-yellow-500">
                <MessageSquare className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t('services.meth_1_title', "1. Écoute & Analyse")}</h3>
              <p className="text-slate-500 leading-relaxed">{t('services.meth_1_desc', "Nous prenons le temps de comprendre vos besoins, votre audience et vos objectifs pour définir la meilleure stratégie.")}</p>
            </div>
            
            <div className="relative bg-white z-10 text-center px-6">
              <div className="w-24 h-24 mx-auto bg-yellow-500 rounded-full border-4 border-white shadow-xl shadow-yellow-500/30 flex items-center justify-center mb-6 text-white">
                <Wand2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t('services.meth_2_title', "2. Création & Production")}</h3>
              <p className="text-slate-500 leading-relaxed">{t('services.meth_2_desc', "Notre équipe d'experts donne vie à vos idées grâce à des équipements professionnels et une créativité sans limite.")}</p>
            </div>
            
            <div className="relative bg-white z-10 text-center px-6">
              <div className="w-24 h-24 mx-auto bg-slate-900 rounded-full border-4 border-white shadow-xl shadow-slate-900/20 flex items-center justify-center mb-6 text-yellow-400">
                <Rocket className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t('services.meth_3_title', "3. Déploiement & Impact")}</h3>
              <p className="text-slate-500 leading-relaxed">{t('services.meth_3_desc', "Nous diffusons vos contenus sur les canaux adaptés et mesurons les résultats pour maximiser votre retour sur investissement.")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">{t('services.cat_title_1', "Catalogue des")} <span className="text-gradient">{t('services.cat_title_2', "Services")}</span></h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t('services.cat_desc', "Découvrez en détail ce que SHINY MÉDIA peut accomplir pour vous.")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedService(service)}
                className="group bg-white rounded-3xl shadow-sm border border-slate-200 hover:shadow-2xl hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 flex flex-col relative overflow-hidden text-left cursor-pointer"
              >
                {/* Service image */}
                <div className="relative h-44 overflow-hidden rounded-t-3xl">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-slate-900 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  {/* Click hint */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-full">
                    En savoir plus →
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl group-hover:bg-yellow-400/20 transition-colors duration-500"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">{service.desc}</p>
                  <ul className="space-y-2 pt-4 border-t border-slate-100">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="w-20 h-20 mx-auto bg-yellow-500/10 rounded-full flex items-center justify-center mb-8 border border-yellow-500/30">
            <MessageSquare className="w-10 h-10 text-yellow-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            {t('services.cta_title_1', "Prêt à lancer votre")} <span className="text-yellow-400">{t('services.cta_title_2', "projet")}</span>{t('services.cta_title_3', "?")}
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('services.cta_desc', "Contactez-nous dès aujourd'hui. Notre équipe est à votre écoute pour transformer vos idées en réalisations concrètes et impactantes.")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 font-bold uppercase tracking-widest hover:shadow-xl hover:shadow-yellow-500/30 hover:-translate-y-1 transition-all"
            >
              {t('services.cta_btn', "Obtenir un devis gratuit")}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
