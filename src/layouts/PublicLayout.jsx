import { Outlet, Link, useLocation } from 'react-router-dom';
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
      <footer id="contact" className="bg-slate-50 py-16 border-t border-slate-200 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500">
          <div className="flex justify-center mb-4">
            <Logo className="h-20 w-auto opacity-80 text-slate-900" />
          </div>
          <p className="mb-6 font-medium tracking-[0.15em] text-slate-800">INFORMER • INSPIRER • IMPACTER</p>
          <p>© {new Date().getFullYear()} SHINY MÉDIA. Tous droits réservés.</p>
          <p className="mt-2">Contact : 0808872935 | 0975598860</p>
        </div>
      </footer>
    </div>
  );
}

export default PublicLayout;
