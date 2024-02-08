function fibonacci(num) {
// your code here
	if (num <= 0) {
        return "Invalid input";
    } else if (num === 1) {
        return 0;
    }

    let fibPrev = 0;
    let fibCurrent = 1;
    let fibNext;

    for (let i = 2; i < num; i++) {
        fibNext = fibPrev + fibCurrent;
        fibPrev = fibCurrent;
        fibCurrent = fibNext;
    }

    return fibNext;
}

module.exports = fibonacci;
