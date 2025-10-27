/** @type {import('tailwindcss').Config} */
// Set Preflight flag and Tailwind Typography class name based on the build target.
let includePreflight, typographyClassName;
if ('editor' === process.env._TW_TARGET) {
	includePreflight = false;
	typographyClassName = 'block-editor-block-list__layout';
} else {
	includePreflight = true;
	typographyClassName = 'prose';
}

module.exports = {
	presets: [
		// Manage Tailwind Typography's configuration in a separate file.
		require('./tailwind-typography.config.js'),
	],
	content: [
		// Ensure changes to PHP files and css files trigger a rebuild.
		'./theme/**/*.php',
    './tailwind/**/*.css',
	],
  // whitelisted tailwind classes
  safelist: [
    'inline',
    'h-full',
    'prose',
    'relative',
    'z-10',
    'pt-0',
    'pb-0',
    'py-0',
    'translate-x-(0|5|full)',
    // {
    //   pattern: /bg-(red|green|blue)-(100|200|300)/,
    //   variants: ['lg', 'hover', 'focus', 'lg:hover'],
    // },
  ],
	theme: {
		// container: {
    //   padding: {
    //     DEFAULT: '1rem',
    //     sm: '1rem',
    //     lg: '2rem',
    //     xl: '3rem',
    //   },
    //   center: true,
    // },
    fontSize: {
      xs: '.75rem',
      tiny: '.875rem',
      sm: ['.9rem', '20px'],
      base: ['1rem', '24px'],
      lg: ['1.25rem', '28px'],
      xl: ['1.4rem', '32px'],
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    lineHeight: {
      '1': '1em',
      '2': '1.2em',
      '3': '1.3em',
      '4': '1.4em',
    },
		extend: {
      colors: {
        // Colors not in the default DaisyUI color palette (see Daisyui->themes below).
        'primary-contrast': 'var(--primary-contrast)',
        'secondary-contrast': 'var(--secondary-contrast)',
        'accent-contrast': 'var(--accent-contrast)',
        danger: 'var(--danger)',
        white: '#FFFFFF',
        light: '#EBEBEB',
        dark: '#333333',
        black: '#000000',
        mid: {
          0: 'var(--mid-0)',
          100: 'var(--mid-100)',
          200: 'var(--mid-200)',
          300: 'var(--mid-300)',
          400: 'var(--mid-400)',
          500: 'var(--mid-500)',
          DEFAULT: '#A3A3A3',
          600: 'var(--mid-600)',
          700: 'var(--mid-700)',
          800: 'var(--mid-800)',
          900: 'var(--mid-900)',
          1000: 'var(--mid-1000)'
        },
        transparent: 'transparent'
      },
      boxShadow: {
        'filters': '0px 0px 3px #00000029',
      },
      aspectRatio: {
        '5/2': '5 / 2',
      },
      fontFamily: {
        sans: ['montserrat', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        icon: ['remixicon']
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '112rem',
      },
      screens: {
        mobile: { max: '768px' },
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    }
	},
	corePlugins: {
		// Disable Preflight base styles in CSS targeting the editor.
		preflight: includePreflight,
	},
  darkMode: "class",
  daisyui: {

    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          'base-100': 'FFFFFF',
          'base-content': '#333333',
          primary: '#67DCE5',
          secondary: '#FF9560',
          accent: '#535bf2',
          neutral: '#A3A3A3',
          info: '#3ABFF8',
          success: '#479f53',
          warning: '#f3cc61',
          error: '#d4302f',

          // DaisyUI Defaults are just fine for these.
          // 'base-200': '#EBEBEB', // Will be a darker tone of base-100 if not specified
          // 'base-300': '#D6D6D6', // Will be a darker tone of base-200 if not specified
          'primary-content': '#0F5257',
          'secondary-content': '#7A2900',
          // 'accent-content': '#000000',
          // 'neutral-content': '#000000',
          // 'info-content': '#000000',
          // 'success-content': '#000000',
          // 'warning-content': '#000000',
          // 'error-content': '#ffa3a5',

          /** Colors not in the default daisiUI theme colors */
          '--danger': '#d4302f',
          '--primary-contrast': '#27656a',
          '--secondary-contrast': '#aa3f07',
          '--accent-contrast': '#0b1181',
          '--mid-0': '#FFFFFF',
          '--mid-100': '#F5F5F5',
          '--mid-200': '#EBEBEB',
          '--mid-300': '#D6D6D6',
          '--mid-400': '#C2C2C2',
          '--mid-500': '#A3A3A3',
          '--mid-600': '#858585',
          '--mid-700': '#525252',
          '--mid-800': '#333333',
          '--mid-900': '#141414',
          '--mid-1000': '#000000'
        },
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          'base-100': '#333333',
          'base-content': '#EBEBEB',
          'primary-content': '#0F5257',
          'secondary-content': '#7A2900',
          primary: '#67DCE5',
          secondary: '#FF9560',
          accent: '#535bf2',
          neutral: '#A3A3A3',
          info: '#3ABFF8',
          success: '#479f53',
          warning: '#f3cc61',
          error: '#ff4d58',
          mid: '#CCCCCC',

          // DaisyUI Defaults are just fine for these.
          // 'base-200': '#EBEBEB',
          // 'base-300': '#D6D6D6',
          // 'primary-content': '#000000',
          // 'secondary-content': '#000000',
          // 'accent-content': '#FFFFFF',
          // 'neutral-content': '#FFFFFF',
          // 'info-content': '#000000',
          // 'success-content': '#000000',
          // 'warning-content': '#000000',
          // 'error-content': '#6b0002',

          /** Colors not in the default daisiUI theme colors */
          '--danger': '#ff4d58',
          '--primary-contrast': '#b6e7eb',
          '--secondary-contrast': '#f3d0be',
          '--accent-contrast': '#a4a7e4',
          '--mid-1000': '#FFFFFF',
          '--mid-900': '#F5F5F5',
          '--mid-800': '#EBEBEB',
          '--mid-700': '#D6D6D6',
          '--mid-600': '#C2C2C2',
          '--mid-500': '#A3A3A3',
          '--mid-400': '#858585',
          '--mid-300': '#525252',
          '--mid-200': '#333333',
          '--mid-100': '#141414',
          '--mid-0': '#000000'
        }
      }
    ]
  },
	plugins: [
		// Add Tailwind Typography.
		require('@tailwindcss/typography')({
			className: typographyClassName,
		}),
    require('daisyui')

		// Uncomment below to add additional first-party Tailwind plugins.
		// require( '@tailwindcss/forms' ),
		// require( '@tailwindcss/aspect-ratio' ),
		// require( '@tailwindcss/line-clamp' ),
		// require( '@tailwindcss/container-queries' ),
	],
};
