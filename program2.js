const decodeTheRing = function (s, p) 

  function decodeTheRing(input, pattern) {
    let i = 0, j = 0;

    while (i < input.length && j < pattern.length) {
        if (pattern[j] === '*') {
            j++;
            if (j === pattern.length) return true; // '*' at the end matches any suffix
            while (i < input.length && input[i] !== pattern[j]) {
                i++;
            }
        } else if (pattern[j] !== input[i]) {
            return false;
        } else {
            i++;
            j++;
        }
    }

    // If we reached the end of both strings, it's a match
    return i === input.length && j === pattern.length;
}

module.exports = decodeTheRing;


  