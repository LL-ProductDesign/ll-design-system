import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { UnderlineTabs, type TabItem } from './UnderlineTabs';

const meta: Meta<typeof UnderlineTabs> = {
  title: 'Components/UnderlineTabs',
  component: UnderlineTabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Tabs allow users to navigate between related views of content while remaining in context of the page.',
      },
    },
  },
  argTypes: {
    stretched: { control: 'boolean' },
    activeId: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof UnderlineTabs>;

// ─── Controlled wrapper ───────────────────────────────────────────────────────

function Controlled({ tabs, stretched }: { tabs: TabItem[]; stretched?: boolean }) {
  const [active, setActive] = useState(tabs[0].id);
  return (
    <div style={{ width: stretched ? 480 : undefined }}>
      <UnderlineTabs
        tabs={tabs}
        activeId={active}
        onChange={setActive}
        stretched={stretched}
      />
    </div>
  );
}

// ─── Stories ──────────────────────────────────────────────────────────────────

const BASIC_TABS: TabItem[] = [
  { id: 'tab1', label: 'Tab 1' },
  { id: 'tab2', label: 'Tab 2' },
  { id: 'tab3', label: 'Tab 3' },
];

export const Default: Story = {
  render: () => <Controlled tabs={BASIC_TABS} />,
};

export const Stretched: Story = {
  render: () => <Controlled tabs={BASIC_TABS} stretched />,
};

export const WithCounter: Story = {
  render: () => (
    <Controlled
      tabs={[
        { id: 'all',    label: 'All' },
        { id: 'unread', label: 'Unread', counter: 12 },
        { id: 'today',  label: 'Today',  counter: 3 },
      ]}
    />
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Controlled
      tabs={[
        { id: 'tab1', label: 'Active' },
        { id: 'tab2', label: 'Resting' },
        { id: 'tab3', label: 'Disabled', disabled: true },
      ]}
    />
  ),
};

const PlaceholderIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: '100%', height: '100%' }}>
    <rect x="3" y="3" width="14" height="14" rx="3" opacity="0.4" />
    <circle cx="10" cy="10" r="3" />
  </svg>
);

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <p style={{ fontFamily: "'Fira Sans', sans-serif", fontSize: 12, marginBottom: 8, color: '#5d7682' }}>Left icon</p>
        <Controlled
          tabs={[
            { id: 'a', label: 'Overview', icon: <PlaceholderIcon />, iconPosition: 'left' },
            { id: 'b', label: 'Details',  icon: <PlaceholderIcon />, iconPosition: 'left' },
            { id: 'c', label: 'History',  icon: <PlaceholderIcon />, iconPosition: 'left' },
          ]}
        />
      </div>
      <div>
        <p style={{ fontFamily: "'Fira Sans', sans-serif", fontSize: 12, marginBottom: 8, color: '#5d7682' }}>Right icon</p>
        <Controlled
          tabs={[
            { id: 'a', label: 'Overview', icon: <PlaceholderIcon />, iconPosition: 'right' },
            { id: 'b', label: 'Details',  icon: <PlaceholderIcon />, iconPosition: 'right' },
            { id: 'c', label: 'History',  disabled: true, icon: <PlaceholderIcon />, iconPosition: 'right' },
          ]}
        />
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  name: 'All states (reference)',
  render: () => {
    const tabs: TabItem[] = [
      { id: 'resting',  label: 'Resting' },
      { id: 'selected', label: 'Selected' },
      { id: 'hover',    label: 'Hover (mouse over)' },
      { id: 'disabled', label: 'Disabled', disabled: true },
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontFamily: "'Fira Sans', sans-serif" }}>
        <Controlled tabs={tabs} />
        <Controlled tabs={[
          { id: 'all',    label: 'All' },
          { id: 'unread', label: 'Unread', counter: 5 },
          { id: 'today',  label: 'Today' },
        ]} />
      </div>
    );
  },
};

export const NotificationsExample: Story = {
  name: 'Notifications panel usage',
  render: () => (
    <Controlled
      tabs={[
        { id: 'all',    label: 'All' },
        { id: 'unread', label: 'Unread' },
        { id: 'today',  label: 'Today' },
      ]}
    />
  ),
};
