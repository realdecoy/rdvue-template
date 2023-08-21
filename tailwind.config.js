/** @type {import('tailwindcss').Config} */
module.exports = {
  enabled: true,
  content: ['./src/**/**/*.{html,vue,ts,js}'],
  safeList: [
    {
      pattern: /.*/,
    },
  ],
  theme: {
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',

      // App related colors
      app: {
        background: 'var(--app-background)',
        header: 'var(--app-header)',
        sidebar: 'var(--app-sidebar)',
        footer: 'var(--app-footer)',
      },

      // Typography related colors
      typography: {
        primary: 'var(--typography-primary)',
        secondary: 'var(--typography-secondary)',
        accent: 'var(--typography-accent)',
        success: 'var(--typography-success)',
        error: 'var(--typography-error)',
        muted: 'var(--typography-muted)',
        light: 'var(--typography-light)',
      },

      // Button related colors
      button: {
        primary: 'var(--button-primary)',
        secondary: 'var(--button-secondary)',
        success: 'var(--button-success)',
        warning: 'var(--button-warning)',
        error: 'var(--button-error)',
        disabled: 'var(--button-disabled)',
      },

      // Border related colors
      border: {
        light: 'var(--border-light)',
        dark: 'var(--border-dark)',
        muted: 'var(--border-muted)',
      },

      // Status related colors
      status: {
        info: 'var(--status-info)',
        warning: 'var(--status-warning)',
      },

      // Link related colors
      link: {
        primary: 'var(--link-primary)',
        hover: 'var(--link-hover)',
      },

      // Other colors
      focus: {
        ring: 'var(--focus-ring)',
      },
      divider: 'var(--divider)',
      overlay: 'var(--overlay)',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  variants: {},
  plugins: [],
};
