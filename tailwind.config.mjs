/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Design tokens — best-effort read of the reference site's deep
        // navy / ocean / teal palette (see DESIGN_TOKENS.md). Confirm these
        // hex values against the live site before Phase 2 and adjust if off.
        navy: {
          950: '#081826', // deepest — footer bg
          900: '#0B2036', // header bg (scrolled / mobile menu)
          800: '#123048', // header bg (top), dark section bg
        },
        ocean: {
          600: '#0F5C8C', // primary brand blue — buttons, links
          500: '#1670A8', // hover state
        },
        teal: {
          500: '#1FA9A0', // accent — badges, icon accents, focus rings
          400: '#38BDB2',
        },
        sand: {
          100: '#F5F2EA', // light neutral section background
          50: '#FBFAF6',
        },
      },
      fontFamily: {
        display: ['"Montserrat"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      spacing: {
        section: '5rem', // 80px desktop section rhythm
        'section-sm': '3rem', // 48px mobile section rhythm
      },
      keyframes: {
        // Note: the trust-bar/sponsor marquee uses its own self-contained
        // scoped CSS in Marquee.astro, not these utilities — kept isolated
        // from Tailwind's arbitrary-value parsing for reliability.
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        kenburns: 'kenburns 18s ease-out forwards',
      },
    },
  },
  plugins: [],
};
