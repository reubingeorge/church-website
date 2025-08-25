/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'church': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        'primary': {
          50: '#f0f4ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        'accent': {
          50: '#fef3c7',
          100: '#fde68a',
          200: '#fcd34d',
          300: '#fbbf24',
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'hero-entrance': 'heroEntrance 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'title-glow': 'titleGlow 2s ease-in-out 0.5s',
        'subtitle-slide': 'subtitleSlide 1s ease-out 0.8s backwards',
        'button-pop': 'buttonPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.2s backwards',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'bounce-in': 'bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'ken-burns': 'kenBurns 20s ease-out infinite',
        'reveal-out': 'revealOut 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'text-reveal': 'textReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s backwards',
        'subtitle-reveal': 'subtitleReveal 1s ease-out 0.8s backwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out backwards',
        'shimmer-slow': 'shimmerSlow 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        heroEntrance: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9) translateY(50px)',
            filter: 'blur(10px)',
          },
          '50%': {
            filter: 'blur(3px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1) translateY(0)',
            filter: 'blur(0)',
          },
        },
        titleGlow: {
          '0%, 100%': { 
            textShadow: '0 0 20px rgba(99, 102, 241, 0)',
          },
          '50%': { 
            textShadow: '0 0 30px rgba(99, 102, 241, 0.5), 0 0 60px rgba(99, 102, 241, 0.3)',
          },
        },
        subtitleSlide: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-30px)',
            letterSpacing: '0.5em',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)',
            letterSpacing: '0.05em',
          },
        },
        buttonPop: {
          '0%': {
            opacity: '0',
            transform: 'scale(0)',
          },
          '80%': {
            transform: 'scale(1.1)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' },
        },
        slideInLeft: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        bounceIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05)',
          },
          '70%': {
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        kenBurns: {
          '0%': {
            transform: 'scale(1) translateX(0) translateY(0)',
          },
          '50%': {
            transform: 'scale(1.1) translateX(-5%) translateY(-5%)',
          },
          '100%': {
            transform: 'scale(1) translateX(0) translateY(0)',
          },
        },
        revealOut: {
          '0%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
        },
        textReveal: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        subtitleReveal: {
          '0%': {
            transform: 'translateX(-50px)',
            opacity: '0',
            letterSpacing: '1em',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
            letterSpacing: '0.2em',
          },
        },
        fadeInUp: {
          '0%': {
            transform: 'translateY(30px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        shimmerSlow: {
          '0%, 100%': {
            opacity: '0',
          },
          '50%': {
            opacity: '0.6',
          },
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0)',
          },
          '50%': { 
            transform: 'translateY(-20px)',
          },
        },
      },
    },
  },
  plugins: [],
}