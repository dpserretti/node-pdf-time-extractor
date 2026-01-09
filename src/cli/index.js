#!/usr/bin/env node

const { program } = require('commander');
const path = require('path');

const { processDirectory } = require('../core/processor');

program
    .name('pdf-time-extractor')
    .description('Extract and aggregate time entries from PDF reports')
    .version('1.0.0')
    .argument('[directory]', 'directory containing PDF files', 'documents')
    .option('-c, --concurrency <number>', 'number of parallel workers', '4')
    .option('-v, --verbose', 'enable debug output')
    .action(async (directory, options) => {
        const targetDir = path.resolve(process.cwd(), directory);
        const concurrency = Number(options.concurrency);
        const verbose = Boolean(options.verbose);

        try {
            const results = await processDirectory({
                directory: targetDir,
                concurrency,
                verbose
            });

            let total = 0;

            for (const { file, minutes } of results) {
                total += minutes;
                const h = Math.floor(minutes / 60);
                const m = minutes % 60;

                console.log(
                    `📄 ${file}: ${String(h).padStart(2, '0')}h ${String(m).padStart(2, '0')}m`
                );
            }

            console.log('------------------------');
            console.log(`✅ TOTAL: ${Math.floor(total / 60)}h ${total % 60}m`);
        } catch (err) {
            console.error('❌ Error:', err.message);
            process.exit(1);
        }
    });

program.parse();
