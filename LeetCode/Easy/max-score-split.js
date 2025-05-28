var maxScore = function(s) {
    const n = s.length;
    let maxScore = 0;

    for (let i = 1; i < n; i++) {
        let zeros = 0;
        let ones = 0;

        for (let j = 0; j < i; j++) {
            if (s[j] === '0') zeros++;
        }

        for (let j = i; j < n; j++) {
            if (s[j] === '1') ones++;
        }

        let score = zeros + ones;
        if (score > maxScore) maxScore = score;
    }
    return maxScore;
};
