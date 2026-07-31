import { Outlet, Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import Logo from '../components/Logo';

function PublicLayout() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="glass fixed w-full top-0 z-50 py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="h-16 w-auto text-slate-900" />
          </Link>
          <nav className="flex gap-8 font-medium text-slate-700">
            <Link to="/" className={`hover:text-yellow-600 transition-colors ${isActive('/') ? 'text-yellow-600 font-bold' : ''}`}>Accueil</Link>
            <Link to="/services" className={`hover:text-yellow-600 transition-colors ${isActive('/services') ? 'text-yellow-600 font-bold' : ''}`}>Services</Link>
            <Link to="/apropos" className={`hover:text-yellow-600 transition-colors ${isActive('/apropos') ? 'text-yellow-600 font-bold' : ''}`}>À propos</Link>
            <Link to="/contact" className={`hover:text-yellow-600 transition-colors ${isActive('/contact') ? 'text-yellow-600 font-bold' : ''}`}>Contact</Link>
          </nav>
        </div>
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
              Agence de communication et de production multimédia dédiée à l'information, à la création de contenus et à la valorisation des talents.
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
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Liens Rapides</h3>
            <nav className="flex flex-col gap-4">
              <Link to="/" className="hover:text-yellow-400 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4 text-yellow-500" /> Accueil</Link>
              <Link to="/services" className="hover:text-yellow-400 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4 text-yellow-500" /> Services</Link>
              <Link to="/apropos" className="hover:text-yellow-400 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4 text-yellow-500" /> À propos</Link>
              <Link to="/contact" className="hover:text-yellow-400 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4 text-yellow-500" /> Contact</Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Nous Contacter</h3>
            <div className="flex flex-col gap-5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">République Démocratique du Congo</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">0808 872 935 <br/> 0975 598 860</span>
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
          <p>© {new Date().getFullYear()} SHINY MÉDIA. Tous droits réservés.</p>
          <p className="font-medium tracking-widest text-slate-400">INFORMER • INSPIRER • IMPACTER</p>
        </div>
      </footer>
    </div>
  );
}

export default PublicLayout;
