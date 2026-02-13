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
export const debounceMethod = <T extends (...args: any[]) => void>(func: T, delay = 500) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
