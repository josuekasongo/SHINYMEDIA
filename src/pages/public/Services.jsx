import { Video, Camera, Presentation, Share2, PenTool, Target, Mic, BookOpen } from 'lucide-react';

const services = [
  {
    name: "Production audiovisuelle",
    desc: "Vidéos, documentaires, reportages, clips musicaux et publicitaires de haute qualité.",
    icon: <Video className="h-8 w-8" />,
    details: ["Tournage & réalisation", "Montage professionnel", "Motion design", "Effets spéciaux"]
  },
  {
    name: "Photographie professionnelle",
    desc: "Couvertures photo pour tous vos événements, portraits et campagnes visuelles.",
    icon: <Camera className="h-8 w-8" />,
    details: ["Portraits & branding", "Événementiel", "Produits & publicité", "Retouche photo"]
  },
  {
    name: "Couverture médiatique d'événements",
    desc: "Présence complète lors de vos événements pour une couverture médiatique professionnelle.",
    icon: <Presentation className="h-8 w-8" />,
    details: ["Live reporting", "Conférences & congrès", "Cérémonies & galas", "Événements culturels"]
  },
  {
    name: "Communication digitale",
    desc: "Gestion de vos réseaux sociaux et stratégie de communication en ligne.",
    icon: <Share2 className="h-8 w-8" />,
    details: ["Gestion des réseaux sociaux", "Création de contenu", "Community management", "Stratégie digitale"]
  },
  {
    name: "Création graphique & identité visuelle",
    desc: "Design de logos, chartes graphiques et supports de communication visuels.",
    icon: <PenTool className="h-8 w-8" />,
    details: ["Logo & charte graphique", "Affiches & flyers", "Infographies", "Supports print & web"]
  },
  {
    name: "Publicité & marketing digital",
    desc: "Campagnes publicitaires ciblées pour maximiser votre visibilité et votre impact.",
    icon: <Target className="h-8 w-8" />,
    details: ["Campagnes sponsorisées", "SEO & SEA", "Email marketing", "Analyse & reporting"]
  },
  {
    name: "Podcasts & émissions radio",
    desc: "Production et diffusion de podcasts et d'émissions audio professionnelles.",
    icon: <Mic className="h-8 w-8" />,
    details: ["Enregistrement studio", "Montage audio", "Diffusion multi-plateformes", "Émissions thématiques"]
  },
  {
    name: "Formation & accompagnement",
    desc: "Formations pratiques pour les jeunes talents dans les métiers des médias.",
    icon: <BookOpen className="h-8 w-8" />,
    details: ["Journalisme & rédaction", "Photographie & vidéo", "Communication digitale", "Création de contenu"]
  }
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 mb-6">
            Nos expertises
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">
            Nos <span className="text-gradient">Services</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            De la production audiovisuelle à la communication digitale, nous mettons notre expertise au service de votre succès.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-yellow-400 transition-all duration-300 flex flex-col"
              >
                <div className="mb-6 p-4 bg-yellow-50 rounded-xl text-yellow-600 w-fit group-hover:bg-yellow-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{service.name}</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-grow">{service.desc}</p>
                <ul className="space-y-2">
                  {service.details.map((d, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0"></span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-extrabold mb-6">Un projet en tête ?</h2>
          <p className="text-slate-400 text-lg mb-10">Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-1 transition-all"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </div>
  );
}
