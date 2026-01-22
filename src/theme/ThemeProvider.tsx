import { App as AntdApp, ConfigProvider, theme as antdTheme, type ThemeConfig } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import React, { useMemo } from 'react';
import { type Theme } from './types';
import theme from './theme.json';

type ThemeProviderProps = {
  theme?: Theme;
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const antdTokens: ThemeConfig = useMemo(
    () => ({
      algorithm: antdTheme.defaultAlgorithm,
      token: {
        // Global tokens (used by other components like Input, Select, etc.)
        colorPrimary: theme.color.primary,
        colorError: theme.color.error,
        fontFamily: theme.fonts.base,
      },
      components: {
        Button: {
          // General
          iconGap: 10,
          fontWeight: 500,
          fontFamily: theme.fonts.base,
          // Size: large
          borderRadiusLG: 12,
          paddingInlineLG: 20,
          controlHeightLG: 42,
          paddingInline: 30,
          contentFontSizeLG: 14,

          // Primary button tokens (type="primary")
          colorPrimary: theme.button.primary.color,
          colorPrimaryHover: theme.button.primary.hover,
          primaryShadow: theme.button.primary.shadow,
          primaryActiveBg: theme.button.primary.hover,

          // Default/Secondary button tokens (type="default")
          defaultBg: theme.button.default.bg,
          defaultBorderColor: theme.button.default.border,
          defaultColor: theme.button.default.color,
          defaultHoverBg: theme.button.default['hover-bg'],
          defaultHoverBorderColor: theme.button.default['hover-border'],
          defaultActiveBg: theme.button.default['active-bg'],
          defaultActiveBorderColor: theme.button.default['active-border'],

          // Text/Ghost button tokens (type="text")
          textHoverBg: theme.button.text['hover-bg'],
          textHoverColor: theme.button.text.text,
          textActiveBg: theme.button.text['active-bg'],
          textActiveColor: theme.button.text.text,

          // Link button tokens (type="link")
          colorLink: theme.button.link.color,
          colorLinkHover: theme.button.link.hover,
          colorLinkActive: 'var(--color-primary-80)',

          //Icon only button tokens
          onlyIconSizeSM: 16,
          onlyIconSize: 18,
          onlyIconSizeLG: 26,
        },
        Input: {
          activeBg: 'var(--input-active-bg)',
          activeBorderColor: 'var(--input-active-border-color)',
          hoverBorderColor: 'var(--input-hover-border-color)',
          activeShadow: 'var(--input-active-shadow)',
        },
        Select: {
          activeBg: 'var(--select-active-bg)',
          activeBorderColor: 'var(--select-active-border-color)',
          hoverBorderColor: 'var(--select-hover-color)',
          activeShadow: 'var(--select-active-shadow)',
          activeOutlineColor: 'var(--select-active-outline-color)',
          optionPadding: 'var(--select-option-padding)',
          optionSelectedBg: 'var(--select-option-selected-bg)',
        },
        Form: {
          labelColor: 'var(--form-label-color)',
          labelRequiredMarkColor: 'var(--form-label-required-mark-color)',
        },
        Tabs: {
          itemColor: 'var(--tabs-item-color)',
          // itemHoverColor: "var(--tabs-item-hover-color)",
          itemSelectedColor: 'var(--tabs-item-selected-color)',
          itemActiveColor: 'var(--tabs-item-active-color)',
          inkBarColor: 'var(--tabs-ink-bar-color)',
        },
        Switch: {
          handleBg: 'var(--color-primary)',
          colorTextQuaternary: '#5570f11f',
          //For track background when active
          colorPrimary: '#5570F166',
          colorPrimaryHover: '#5570F166',
          colorTextTertiary: '#5570F11F',
        },
        Table: {
          rowHoverBg: '#fafafa',
          rowSelectedBg: '#fafafa',
          rowSelectedHoverBg: '#fafafa',
        },
      },
    }),
    []
  );

  return (
    <StyleProvider layer>
      <ConfigProvider theme={{ ...antdTokens, cssVar: {} }}>
        <AntdApp>{children}</AntdApp>
      </ConfigProvider>
    </StyleProvider>
  );
};
