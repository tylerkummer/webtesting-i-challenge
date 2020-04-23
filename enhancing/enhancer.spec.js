const { repair, succeed, fail } = require("./enhancer.js");
// test away!

const item1 = { name: "item", durability: 50, enhancement: 10 };
const item2 = { name: "item", durability: 50, enhancement: 20 };
const item3 = { name: "item", durability: 50, enhancement: 15 };
const item4 = { name: "item", durability: 50, enhancement: 16 };
const item5 = { name: "item", durability: 50, enhancement: 16 };

describe("enhancer.js", () => {
  describe("repair", () => {
    it("test 100 durability", () => {
      expect(repair(item1).durability).toBe(100);
    });
  });

  describe("succeed", () => {
    it("test increasing enhancement by 1", () => {
      expect(succeed(item1).enhancement).toBe(11);
    });
    it("test not increasing enhancement when 20", () => {
      expect(succeed(item2).enhancement).toBe(20);
    });
    it("test not changing durability", () => {
      expect(succeed(item1).durability).toBe(50);
    });
  });

  describe("fail", () => {
    it("test if item enhancement is less than 15 durability decreases by 5", () => {
      expect(fail(item1).durability).toBe(45);
    });
    it("test if item enhancement is 15 or more durability is decreased by 10", () => {
      expect(fail(item3).durability).toBe(40);
    });
    it("test if item enhancement is 15 or more durability is decreased by 10", () => {
      expect(fail(item4).durability).toBe(40);
    });
    it("test if item's enhancement is greater than 16 then enhancement decreases by 1", () => {
      expect(fail(item5).enhancement).toBe(16);
    });
  });
});
