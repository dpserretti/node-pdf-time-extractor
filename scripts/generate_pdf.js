const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const outputDir = path.join(__dirname, '..', 'documents');
const outputFile = path.join(outputDir, 'example_report.pdf');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

const doc = new PDFDocument();

const stream = fs.createWriteStream(outputFile);
doc.pipe(stream);

// REAL PDF content
doc.fontSize(18).text('Hours Report', { align: 'center' });
doc.moveDown();

doc.fontSize(12).text('Date: 2025-10-30');
doc.moveDown();

doc.text('Backend: 03:45');
doc.text('Frontend: 01:15');

doc.end();

stream.on('finish', () => {
    console.log(`✅ Valid PDF generated at: ${outputFile}`);
});
