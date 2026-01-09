const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const PDF_DIR = './documents';
const TIME_PATTERN = /(\d{2}:\d{2})/g;

async function readPDF(filePath) {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const data = await pdf(dataBuffer);
        return data.text;
    } catch (error) {
        console.error(`❌ Error in file ${path.basename(filePath)}:`, error.message);
        return '';
    }
}

function extractMinutes(text) {
    const matches = text.match(TIME_PATTERN);
    if (!matches) return 0;

    return matches.reduce((total, timeStr) => {
        const [hours, minutes] = timeStr.split(':').map(Number);
        return total + (hours * 60) + minutes;
    }, 0);
}

async function main() {
    console.log(`🚀 Processing: ${PDF_DIR}`);

    if (!fs.existsSync(PDF_DIR)) {
        console.log("Folder not found.");
        return;
    }

    const files = fs.readdirSync(PDF_DIR).filter(file => file.endsWith('.pdf'));
    let grandTotalMinutes = 0;

    for (const file of files) {
        const filePath = path.join(PDF_DIR, file);
        const text = await readPDF(filePath);
        const fileMinutes = extractMinutes(text);

        grandTotalMinutes += fileMinutes;

        const h = Math.floor(fileMinutes / 60);
        const m = fileMinutes % 60;
        console.log(`📄 ${file}: \t ${String(h).padStart(2, '0')}h ${String(m).padStart(2, '0')}m`);
    }

    const totalHours = Math.floor(grandTotalMinutes / 60);
    const remainingMinutes = grandTotalMinutes % 60;

    console.log('------------------------');
    console.log(`✅ TOTAL: ${totalHours}h ${remainingMinutes}m`);
}

main();