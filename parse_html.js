const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\Rocket\\.gemini\\antigravity-ide\\brain\\1c0e1135-9ed9-4c74-b66d-de87a1372707\\.system_generated\\steps\\386\\content.md', 'utf8');
const regex = /<section[^>]*id="experience"[^>]*>([\s\S]*?)<\/section>/;
const match = regex.exec(content);
if (match) {
  fs.writeFileSync('C:\\Users\\Rocket\\OneDrive\\Desktop\\portfolio\\experience.html', match[0]);
} else {
  console.log("No experience section match found");
}
