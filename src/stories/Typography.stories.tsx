import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { typeScale, typeTokens, type TypeStyle } from './tokens';

// ─── Helpers ──────────────────────────────────────────────────────────────────

const SAMPLE = 'The quick brown fox jumps over the lazy dog';
const LONG_SAMPLE =
  'Learnlight helps organisations deliver impactful language and skills training at scale — combining expert tutors, adaptive technology, and data-driven insights.';

function styleOf(t: TypeStyle): React.CSSProperties {
  return {
    fontFamily: `'${t.fontFamily}', sans-serif`,
    fontSize: t.fontSize,
    fontWeight: t.fontWeight,
    lineHeight: `${t.lineHeight}px`,
    letterSpacing: t.letterSpacing ?? 0,
    textTransform: t.textTransform,
    margin: 0,
    color: 'var(--text-primary)',
  };
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: 'inline-block',
      fontSize: 10,
      fontWeight: 600,
      fontFamily: 'monospace',
      color: 'var(--text-brand)',
      background: 'var(--background-blue-light)',
      borderRadius: 4,
      padding: '1px 6px',
      whiteSpace: 'nowrap',
    }}>
      {children}
    </span>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', gap: 4, alignItems: 'baseline' }}>
      <span style={{ fontSize: 10, color: 'var(--neutral-80)', minWidth: 72 }}>{label}</span>
      <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'var(--text-secondary)' }}>{value}</span>
    </div>
  );
}

// ─── Scale story ──────────────────────────────────────────────────────────────

