const plugin = require('tailwindcss/plugin');

const wickedcssPlugin = plugin(({ addUtilities }) => {
  const utilities = {};
  const keyframes = {};

  const wickedcss = {
    'barrel-roll': {
      utilities: 'barrelroll 0.4s ease 1',
      keyframes: {
        from: { transform: 'rotate(0)' },
        to: { transform: 'rotate(360deg)' },
      },
    },
    'bounce-in': {
      utilities: 'bouncein 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)',
      keyframes: {
        '0%': {
          opacity: '0',
          transform: 'scale3d(0.3, 0.3, 0.3)',
        },
        '20%': { transform: 'scale3d(1.1, 1.1, 1.1)' },
        '40%': { transform: 'scale3d(0.9, 0.9, 0.9)' },
        '60%': {
          opacity: '1',
          transform: 'scale3d(1.03, 1.03, 1.03)',
        },
        '80%': { transform: 'scale3d(0.97, 0.97, 0.97)' },
        '100%': {
          opacity: '1',
          transform: 'scale3d(1, 1, 1)',
        },
      },
    },
    'fade-in': {
      utilities: 'fadein 2s ease',
      keyframes: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
    'fade-out': {
      utilities: 'fadeout 2s ease forwards',
      keyframes: {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
    },
    floater: {
      utilities: 'floater 1.5s infinite',
      keyframes: {
        '0%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(8%)' },
        '100%': { transform: 'translateY(0)' },
      },
    },
    heartbeat: {
      utilities: 'heartbeat 3s ease infinite',
      keyframes: {
        '0%': { transform: 'scale(1)' },
        '10%': { transform: 'scale(1.2)' },
        '20%': { transform: 'scale(1.4)' },
        '100%': { transform: 'scale(1)' },
      },
    },
    pound: {
      utilities: 'pound 0.5s ease infinite',
      keyframes: {
        to: { transform: 'scale(1.2)' },
      },
    },
    pulse: {
      utilities: 'pulse 2s linear infinite',
      keyframes: {
        '0%': {
          transform: 'scale(0.9)',
          opacity: '0.9',
        },
        '50%': {
          transform: 'scale(1)',
          opacity: '1',
        },
        '100%': {
          transform: 'scale(0.9)',
          opacity: '0.9',
        },
      },
    },
    'roller-left': {
      utilities: 'rollerleft 2s ease 1 forwards',
      keyframes: {
        '0%': {
          transform: 'translateX(200px) rotate(0)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateX(0) rotate(-2turn)',
          opacity: '1',
        },
      },
    },
    'roller-right': {
      utilities: 'rollerright 2s ease 1 forwards',
      keyframes: {
        '0%': {
          transform: 'translateX(-200px) rotate(0)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateX(0) rotate(2turn)',
          opacity: '1',
        },
      },
    },
    'rotate-in': {
      utilities: 'rotatein 3s ease 1',
      keyframes: {
        '0%': {
          transform: 'rotate3d(0, 0, 1, -720deg)',
          opacity: '0',
        },
        '100%': {
          transform: 'none',
          opacity: '1',
        },
      },
    },
    'rotate-in-left': {
      utilities: 'rotateinleft 3s ease-in-out 1',
      keyframes: {
        from: { transform: 'rotate(0) translateX(-100%) rotate(0)' },
        to: { transform: 'rotate(360deg) translateX(0) rotate(-360deg)' },
      },
    },
    'rotate-in-right': {
      utilities: 'rotateinright 3s ease-in-out 1',
      keyframes: {
        from: { transform: 'rotate(0) translateX(100%) rotate(0)' },
        to: { transform: 'rotate(360deg) translateX(0) rotate(-360deg)' },
      },
    },
    rotation: {
      utilities: 'rotation 4s linear infinite',
      keyframes: {
        from: { transform: 'rotate(0) translateX(50%) rotate(0)' },
        to: { transform: 'rotate(360deg) translateX(50%) rotate(-360deg)' },
      },
    },
    shake: {
      utilities: 'shake 0.4s ease 1',
      keyframes: {
        '0%': { transform: 'translateX(0)' },
        '16%': { transform: 'translateX(-10px)' },
        '33%': { transform: 'translateX(10px)' },
        '50%': { transform: 'translateX(-10px)' },
        '66%': { transform: 'translateX(10px)' },
        '83%': { transform: 'translateX(-10px)' },
        '100%': { transform: 'translateX(0)' },
      },
    },
    'side-to-side': {
      utilities: 'sidetoside 3s ease infinite',
      keyframes: {
        '0%': { transform: 'translate(100%, 0)' },
        '50%': { transform: 'translate(-100%, 0)' },
        '100%': { transform: 'translate(100%, 0)' },
      },
    },
    'slide-down': {
      utilities: 'slidedown 1s ease',
      keyframes: {
        '0%': {
          transform: 'translateY(-100%)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateY(0)',
          opacity: '1',
        },
      },
    },
    'slide-left': {
      utilities: 'slideleft 1s ease',
      keyframes: {
        '0%': {
          transform: 'translateX(150%)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateX(0)',
          opacity: '1',
        },
      },
    },
    'slide-right': {
      utilities: 'slideright 1s ease',
      keyframes: {
        '0%': {
          transform: 'translateX(-150%)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateX(0)',
          opacity: '1',
        },
      },
    },
    'slide-up': {
      utilities: 'slideup 1s ease',
      keyframes: {
        '0%': {
          transform: 'translateY(100%)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateY(0)',
          opacity: '1',
        },
      },
    },
    spinner: {
      utilities: 'spinner 2s linear infinite',
      keyframes: {
        from: { transform: 'rotate(0)' },
        to: { transform: 'rotate(360deg)' },
      },
    },
    wiggle: {
      utilities: 'wiggle 2.5s infinite',
      keyframes: {
        '0%': { transform: 'rotate(-4deg)' },
        '50%': { transform: 'rotate(4deg)' },
        '100%': { transform: 'rotate(-4deg)' },
      },
    },
    zoomer: {
      utilities: 'zoomer 1s cubic-bezier(0.5, 0.2, 0.3, 1) 1',
      keyframes: {
        '0%': { transform: 'scale(0.3)' },
        '100%': { transform: 'scale(1)' },
      },
    },
    'zoomer-out': {
      utilities: 'zoomerout 1s cubic-bezier(0.5, 0.2, 0.3, 1) 1 forwards',
      keyframes: {
        '0%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(0)' },
      },
    },
  };

  Object.keys(wickedcss).forEach((key) => {
    utilities[`.animate-${key}`] = {
      animation: wickedcss[key].utilities,
    };
    keyframes[`@keyframes ${key.split('-').join('')}`] = wickedcss[key].keyframes;
  });

  addUtilities(keyframes);
  addUtilities(utilities, ['responsive', 'hover']);
});

module.exports = wickedcssPlugin;
