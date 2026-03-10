import { cn } from '@/utils';
import { UserOutlined } from '@ant-design/icons';
import type { CSSProperties, ReactNode } from 'react';

export interface AvatarIconProps {
  /** Used to derive initials when no image is provided */
  name?: string;
  src?: string;
  children?: ReactNode;
  /** Background color for the initials fallback */
  color?: string;
  /** Avatar diameter in px */
  size?: number;
  /**
   * How to derive initials from `name`:
   * - `'initials'` → first letter of each word, max 2 (default) — "John Doe" → "JD"
   * - `'first'`    → first letter only — "John Doe" → "J"
   * - `'full'`     → full first word — "John Doe" → "John"
   */
  nameFormat?: 'initials' | 'first' | 'full';
  /** Custom icon — shown when name is empty and no image/children are provided */
  fallbackIcon?: ReactNode;
  className?: string;
  imgClassName?: string;
  style?: CSSProperties;
}

const getInitials = (name: string, format: AvatarIconProps['nameFormat'] = 'initials'): string => {
  const trimmed = name.trim();
  if (!trimmed) return '';

  if (format === 'full') {
    return trimmed.split(/\s+/)[0];
  }

  const words = trimmed.split(/\s+/);

  if (format === 'first') {
    return words[0][0].toUpperCase();
  }

  const first = words[0][0].toUpperCase();
  const last = words.length > 1 ? words[words.length - 1][0].toUpperCase() : '';
  return first + last;
};
const getFontSize = (size: number): number => Math.max(10, Math.floor(size * 0.38));

export const AvatarIcon = ({
  name = '',
  src,
  children,
  color = '#e5e7eb',
  size = 36,
  nameFormat = 'initials',
  fallbackIcon,
  className,
  imgClassName,
  style,
}: AvatarIconProps) => {
  const dim = { width: size, height: size };

  // Priority 1: custom children
  if (children) {
    return (
      <div
        className={cn('rounded-full overflow-hidden shrink-0', className)}
        style={{ ...dim, ...style }}
      >
        {children}
      </div>
    );
  }

  // Priority 2: image URL
  if (src) {
    return (
      <img
        src={src}
        alt={name || 'avatar'}
        className={cn('rounded-full object-cover shrink-0', className, imgClassName)}
        style={{ ...dim, ...style }}
      />
    );
  }

  // Priority 3: initials or fallback icon
  const initials = getInitials(name, nameFormat);
  const fontSize = getFontSize(size);

  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center shrink-0 font-semibold select-none',
        className
      )}
      style={{ ...dim, backgroundColor: color, fontSize, color: '#fff', ...style }}
      aria-label={name || 'avatar'}
      role="img"
    >
      {initials || fallbackIcon || <UserOutlined style={{ fontSize: fontSize * 0.9 }} />}
    </div>
  );
};
