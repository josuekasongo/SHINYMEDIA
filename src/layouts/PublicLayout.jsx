import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, ChevronRight, MapPin, Phone, Mail, Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from '../components/Logo';

function PublicLayout() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' }
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <div className={`flex flex-col min-h-screen ${i18n.language === 'ar' ? 'dir-rtl' : 'dir-ltr'}`} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="glass fixed w-full top-0 z-50 py-3">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <Logo className="h-12 sm:h-16 w-auto text-slate-900" />
          </Link>
          
          <div className="flex items-center gap-8">
            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 font-medium text-slate-700">
              <Link to="/" className={`hover:text-yellow-600 transition-colors ${isActive('/') ? 'text-yellow-600 font-bold' : ''}`}>{t('nav.home')}</Link>
              <Link to="/services" className={`hover:text-yellow-600 transition-colors ${isActive('/services') ? 'text-yellow-600 font-bold' : ''}`}>{t('nav.services')}</Link>
              <Link to="/apropos" className={`hover:text-yellow-600 transition-colors ${isActive('/apropos') ? 'text-yellow-600 font-bold' : ''}`}>{t('nav.about')}</Link>
              <Link to="/contact" className={`hover:text-yellow-600 transition-colors ${isActive('/contact') ? 'text-yellow-600 font-bold' : ''}`}>{t('nav.contact')}</Link>
            </nav>

            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-slate-700 hover:text-yellow-600 font-medium bg-slate-100 px-3 py-2 rounded-xl transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span className="hidden sm:inline">{currentLang.flag} {currentLang.code.toUpperCase()}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-50">
                  {languages.map((lng) => (
                    <button
                      key={lng.code}
                      onClick={() => changeLanguage(lng.code)}
                      className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-colors ${i18n.language === lng.code ? 'bg-yellow-50 text-yellow-700 font-bold' : 'text-slate-700'}`}
                    >
                      <span className="text-xl">{lng.flag}</span>
                      <span>{lng.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-700 hover:text-yellow-600 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-6 flex flex-col gap-4 font-medium text-slate-700">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 ${isActive('/') ? 'text-yellow-600 font-bold' : ''}`}>{t('nav.home')}</Link>
            <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 ${isActive('/services') ? 'text-yellow-600 font-bold' : ''}`}>{t('nav.services')}</Link>
            <Link to="/apropos" onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 ${isActive('/apropos') ? 'text-yellow-600 font-bold' : ''}`}>{t('nav.about')}</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 ${isActive('/contact') ? 'text-yellow-600 font-bold' : ''}`}>{t('nav.contact')}</Link>
          </nav>
        )}
      </header>
      
      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 mt-20 border-t-4 border-yellow-500">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-white p-3 rounded-2xl mb-6 inline-block shadow-lg">
              <Logo className="h-14 w-auto text-slate-900" />
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all hover:-translate-y-1">
                 <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all hover:-translate-y-1">
                 <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all hover:-translate-y-1">
                 <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all hover:-translate-y-1">
                 <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">{t('footer.quick_links')}</h3>
            <nav className="flex flex-col gap-4">
              <Link to="/" className="hover:text-yellow-400 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4 text-yellow-500" /> {t('nav.home')}</Link>
              <Link to="/services" className="hover:text-yellow-400 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4 text-yellow-500" /> {t('nav.services')}</Link>
              <Link to="/apropos" className="hover:text-yellow-400 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4 text-yellow-500" /> {t('nav.about')}</Link>
              <Link to="/contact" className="hover:text-yellow-400 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4 text-yellow-500" /> {t('nav.contact')}</Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">{t('footer.contact_us')}</h3>
            <div className="flex flex-col gap-5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">République Démocratique du Congo</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400" dir="ltr">+243 808 872 935 <br/> +243 975 598 860</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">shinymedia@gmail.com</span>
              </div>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} SHINY MÉDIA. {t('footer.rights')}</p>
          <p className="font-medium tracking-widest text-slate-400">{t('footer.slogan')}</p>
        </div>
      </footer>
    </div>
  );
}

export default PublicLayout;
