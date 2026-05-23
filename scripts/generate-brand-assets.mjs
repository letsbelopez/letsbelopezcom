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
	<path d="M112 80h976M112 550h976" stroke="${colors.rule}" stroke-width="2"/>
	<path d="M132 103v72M132 455v72M1068 103v72M1068 455v72" stroke="${colors.rule}" stroke-width="2"/>
	<path d="M600 142v346" stroke="${colors.rule}" stroke-width="2" stroke-dasharray="2 12"/>

	<g transform="translate(255 162)">
		<path d="M0 52h690" stroke="${colors.accent}" stroke-width="7" stroke-linecap="round"/>

		<g transform="translate(0 0)">
			<rect x="0" y="0" width="190" height="300" rx="2" fill="${colors.paperStrong}" stroke="${colors.rule}" stroke-width="2"/>
			<path d="M24 38h142M24 262h142" stroke="${colors.rule}" stroke-width="2"/>
			<circle cx="95" cy="52" r="17" fill="${colors.accent}" />
			<text x="95" y="190" text-anchor="middle" fill="${colors.ink}" font-family="Georgia, Newsreader, serif" font-size="132" font-weight="600" letter-spacing="0">B</text>
			<text x="95" y="238" text-anchor="middle" fill="${colors.accent}" font-family="IBM Plex Mono, ui-monospace, monospace" font-size="18" font-weight="600" letter-spacing="0">BUILD</text>
		</g>

		<g transform="translate(250 0)">
			<rect x="0" y="0" width="190" height="300" rx="2" fill="${colors.paper}" stroke="${colors.rule}" stroke-width="2"/>
			<path d="M24 38h142M24 262h142" stroke="${colors.rule}" stroke-width="2"/>
			<circle cx="95" cy="52" r="17" fill="${colors.accentSoft}" stroke="${colors.accent}" stroke-width="3" />
			<text x="95" y="190" text-anchor="middle" fill="${colors.ink}" font-family="Georgia, Newsreader, serif" font-size="132" font-weight="600" letter-spacing="0">T</text>
			<text x="95" y="238" text-anchor="middle" fill="${colors.accent}" font-family="IBM Plex Mono, ui-monospace, monospace" font-size="18" font-weight="600" letter-spacing="0">THINK</text>
		</g>

		<g transform="translate(500 0)">
			<rect x="0" y="0" width="190" height="300" rx="2" fill="${colors.paperStrong}" stroke="${colors.rule}" stroke-width="2"/>
			<path d="M24 38h142M24 262h142" stroke="${colors.rule}" stroke-width="2"/>
			<circle cx="95" cy="52" r="17" fill="${colors.accent}" />
			<text x="95" y="190" text-anchor="middle" fill="${colors.ink}" font-family="Georgia, Newsreader, serif" font-size="132" font-weight="600" letter-spacing="0">K</text>
			<text x="95" y="238" text-anchor="middle" fill="${colors.accent}" font-family="IBM Plex Mono, ui-monospace, monospace" font-size="18" font-weight="600" letter-spacing="0">KIN</text>
		</g>
	</g>

	<text x="600" y="514" text-anchor="middle" fill="${colors.muted}" font-family="IBM Plex Mono, ui-monospace, monospace" font-size="17" letter-spacing="0">letsbelopez.com</text>
</svg>
`;

const faviconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
	<rect width="128" height="128" rx="26" fill="${colors.paper}" />
	<path d="M31 26v76" stroke="${colors.accent}" stroke-width="10" stroke-linecap="round"/>
	<text x="51" y="86" fill="${colors.ink}" font-family="Georgia, Newsreader, serif" font-size="76" font-weight="700" letter-spacing="0">L</text>
</svg>
`;

await writeFile('public/og-image.svg', ogSvg);
await sharp(Buffer.from(ogSvg)).png().toFile('public/og-image.png');

await writeFile('public/favicon.svg', faviconSvg);
await sharp(Buffer.from(faviconSvg)).resize(32, 32).png().toFile('public/favicon-32x32.png');
await sharp(Buffer.from(faviconSvg)).resize(32, 32).png().toFile('public/favicon.ico');
await sharp(Buffer.from(faviconSvg)).resize(180, 180).png().toFile('public/apple-touch-icon.png');
