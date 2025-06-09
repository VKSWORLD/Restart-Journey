/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let countS = 0;
    let countT = 0;
    for(const c of t){
        countT += c.charCodeAt(0);
    }
    for(const c of s){
        countS += c.charCodeAt(0);
    }
    let diff = countT - countS;
    return String.fromCharCode(diff);
};