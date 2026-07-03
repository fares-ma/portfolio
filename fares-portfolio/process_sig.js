const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

const photoDir = path.join(__dirname, '../Photos');
const outDir = path.join(__dirname, 'public/images');

async function processSignature() {
  const files = fs.readdirSync(photoDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));
  
  for (const file of files) {
    const filePath = path.join(photoDir, file);
    try {
      const image = await Jimp.read(filePath);
      
      // Check if it's mostly white to identify the signature
      let whiteCount = 0;
      let totalCount = image.bitmap.width * image.bitmap.height;
      
      // Simple sampling
      for(let x=0; x<image.bitmap.width; x+=10) {
        for(let y=0; y<image.bitmap.height; y+=10) {
          const color = image.getPixelColor(x, y);
          const r = (color >> 24) & 255;
          const g = (color >> 16) & 255;
          const b = (color >> 8) & 255;
          if (r > 200 && g > 200 && b > 200) whiteCount++;
        }
      }
      
      if (whiteCount / (totalCount/100) > 0.6) {
        console.log("Found signature:", file);
        
        // Process
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
          const r = this.bitmap.data[idx + 0];
          const g = this.bitmap.data[idx + 1];
          const b = this.bitmap.data[idx + 2];
          
          const avg = (r + g + b) / 3;
          
          if (avg < 150) {
            // Ink -> Make it white
            this.bitmap.data[idx + 0] = 255;
            this.bitmap.data[idx + 1] = 255;
            this.bitmap.data[idx + 2] = 255;
            this.bitmap.data[idx + 3] = 255 - avg; // Anti-aliasing
          } else {
            // Background -> Make it transparent
            this.bitmap.data[idx + 0] = 255;
            this.bitmap.data[idx + 1] = 255;
            this.bitmap.data[idx + 2] = 255;
            this.bitmap.data[idx + 3] = 0;
          }
        });
        
        const outPath = path.join(outDir, 'signature.png');
        await image.write(outPath);
        console.log("Saved to", outPath);
        break;
      }
    } catch (e) {
      console.error(e);
    }
  }
}

processSignature();
