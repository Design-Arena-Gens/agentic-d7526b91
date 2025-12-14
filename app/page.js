export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{
        fontSize: '4rem',
        color: 'white',
        margin: 0,
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>
        Hi! 👋
      </h1>
      <p style={{
        fontSize: '1.5rem',
        color: 'rgba(255,255,255,0.9)',
        marginTop: '1rem'
      }}>
        Welcome to your Next.js app
      </p>
    </main>
  )
}
