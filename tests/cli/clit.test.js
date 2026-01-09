const { execFile } = require('child_process');
const path = require('path');

const CLI_PATH = path.resolve(__dirname, '../../src/cli/index.js');

function runCLI(args = []) {
    return new Promise((resolve) => {
        execFile(
            'node',
            [CLI_PATH, ...args],
            { env: process.env },
            (error, stdout, stderr) => {
                resolve({
                    code: error?.code ?? 0,
                    stdout,
                    stderr
                });
            }
        );
    });
}

describe('CLI', () => {
    test('shows help message', async () => {
        const result = await runCLI(['--help']);

        expect(result.stdout).toContain('Usage');
        expect(result.code).toBe(0);
    });

    test('shows version', async () => {
        const result = await runCLI(['--version']);

        expect(result.stdout).toMatch(/\d+\.\d+\.\d+/);
        expect(result.code).toBe(0);
    });

    test('fails with non-existent directory', async () => {
        const result = await runCLI(['./this-directory-does-not-exist']);

        expect(result.stderr).toContain('Directory not found');
        expect(result.code).toBe(1);
    });
});
