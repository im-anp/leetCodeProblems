// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
    let mapper = {};
    let start = 0;
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        const end = s[i]

        if(mapper[end] >= start) {
            start = mapper[end] + 1
        }

        mapper[end] = i;
        maxLength = Math.max(maxLength, i - start + 1)
    }

    return maxLength;
}

module.exports = lengthOfLongestSubstring;
