module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    fontSize: {
      hero: [
        'var(--text-hero)',
        {
          letterSpacing: '-0.03em',
          lineHeight: '1.2',
        },
      ],
      callout: [
        'var(--text-callout)',
        {
          letterSpacing: '-0.02em',
          lineHeight: '1.3',
        },
      ],
      h1: [
        'var(--text-h1)',
        {
          letterSpacing: '-0.02em',
          lineHeight: '1.1',
        },
      ],
      h2: [
        'var(--text-h2)',
        {
          // letterSpacing: '-0.02em',
          lineHeight: '1.3',
        },
      ],
      h3: [
        'var(--text-h3)',
        {
          // letterSpacing: '-0.02em',
          lineHeight: '1.3',
        },
      ],
      body: [
        'var(--text-body)',
        {
          letterSpacing: '0.01em',
          lineHeight: '1.5',
        },
      ],
      caption: [
        'var(--text-caption)',
        {
          letterSpacing: '0.01em',
          lineHeight: '1.2',
        },
      ],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: 'var(--color-black)',
      white: 'var(--color-white)',
      lighter: 'var(--color-body)',
    },
    screens: {
      sm: '30em',
      tablet: '52.125em',
      desktop: '80em',
    },
    extend: {
      spacing: {
        '2xl': 'var(--space-2xl)',
        xl: 'var(--space-xl)',
        lg: 'var(--space-lg)',
        md: 'var(--space-md)',
        sm: 'var(--space-sm)',
      },
    },
  },
  plugins: [],
};
