module.exports = {
  theme: {
    extend: {
      colors: {
        neonCyan: '#00FFFF',
        neonBlue: '#0000FF',
        neonPurple: '#800080',
        neonPink: '#FF0099',
      },
      animation: {
        'pulse-neon': 'pulse 1s infinite',
        'bounce-neon': 'bounce 2s infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20%)' },
        },
      },
    },
  },
  plugins: [],
};