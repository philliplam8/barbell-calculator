export default function getEmoji() {

    const unicodeRange = {
        start: 128513,
        end: 128591
    };
    const unicodeDifference = unicodeRange.end - unicodeRange.start;
    const RNG = Math.floor(Math.random() * unicodeDifference + unicodeRange.start);

    // Convert to Hexcode
    const hexcode = RNG.toString(16);
    return String.fromCodePoint(`0x${hexcode}`);
}