export const Colors = {
  primary: '#0057c2',
  primaryContainer: '#006ef2',
  primaryFixed: '#d9e2ff',
  primaryFixedDim: '#afc6ff',
  onPrimary: '#ffffff',
  onPrimaryContainer: '#fefcff',
  onPrimaryFixed: '#001a43',
  onPrimaryFixedVariant: '#004398',

  secondary: '#425d97',
  secondaryContainer: '#a3befe',
  secondaryFixed: '#d9e2ff',
  secondaryFixedDim: '#afc6ff',
  onSecondary: '#ffffff',
  onSecondaryContainer: '#2f4b84',
  onSecondaryFixed: '#001a43',
  onSecondaryFixedVariant: '#28457e',

  tertiary: '#9e3d00',
  tertiaryContainer: '#c64f00',
  tertiaryFixed: '#ffdbcc',
  tertiaryFixedDim: '#ffb695',
  onTertiary: '#ffffff',
  onTertiaryContainer: '#fffbff',
  onTertiaryFixed: '#351000',
  onTertiaryFixedVariant: '#7c2e00',

  error: '#ba1a1a',
  errorContainer: '#ffdad6',
  onError: '#ffffff',
  onErrorContainer: '#93000a',

  background: '#faf9ff',
  onBackground: '#181b23',
  surface: '#faf9ff',
  onSurface: '#181b23',
  surfaceVariant: '#e0e2ed',
  onSurfaceVariant: '#414755',
  surfaceTint: '#0059c7',
  surfaceDim: '#d8d9e5',
  surfaceBright: '#faf9ff',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#f2f3ff',
  surfaceContainer: '#ecedf9',
  surfaceContainerHigh: '#e6e7f3',
  surfaceContainerHighest: '#e0e2ed',

  outline: '#727786',
  outlineVariant: '#c1c6d7',

  inverseSurface: '#2d3039',
  inverseOnSurface: '#eff0fc',
  inversePrimary: '#afc6ff',

  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',

  slate: {
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },

  orange: {
    100: '#ffedd5',
    600: '#ea580c',
  },

  emerald: {
    400: '#34d399',
  },

  amber: {
    400: '#fbbf24',
  },

  red: {
    500: '#ef4444',
  },

  green: {
    500: '#22c55e',
    600: '#16a34a',
  },

  yellow: {
    500: '#eab308',
  },

  blue: {
    50: '#eff6ff',
    400: '#60a5fa',
    600: '#2563eb',
    900: '#1e3a8a',
  },
};

export type ColorToken = keyof typeof Colors;