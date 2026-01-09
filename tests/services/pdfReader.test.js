const fs = require('fs');
const { readPDF } = require('../../src/services/pdfReader');

describe('readPDF', () => {
    let consoleSpy;

    beforeEach(() => {
        jest.spyOn(fs, 'readFileSync').mockImplementation(() => Buffer.from('fake'));
        consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('returns extracted text from PDF', async () => {
        const fakePdfParser = jest.fn().mockResolvedValue({
            text: 'Backend: 01:00'
        });

        const text = await readPDF('fake.pdf', fakePdfParser);
        expect(text).toContain('01:00');
    });

    test('returns empty string on error', async () => {
        fs.readFileSync.mockImplementationOnce(() => {
            throw new Error('FS error');
        });

        const fakePdfParser = jest.fn();
        const text = await readPDF('broken.pdf', fakePdfParser);

        expect(text).toBe('');
        expect(consoleSpy).toHaveBeenCalled();
    });
});
