import React from 'react';
import { color, scale } from './tokens';

// ─── Photo asset URLs (Figma, valid ~7 days) ──────────────────────────────────
// Note: only photos — all icons are inline SVGs below.
const PHOTO = {
  trainerAvatar:    'https://www.figma.com/api/mcp/asset/d3d76a8d-028b-4f0c-9f10-b55de237e81c',
  pipCameraOnBg:    'https://www.figma.com/api/mcp/asset/edf71262-c8ed-48c5-8de5-f5045e81e327',
  pipCameraOnPerson:'https://www.figma.com/api/mcp/asset/8c7dd205-9b95-4370-8ccd-a095db73a038',
  bgCameraOff:      'https://www.figma.com/api/mcp/asset/a4524848-946a-4a15-99ba-61b51031d559',
  bgFirstQuestion:  'https://www.figma.com/api/mcp/asset/254c93a4-0519-4f65-a24d-8682a389792b',
};

// ─── Inline SVG icons (never expire) ─────────────────────────────────────────

function IconAI({ size = 16, color: fill = '#fff' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={fill} xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flexShrink: 0 }}>
      <path d="M8 1.5 L9.1 6.2 L13.5 7.5 L9.1 8.8 L8 13.5 L6.9 8.8 L2.5 7.5 L6.9 6.2 Z" />
      <circle cx="13" cy="3" r="1" />
    </svg>
  );
}

function IconArrowLeft({ size = 16, color: stroke = '#a6b4bb' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flexShrink: 0 }}>
      <path d="M10 3 L5 8 L10 13" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconLiveDot({ size = 8 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 8 8" fill="#38a867" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flexShrink: 0 }}>
      <circle cx="4" cy="4" r="4" />
    </svg>
  );
}

function IconCameraOff({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flexShrink: 0 }}>
      <path d="M3 14.5 C3 15.3 3.7 16 4.5 16 H15.5 C16.3 16 17 15.3 17 14.5 V7.5 C17 6.7 16.3 6 15.5 6 H13 L11.5 4 H8.5 L7.8 5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="10" cy="11" r="2.5" stroke="white" strokeWidth="1.4"/>
      <line x1="2.5" y1="2.5" x2="17.5" y2="17.5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function IconVolume({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flexShrink: 0 }}>
      <path d="M3 7.5 H6 L11 4 V16 L6 12.5 H3 Z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M13.5 7 C14.8 8.1 14.8 11.9 13.5 13" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M15.5 5 C17.5 6.8 17.5 13.2 15.5 15" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function IconMicrophone({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flexShrink: 0 }}>
      <rect x="7" y="2" width="6" height="9" rx="3" stroke="white" strokeWidth="1.4"/>
      <path d="M4 10 C4 14.4 16 14.4 16 10" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="10" y1="15" x2="10" y2="18" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="7" y1="18" x2="13" y2="18" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function IconEndCall({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flexShrink: 0 }}>
      <path
        d="M2.5 11.5 C5 6 15 6 17.5 11.5 L15 12.5 L13.5 11 C13.5 11 12 11.5 10 11.5 C8 11.5 6.5 11 6.5 11 L5 12.5 Z"
        stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
        transform="rotate(135, 10, 10)"
      />
    </svg>
  );
}

function IconCaptions({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flexShrink: 0 }}>
      <rect x="2" y="4" width="16" height="12" rx="2" stroke="white" strokeWidth="1.4"/>
      <line x1="5" y1="9" x2="11" y2="9" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="13" y1="9" x2="15" y2="9" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="5" y1="12" x2="9" y2="12" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="11" y1="12" x2="15" y2="12" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────

export type AITrainerState =
  | 'ready_to_start'
  | 'conversation_camera_off'
  | 'first_ai_trainer_question';

export interface AITrainerProps {
  /**
   * Current screen state of the AI Trainer component.
   * @default 'ready_to_start'
   */
  state?: AITrainerState;
  /** AI Trainer's display name. @default 'Alex' */
  trainerName?: string;
  /** Conversation topic label. @default 'Travel' */
  topic?: string;
  /** Elapsed time string shown during a live call. @default '0:05' */
  timer?: string;
  /** Caption text shown when the trainer is speaking. */
  captionText?: string;
  /** Fired when the user clicks "Start Video Call". */
  onStartCall?: () => void;
  /** Fired when the user clicks "Change Topic". */
  onChangeTopic?: () => void;
  /** Fired when the user clicks the End Call button. */
  onEndCall?: () => void;
}

