const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

async function readPDF(filePath) {
    try {
        const buffer = fs.readFileSync(filePath);
        const data = await pdf(buffer);
        return data.text;
    } catch (error) {
        console.error(`❌ Error in file ${path.basename(filePath)}:`, error.message);
        return '';
    }
}

module.exports = {
    readPDF
};
