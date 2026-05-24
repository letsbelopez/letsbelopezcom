import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const colors = {
	paper: '#f8f4ec',
	ink: '#1f1b16',
	accent: '#315b46',
};

await sharp('public/og-image-source.png')
	.resize(1200, 630, {
		fit: 'cover',
		position: 'left',
	})
	.jpeg({ quality: 88, mozjpeg: true })
	.toFile('public/og-image.jpg');

const faviconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
	<rect width="128" height="128" rx="28" fill="${colors.paper}" />
	<text x="64" y="89" text-anchor="middle" fill="${colors.ink}" font-family="Georgia, Newsreader, serif" font-size="82" font-weight="700" letter-spacing="0">L</text>
</svg>
`;

await writeFile('public/favicon.svg', faviconSvg);
await sharp(Buffer.from(faviconSvg)).resize(32, 32).png().toFile('public/favicon-32x32.png');
await sharp(Buffer.from(faviconSvg)).resize(32, 32).png().toFile('public/favicon.ico');
await sharp(Buffer.from(faviconSvg)).resize(180, 180).png().toFile('public/apple-touch-icon.png');
