import React from 'react';

// ─── Chevron separator (inline, colour-overridable) ────────────────────────

function ChevronRight() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{ flexShrink: 0, display: 'block' }}
    >
      <path
        d="M11.2159 7.28414C11.4554 7.55035 11.4554 7.94965 11.2159 8.18924L6.10475 13.3003C5.83854 13.5666 5.43924 13.5666 5.19965 13.3003C4.93345 13.0608 4.93345 12.6615 5.19965 12.4219L9.85822 7.76331L5.19965 3.07813C4.93345 2.83854 4.93345 2.43924 5.19965 2.19965C5.43924 1.93345 5.83854 1.93345 6.07813 2.19965L11.2159 7.28414Z"
        fill="var(--text-disabled)"
      />
    </svg>
  );
}

// ─── Types ─────────────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  /** Display label for this step. */
  label: string;
  /** Navigation target. Omit for the current (last) step. */
  href?: string;
  /** Called when the step is clicked. */
  onClick?: (e: React.MouseEvent) => void;
}

export interface BreadcrumbsProps {
  /** Ordered list of breadcrumb steps. The last item is treated as the current page. */
  items: BreadcrumbItem[];
  /** Accessible label for the nav landmark. */
  ariaLabel?: string;
}

// ─── Step styles ───────────────────────────────────────────────────────────

const stepBase: React.CSSProperties = {
  fontFamily: 'var(--font-family-base)',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '18px',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  padding: 0,
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  outline: 'none',
};

const linkStyle: React.CSSProperties = {
  ...stepBase,
  color: 'var(--text-brand)',
};

const currentStyle: React.CSSProperties = {
  ...stepBase,
  color: 'var(--text-primary)',
  cursor: 'default',
  pointerEvents: 'none',
};

const focusStyle: React.CSSProperties = {
  outline: 'var(--border-focus)',
  outlineOffset: 2,
  boxShadow: 'var(--shadow-focus)',
  borderRadius: 2,
};

// ─── Component ─────────────────────────────────────────────────────────────

/** Learnlight Design System — Breadcrumbs */
export function Breadcrumbs({ items, ariaLabel = 'Breadcrumb' }: BreadcrumbsProps) {
  return (
    <nav aria-label={ariaLabel}>
      <ol
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {items.map((item, i) => {
          const isCurrent = i === items.length - 1;
          return (
            <React.Fragment key={i}>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                {isCurrent ? (
                  <span
                    aria-current="page"
                    style={currentStyle}
                  >
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={item.href ?? '#'}
                    onClick={item.onClick}
                    style={linkStyle}
                    onFocus={e => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={e => {
                      e.currentTarget.style.outline = '';
                      e.currentTarget.style.outlineOffset = '';
                      e.currentTarget.style.boxShadow = '';
                      e.currentTarget.style.borderRadius = '';
                    }}
                  >
                    {item.label}
                  </a>
                )}
              </li>
              {!isCurrent && (
                <li aria-hidden style={{ display: 'flex', alignItems: 'center' }}>
                  <ChevronRight />
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
