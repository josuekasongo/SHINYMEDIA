import { Eye, Target, CheckCircle2 } from 'lucide-react';

const values = [
  { name: "Excellence", desc: "Nous visons l'excellence dans chaque production et chaque service que nous offrons." },
  { name: "Innovation", desc: "Nous adoptons les technologies modernes pour proposer des solutions créatives et avant-gardistes." },
  { name: "Professionnalisme", desc: "Nous travaillons avec rigueur, ponctualité et éthique dans chaque projet." },
  { name: "Créativité", desc: "Nous encourageons la créativité comme moteur de notre travail et de nos productions." },
  { name: "Intégrité", desc: "Nous agissons avec honnêteté et transparence envers nos clients et partenaires." },
  { name: "Engagement", desc: "Nous sommes pleinement engagés envers nos clients, nos équipes et notre mission sociale." },
  { name: "Impact social", desc: "Nous croyons au rôle des médias dans le développement et la transformation de la société." }
];

export default function APropos() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 mb-6">
            Notre histoire
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">
            À <span className="text-gradient">propos</span> de nous
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Découvrez qui nous sommes, ce qui nous anime et pourquoi nous faisons ce que nous faisons.
          </p>
        </div>
      </section>

      {/* Qui sommes-nous */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
                Qui sommes-<span className="text-gradient">nous</span> ?
              </h2>
              <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-800">SHINY MEDIA</strong> est une agence de communication et de production multimédia dédiée à l'information, à la création de contenus et à la valorisation des talents.
                </p>
                <p>
                  Nous mettons notre expertise au service des entreprises, des organisations, des institutions, des artistes et des particuliers afin de produire des contenus innovants, créatifs et à fort impact.
                </p>
                <p>
                  Animée par une vision d'excellence, SHINY MEDIA utilise les technologies modernes pour raconter des histoires, promouvoir les initiatives locales et accompagner ses partenaires dans leur stratégie de communication.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-yellow-400 hover:shadow-lg transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-yellow-50 rounded-xl text-yellow-600 group-hover:bg-yellow-100 transition-colors">
                    <Eye className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Notre Vision</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Devenir une référence en Afrique dans les domaines des médias, de la communication digitale et de la production audiovisuelle, en inspirant le changement à travers des contenus de qualité.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-yellow-400 hover:shadow-lg transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-yellow-50 rounded-xl text-yellow-600 group-hover:bg-yellow-100 transition-colors">
                    <Target className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Notre Mission</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Informer avec professionnalisme, inspirer par la créativité et produire des contenus qui génèrent un impact positif sur la société.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Nos <span className="text-gradient">Valeurs</span></h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Ces valeurs fondamentales guident chacune de nos actions et décisions au quotidien.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-yellow-400 transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <h3 className="font-bold text-slate-800">{val.name}</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fondateurs & Partenaires */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed italic mb-16 border-l-4 border-yellow-400 pl-8 text-left">
            « Chez SHINY MEDIA, nous croyons que chaque image, chaque son et chaque histoire ont le pouvoir de transformer des vies et de bâtir un avenir meilleur. »
          </blockquote>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="px-8 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-semibold">
              👥 Membres fondateurs : <span className="text-yellow-600">SHINY COMPANY</span>
            </div>
            <div className="px-8 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-semibold">
              🤝 Partenaires : <span className="text-yellow-600">ASDPE-Asbl</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
