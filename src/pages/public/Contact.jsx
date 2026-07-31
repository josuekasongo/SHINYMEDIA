import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Hero Section - Premium Design */}
      <section className="bg-slate-900 text-white py-32 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_70%)] rounded-full -z-10 blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 mb-6 animate-fade-in-up">
            {t('contact.hero_badge', "Contactez-nous")}
          </span>
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-8 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t('contact.hero_title_1', "Démarrons un")} <span className="text-gradient">{t('contact.hero_title_2', "Projet")}</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('contact.hero_desc', "Une idée, un projet ou besoin de plus d'informations ? Notre équipe est prête à vous accompagner. Discutons-en dès aujourd'hui.")}
          </p>
        </div>
      </section>

      {/* 2. Contact Content */}
      <section className="py-24 relative bg-white">
        <div className="absolute inset-0 bg-slate-50/50"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            
            {/* Infos Contact (Cards) */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8">{t('contact.info_title', "Nos Coordonnées")}</h2>
              
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-yellow-200 transition-all group">
                <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t('contact.phone_title', "Téléphone")}</h3>
                <p className="text-slate-500 mb-1">{t('contact.phone_desc', "Lundi - Vendredi de 8h à 18h")}</p>
                <div className="text-slate-800 font-medium text-lg mt-2" dir="ltr">
                  +243 808 872 935<br/>
                  +243 975 598 860
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-yellow-200 transition-all group">
                <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t('contact.email_title', "Email")}</h3>
                <p className="text-slate-500 mb-1">{t('contact.email_desc', "Nous vous répondrons dans les 24h")}</p>
                <div className="text-slate-800 font-medium text-lg mt-2">
                  shinymedia@gmail.com
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-yellow-200 transition-all group">
                <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t('contact.address_title', "Adresse")}</h3>
                <p className="text-slate-500 mb-1">{t('contact.address_desc', "Siège Social")}</p>
                <div className="text-slate-800 font-medium text-lg mt-2">
                  République Démocratique du Congo
                </div>
              </div>
            </div>

            {/* Formulaire Premium */}
            <div className="lg:col-span-3">
              <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-yellow-100 to-transparent rounded-full opacity-50 blur-3xl -z-10"></div>
                
                <h2 className="text-3xl font-extrabold text-slate-900 mb-2">{t('contact.form_title', "Envoyez-nous un message")}</h2>
                <p className="text-slate-500 mb-10">{t('contact.form_desc', "Remplissez le formulaire ci-dessous et nous vous contacterons rapidement.")}</p>

                {formStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 p-8 rounded-2xl flex flex-col items-center text-center animate-fade-in-up">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">{t('contact.form_success_title', "Message envoyé avec succès !")}</h3>
                    <p className="text-green-600">{t('contact.form_success_desc', "Merci de nous avoir contacté. Notre équipe reviendra vers vous très vite.")}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">{t('contact.form_label_name', "Nom complet")}</label>
                        <input 
                          type="text" 
                          required
                          placeholder={t('contact.form_placeholder_name', "Jean Dupont")}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all outline-none text-slate-700 placeholder-slate-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">{t('contact.form_label_email', "Adresse email")}</label>
                        <input 
                          type="email" 
                          required
                          placeholder={t('contact.form_placeholder_email', "jean@exemple.com")}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all outline-none text-slate-700 placeholder-slate-400"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">{t('contact.form_label_subject', "Sujet")}</label>
                      <input 
                        type="text" 
                        required
                        placeholder={t('contact.form_placeholder_subject', "Je souhaite réaliser une vidéo publicitaire")}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all outline-none text-slate-700 placeholder-slate-400"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">{t('contact.form_label_msg', "Message")}</label>
                      <textarea 
                        rows={5}
                        required
                        placeholder={t('contact.form_placeholder_msg', "Décrivez votre projet ici...")}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all outline-none text-slate-700 placeholder-slate-400 resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'sending'}
                      className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-500/20 transition-all flex justify-center items-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'sending' ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          {t('contact.form_btn', "Envoyer le message")}
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
