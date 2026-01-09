const TIME_PATTERN = /\b([01]\d|2[0-3]):([0-5]\d)\b/g;

function extractMinutes(text) {
    const matches = text.match(TIME_PATTERN);
    if (!matches) return 0;

    return matches.reduce((total, timeStr) => {
        const [hours, minutes] = timeStr.split(':').map(Number);
        return total + (hours * 60) + minutes;
    }, 0);
}

module.exports = {
    extractMinutes
};
