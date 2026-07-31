import { Outlet, Navigate } from 'react-router-dom';

function AdminLayout() {
  // TODO: Add actual Firebase Auth check
  const isAuthenticated = true; 

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0f172a' }}>
      {/* Admin Sidebar */}
      <aside style={{ width: '250px', backgroundColor: '#1e293b', borderRight: '1px solid var(--color-border)', padding: '2rem' }}>
        <h2 style={{ color: 'var(--color-primary)', marginBottom: '2rem' }}>Admin Panel</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="/admin">Tableau de bord</a>
          <a href="/admin/content">Contenus</a>
          <a href="/admin/messages">Messages</a>
          <a href="/" style={{ marginTop: 'auto', color: 'var(--color-text-muted)' }}>Retour au site</a>
        </nav>
      </aside>

      {/* Admin Content */}
      <main style={{ flex: 1, padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
