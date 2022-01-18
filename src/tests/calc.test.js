const request = require("supertest");
const calcService = require("../service/calcService");


describe("Test 1", () => {
    test("2*3-2", async () => {
        const result = await calcService.calc("2*3-2");
        expect(result).toBe(4);
    });
});

describe("Test 2", () => {
    test("2*(3-2)", async () => {
        const result = await calcService.calc("2*(3-2)");
        expect(result).toBe(2);
    });
});

