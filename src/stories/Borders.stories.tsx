import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta = {
  title: 'Foundations/Borders',
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

// ─── Primitives ───────────────────────────────────────────────────────────────

export const Primitives: Story = {
  name: 'Primitives',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, padding: '40px 0' }}>

      {/* border1 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        <div style={{
          width: 180, height: 80, borderRadius: 8,
          border: 'var(--border-1)',
          background: 'var(--background-primary)',
        }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ ...FONT, fontSize: 16, fontWeight: 600 }}>border1</span>
          <span style={{ ...FONT, fontSize: 14, color: 'var(--text-secondary)' }}>
            1px solid border-primary
          </span>
          <span style={{ ...FONT, fontSize: 12, color: 'var(--text-secondary)' }}>
            Used by: button, tag, card, header
          </span>
        </div>
      </div>

      {/* border2 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        <div style={{
          width: 180, height: 80,
          borderBottom: 'var(--border-2)',
          background: 'var(--background-primary)',
        }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ ...FONT, fontSize: 16, fontWeight: 600 }}>border2</span>
          <span style={{ ...FONT, fontSize: 14, color: 'var(--text-secondary)' }}>
            border-bottom: 1px solid border-primary
          </span>
          <span style={{ ...FONT, fontSize: 12, color: 'var(--text-secondary)' }}>
            Used by: header
          </span>
        </div>
      </div>

      {/* border3 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        <div style={{
          width: 180, height: 80, borderRadius: 8,
          border: 'var(--border-3)',
          background: 'var(--background-primary)',
        }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ ...FONT, fontSize: 16, fontWeight: 600 }}>border3</span>
          <span style={{ ...FONT, fontSize: 14, color: 'var(--text-secondary)' }}>
            2px solid border-brand
          </span>
          <span style={{ ...FONT, fontSize: 12, color: 'var(--text-secondary)' }}>
            Used by: highlight-card
          </span>
        </div>
      </div>

    </div>
  ),
};

// ─── All Borders overview ─────────────────────────────────────────────────────

export const AllBorders: Story = {
  name: 'All Borders',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, padding: '40px 0' }}>

      {/* Token → Primitive reference table */}
      <div style={{ display: 'flex', gap: 80 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ ...FONT, fontSize: 18, fontWeight: 600 }}>Tokens</span>
          {[
            'header → border2',
            'button → border1',
            'tag → border1',
            'card → border1',
            'highlight-card → border3',
            'focus → border1 (border-brand)',
          ].map(line => (
            <span key={line} style={{ ...FONT, fontSize: 16 }}>{line}</span>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ ...FONT, fontSize: 18, fontWeight: 600 }}>Primitives</span>
          <span style={{ ...FONT, fontSize: 16 }}>border1 — 1px solid border-primary</span>
          <span style={{ ...FONT, fontSize: 16 }}>border2 — border-bottom 1px solid border-primary</span>
          <span style={{ ...FONT, fontSize: 16 }}>border3 — 2px solid border-brand</span>
        </div>
      </div>

      {/* Highlight outline — border3 */}
      <div style={{
        background: 'var(--background-primary)',
        border: 'var(--border-highlight-card)',
        borderRadius: 8,
        padding: 12,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: 560,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <p style={{ ...FONT, fontSize: 18, margin: 0 }}>highlight-card — border3</p>
            <p style={{ ...FONT, fontSize: 12, color: 'var(--text-secondary)', margin: 0 }}>
              used on "happening now" conversations card
            </p>
          </div>
          <div style={{
            border: 'var(--border-button)',
            borderRadius: 6, padding: '6px 8px', display: 'inline-flex',
          }}>
            <span style={{ ...FONT, fontSize: 14, fontWeight: 600 }}>button — border1</span>
          </div>
        </div>
        <div style={{
          border: 'var(--border-tag)',
          borderRadius: 4, padding: '4px 8px',
        }}>
          <span style={{ ...FONT, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-secondary)' }}>
            tag — border1
          </span>
        </div>
      </div>

      {/* Page header — border2 */}
      <div style={{
        background: 'var(--background-primary)',
        borderBottom: 'var(--border-header)',
        boxShadow: 'var(--shadow-page-header)',
        height: 40, width: 480,
        display: 'flex', alignItems: 'center', padding: '0 12px',
      }}>
        <span style={{ ...FONT, fontSize: 16 }}>header — border2</span>
      </div>

      {/* Card border — border1 */}
      <div style={{
        background: 'var(--background-primary)',
        border: 'var(--border-card)',
        borderRadius: 16,
        boxShadow: 'var(--shadow-card)',
        width: 240, height: 180,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 12,
      }}>
        <span style={{ ...FONT, fontSize: 16 }}>card — border1</span>
      </div>

      {/* Focus state */}
      <div style={{
        background: 'var(--background-primary)',
        border: 'var(--border-focus)',
        borderRadius: 16,
        boxShadow: 'var(--shadow-focus)',
        width: 240, height: 120,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 12,
      }}>
        <span style={{ ...FONT, fontSize: 16 }}>focus — border1 (border-brand)</span>
      </div>

    </div>
  ),
};

// ─── Individual token stories ─────────────────────────────────────────────────

export const HighlightCard: Story = {
  name: 'Token / highlight-card (border3)',
  render: () => (
    <div style={{ padding: '40px 0' }}>
      <div style={{
        background: 'var(--background-primary)',
        border: 'var(--border-highlight-card)',
        borderRadius: 8, padding: 12,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        width: 440,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <p style={{ ...FONT, fontSize: 18, margin: 0 }}>highlight-card — border3</p>
            <p style={{ ...FONT, fontSize: 12, color: 'var(--text-secondary)', margin: 0 }}>
              used on "happening now" conversations card
            </p>
          </div>
          <div style={{ border: 'var(--border-button)', borderRadius: 6, padding: '6px 8px', display: 'inline-flex' }}>
            <span style={{ ...FONT, fontSize: 14, fontWeight: 600 }}>button — border1</span>
          </div>
        </div>
        <div style={{ border: 'var(--border-tag)', borderRadius: 4, padding: '4px 8px' }}>
          <span style={{ ...FONT, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-secondary)' }}>
            tag — border1
          </span>
        </div>
      </div>
    </div>
  ),
};

export const PageHeader: Story = {
  name: 'Token / header (border2)',
  render: () => (
    <div style={{ padding: '40px 0' }}>
      <div style={{
        background: 'var(--background-primary)',
        borderBottom: 'var(--border-header)',
        boxShadow: 'var(--shadow-page-header)',
        height: 40, width: 480,
        display: 'flex', alignItems: 'center', padding: '0 12px',
      }}>
        <span style={{ ...FONT, fontSize: 16 }}>header — border2</span>
      </div>
    </div>
  ),
};

export const CardBorder: Story = {
  name: 'Token / card (border1)',
  render: () => (
    <div style={{ padding: '40px 0' }}>
      <div style={{
        background: 'var(--background-primary)',
        border: 'var(--border-card)',
        borderRadius: 16,
        boxShadow: 'var(--shadow-card)',
        width: 240, height: 180,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 12,
      }}>
        <span style={{ ...FONT, fontSize: 16 }}>card — border1</span>
      </div>
    </div>
  ),
};

export const FocusBorder: Story = {
  name: 'Token / focus (border1 brand)',
  render: () => (
    <div style={{ padding: '40px 0' }}>
      <div style={{
        background: 'var(--background-primary)',
        border: 'var(--border-focus)',
        borderRadius: 16,
        boxShadow: 'var(--shadow-focus)',
        width: 240, height: 120,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 12,
      }}>
        <span style={{ ...FONT, fontSize: 16 }}>focus — border1 (border-brand)</span>
      </div>
    </div>
  ),
};