function ScalePage() {
  const headings = typeScale.filter(t => t.tag && ['h1','h2','h3','h4','h5'].includes(t.tag));
  const body     = typeScale.filter(t => !t.tag || !['h1','h2','h3','h4','h5'].includes(t.tag));

  const Group = ({ title, styles }: { title: string; styles: TypeStyle[] }) => (
    <div style={{ marginBottom: 48 }}>
      <div style={{
        fontSize: 11, fontWeight: 700, color: 'var(--neutral-80)',
        textTransform: 'uppercase', letterSpacing: '0.08em',
        borderBottom: '1px solid var(--neutral-30)', paddingBottom: 8, marginBottom: 0,
      }}>
        {title}
      </div>

      {styles.map((t) => (
        <div
          key={t.name}
          style={{
            display: 'grid',
            gridTemplateColumns: '180px 1fr 200px',
            alignItems: 'center',
            gap: 24,
            padding: '18px 0',
            borderBottom: '1px solid var(--background-secondary)',
          }}
        >
          {/* Name + badge */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <Badge>{t.name}</Badge>
            <span style={{ fontSize: 10, color: 'var(--neutral-80)', fontFamily: 'monospace' }}>
              {t.fontWeight === 600 ? 'SemiBold' : 'Regular'} · {t.fontSize}px
            </span>
          </div>

          {/* Live sample */}
          <div style={{ overflow: 'hidden' }}>
            <span style={styleOf(t)}>
              {t.textTransform === 'uppercase' ? SAMPLE.toUpperCase() : SAMPLE}
            </span>
          </div>

          {/* Specs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <SpecRow label="size"        value={`${t.fontSize}px`} />
            <SpecRow label="weight"      value={t.fontWeight === 600 ? '600 SemiBold' : '400 Regular'} />
            <SpecRow label="line-height" value={`${t.lineHeight}px`} />
            {t.letterSpacing ? <SpecRow label="tracking" value={`${t.letterSpacing}px`} /> : null}
            {t.textTransform  ? <SpecRow label="transform" value={t.textTransform} /> : null}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ fontFamily: 'var(--font-family-base)', maxWidth: 900, padding: '32px 0' }}>
      <h2 style={{ margin: '0 0 4px', fontSize: 22, fontWeight: 700, color: 'var(--text-primary)' }}>Type Scale</h2>
      <p style={{ margin: '0 0 40px', fontSize: 13, color: 'var(--text-secondary)' }}>
        Fira Sans — all primitive styles with live rendering and exact specs.
      </p>
      <Group title="Headings" styles={headings} />
      <Group title="Body"     styles={body} />
    </div>
  );
}

// ─── Tokens story ─────────────────────────────────────────────────────────────

function TokensPage() {
  const styleMap = Object.fromEntries(typeScale.map(t => [t.name, t]));

  return (
    <div style={{ fontFamily: 'var(--font-family-base)', maxWidth: 900, padding: '32px 0' }}>
      <h2 style={{ margin: '0 0 4px', fontSize: 22, fontWeight: 700, color: 'var(--text-primary)' }}>Semantic Tokens</h2>
      <p style={{ margin: '0 0 40px', fontSize: 13, color: 'var(--text-secondary)' }}>
        Each token maps a role to a primitive style — use token names in code, never raw values.
      </p>

      <div style={{ borderTop: '1px solid var(--neutral-30)' }}>
        {typeTokens.map(({ token, primitive, usage }) => {
          const t = styleMap[primitive];
          if (!t) return null;
          return (
            <div
              key={token}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 160px 1fr',
                alignItems: 'center',
                gap: 24,
                padding: '20px 0',
                borderBottom: '1px solid var(--background-secondary)',
              }}
            >
              {/* Token name + usage */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <Badge>{token}</Badge>
                <span style={{ fontSize: 10, color: 'var(--text-secondary)' }}>→ <strong style={{ color: 'var(--text-primary)' }}>{primitive}</strong></span>
                <span style={{ fontSize: 10, color: 'var(--neutral-80)' }}>{usage}</span>
              </div>

              {/* Specs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <SpecRow label="size"        value={`${t.fontSize}px`} />
                <SpecRow label="weight"      value={t.fontWeight === 600 ? '600 SemiBold' : '400 Regular'} />
                <SpecRow label="line-height" value={`${t.lineHeight}px`} />
              </div>

              {/* Live sample */}
              <span style={styleOf(t)}>
                {t.textTransform === 'uppercase' ? SAMPLE.toUpperCase() : SAMPLE}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Specimen story ───────────────────────────────────────────────────────────

function SpecimenPage() {
  return (
    <div style={{ fontFamily: 'var(--font-family-base)', maxWidth: 680, padding: '32px 0', color: 'var(--text-primary)' }}>
      <h2 style={{ margin: '0 0 4px', fontSize: 22, fontWeight: 700 }}>Specimen</h2>
      <p style={{ margin: '0 0 40px', fontSize: 13, color: 'var(--text-secondary)' }}>
        A realistic composition showing all styles in context.
      </p>

      {/* Article layout */}
      <div style={{ borderTop: '3px solid var(--text-brand)', paddingTop: 32 }}>

        <span style={{ ...styleOf(typeScale.find(t => t.name === 'extra-extra-small')!), display: 'block', marginBottom: 12 }}>
          LANGUAGE TRAINING · 4 MIN READ
        </span>

        <h1 style={{ ...styleOf(typeScale.find(t => t.name === 'H1')!), marginBottom: 12 }}>
          Building Global Language Skills at Scale
        </h1>

        <h3 style={{ ...styleOf(typeScale.find(t => t.name === 'H3')!), color: 'var(--text-secondary)', marginBottom: 28 }}>
          How adaptive technology and expert tutors combine to deliver measurable outcomes for enterprise teams
        </h3>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid var(--neutral-30)' }}>
          <span style={styleOf(typeScale.find(t => t.name === 'small-semibold')!)}>Maria García</span>
          <span style={{ ...styleOf(typeScale.find(t => t.name === 'small-regular')!), color: 'var(--neutral-80)' }}>Head of L&D, Enterprise</span>
        </div>

        <h2 style={{ ...styleOf(typeScale.find(t => t.name === 'H2')!), marginBottom: 16 }}>
          The Challenge
        </h2>
        <p style={{ ...styleOf(typeScale.find(t => t.name === 'default-regular')!), color: 'var(--text-secondary)', marginBottom: 24 }}>
          {LONG_SAMPLE}
        </p>

        <h4 style={{ ...styleOf(typeScale.find(t => t.name === 'H4')!), marginBottom: 8 }}>
          Key Principles
        </h4>
        <p style={{ ...styleOf(typeScale.find(t => t.name === 'default-regular')!), color: 'var(--text-secondary)', marginBottom: 32 }}>
          Effective language training requires consistent practice, contextualised content, and timely feedback from qualified tutors. Without these three pillars, learner engagement drops significantly after the first four weeks.
        </p>

        <div style={{ background: 'var(--background-info)', border: '1px solid var(--border-color-primary)', borderRadius: 8, padding: '20px 24px', marginBottom: 32 }}>
          <p style={{ ...styleOf(typeScale.find(t => t.name === 'default-semibold')!), marginBottom: 6 }}>
            Programme results after 6 months
          </p>
          <p style={{ ...styleOf(typeScale.find(t => t.name === 'small-regular')!), color: 'var(--text-secondary)', margin: 0 }}>
            87% of learners improved at least one CEFR level · Average session completion rate: 94%
          </p>
        </div>

        <h5 style={{ ...styleOf(typeScale.find(t => t.name === 'H5')!), marginBottom: 8 }}>
          Methodology
        </h5>
        <p style={{ ...styleOf(typeScale.find(t => t.name === 'small-regular')!), color: 'var(--text-secondary)', marginBottom: 16 }}>
          Each learner follows a personalised pathway calibrated to their current level, goals, and available study time. Progress is tracked through weekly micro-assessments.
        </p>
        <p style={{ ...styleOf(typeScale.find(t => t.name === 'extra-small-regular')!), color: 'var(--neutral-80)', margin: 0 }}>
          Data sourced from 1,200 learners across 14 enterprise accounts · Q3 2025
        </p>
      </div>
    </div>
  );
}

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Foundations/Typography',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

/** All 14 primitive type styles with live rendering, weight, size, line-height and tracking. */
export const Scale: Story = {
  render: () => <ScalePage />,
};

/** Semantic token → primitive mappings used across the design system (button-text, paragraph, page-title…). */
export const Tokens: Story = {
  render: () => <TokensPage />,
};

/** A realistic editorial layout composing all styles together in context. */
export const Specimen: Story = {
  render: () => <SpecimenPage />,
};
