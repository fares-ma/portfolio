const fs = require('fs');
const path = require('path');

const pdfPath = path.join(__dirname, 'public/cv.pdf');
const buffer = fs.readFileSync(pdfPath);

// Look for ASCII strings starting with http or https
const pdfText = buffer.toString('ascii');
const regex = /https?:\/\/[^\s\)\>\]\}]+/g;
const matches = pdfText.match(regex) || [];

console.log("Found matches:");
console.log(Array.from(new Set(matches)));
