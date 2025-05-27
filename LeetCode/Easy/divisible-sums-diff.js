var differenceOfSums = function(n, m) {
    const Sum = ( n * ( n + 1 )) / 2;
    const Count = Math.floor(n / m);
    const SumCount = m * ( Count * ( Count + 1 )) / 2;
    return Sum - 2 * SumCount; 
};
