import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const colors = {
	paper: '#f8f4ec',
	paperStrong: '#eee6d8',
	ink: '#1f1b16',
	muted: '#676158',
	accent: '#315b46',
	accentSoft: '#dde8df',
	rule: '#d8d0c2',
};

const ogSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
	<rect width="1200" height="630" fill="${colors.paper}" />
	<path d="M0 0h1200v630H0z" fill="none" stroke="${colors.rule}" stroke-width="2"/>
	<path d="M80 72h1040M80 558h1040" stroke="${colors.rule}" stroke-width="2"/>
	<path d="M96 92v76M96 462v76M1104 92v76M1104 462v76" stroke="${colors.rule}" stroke-width="2"/>
	<path d="M84 316h1032" stroke="${colors.rule}" stroke-width="1" stroke-dasharray="2 10"/>
	<path d="M154 132v366" stroke="${colors.accent}" stroke-width="8"/>
	<circle cx="154" cy="132" r="18" fill="${colors.accent}" />
	<circle cx="154" cy="498" r="18" fill="${colors.accentSoft}" stroke="${colors.accent}" stroke-width="3" />

	<g transform="translate(205 126)">
		<text x="0" y="0" fill="${colors.accent}" font-family="IBM Plex Mono, ui-monospace, monospace" font-size="22" font-weight="600" letter-spacing="0">
			letsbelopez
		</text>
		<text x="0" y="124" fill="${colors.ink}" font-family="Georgia, Newsreader, serif" font-size="108" font-weight="500" letter-spacing="0">
			David Lopez
		</text>
		<text x="4" y="198" fill="${colors.muted}" font-family="Instrument Sans, Arial, sans-serif" font-size="32" letter-spacing="0">
			<tspan x="4" dy="0">Reliable systems, useful explanations,</tspan>
			<tspan x="4" dy="46">family experiments, and work</tspan>
			<tspan x="4" dy="46">to live up to.</tspan>
		</text>
	</g>

	<g transform="translate(742 368)">
		<rect x="0" y="0" width="314" height="128" fill="${colors.paperStrong}" stroke="${colors.rule}" stroke-width="2"/>
		<text x="26" y="40" fill="${colors.accent}" font-family="IBM Plex Mono, ui-monospace, monospace" font-size="16" font-weight="600" letter-spacing="0">
			FIELD INDEX
		</text>
		<path d="M26 62h262" stroke="${colors.rule}" stroke-width="2"/>
		<text x="26" y="96" fill="${colors.ink}" font-family="Georgia, Newsreader, serif" font-size="27" letter-spacing="0">Build</text>
		<text x="122" y="96" fill="${colors.ink}" font-family="Georgia, Newsreader, serif" font-size="27" letter-spacing="0">Think</text>
		<text x="224" y="96" fill="${colors.ink}" font-family="Georgia, Newsreader, serif" font-size="27" letter-spacing="0">Kin</text>
	</g>

	<g fill="${colors.accent}" font-family="IBM Plex Mono, ui-monospace, monospace" font-size="16" letter-spacing="0">
		<text x="205" y="524">systems / notes / experiments / about</text>
		<text x="947" y="524">letsbelopez.com</text>
	</g>
</svg>
`;

const faviconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
	<rect width="128" height="128" rx="28" fill="${colors.ink}" />
	<path d="M24 20v88" stroke="${colors.accent}" stroke-width="10" stroke-linecap="round"/>
	<path d="M34 28h70M34 100h70" stroke="${colors.paperStrong}" stroke-width="6" stroke-linecap="round" opacity="0.28"/>
	<text x="41" y="82" fill="${colors.paper}" font-family="Georgia, Newsreader, serif" font-size="56" font-weight="700" letter-spacing="0">DL</text>
</svg>
`;

await writeFile('public/og-image.svg', ogSvg);
await sharp(Buffer.from(ogSvg)).png().toFile('public/og-image.png');

await writeFile('public/favicon.svg', faviconSvg);
await sharp(Buffer.from(faviconSvg)).resize(32, 32).png().toFile('public/favicon-32x32.png');
await sharp(Buffer.from(faviconSvg)).resize(32, 32).png().toFile('public/favicon.ico');
await sharp(Buffer.from(faviconSvg)).resize(180, 180).png().toFile('public/apple-touch-icon.png');
