import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base Colors
        'bg-dark': '#0D0D0D',
        'text-light': '#EAEAEA',

        // Neon Theme Accents
        'neon-blue': '#00FFFF',
        'neon-pink': '#FF4DA6',
        'neon-green': '#39FF14',
        'neon-purple': '#9D00FF',
        'neon-orange': '#FF6B00',

        // UI Feedback
        success: '#00C851',
        error: '#ff4444',
        warning: '#FFBB33',
        info: '#33b5e5',

        // UI Backgrounds
        card: '#1A1A1A',
        'card-foreground': '#EAEAEA',
        sidebar: '#121212',
        'sidebar-foreground': '#CCCCCC',
        popover: '#1F1F1F',
        'popover-foreground': '#FFFFFF',

        // Buttons
        primary: '#00FFFF',
        'primary-hover': '#00cccc',
        'primary-foreground': '#0D0D0D',

        secondary: '#FF4DA6',
        'secondary-hover': '#cc3c85',
        'secondary-foreground': '#0D0D0D',

        accent: '#39FF14',
        'accent-hover': '#2ecc10',
        'accent-foreground': '#000000',

        // Forms / Borders / Inputs
        border: '#333333',
        input: '#222222',
        ring: '#00FFFF',

        // Charts / Data Colors
        'chart-1': '#FF6B00',  // Neon orange
        'chart-2': '#39FF14',  // Green
        'chart-3': '#00FFFF',  // Blue
        'chart-4': '#FF4DA6',  // Pink
        'chart-5': '#9D00FF',  // Purple
      },

      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
      },
    },
  },
  plugins: [],
};

export default config;
