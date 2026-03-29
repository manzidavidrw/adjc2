/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#1A3A0A',
          dark:    '#0D1F05',
          mid:     '#234D0E',
          light:   '#2E6012',
          mist:    '#EAF2E0',
        },
        red: {
          DEFAULT: '#D42B2B',
          dark:    '#A81E1E',
          light:   '#F03C3C',
          pale:    '#FAEAEA',
        },
        snow:  '#F5FAF0',
        white: '#FFFFFF',
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
      },
      backgroundImage: {
        'hero-mesh':
          'radial-gradient(ellipse 80% 60% at 100% 50%, rgba(212,43,43,0.18) 0%, transparent 60%), linear-gradient(160deg, #0D1F05 0%, #1A3A0A 60%, #234D0E 100%)',
      },
      keyframes: {
        ticker:    { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        fadeUp:    { '0%': { opacity: '0', transform: 'translateY(32px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeLeft:  { '0%': { opacity: '0', transform: 'translateX(-32px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        fadeRight: { '0%': { opacity: '0', transform: 'translateX(32px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        scaleIn:   { '0%': { opacity: '0', transform: 'scale(.95)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        pulse:     { '0%,100%': { opacity: '1' }, '50%': { opacity: '.4' } },
      },
      animation: {
        ticker:       'ticker 40s linear infinite',
        'fade-up':    'fadeUp .8s cubic-bezier(.16,1,.3,1) forwards',
        'fade-left':  'fadeLeft .8s cubic-bezier(.16,1,.3,1) forwards',
        'fade-right': 'fadeRight .8s cubic-bezier(.16,1,.3,1) forwards',
        'scale-in':   'scaleIn .8s cubic-bezier(.16,1,.3,1) forwards',
        pulse:        'pulse 2s ease-in-out infinite',
      },
      boxShadow: {
        'navy-lg': '0 20px 60px rgba(26,58,10,0.25)',
        'red-lg':  '0 16px 48px rgba(212,43,43,0.30)',
        'navy-sm': '0 4px 20px rgba(26,58,10,0.15)',
      },
    },
  },
  plugins: [],
}
