const fs = require('fs');
const path = require('path');
const pLimit = require('p-limit').default;

const { PDF_DIR } = require('./config');
const { readPDF } = require('./services/pdfReader');
const { extractMinutes } = require('./utils/timeExtractor');

const CONCURRENCY_LIMIT = 4; // safe and reasonable number

const DEBUG = process.env.DEBUG === 'true';

function logDebug(message) {
    if (DEBUG) {
        console.log(message);
    }
}

async function processFile(file) {
    logDebug(`▶️ Start: ${file}`);

    const filePath = path.join(PDF_DIR, file);
    const text = await readPDF(filePath);
    const minutes = extractMinutes(text);

    logDebug(`⏹️ End: ${file}`);

    return {
        file,
        minutes
    };
}

async function main() {
    console.log(`🚀 Processing: ${PDF_DIR}`);

    if (!fs.existsSync(PDF_DIR)) {
        console.log('Folder not found.');
        return;
    }

    const files = fs.readdirSync(PDF_DIR).filter(file => file.endsWith('.pdf'));

    const limit = pLimit(CONCURRENCY_LIMIT);

    const tasks = files.map(file =>
        limit(() => processFile(file))
    );

    const results = await Promise.all(tasks);

    let grandTotalMinutes = 0;

    for (const { file, minutes } of results) {
        grandTotalMinutes += minutes;

        const h = Math.floor(minutes / 60);
        const m = minutes % 60;

        console.log(
            `📄 ${file}: \t ${String(h).padStart(2, '0')}h ${String(m).padStart(2, '0')}m`
        );
    }

    console.log('------------------------');

    const totalHours = Math.floor(grandTotalMinutes / 60);
    const remainingMinutes = grandTotalMinutes % 60;

    console.log(`✅ TOTAL: ${totalHours}h ${remainingMinutes}m`);
}

main();
