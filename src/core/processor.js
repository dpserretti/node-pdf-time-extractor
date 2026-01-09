const fs = require('fs');
const path = require('path');
const pLimit = require('p-limit');

const { readPDF } = require('../services/pdfReader');
const { extractMinutes } = require('../utils/timeExtractor');

function createLogger(verbose) {
    return function log(message) {
        if (verbose) {
            console.log(message);
        }
    };
}

async function processDirectory({
    directory,
    concurrency = 4,
    verbose = false
}) {
    if (!fs.existsSync(directory)) {
        throw new Error(`Directory not found: ${directory}`);
    }

    const logDebug = createLogger(verbose);

    const files = fs
        .readdirSync(directory)
        .filter(file => file.endsWith('.pdf'));

    const limit = pLimit(concurrency);

    async function processFile(file) {
        logDebug(`▶️ Start: ${file}`);

        const filePath = path.join(directory, file);
        const text = await readPDF(filePath);
        const minutes = extractMinutes(text);

        logDebug(`⏹️ End: ${file}`);

        return { file, minutes };
    }

    const tasks = files.map(file =>
        limit(() => processFile(file))
    );

    return Promise.all(tasks);
}

module.exports = {
    processDirectory
};