// ─── Shared style helpers ─────────────────────────────────────────────────────

const S = {
  font: (size: number, weight: 400 | 600, lh: number, extra?: React.CSSProperties): React.CSSProperties => ({
    fontFamily: "'Fira Sans', sans-serif",
    fontSize: size,
    fontWeight: weight,
    lineHeight: `${lh}px`,
    ...extra,
  }),
  badge: (bg = 'rgba(9,47,66,0.8)'): React.CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    height: 22,
    padding: '4px 8px 4px 4px',
    background: bg,
    borderRadius: 6,
    whiteSpace: 'nowrap' as const,
    flexShrink: 0,
  }),
};

// ─── Sub-components ───────────────────────────────────────────────────────────

/** User's self-view in the top-right corner. */
function PictureInPicture({ cameraOn }: { cameraOn: boolean }) {
  return (
    <div style={{
      position: 'relative',
      width: 164,
      height: 96,
      borderRadius: 6,
      border: `2px solid ${scale.blue[800]}`,
      overflow: 'hidden',
      flexShrink: 0,
      background: color['bg-invert'],
    }}>
      {cameraOn ? (
        <>
          <img
            src={PHOTO.pipCameraOnBg}
            alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <img
            src={PHOTO.pipCameraOnPerson}
            alt=""
            style={{ position: 'absolute', width: '100%', top: '-65%', objectFit: 'cover' }}
          />
        </>
      ) : (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: 54,
            background: color['bg-blue-light'],
            border: `2px solid ${color['bg-invert']}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <IconCameraOff size={20} />
          </div>
        </div>
      )}
      <div style={{
        ...S.badge(),
        position: 'absolute', bottom: 4, right: 4,
        padding: '4px 8px',
      }}>
        <span style={S.font(12, 400, 16, { color: '#fff' })}>You</span>
      </div>
    </div>
  );
}

/** The floating control bar at the bottom of the call. */
function ControlBar({ onEndCall }: { onEndCall?: () => void }) {
  const btnStyle = (isRed = false): React.CSSProperties => ({
    width: 40, height: 40, borderRadius: 8,
    border: `1px solid ${isRed ? scale.red[500] : scale.blue[800]}`,
    background: isRed ? 'rgba(202,43,52,0.7)' : 'rgba(6,59,85,0.7)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', flexShrink: 0,
    padding: 0,
  });

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: 12,
      background: 'rgba(9,47,66,0.8)',
      borderRadius: 16,
      flexShrink: 0,
    }}>
      <button style={btnStyle()} title="Camera" aria-label="Toggle camera">
        <IconCameraOff size={20} />
      </button>
      <button style={btnStyle()} title="Audio" aria-label="Toggle audio">
        <IconVolume size={20} />
      </button>
      <button style={btnStyle()} title="Microphone" aria-label="Toggle microphone">
        <IconMicrophone size={20} />
      </button>
      <button style={btnStyle(true)} title="End call" aria-label="End call" onClick={onEndCall}>
        <IconEndCall size={20} />
      </button>
      <div style={{ width: 1, height: 28, background: scale.blue[700], flexShrink: 0, margin: '0 2px' }} />
      <button style={btnStyle()} title="Captions" aria-label="Toggle captions">
        <IconCaptions size={20} />
      </button>
    </div>
  );
}

/** Caption bubble shown when the trainer is speaking. */
function Captions({ trainerName, text }: { trainerName: string; text: string }) {
  return (
    <div style={{
      width: '100%',
      background: 'rgba(6,59,85,0.8)',
      border: `1px solid ${scale.blue[200]}`,
      borderRadius: 8,
      padding: 12,
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start',
    }}>
      <div style={{ ...S.badge(), flexShrink: 0 }}>
        <IconAI size={12} />
        <span style={S.font(12, 400, 16, { color: '#fff' })}>{trainerName}</span>
      </div>
      <p style={S.font(16, 400, 22, { color: '#fff', margin: 0, flex: 1 })}>{text}</p>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

/** Learnlight Design System — AI Trainer Video Call Stage */
export function AITrainer({
  state = 'ready_to_start',
  trainerName = 'Alex',
  topic = 'Travel',
  timer = '0:05',
  captionText = 'Hi! If you could travel anywhere right now, where would you go and why?',
  onStartCall,
  onChangeTopic,
  onEndCall,
}: AITrainerProps) {
  const isReady    = state === 'ready_to_start';
  const isLive     = state !== 'ready_to_start';
  const isSpeaking = state === 'first_ai_trainer_question';

  const outerBorder = isSpeaking
    ? `4px solid ${color['border-brand']}`
    : `1px solid ${color['border-primary']}`;

  return (
    <div style={{
      position: 'relative',
      width: 652,
      height: 746,
      borderRadius: 8,
      border: outerBorder,
      overflow: 'hidden',
      background: color['bg-invert'],
      boxShadow: '2px 2px 8px 0 rgba(9,30,66,0.1)',
      display: 'flex',
      flexDirection: 'column',
      padding: 16,
      fontFamily: "'Fira Sans', sans-serif",
    }}>

      {/* ── Background video image (live states only) ── */}
      {isLive && (
        <img
          src={isSpeaking ? PHOTO.bgFirstQuestion : PHOTO.bgCameraOff}
          alt=""
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* ── Top section ── */}
      <div style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        zIndex: 1,
      }}>
        {/* Left badges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <div style={S.badge()}>
              <IconAI size={12} />
              <span style={S.font(12, 400, 16, { color: '#fff' })}>{trainerName}</span>
            </div>
            {isLive && (
              <>
                <div style={S.badge()}>
                  <IconLiveDot size={8} />
                  <span style={S.font(12, 400, 16, { color: '#fff', paddingLeft: 2 })}>Live</span>
                </div>
                <div style={{ ...S.badge(), padding: '4px 8px' }}>
                  <span style={S.font(12, 400, 16, { color: '#fff' })}>{timer}</span>
                </div>
              </>
            )}
          </div>
          <div style={{ ...S.badge(color['bg-brand']), padding: '4px 8px' }}>
            <span style={S.font(10, 600, 14, { color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase' })}>
              topic: {topic}
            </span>
          </div>
        </div>

        <PictureInPicture cameraOn={isSpeaking} />
      </div>

      {/* ── Main content area ── */}
      {isReady ? (
        <div style={{
          position: 'relative', zIndex: 1,
          flex: 1,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 32, paddingBottom: 96,
        }}>
          {/* Avatar */}
          <div style={{
            width: 96, height: 96, borderRadius: '50%',
            border: `1px solid ${scale.blue[300]}`,
            boxShadow: `8px 17px 50px -12px rgba(14,163,236,0.4)`,
            overflow: 'hidden', flexShrink: 0,
          }}>
            <img src={PHOTO.trainerAvatar} alt={trainerName} width={96} height={96} style={{ display: 'block', objectFit: 'cover' }} />
          </div>

          {/* Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', textAlign: 'center', width: '100%' }}>
              <h2 style={S.font(24, 600, 32, { color: scale.blue[10], margin: 0, width: '100%' })}>
                Ready to Start Video Call!
              </h2>
              <p style={S.font(18, 400, 24, { color: scale.blue[10], margin: 0, width: '100%' })}>
                {`You'll be practicing `}
                <strong style={{ fontWeight: 600 }}>{topic}</strong>
                {` with ${trainerName}`}
              </p>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={onStartCall}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                height: 40, padding: '0 16px',
                background: color['bg-brand'],
                border: 'none', borderRadius: 6,
                boxShadow: '0 1px 2px 0 rgba(9,30,66,0.1)',
                cursor: 'pointer',
                ...S.font(14, 600, 18, { color: '#fff' }),
              }}
            >
              <IconAI size={14} />
              Start Video Call
            </button>

            {/* Back link */}
            <button
              type="button"
              onClick={onChangeTopic}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              }}
            >
              <IconArrowLeft size={16} />
              <span style={S.font(14, 400, 18, { color: scale.neutral[70] })}>Change Topic</span>
            </button>
          </div>
        </div>
      ) : (
        <div style={{
          position: 'relative', zIndex: 1,
          flex: 1, display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-end', alignItems: 'center',
          paddingBottom: 5,
        }}>
          {/* Bottom gradient overlay */}
          <div style={{
            position: 'absolute',
            bottom: -16, left: -16, right: -16,
            height: 316,
            background: 'linear-gradient(to bottom, rgba(9,47,66,0) 0%, rgba(9,47,66,0.7) 100%)',
            pointerEvents: 'none',
          }} />

          <div style={{
            position: 'relative', zIndex: 1,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 16, width: '100%',
          }}>
            {isSpeaking && (
              <div style={{ width: '100%', padding: '0 96px' }}>
                <Captions trainerName={trainerName} text={captionText!} />
              </div>
            )}
            <ControlBar onEndCall={onEndCall} />
          </div>
        </div>
      )}
    </div>
  );
}
