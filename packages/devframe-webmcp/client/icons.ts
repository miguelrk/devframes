export const ICON_PATHS: Record<string, string> = {
  'i-mdi-lightning-bolt': 'M11 15H6l7-14v8h5l-7 14v-8Z',
  'i-mdi-database-search': 'M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4 1.41 0 2.75-.19 3.95-.53A5.99 5.99 0 0 1 12 17c-3.31 0-6-1.12-6-2.5V13.4c1.4.87 3.52 1.4 6 1.4.7 0 1.38-.04 2.03-.12A6 6 0 0 1 20 12.8V7c0-2.21-3.58-4-8-4m0 9c-3.31 0-6-1.12-6-2.5S8.69 7 12 7s6 1.12 6 2.5S15.31 12 12 12m4.31 9.89l-2.44-2.44a3.97 3.97 0 0 0 .8-3.28A4 4 0 1 0 18 18c0 .73-.21 1.41-.56 2l2.44 2.44z',
  'i-mdi-compass-outline': 'M14.19 14.19 6 18l3.81-8.19L18 6zm-2.19 1.42A3.61 3.61 0 0 1 8.39 12 3.61 3.61 0 0 1 12 8.39 3.61 3.61 0 0 1 15.61 12 3.61 3.61 0 0 1 12 15.61M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16',
  'i-mdi-view-module-outline': 'M4 5v6h6V5zm8 0v6h6V5zM4 13v6h6v-6zm8 0v6h6v-6zM2 3h20v18H2z',
  'i-mdi-table': 'M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 2v3h14V6zm0 5v3h4v-3zm6 0v3h8v-3zm-6 5v3h4v-3zm6 0v3h8v-3z',
  'i-mdi-file-document-outline': 'M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m7 1.5V9h5.5zM6 4v16h12V11h-7V4z',
  'i-mdi-creation': 'm16.5 16.25 2.04 1.52-.76-2.53 2.01-1.58h-2.5L16.5 11l-.79 2.66h-2.5l2.01 1.58-.76 2.53zM12 7.5l1.12 3.38h3.51l-2.84 2.12 1.08 3.5L12 14.38 9.13 16.5l1.08-3.5-2.84-2.12h3.51zM5.5 16.25l2.04 1.52-.76-2.53 2.01-1.58H6.29L5.5 11l-.79 2.66H2.21l2.01 1.58-.76 2.53z',
  'i-mdi-cube-outline': 'M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM12 4.15 6.04 7.5 12 10.85 17.96 7.5zm-1 15.11-6-3.38V9.24l6 3.38zm2 0V12.62l6-3.38v6.64z',
  'i-mdi-clipboard-flow-outline': 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5zm-7-7h2v2h-2v2H9v-2H7v-2h2v-2h2z',
  'i-mdi-chart-box-outline': 'M9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2zm2 2H5V5h14zm0-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2',
  'i-mdi-radar': 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8m0-6a2 2 0 1 1 2-2 2 2 0 0 1-2 2m7.07-1L12 11.5V6h-1v6l7.78 1.56z',
  'i-mdi-domain': 'M6 3h12v2H6zm-2 4h16v2H4zm-2 4h20v10H2zm2 2v6h4v-4h4v4h4v-6z',
}

const COLOR_HEX: Record<string, string> = {
  red: '#ef4444',
  orange: '#f97316',
  amber: '#f59e0b',
  yellow: '#eab308',
  green: '#22c55e',
  teal: '#14b8a6',
  cyan: '#06b6d4',
  sky: '#0ea5e9',
  blue: '#3b82f6',
  indigo: '#6366f1',
  violet: '#8b5cf6',
  purple: '#a855f7',
  slate: '#64748b',
  gray: '#6b7280',
  neutral: '#a1a1aa',
  primary: '#3b82f6',
  success: '#22c55e',
  error: '#ef4444',
  warning: '#f59e0b',
  info: '#0ea5e9',
}

export const iconPath = (icon?: string): string =>
  (icon && ICON_PATHS[icon]) || ICON_PATHS['i-mdi-cube-outline']!

export const iconColor = (color?: string): string =>
  (color && COLOR_HEX[color]) || COLOR_HEX.neutral!
