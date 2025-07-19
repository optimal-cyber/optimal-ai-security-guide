import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Logo */}
        <div
          style={{
            width: 80,
            height: 80,
            backgroundColor: 'white',
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              backgroundColor: '#0f172a',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            O
          </div>
        </div>
        
        {/* Title */}
        <h1
          style={{
            fontSize: 64,
            fontWeight: 900,
            textAlign: 'center',
            marginBottom: 20,
            background: 'linear-gradient(135deg, #10b981, #3b82f6)',
            backgroundClip: 'text',
            color: 'transparent',
            lineHeight: 1.1,
            margin: '0 0 20px 0',
          }}
        >
          Optimal AI Security Guide
        </h1>
        
        {/* Subtitle */}
        <p
          style={{
            fontSize: 28,
            color: '#94a3b8',
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.4,
            marginBottom: 40,
            margin: '0 0 40px 0',
          }}
        >
          Comprehensive security guidance for AI systems featuring NIST AI RMF, NIST 800-53, and OWASP AISVS
        </p>
        
        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: 40,
            marginTop: 40,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              color: '#cbd5e1',
              fontSize: 18,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                backgroundColor: '#10b981',
                borderRadius: '50%',
              }}
            />
            <span>NIST AI RMF</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              color: '#cbd5e1',
              fontSize: 18,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                backgroundColor: '#10b981',
                borderRadius: '50%',
              }}
            />
            <span>Security Controls</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              color: '#cbd5e1',
              fontSize: 18,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                backgroundColor: '#10b981',
                borderRadius: '50%',
              }}
            />
            <span>Threat Analysis</span>
          </div>
        </div>
        
        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            fontSize: 20,
            color: '#64748b',
            fontWeight: 500,
          }}
        >
          ai-security.gooptimal.io
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
} 