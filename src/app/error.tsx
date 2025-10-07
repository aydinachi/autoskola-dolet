'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
      <h2>Nešto je pošlo po zlu!</h2>
      <button
        onClick={reset}
        style={{
          padding: '1rem 2rem',
          background: '#8B0000',
          color: '#fff',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          marginTop: '1rem'
        }}
      >
        Pokušaj ponovo
      </button>
    </div>
  );
}
