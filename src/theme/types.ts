/**
 * Theme token types for the design system
 * This defines the structure of our theme configuration
 */

export type ColorTokens = {
  primary: string;
  'primary-hover': string;
  'primary-active': string;
  'primary-10': string;
  'primary-20': string;
  'primary-40': string;
  'primary-60': string;
  'primary-70': string;
  'primary-80': string;
  'primary-100': string;
  secondary: string;
  'secondary-hover': string;
  'secondary-active': string;
  error: string;
  'error-hover': string;
  'error-active': string;
  'error-bg': string;
  success: string;
  'success-hover': string;
  'success-active': string;
  'success-bg': string;
  warning: string;
  'warning-hover': string;
  'warning-active': string;
  'warning-bg': string;
  info: string;
  'info-hover': string;
  'info-active': string;
  'info-bg': string;
  'black-text': string;
  'black-10': string;
  'black-20': string;
  'black-30': string;
  'black-40': string;
  'black-50': string;
  'black-60': string;
  'black-90': string;
  'gray-1': string;
  'gray-light': string;
  background: string;
  'background-secondary': string;
  'background-tertiary': string;
  surface: string;
  border: string;
  'border-light': string;
  'disabled-bg': string;
  'disabled-text': string;
  'disabled-border': string;
};

export type FontTokens = {
  base: string;
  poppins: string;
  'dm-sans': string;
};

export type SpacingTokens = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

export type BorderRadiusTokens = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export type ShadowTokens = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  card: string;
  'card-hover': string;
};

export type ButtonStateTokens = {
  bg: string;
  text: string;
  border: string;
  'hover-bg': string;
  'hover-border': string;
  'active-bg': string;
  'active-border': string;
  'disabled-bg': string;
  'disabled-text': string;
  'disabled-border': string;
};

export type ButtonLinkTokens = {
  text: string;
  'hover-text': string;
  'active-text': string;
  'disabled-text': string;
};

export type ButtonTokens = {
  primary: ButtonStateTokens;
  default: ButtonStateTokens;
  text: ButtonStateTokens;
  link: ButtonLinkTokens;
  danger: ButtonStateTokens;
};

export type InputTokens = {
  bg: string;
  text: string;
  border: string;
  placeholder: string;
  'hover-border': string;
  'focus-border': string;
  'focus-shadow': string;
  'disabled-bg': string;
  'disabled-text': string;
  'disabled-border': string;
  'error-border': string;
  'error-shadow': string;
};

export type SelectTokens = {
  bg: string;
  text: string;
  border: string;
  placeholder: string;
  'hover-border': string;
  'focus-border': string;
  'focus-shadow': string;
  'disabled-bg': string;
  'disabled-text': string;
  'disabled-border': string;
  'option-selected-bg': string;
  'option-hover-bg': string;
  'option-padding': string;
};

export type TabsTokens = {
  'item-color': string;
  'item-hover-color': string;
  'item-active-color': string;
  'item-selected-color': string;
  'ink-bar-color': string;
};

export type FormTokens = {
  'label-color': string;
  'label-font-size': string;
  'label-font-weight': string;
  'label-required-mark-color': string;
};

export type SwitchTokens = {
  'handle-bg': string;
  'checked-bg': string;
  'unchecked-bg': string;
  'hover-bg': string;
  'disabled-bg': string;
};

export type TableTokens = {
  'header-bg': string;
  'row-hover-bg': string;
  'row-selected-bg': string;
  'row-selected-hover-bg': string;
  'border-color': string;
};

export type TagTokens = {
  green: string;
  'green-bg': string;
  grey: string;
  'grey-bg': string;
  purple: string;
  'purple-bg': string;
  indigo: string;
  'indigo-bg': string;
  red: string;
  'red-bg': string;
  blue: string;
  'blue-bg': string;
  yellow: string;
  'yellow-bg': string;
  orange: string;
  'orange-bg': string;
};

export type Theme = {
  color: ColorTokens;
  fonts: FontTokens;
  spacing: SpacingTokens;
  borderRadius: BorderRadiusTokens;
  shadow: ShadowTokens;
  button: ButtonTokens;
  input: InputTokens;
  select: SelectTokens;
  tabs: TabsTokens;
  form: FormTokens;
  switch: SwitchTokens;
  table: TableTokens;
  tag: TagTokens;
};
