import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';

const meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    items: { control: false },
    ariaLabel: { control: 'text' },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Figma spec example ───────────────────────────────────────────────────

/** Matches the Figma "Breadcrumbs" spec: 3-level hierarchy */
export const Default: Story = {
  args: {
    items: [
      { label: 'B2 - Upper-Intermediate 1', href: '#' },
      { label: 'Unit 1 - Getting ahead of the competition', href: '#' },
      { label: 'Markets and competition' },
    ],
  },
};

// ─── Step count variants ──────────────────────────────────────────────────

export const TwoSteps: Story = {
  name: 'Steps / Two',
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Current page' },
    ],
  },
};

export const ThreeSteps: Story = {
  name: 'Steps / Three',
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Section', href: '#' },
      { label: 'Current page' },
    ],
  },
};

export const FourSteps: Story = {
  name: 'Steps / Four',
  args: {
    items: [
      { label: 'B2 - Upper-Intermediate 1', href: '#' },
      { label: 'Unit 1', href: '#' },
      { label: 'Getting ahead', href: '#' },
      { label: 'Markets and competition' },
    ],
  },
};

// ─── States ───────────────────────────────────────────────────────────────

/** Single step — no separators, acts as current page indicator */
export const SingleStep: Story = {
  name: 'State / Single step',
  args: {
    items: [{ label: 'Markets and competition' }],
  },
};

/** Demonstrate keyboard-focus styling by tabbing to a link */
export const FocusState: Story = {
  name: 'State / Focus (tab to see)',
  args: {
    items: [
      { label: 'B2 - Upper-Intermediate 1', href: '#' },
      { label: 'Unit 1 - Getting ahead of the competition', href: '#' },
      { label: 'Markets and competition' },
    ],
  },
};

// ─── Click handler demo ────────────────────────────────────────────────────

export const WithClickHandlers: Story = {
  name: 'Interactive / Click handlers',
  render: () => {
    const [log, setLog] = React.useState('');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Breadcrumbs
          items={[
            { label: 'B2 - Upper-Intermediate 1', onClick: (e) => { e.preventDefault(); setLog('Clicked: B2'); } },
            { label: 'Unit 1', onClick: (e) => { e.preventDefault(); setLog('Clicked: Unit 1'); } },
            { label: 'Markets and competition' },
          ]}
        />
        {log && (
          <span style={{ fontFamily: 'monospace', fontSize: 12, color: '#5d7682' }}>
            {log}
          </span>
        )}
      </div>
    );
  },
};
