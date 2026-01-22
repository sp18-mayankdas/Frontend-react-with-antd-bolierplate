import theme from '@theme/theme.json';

export function generateCssVariables() {
  const cssVars = theme;
  const root = document.documentElement;

  const setCSSVariables = (obj: Record<string, any>, prefix = '') => {
    Object.entries(obj).forEach(([key, value]) => {
      const cssVarName = prefix ? `--${prefix}-${key}` : `--${key}`;

      if (typeof value === 'string' || typeof value === 'number') {
        root.style.setProperty(cssVarName, String(value));
      } else if (typeof value === 'object' && value !== null) {
        setCSSVariables(value, prefix ? `${prefix}-${key}` : key);
      }
    });
  };

  setCSSVariables(cssVars);
}
