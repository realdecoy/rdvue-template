module.exports = {
  enabled: true,
  content: ["./src/**/**/*.{html,vue,ts,js}"],
  safeList:[
    {
      pattern: /.*/
    },
  ],
  theme: {
    /**
     * Color values are defined in /src/theme/colors.scss.
     * Color names should be sematic in order to provide
     * contextual alignment when thinking about themes.
     * E.g. primary-text-color (semantic) vs black-1 (literal)
     */
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      app: {
        background: 'var(--app-background)',
        footer: 'var(--app-footer)',
      },
      typography: {
        primary: 'var(--typography-primary)',
        secondary: 'var(--typography-secondary)',
        success: 'var(--typography-success)',
        error: 'var(--typography-error)',
        light: 'var(--typography-light)',
      },
      button: {
        'success': 'var(--button-success)',
        'failure': 'var(--button-failure)',
      },
      border: {
        'light': 'var(--border-light)',
      },
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  variants: {},
  plugins: [],
};
