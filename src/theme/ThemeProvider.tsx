import { App as AntdApp, ConfigProvider, theme as antdTheme, type ThemeConfig } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import React, { useEffect, useMemo } from 'react';
import themeConfig from './theme.json';
import { type Theme } from './types';
import { applyCssVariables } from '@/utils';

type ThemeProviderProps = {
  theme?: Theme;
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  const activeTheme = theme || (themeConfig as Theme);

  useEffect(() => {
    applyCssVariables(activeTheme);
  }, [activeTheme]);

  const antdTokens: ThemeConfig = useMemo(
    () => ({
      algorithm: antdTheme.defaultAlgorithm,
      token: {
        // Color tokens
        colorPrimary: activeTheme.color.primary,
        colorError: activeTheme.color.error,
        colorSuccess: activeTheme.color.success,
        colorWarning: activeTheme.color.warning,
        colorInfo: activeTheme.color.info,
        colorTextBase: activeTheme.color['black-text'],
        colorBgBase: activeTheme.color.surface,
        colorBorder: activeTheme.color.border,
        colorBgContainer: activeTheme.color.surface,
        colorBgLayout: activeTheme.color.background,

        // Font tokens
        fontFamily: activeTheme.fonts.base,

        // Border radius
        borderRadius: activeTheme.borderRadius.md,
        borderRadiusLG: activeTheme.borderRadius.lg,
        borderRadiusSM: activeTheme.borderRadius.sm,

        // Spacing
        padding: activeTheme.spacing.md,
        paddingLG: activeTheme.spacing.lg,
        paddingSM: activeTheme.spacing.sm,
        paddingXS: activeTheme.spacing.xs,

        // Shadows
        boxShadow: activeTheme.shadow.md,
        boxShadowSecondary: activeTheme.shadow.sm,
      },
      components: {
        Button: {
          // General
          fontWeight: 500,
          fontFamily: activeTheme.fonts.base,

          // Size tokens
          borderRadius: activeTheme.borderRadius.lg,
          borderRadiusLG: activeTheme.borderRadius.lg,
          borderRadiusSM: activeTheme.borderRadius.md,

          controlHeight: 40,
          controlHeightLG: 48,
          controlHeightSM: 32,

          paddingInline: 20,
          paddingInlineLG: 24,
          paddingInlineSM: 16,

          contentFontSize: 14,
          contentFontSizeLG: 16,
          contentFontSizeSM: 14,

          // Primary button
          colorPrimary: '#1c2fc9',
          colorPrimaryHover: activeTheme.button.primary['hover-bg'],
          colorPrimaryActive: activeTheme.button.primary['active-bg'],
          colorPrimaryBorder: activeTheme.button.primary.border,
          primaryColor: activeTheme.button.primary.text,
          primaryShadow: 'none',

          // Default button
          defaultBg: activeTheme.button.default.bg,
          defaultColor: activeTheme.button.default.text,
          defaultBorderColor: activeTheme.button.default.border,
          defaultHoverBg: activeTheme.button.default['hover-bg'],
          defaultHoverColor: activeTheme.button.default.text,
          defaultHoverBorderColor: activeTheme.button.default['hover-border'],
          defaultActiveBg: activeTheme.button.default['active-bg'],
          defaultActiveColor: activeTheme.button.default.text,
          defaultActiveBorderColor: activeTheme.button.default['active-border'],

          // Text button
          textHoverBg: activeTheme.button.text['hover-bg'],
          textHoverColor: activeTheme.button.text.text,
          textActiveBg: activeTheme.button.text['active-bg'],
          textActiveColor: activeTheme.button.text.text,

          // Link button
          colorLink: activeTheme.button.link.text,
          colorLinkHover: activeTheme.button.link['hover-text'],
          colorLinkActive: activeTheme.button.link['active-text'],

          // Danger button
          colorError: activeTheme.button.danger.bg,
          colorErrorHover: activeTheme.button.danger['hover-bg'],
          colorErrorActive: activeTheme.button.danger['active-bg'],
          colorErrorBorderHover: activeTheme.button.danger['hover-border'],
          dangerColor: activeTheme.button.danger.text,

          // Disabled state
          colorBgContainerDisabled: activeTheme.button.primary['disabled-bg'],
          colorTextDisabled: activeTheme.button.primary['disabled-text'],
          borderColorDisabled: activeTheme.button.primary['disabled-border'],
        },

        Input: {
          colorBgContainer: activeTheme.input.bg,
          colorText: activeTheme.input.text,
          colorBorder: activeTheme.input.border,
          colorTextPlaceholder: activeTheme.input.placeholder,
          hoverBorderColor: activeTheme.input['hover-border'],
          activeBorderColor: activeTheme.input['focus-border'],
          activeShadow: activeTheme.input['focus-shadow'],
          errorActiveShadow: activeTheme.input['error-shadow'],
          colorBgContainerDisabled: activeTheme.input['disabled-bg'],
          colorTextDisabled: activeTheme.input['disabled-text'],
        },

        Select: {
          colorBgContainer: activeTheme.select.bg,
          colorText: activeTheme.select.text,
          colorBorder: activeTheme.select.border,
          colorTextPlaceholder: activeTheme.select.placeholder,
          hoverBorderColor: activeTheme.select['hover-border'],
          activeBorderColor: activeTheme.select['focus-border'],
          activeShadow: activeTheme.select['focus-shadow'],
          optionSelectedBg: activeTheme.select['option-selected-bg'],
          optionActiveBg: activeTheme.select['option-hover-bg'],
          optionPadding: activeTheme.select['option-padding'],
          colorBgContainerDisabled: activeTheme.select['disabled-bg'],
          colorTextDisabled: activeTheme.select['disabled-text'],
        },

        Form: {
          labelColor: activeTheme.form['label-color'],
          // labelFontSize: parseInt(activeTheme.form['label-font-size']),
          labelRequiredMarkColor: activeTheme.form['label-required-mark-color'],
        },

        Tabs: {
          itemColor: activeTheme.tabs['item-color'],
          itemHoverColor: activeTheme.tabs['item-hover-color'],
          itemSelectedColor: activeTheme.tabs['item-selected-color'],
          itemActiveColor: activeTheme.tabs['item-active-color'],
          inkBarColor: activeTheme.tabs['ink-bar-color'],
        },

        Switch: {
          handleBg: activeTheme.switch['handle-bg'],
          colorPrimary: activeTheme.switch['checked-bg'],
          colorPrimaryHover: activeTheme.switch['hover-bg'],
          colorTextQuaternary: activeTheme.switch['unchecked-bg'],
          colorTextTertiary: activeTheme.switch['unchecked-bg'],
        },

        Table: {
          headerBg: activeTheme.table['header-bg'],
          rowHoverBg: activeTheme.table['row-hover-bg'],
          rowSelectedBg: activeTheme.table['row-selected-bg'],
          rowSelectedHoverBg: activeTheme.table['row-selected-hover-bg'],
          borderColor: activeTheme.table['border-color'],
        },
      },
    }),
    [activeTheme]
  );

  return (
    <StyleProvider layer>
      <ConfigProvider theme={{ ...antdTokens, cssVar: {} }}>
        <AntdApp>{children}</AntdApp>
      </ConfigProvider>
    </StyleProvider>
  );
};
