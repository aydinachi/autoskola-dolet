import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      background: '#070606',
      color: '#fff',
      padding: '2rem'
    }}>
      <h2>Stranica nije pronađena</h2>
      <p>Stranica koju tražite ne postoji.</p>
      <Link 
        href="/"
        style={{
          padding: '1rem 2rem',
          background: '#8B0000',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '0.5rem',
          marginTop: '1rem'
        }}
      >
        Povratak na početnu
      </Link>
    </div>
  );
}
