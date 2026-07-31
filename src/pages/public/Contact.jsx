import { Phone, Mail, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
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
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Hero Section - Premium Design */}
      <section className="bg-slate-900 text-white py-32 text-center relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_70%)] rounded-full -z-10 blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 mb-6 animate-fade-in-up">
            Parlons de votre projet
          </span>
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-8 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Contactez-<span className="text-gradient">Nous</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Une question, un projet, une idée ? Notre équipe est prête à vous écouter et à transformer votre vision en réalité.
          </p>
        </div>
      </section>

      {/* 2. Contact Info + Form */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle background decor */}
        <div className="absolute -left-20 top-20 w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-16 relative z-10">
          
          {/* Left: Contact Info (Takes 2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Informations de <span className="text-gradient">contact</span></h2>
              <p className="text-slate-500 mb-8">N'hésitez pas à nous joindre directement via nos coordonnées ci-dessous ou en remplissant le formulaire.</p>
            </div>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-yellow-200 transition-all group">
                <div className="p-4 bg-slate-50 rounded-2xl text-slate-400 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Téléphone</p>
                  <p className="text-slate-500 font-medium">+243 808 872 935</p>
                  <p className="text-slate-500 font-medium">+243 975 598 860</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-yellow-200 transition-all group">
                <div className="p-4 bg-slate-50 rounded-2xl text-slate-400 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Email</p>
                  <a href="mailto:shinymedia@gmail.com" className="text-slate-500 font-medium hover:text-yellow-600 transition-colors">shinymedia@gmail.com</a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-yellow-200 transition-all group">
                <div className="p-4 bg-slate-50 rounded-2xl text-slate-400 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Localisation</p>
                  <p className="text-slate-500 font-medium">République Démocratique du Congo</p>
                </div>
              </div>
            </div>

            {/* Disponibility Banner */}
            <div className="mt-8 p-8 bg-slate-900 rounded-3xl text-white shadow-xl shadow-slate-900/20 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <Clock className="w-6 h-6 text-yellow-500" />
                <p className="font-bold text-xl">Disponibilité</p>
              </div>
              <div className="space-y-3 relative z-10">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <span className="text-slate-400">Lundi – Vendredi</span>
                  <span className="font-semibold text-yellow-500">08h00 – 18h00</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-slate-400">Dimanche</span>
                  <span className="font-semibold text-yellow-500">09h00 – 14h00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Premium Form (Takes 3 cols) */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-yellow-50 rounded-2xl text-yellow-600">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900">Envoyez-nous un message</h2>
              </div>
              
              {sent && (
                <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl text-green-700 font-medium flex items-center gap-3 animate-fade-in-up">
                  <span className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0 text-green-800 text-xl">✓</span>
                  Votre message a bien été envoyé ! Nous vous répondrons dans les plus brefs délais.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700 ml-1">Nom complet *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all text-slate-900 font-medium placeholder-slate-400"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700 ml-1">Adresse Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all text-slate-900 font-medium placeholder-slate-400"
                      placeholder="jean.dupont@email.com"
                    />
                  </div>
                </div>
                
                {/* Subject */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700 ml-1">Sujet *</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={e => setForm({...form, subject: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all text-slate-900 font-medium placeholder-slate-400"
                    placeholder="De quoi souhaitez-vous discuter ?"
                  />
                </div>
                
                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700 ml-1">Votre Message *</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all text-slate-900 font-medium placeholder-slate-400 resize-none"
                    placeholder="Décrivez votre projet ou votre demande avec le plus de détails possible..."
                  />
                </div>
                
                {/* Submit */}
                <button
                  type="submit"
                  className="w-full sm:w-auto mt-4 flex items-center justify-center gap-3 py-5 px-10 rounded-2xl bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 hover:-translate-y-1 transition-all"
                >
                  <Send className="h-5 w-5 text-yellow-500" />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
