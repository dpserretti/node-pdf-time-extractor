const fs = require('fs');
const path = require('path');

async function readPDF(filePath, pdfParser = null) {
    try {
        const buffer = fs.readFileSync(filePath);

        const pdf = pdfParser || require('pdf-parse');
        const data = await pdf(buffer);

        return data.text;
    } catch (error) {
        console.error(`❌ Error in file ${path.basename(filePath)}:`, error.message);
        return '';
    }
}

module.exports = { readPDF };
