import { transform } from 'next/dist/build/swc/generated-native';
import type { Config } from 'tailwindcss';

export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground':
						'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground':
						'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))',
				},
			},
			fontFamily: {
				imfell: ['IM Fell DW Pica SC', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				flash: {
					'0%, 50%, 100%': {
						opacity: '1',
					},
					'25%, 75%': {
						opacity: '0.5',
					},
				},
				pulse: {
					'0%, 100%': {
						transform: '',
					},
				},
				fadeIn: {
					'0%': {
						opacity: '0',
						transform: 'translateY(12px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0px)',
					},
				},
				'accordion-down': {
					from: {
						height: '0',
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
					},
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
					},
					to: {
						height: '0',
					},
				},
				pulse2: {
					'0%, 50%, 100%': {
						transform: 'translateY(2px)',
					},
					'25%, 75%': {
						transform: 'translateY(-2px)',
					},
				},
				pulseFlash: {
					'0%, 50%, 100%': {
						transform: 'translateY(2px)',
						opacity: '1',
					},
					'25%, 75%': {
						transform: 'translateY(-2px)',
						opacity: '0.5',
					},
				},
			},
			animation: {
				pulse: '2s ease-in',
				fadeIn: 'fadeIn 1s ease-in',
				fadeIn2: 'fadeIn 3s ease-in',
				'accordion-down':
					'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				flash: 'flash ease-in-out 0.75s 1.50',
				pulse2: 'pulse2 ease-in-out 0.75s 1.50',
				pulseFlash: 'pulseFlash ease-in-out 0.75s 1.50 ',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config;
