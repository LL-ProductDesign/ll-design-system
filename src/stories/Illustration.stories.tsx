import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Illustration } from './Illustration';
import type { IllustrationName } from './Illustration';
import { color } from './tokens';

const ALL_NAMES: IllustrationName[] = [
  'no-notifications',
  'all-done',
  'no-recommendations',
  'certificates',
  'recommendation-assessment',
];

const meta = {
  title: 'Foundations/Illustration',
  component: Illustration,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: ALL_NAMES,
      description: 'Which illustration to display',
    },
    alt: {
      control: 'text',
      description: 'Accessible label. Set to "" for decorative usage.',
    },
  },
} satisfies Meta<typeof Illustration>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Default ──────────────────────────────────────────────────────────────

export const Default: Story = {
  args: { name: 'all-done' },
};

// ─── Empty state illustrations ────────────────────────────────────────────

export const NoNotifications: Story = {
  name: 'Empty State / No Notifications',
  args: { name: 'no-notifications', alt: 'No notifications' },
};

export const AllDone: Story = {
  name: 'Empty State / All Done',
  args: { name: 'all-done', alt: 'All done' },
};

export const NoRecommendations: Story = {
  name: 'Empty State / No Recommendations',
  args: { name: 'no-recommendations', alt: 'No recommendations' },
};

export const Certificates: Story = {
  name: 'Empty State / Certificates',
  args: { name: 'certificates', alt: 'Certificates' },
};

// ─── Recommendation thumbnails ────────────────────────────────────────────

export const RecommendationAssessment: Story = {
  name: 'Recommendation / Assessment',
  args: { name: 'recommendation-assessment', alt: 'Assessment activity' },
};

// ─── Gallery: all empty states ────────────────────────────────────────────

const emptyStates: Array<{ name: IllustrationName; label: string }> = [
  { name: 'no-notifications',       label: 'No Notifications' },
  { name: 'all-done',               label: 'All Done' },
  { name: 'no-recommendations',     label: 'No Recommendations' },
  { name: 'certificates',           label: 'Certificates' },
];

export const AllEmptyStates: Story = {
  name: 'Gallery / All Empty States',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-start' }}>
      {emptyStates.map(({ name, label }) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <Illustration name={name} alt={label} />
          <span style={{
            fontFamily: "'Fira Sans', sans-serif",
            fontSize: 12,
            color: color['text-secondary'],
          }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  ),
};

// ─── Gallery: recommendations ─────────────────────────────────────────────

export const AllRecommendations: Story = {
  name: 'Gallery / Recommendation Thumbnails',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Illustration name="recommendation-assessment" alt="Assessment" />
          <span style={{
            fontFamily: "'Fira Sans', sans-serif",
            fontSize: 12,
            color: color['text-secondary'],
          }}>
            assessment
          </span>
        </div>
      </div>
    </div>
  ),
};
