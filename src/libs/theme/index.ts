// Color name: <name>-<tone>-<opacity>
const palette = {
	'white-10-100': '#FFF',
	'shark-4-100': '#272B30',
	'shark-5-100': '#1A1D1F',
	'palesky-5-100': '#6F767E',
	'palesky-5-25': '#6F767E40',
	'melrose-5-100': '#999DFF',
	'wildsand-5-80': '#F4F4F4',
	'mantis-5-100': '#60CA57',
};

export const theme = {
	colors: {
		'font-main': palette['shark-5-100'],
		'font-secondary': palette['palesky-5-100'],
		'font-on-accent': palette['white-10-100'],
		accent: palette['melrose-5-100'],
		selection: palette['wildsand-5-80'],
		neutral: palette['palesky-5-25'],
		positive: palette['mantis-5-100'],
		background: palette['white-10-100'],
	},
	spacing: {
		s1: 4,
		s2: 8,
		s3: 16,
		s4: 22,
		s5: 28,
		s6: 34,
		s7: 40,
		s8: 46,
		s9: 52,
		s10: 58,
	},
	radius: {
		r1: 4,
		r2: 6,
	},
	font: {
		main: 'Inter',
	},
	fontSize: {
		sm: [12, 16],
		md: [14, 16],
		lg: [20, 24],
		xl: [40, 48],
	},
	fontWeight: {
		regular: '400',
		medium: '500',
		bold: '600',
	},
	breakpoints: {
		xs: 520,
		sm: 768,
		md: 1024,
		lg: 1280,
		xl: 1640,
	},
};
