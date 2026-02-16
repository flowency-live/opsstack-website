import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'OpStack - Business Operating Systems for SMEs'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
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
          background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0a0a1a 100%)',
          position: 'relative',
        }}
      >
        {/* Purple glow effect */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(124, 92, 255, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          {/* Logo mark */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(135deg, #7c5cff 0%, #9d7fff 100%)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <div style={{ width: '28px', height: '6px', background: 'white', borderRadius: '3px' }} />
                <div style={{ width: '28px', height: '6px', background: 'white', borderRadius: '3px' }} />
                <div style={{ width: '28px', height: '6px', background: 'white', borderRadius: '3px' }} />
              </div>
            </div>
            <span
              style={{
                fontSize: '56px',
                fontWeight: 700,
                color: 'white',
                letterSpacing: '-0.02em',
              }}
            >
              OpStack
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '42px',
              fontWeight: 600,
              color: 'white',
              textAlign: 'center',
              maxWidth: '900px',
              lineHeight: 1.3,
              marginBottom: '24px',
            }}
          >
            Business Operating Systems
          </div>

          <div
            style={{
              fontSize: '28px',
              color: 'rgba(255, 255, 255, 0.7)',
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            One login. Your entire business.
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, transparent, #7c5cff)',
              borderRadius: '2px',
            }}
          />
          <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)' }}>opstack.uk</span>
          <div
            style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #7c5cff, transparent)',
              borderRadius: '2px',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
