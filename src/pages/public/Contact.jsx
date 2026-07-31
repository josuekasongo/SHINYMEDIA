import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to Firebase or email service
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 mb-6">
            Parlons de votre projet
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">
            Nous <span className="text-gradient">Contacter</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Une question, un projet, une idée ? Nous sommes là pour vous accompagner.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Informations de contact</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-50 rounded-xl text-yellow-600 mt-1">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">Téléphone</p>
                  <p className="text-slate-600">0808 872 935</p>
                  <p className="text-slate-600">0975 598 860</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-50 rounded-xl text-yellow-600 mt-1">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">Email</p>
                  <p className="text-slate-600">shinymedia@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-50 rounded-xl text-yellow-600 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">Localisation</p>
                  <p className="text-slate-600">République Démocratique du Congo</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-slate-900 rounded-2xl text-white">
              <p className="text-yellow-400 font-bold text-lg mb-2">🕐 Disponibilité</p>
              <p className="text-slate-400">Lundi – Vendredi : 08h00 – 18h00</p>
              <p className="text-slate-400">Samedi : 09h00 – 14h00</p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Envoyez-nous un message</h2>
            {sent && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 font-medium">
                ✅ Votre message a bien été envoyé ! Nous vous répondrons dans les plus brefs délais.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nom complet *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition text-slate-800"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition text-slate-800"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Sujet *</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={e => setForm({...form, subject: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition text-slate-800"
                  placeholder="Objet de votre message"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message *</label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition text-slate-800 resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-0.5 transition-all"
              >
                <Send className="h-5 w-5" />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
