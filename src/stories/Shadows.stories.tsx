import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta = {
  title: 'Foundations/Shadows',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Shared styles ────────────────────────────────────────────────────────────

const FONT: React.CSSProperties = {
  fontFamily: 'var(--font-family-base)',
  color: 'var(--text-primary)',
};

const CARD: React.CSSProperties = {
  background: 'var(--background-primary)',
  border: '1px solid var(--border-color-secondary)',
  borderRadius: 16,
  width: 240,
  height: 180,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: 12,
  overflow: 'hidden',
};

// ─── Primitives ───────────────────────────────────────────────────────────────

export const Primitives: Story = {
  name: 'Primitives',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, padding: '40px 0' }}>
      {([['shadow1', 'var(--shadow-1)'], ['shadow2', 'var(--shadow-2)']] as const).map(([name, value]) => (
        <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          <div style={{ ...CARD, boxShadow: value }} />
          <span style={{ ...FONT, fontSize: 16, fontWeight: 600 }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};

// ─── Semantic tokens ──────────────────────────────────────────────────────────

export const CardShadow: Story = {
  name: 'Token / card',
  render: () => (
    <div style={{ padding: '40px 0' }}>
      <div style={{ ...CARD, boxShadow: 'var(--shadow-card)' }}>
        <span style={{ ...FONT, fontSize: 14 }}>card</span>
      </div>
    </div>
  ),
};

export const PageHeaderShadow: Story = {
  name: 'Token / page-header',
  render: () => (
    <div style={{ padding: '40px 0' }}>
      <div style={{
        background: 'var(--background-brand)',
        borderBottom: '1px solid var(--border-color-primary)',
        boxShadow: 'var(--shadow-page-header)',
        height: 40,
        display: 'flex',
        alignItems: 'center',
        padding: '0 12px',
        width: 480,
      }}>
        <span style={{ ...FONT, fontSize: 14, color: 'var(--text-invert)' }}>
          page-header
        </span>
      </div>
    </div>
  ),
};

export const ModalShadow: Story = {
  name: 'Token / modal',
  render: () => (
    <div style={{ padding: '40px 0' }}>
      <div style={{ ...CARD, boxShadow: 'var(--shadow-modal)' }}>
        <span style={{ ...FONT, fontSize: 14 }}>modal</span>
      </div>
    </div>
  ),
};

export const FocusShadow: Story = {
  name: 'Token / focus',
  render: () => (
    <div style={{ padding: '40px 0' }}>
      <div style={{
        ...CARD,
        border: '1px solid var(--focus)',
        boxShadow: 'var(--shadow-focus)',
      }}>
        <span style={{ ...FONT, fontSize: 14 }}>focus</span>
      </div>
    </div>
  ),
};

// ─── All shadows overview ─────────────────────────────────────────────────────

export const AllShadows: Story = {
  name: 'All Shadows',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, padding: '40px 0' }}>

      {/* Token → Primitive reference table */}
      <div style={{ display: 'flex', gap: 80 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ ...FONT, fontSize: 18, fontWeight: 600 }}>Tokens</span>
          {[
            'card → shadow1',
            'page-header → shadow1',
            'modal → shadow2',
            'focus → focus-ring',
          ].map(line => (
            <span key={line} style={{ ...FONT, fontSize: 16 }}>{line}</span>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ ...FONT, fontSize: 18, fontWeight: 600 }}>Primitives</span>
          {(['shadow1', 'shadow2'] as const).map(name => (
            <span key={name} style={{ ...FONT, fontSize: 16 }}>{name}</span>
          ))}
        </div>
      </div>

      {/* card */}
      <div style={{ ...CARD, boxShadow: 'var(--shadow-card)' }}>
        <span style={{ ...FONT, fontSize: 14 }}>card</span>
      </div>

      {/* page-header */}
      <div style={{
        background: 'var(--background-brand)',
        borderBottom: '1px solid var(--border-color-primary)',
        boxShadow: 'var(--shadow-page-header)',
        height: 40,
        display: 'flex',
        alignItems: 'center',
        padding: '0 12px',
        width: 480,
      }}>
        <span style={{ ...FONT, fontSize: 14, color: 'var(--text-invert)' }}>
          page-header
        </span>
      </div>

      {/* modal */}
      <div style={{ ...CARD, boxShadow: 'var(--shadow-modal)' }}>
        <span style={{ ...FONT, fontSize: 14 }}>modal</span>
      </div>

      {/* focus */}
      <div style={{ ...CARD, border: '1px solid var(--focus)', boxShadow: 'var(--shadow-focus)' }}>
        <span style={{ ...FONT, fontSize: 14 }}>focus</span>
      </div>

    </div>
  ),
};
