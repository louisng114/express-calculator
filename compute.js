const ExpressError = require("./expressError");

const findMean = (str, next) => {
    const numsStrArr = [...str.split(",")];
    const numsArr = numsStrArr.map((val) => {
        if (isNaN(val)) {
            const error = new ExpressError(`${val} is not a number!`, 400);
            return next(error);
        }
        return Number(val);
    })
    const mean = numsArr.reduce((acc, curr) => acc += curr, 0) / numsArr.length;
    return mean;
};

const findMedian = (str) => {
    const numsStrArr = [...str.split(",")];
    const numsArr = numsStrArr.map((val) => {
        if (isNaN(val)) {
            const error = new ExpressError(`${val} is not a number!`, 400);
            return next(error);
        }
        return Number(val);
    })
    numsArr.sort((a, b) => a - b);
    const median = (numsArr[Math.floor((numsArr.length - 1) / 2)]
                + numsArr[Math.ceil((numsArr.length - 1) / 2)]) / 2;
    return median;
};

const findMode = (str) => {
    const numsStrArr = [...str.split(",")];
    const numsArr = numsStrArr.map((val) => {
        if (isNaN(val)) {
            const error = new ExpressError(`${val} is not a number!`, 400);
            return next(error);
        }
        return Number(val);
    })
    const numsSet = new Set(numsArr);
    const frequency = {};
    for (let num of numsSet) {
        frequency[num] = 0;
    }
    for (let num of numsArr) {
        frequency[num]++;
    }
    const maxFrequency = Math.max(...Object.values(frequency));
    const mode = Object.keys(frequency).filter(num => {
        return frequency[num] == maxFrequency;
    }).map((num) => Number(num));
    return mode;
};

module.exports = {findMean, findMedian, findMode}