const { extractMinutes } = require('../../src/utils/timeExtractor');

describe('extractMinutes', () => {
    test('returns 0 when no time patterns are found', () => {
        const text = 'No time data here';
        expect(extractMinutes(text)).toBe(0);
    });

    test('extracts a single HH:MM value correctly', () => {
        const text = 'Backend: 01:30';
        expect(extractMinutes(text)).toBe(90);
    });

    test('extracts multiple HH:MM values and sums them', () => {
        const text = 'Backend: 02:15 Frontend: 01:45';
        expect(extractMinutes(text)).toBe(240);
    });

    test('ignores invalid time patterns', () => {
        const text = 'Invalid: 99:99 Valid: 03:00';
        expect(extractMinutes(text)).toBe(180);
    });
});
