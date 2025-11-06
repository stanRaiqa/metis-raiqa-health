import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
    darkMode: ["class"],
    content: ["./app/**/*.{ts,tsx}", "./sanity/**/*.{ts,tsx}"],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1440px'
  		}
  	},
  	extend: {
  		boxShadow: {
  			layer: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
  			xs: 'var(--shadow-xs)',
  			sm: 'var(--shadow-sm)',
  			md: 'var(--shadow-md)',
  			lg: 'var(--shadow-lg)',
  			xl: 'var(--shadow-xl)',
  			'2xl': 'var(--shadow-2xl)'
  		},
		colors: {
			// Health Brand Colors - Botanical Theme
			// Original colors (no opacity support - keeps existing behavior)
			'brand-primary': 'var(--color-primary)',           // Botanic Green
			'brand-primary-light': 'var(--color-primary-light)',
			'brand-primary-dark': 'var(--color-primary-dark)',
			'brand-dark': 'var(--color-base-dark)',            // Charcoal
			'brand-light': 'var(--color-base-light)',          // White
			'brand-forest': 'var(--color-secondary-1)',        // Forest Tint
			'brand-sage': 'var(--color-secondary-2)',          // Sage Mist
			'brand-mint': 'var(--color-cta)',                  // Herbal Mint
			'brand-mint-hover': 'var(--color-cta-hover)',
			'brand-mint-active': 'var(--color-cta-active)',
			'brand-sand': 'var(--color-neutral)',              // Pale Sand
			'brand-sand-dark': 'var(--color-neutral-dark)',
			'brand-sand-light': 'var(--color-neutral-light)',
			'brand-terracotta': 'var(--color-accent)',         // Terracotta Red
			// Legacy aliases (for backward compatibility - will be deprecated)
			'brand-steel': 'var(--color-secondary-1)',
			'brand-ice': 'var(--color-secondary-2)',
			'brand-teal': 'var(--color-cta)',
			'brand-teal-hover': 'var(--color-cta-hover)',
			'brand-teal-active': 'var(--color-cta-active)',
			'brand-neutral': 'var(--color-neutral)',
			'brand-neutral-dark': 'var(--color-neutral-dark)',
			'brand-neutral-light': 'var(--color-neutral-light)',
			// RGB variants (opacity support) - use these with /10, /20, etc.
			'brand-primary-rgb': 'rgb(var(--color-primary-rgb) / <alpha-value>)',
			'brand-forest-rgb': 'rgb(var(--color-secondary-1-rgb) / <alpha-value>)',
			'brand-sage-rgb': 'rgb(var(--color-secondary-2-rgb) / <alpha-value>)',
			'brand-terracotta-rgb': 'rgb(var(--color-accent-rgb) / <alpha-value>)',
			'brand-steel-rgb': 'rgb(var(--color-secondary-1-rgb) / <alpha-value>)',  // Legacy
			'brand-ice-rgb': 'rgb(var(--color-secondary-2-rgb) / <alpha-value>)',    // Legacy
			// Status Colors
			success: 'var(--color-success)',
			warning: 'var(--color-warning)',
			error: 'var(--color-error)',
			info: 'var(--color-info)',
  			black: '#0d0e12',
  			white: '#fff',
  			cyan: {
  				'50': '#e7fefe',
  				'100': '#c5fcfc',
  				'200': '#96f8f8',
  				'300': '#62efef',
  				'400': '#18e2e2',
  				'500': '#04b8be',
  				'600': '#037782',
  				'700': '#024950',
  				'800': '#042f34',
  				'900': '#072227',
  				'950': '#0d181c'
  			},
  			gray: {
  				'50': '#f6f6f8',
  				'100': '#eeeef1',
  				'200': '#e3e4e8',
  				'300': '#bbbdc9',
  				'400': '#9499ad',
  				'500': '#727892',
  				'600': '#515870',
  				'700': '#383d51',
  				'800': '#252837',
  				'900': '#1b1d27',
  				'950': '#13141b'
  			},
  			red: {
  				'50': '#fff6f5',
  				'100': '#ffe7e5',
  				'200': '#ffdedc',
  				'300': '#fdada5',
  				'400': '#f77769',
  				'500': '#ef4434',
  				'600': '#cc2819',
  				'700': '#8b2018',
  				'800': '#4d1714',
  				'900': '#321615',
  				'950': '#1e1011'
  			},
  			orange: {
  				'50': '#fcf1e8',
  				'100': '#f9e3d2',
  				'200': '#f4c7a6',
  				'300': '#efab7a',
  				'400': '#ea8f4e',
  				'500': '#e57322',
  				'600': '#ba5f1e',
  				'700': '#8f4b1b',
  				'800': '#653818',
  				'900': '#3a2415',
  				'950': '#251a13'
  			},
  			yellow: {
  				'50': '#fefae1',
  				'100': '#fcf3bb',
  				'200': '#f9e994',
  				'300': '#f7d455',
  				'400': '#f9bc15',
  				'500': '#d28a04',
  				'600': '#965908',
  				'700': '#653a0b',
  				'800': '#3b220c',
  				'900': '#271a11',
  				'950': '#181410'
  			},
  			green: {
  				'50': '#e7f9ed',
  				'100': '#d0f4dc',
  				'200': '#a1eaba',
  				'300': '#72e097',
  				'400': '#43d675',
  				'500': '#3ab564',
  				'600': '#329454',
  				'700': '#297343',
  				'800': '#215233',
  				'900': '#183122',
  				'950': '#14211a'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			// New Design System Fonts
  			sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  			heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
  			body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  			mono: ['var(--font-space-grotesk)', 'monospace'],
  			poppins: ['var(--font-poppins)', 'sans-serif'],
  			inter: ['var(--font-inter)', 'sans-serif'],
  			'space-grotesk': ['var(--font-space-grotesk)', 'monospace']
  		},
  		fontSize: {
  			xs: 'var(--font-size-xs)',
  			sm: 'var(--font-size-sm)',
  			base: 'var(--font-size-base)',
  			lg: 'var(--font-size-lg)',
  			xl: 'var(--font-size-xl)',
  			'2xl': 'var(--font-size-2xl)',
  			'3xl': 'var(--font-size-3xl)',
  			'4xl': 'var(--font-size-4xl)',
  			'5xl': 'var(--font-size-5xl)',
  			'6xl': 'var(--font-size-6xl)',
  			'7xl': 'var(--font-size-7xl)'
  		},
  		spacing: {
  			'0': 'var(--space-0)',
  			'1': 'var(--space-1)',
  			'2': 'var(--space-2)',
  			'3': 'var(--space-3)',
  			'4': 'var(--space-4)',
  			'5': 'var(--space-5)',
  			'6': 'var(--space-6)',
  			'8': 'var(--space-8)',
  			'10': 'var(--space-10)',
  			'12': 'var(--space-12)',
  			'16': 'var(--space-16)',
  			'20': 'var(--space-20)',
  			'24': 'var(--space-24)',
  			'32': 'var(--space-32)'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideIn: {
  				'0%': {
  					transform: 'translateX(-20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			slideInRight: {
  				'0%': {
  					transform: 'translateX(20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			}
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.6s ease-out forwards',
  			'fade-in-delay-1': 'fadeIn 0.6s ease-out 0.3s forwards',
  			'fade-in-delay-2': 'fadeIn 0.6s ease-out 0.6s forwards',
  			'fade-in-delay-3': 'fadeIn 0.6s ease-out 0.9s forwards',
  			'slide-in': 'slideIn 0.8s ease-out forwards',
  			'slide-in-right': 'slideInRight 0.8s ease-out forwards',
  			'slide-up': 'slideUp 0.6s ease-out forwards'
  		},
  		borderRadius: {
  			sm: 'var(--border-radius-sm)',
  			md: 'var(--border-radius-md)',
  			lg: 'var(--border-radius-lg)',
  			xl: 'var(--border-radius-xl)',
  			'2xl': 'var(--border-radius-2xl)',
  			full: 'var(--border-radius-full)'
  		},
  		transitionDuration: {
  			fast: '150ms',
  			base: '250ms',
  			slow: '350ms',
  			slower: '500ms'
  		},
  		transitionTimingFunction: {
  			'ease-in': 'var(--ease-in)',
  			'ease-out': 'var(--ease-out)',
  			'ease-in-out': 'var(--ease-in-out)'
  		},
  		zIndex: {
  			base: '0',
  			dropdown: '1000',
  			sticky: '1020',
  			fixed: '1030',
  			'modal-backdrop': '1040',
  			modal: '1050',
  			popover: '1060',
  			tooltip: '1070'
  		}
  	}
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography, require("tailwindcss-animate")],
} satisfies Config;
