const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

async function getLinks() {
  try {
    const loadingTask = pdfjsLib.getDocument('public/cv.pdf');
    const pdf = await loadingTask.promise;
    const numPages = pdf.numPages;
    for (let i = 1; i <= numPages; i++) {
      const page = await pdf.getPage(i);
      const annotations = await page.getAnnotations();
      const urls = annotations
        .filter(annot => annot.subtype === 'Link' && annot.url)
        .map(annot => ({
          title: annot.title || '',
          url: annot.url
        }));
      console.log(`Page ${i} links:`, JSON.stringify(urls, null, 2));
    }
  } catch (e) {
    console.error(e);
  }
}
getLinks();
