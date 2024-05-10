const {findMean, findMedian, findMode} = require("./compute");

describe("findmean", () => {
    test("find mean given valid inputs", () => {
        expect(findMean("1,3,5,7")).toBe(4);
        expect(findMean("10")).toBe(10);
        expect(findMean("6,7")).toBe(6.5);
    });

    test("find mean given valid inputs", () => {
        expect(() => {findMean("three");}).toThrow();
        expect(() => {findMean("3,2,1,go");}).toThrow();
    });
});

describe("findmedian", () => {
    test("find median given valid inputs", () => {
        expect(findMedian("999, 1, 5, 3")).toBe(4);
        expect(findMedian("10")).toBe(10);
        expect(findMedian("6,7")).toBe(6.5);
    });

    test("find median given valid inputs", () => {
        expect(() => {findMedian("three");}).toThrow();
        expect(() => {findMedian("3,2,1,go");}).toThrow();
    });
});

describe("findmode", () => {
    test("find mode given valid inputs", () => {
        expect(findMode("1,3,5,3,3,5,7")).toEqual([3]);
        expect(findMode("10")).toEqual([10]);
        expect(findMode("6,6,7,7,11")).toEqual([6, 7]);
    });

    test("find mode given valid inputs", () => {
        expect(() => {findMode("three");}).toThrow();
        expect(() => {findMode("3,2,1,go");}).toThrow();
    });
});
