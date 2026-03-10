import type { Theme } from '@/theme/types';
import themeConfig from '@/theme/theme.json';

export function applyCssVariables(theme: Theme = themeConfig as Theme) {
  const root = document.documentElement;

  const setCSSVariables = (obj: Record<string, any>, prefix = '') => {
    Object.entries(obj).forEach(([key, value]) => {
      const cssVarName = prefix ? `--${prefix}-${key}` : `--${key}`;

      if (typeof value === 'string' || typeof value === 'number') {
        root.style.setProperty(cssVarName, String(value));
      } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        setCSSVariables(value, prefix ? `${prefix}-${key}` : key);
      }
    });
  };

  setCSSVariables(theme);
}

// debounce
/**
 * Returns a debounced version of `fn` that delays execution by `delay` ms.
 * The returned function also exposes a `.cancel()` method to clear any pending call —
 */
export const debounce = <T extends (...args: Parameters<T>) => void>(fn: T, delay = 500) => {
  let timer: ReturnType<typeof setTimeout> | undefined;

  const debounced = (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };

  debounced.cancel = () => {
    clearTimeout(timer);
    timer = undefined;
  };

  return debounced;
};

// User specific functions
export const getDisplayName = (user: any) => {
  if (user?.fullName) return user?.fullName;
  if (user?.firstName && user?.lastName) return `${user?.firstName} ${user?.lastName}`;
  if (user?.firstName) return user?.firstName;
  if (user?.lastName) return user?.lastName;
  return 'Unknown User';
};

export const getUserName = (user: any): string => {
  if (!user) return 'User';
  return user?.firstName ? user?.firstName : user?.fullName || user?.lastName || 'User';
};

export const getUserProfilePic = (user: any): string => {
  if (!user) return '';
  return user?.profilePic ?? user?.profilePicture ?? user?.profilePic ?? '';
};

export const handleDownload = (url: string, fileName: string, canDownload: boolean) => {
  if (!canDownload) return;

  const aTag = document.createElement('a');
  aTag.href = url;
  aTag.download = fileName;
  aTag.target = '_blank';
  document.body.appendChild(aTag);
  aTag.click();
  document.body.removeChild(aTag);
};

export const getFileNameFromUrl = (url: string): string => {
  const tempName = url.substring(url?.lastIndexOf('/') + 1);
  const decoded = decodeURIComponent(tempName);
  const dashIndex = decoded.indexOf('-');

  if (dashIndex > 0 && /^[a-f0-9]{8,}-/i.test(decoded.substring(0, dashIndex + 1))) {
    return decoded.substring(dashIndex + 1).trim();
  }
  return decoded;
};

export const formatFileSize = (bytes?: number): string => {
  if (!bytes) return '';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};
