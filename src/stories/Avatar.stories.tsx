import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Avatar } from './Avatar';
import { color, scale } from './tokens';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l', 'xl'],
      description: 'Avatar size — xs=24px, s=32px, m=40px, l=48px, xl=64px',
    },
    status: {
      control: 'select',
      options: ['none', 'online', 'away', 'busy', 'offline'],
      description: 'Status indicator',
    },
    src: { control: 'text', description: 'Image URL' },
    initials: { control: 'text', description: '1–2 character initials' },
    alt: { control: 'text' },
  },
  args: { size: 'm', status: 'none' },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Playground ───────────────────────────────────────────────────────────────

/** Interactive playground — use controls to change size, status, and content */
export const Default: Story = {
  args: { initials: 'JD' },
};

// ─── Content types ────────────────────────────────────────────────────────────

/** Avatar with a photo */
export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/128?img=47',
    alt: 'Jane Doe',
  },
};

/** Avatar with initials — shown when no image is provided */
export const WithInitials: Story = {
  args: { initials: 'AB' },
};

/** Default icon fallback — shown when no image or initials are provided */
export const WithFallback: Story = {
  args: {},
};

/** Broken image URL falls back gracefully to the icon */
export const BrokenImage: Story = {
  args: { src: 'https://broken.url/image.png', alt: 'Broken' },
};

// ─── Size stories ─────────────────────────────────────────────────────────────

/** All five sizes side by side */
export const AllSizes: Story = {
  name: 'Size / All Sizes',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      {(['xs', 's', 'm', 'l', 'xl'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Avatar size={size} initials="JD" />
          <span style={{ fontSize: 10, color: 'var(--neutral-80)', fontFamily: 'var(--font-family-base)' }}>
            {size.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  ),
  args: {},
};

// ─── Status stories ───────────────────────────────────────────────────────────

/** All status indicators */
export const AllStatuses: Story = {
  name: 'Status / All Statuses',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      {(['none', 'online', 'away', 'busy', 'offline'] as const).map((status) => (
        <div key={status} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Avatar size="m" initials="JD" status={status} />
          <span style={{ fontSize: 10, color: 'var(--neutral-80)', fontFamily: 'var(--font-family-base)', textTransform: 'capitalize' }}>
            {status}
          </span>
        </div>
      ))}
    </div>
  ),
  args: {},
};

// ─── All Variants grid ────────────────────────────────────────────────────────

/** Every combination of content type × size */
export const AllVariants: Story = {
  name: 'All Variants',
  render: () => {
    const sizes = ['xs', 's', 'm', 'l', 'xl'] as const;
    const rows: Array<{ label: string; props: Partial<React.ComponentProps<typeof Avatar>> }> = [
      { label: 'Image',    props: { src: 'https://i.pravatar.cc/128?img=12', alt: 'User' } },
      { label: 'Initials', props: { initials: 'AB' } },
      { label: 'Fallback', props: {} },
      { label: 'Online',   props: { initials: 'CD', status: 'online' } },
      { label: 'Away',     props: { initials: 'CD', status: 'away' } },
      { label: 'Busy',     props: { initials: 'CD', status: 'busy' } },
      { label: 'Offline',  props: { initials: 'CD', status: 'offline' } },
    ];

    return (
      <div style={{ fontFamily: 'var(--font-family-base)', overflowX: 'auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: `120px repeat(${sizes.length}, 64px)`,
          gap: '16px 8px',
          alignItems: 'center',
        }}>
          {/* Header row */}
          <div />
          {sizes.map((s) => (
            <div key={s} style={{ fontSize: 11, color: 'var(--neutral-80)', textAlign: 'center' }}>
              {s.toUpperCase()}
            </div>
          ))}

          {/* Data rows */}
          {rows.map(({ label, props }) => (
            <React.Fragment key={label}>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{label}</div>
              {sizes.map((size) => (
                <div key={size} style={{ display: 'flex', justifyContent: 'center' }}>
                  <Avatar size={size} {...props} />
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  },
  args: {},
};

// ─── Token Usage ──────────────────────────────────────────────────────────────

/** Colour tokens consumed by the Avatar component */
export const TokenUsage: Story = {
  name: 'Token Usage',
  render: () => {
    const slots: Array<{ slot: string; token: string; value: string }> = [
      { slot: 'Background — initials',   token: 'bg-brand',       value: color['bg-brand'] },
      { slot: 'Background — icon/empty', token: 'bg-secondary',   value: color['bg-secondary'] },
      { slot: 'Text — initials',         token: 'text-invert',    value: color['text-invert'] },
      { slot: 'Text — icon/empty',       token: 'text-secondary', value: color['text-secondary'] },
      { slot: 'Status — online',         token: 'bg-green',       value: color['bg-green'] },
      { slot: 'Status — away',           token: 'yellow-500',     value: scale.yellow[500] },
      { slot: 'Status — busy',           token: 'text-error',     value: color['text-error'] },
      { slot: 'Status — offline',        token: 'text-disabled',  value: color['text-disabled'] },
      { slot: 'Status ring border',      token: 'bg-primary',     value: color['bg-primary'] },
    ];
    return (
      <div style={{ fontFamily: 'var(--font-family-base)', maxWidth: 500, padding: '8px 0' }}>
        <p style={{ margin: '0 0 20px', fontSize: 12, color: 'var(--text-secondary)' }}>
          Colour tokens used by this component.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '220px 160px 40px', gap: '6px 16px', alignItems: 'center' }}>
          {['Slot', 'Token', ''].map(h => (
            <div key={h} style={{ fontSize: 10, fontWeight: 700, color: 'var(--neutral-80)', textTransform: 'uppercase', letterSpacing: '0.06em', paddingBottom: 4, borderBottom: '1px solid var(--border-color-primary)' }}>{h}</div>
          ))}
          {slots.map(({ slot, token, value }) => (
            <React.Fragment key={slot}>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{slot}</div>
              <div style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--text-primary)', background: 'var(--background-secondary)', padding: '2px 6px', borderRadius: 4 }}>{token}</div>
              <div title={value} style={{ width: 28, height: 18, borderRadius: 4, background: value, border: '1px solid rgba(0,0,0,0.1)' }} />
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  },
  args: {},
};
