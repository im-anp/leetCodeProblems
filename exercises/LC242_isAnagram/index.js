function isAnagram(s, t) {
    const sChar = {};
    for(let i = 0; i < s.length; i++) {
        const key = s[i]
        sChar[key] = sChar[key] + 1 || 1
    }

    for(let i = 0; i < t.length; i++) {
        if(!sChar[t[i]]) {
            return false
        } else {
            sChar[t[i]]--;
        }
    }
    return true;
}

module.exports = isAnagram;
