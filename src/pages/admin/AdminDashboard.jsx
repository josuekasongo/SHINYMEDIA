function AdminDashboard() {
  return (
    <div>
      <h1>Tableau de bord Administrateur</h1>
      <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem' }}>
        Bienvenue dans l'espace d'administration de SHINY MEDIA. Depuis ce panel, vous pourrez bientôt gérer l'intégralité du contenu de votre site web.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
        <div className="card">
          <h3>Gérer les textes</h3>
          <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>Modifiez votre vision, mission et à propos.</p>
          <button className="btn-primary" style={{ marginTop: '1rem' }}>Modifier</button>
        </div>
        <div className="card">
          <h3>Gérer les services</h3>
          <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>Ajoutez, modifiez ou supprimez vos services.</p>
          <button className="btn-primary" style={{ marginTop: '1rem' }}>Modifier</button>
        </div>
        <div className="card">
          <h3>Messages Reçus</h3>
          <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>Consultez les messages de vos visiteurs.</p>
          <button className="btn-primary" style={{ marginTop: '1rem' }}>Voir les messages</button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
