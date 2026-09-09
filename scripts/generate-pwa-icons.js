import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve(process.cwd(), 'public');
const iconsDir = path.join(publicDir, 'icons');
const svgPath = path.join(publicDir, 'icon.svg');

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

const svgBuffer = fs.readFileSync(svgPath);

async function generateIcons() {
  console.log('Generating PWA icons from', svgPath);

  // Standard sizes
  const sizes = [
    { name: 'icon-192x192.png', size: 192, maskable: false },
    { name: 'icon-512x512.png', size: 512, maskable: false },
    { name: 'icon-384x384.png', size: 384, maskable: false },
    { name: 'apple-touch-icon.png', size: 180, maskable: false },
    { name: 'favicon-32x32.png', size: 32, maskable: false },
    { name: 'favicon-16x16.png', size: 16, maskable: false },
  ];

  for (const item of sizes) {
    const dest = path.join(iconsDir, item.name);
    await sharp(svgBuffer)
      .resize(item.size, item.size)
      .png()
      .toFile(dest);
    console.log(`✓ Created ${item.name} (${item.size}x${item.size})`);
  }

  // Maskable icons (requires ~10-15% padding safe zone so adaptive icons don't clip the emblem)
  const maskableSizes = [
    { name: 'icon-maskable-192x192.png', size: 192, emblemSize: 154 },
    { name: 'icon-maskable-512x512.png', size: 512, emblemSize: 410 },
  ];

  for (const item of maskableSizes) {
    const dest = path.join(iconsDir, item.name);
    const innerEmblem = await sharp(svgBuffer)
      .resize(item.emblemSize, item.emblemSize)
      .png()
      .toBuffer();

    const padding = Math.floor((item.size - item.emblemSize) / 2);

    await sharp({
      create: {
        width: item.size,
        height: item.size,
        channels: 4,
        background: { r: 38, g: 5, b: 15, alpha: 1 }, // #26050f
      },
    })
      .composite([
        {
          input: innerEmblem,
          top: padding,
          left: padding,
        },
      ])
      .png()
      .toFile(dest);
    console.log(`✓ Created maskable ${item.name} (${item.size}x${item.size})`);
  }

  console.log('All PWA icons successfully generated in', iconsDir);
}

generateIcons().catch((err) => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
