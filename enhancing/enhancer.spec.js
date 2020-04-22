const enhancer = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe("repair", () => {
    it("test 100 durability", () => {
      const itemObject = { name: "item", enhancement: 10, durability: 50 };
      const repairObject = enhancer.repair(itemObject);
      expect(repairObject.durability).toBe(100);
    });
  });

  describe("succeed", () => {
    it("test increasing enhancement by 1", () => {
      const itemObject = { name: "item", enhancement: 10, durability: 50 };
      const succeedObject = enhancer.succeed(itemObject);
      expect(succeedObject.enhancement).toBe(11);
    });
    it("test not increasing enhancement when 20", () => {
      const itemObject = { name: "item", enhancement: 20, durability: 50 };
      const succeedObject = enhancer.succeed(itemObject);
      expect(succeedObject.enhancement).toBe(20);
    });
    it("test not changing name and durability", () => {
      const itemObject = { name: "item", enhancement: 10, durability: 50 };
      const succeedObject = enhancer.succeed(itemObject);
      expect(succeedObject.name).toBe("item");
      expect(succeedObject.durability).toBe(50);
    });
  });

  describe("fail", () => {
    it("test if item enhancement is less than 15 durability decreases by 5", () => {
      const itemObject = { name: "item", enhancement: 10, durability: 50 };
      const failObject = enhancer.fail(itemObject);
      expect(failObject.durability).toBe(45);
    });
    it("test if item enhancement is 15 or more durability is decreased by 10", () => {
      const itemObject = { name: "item", enhancement: 15, durability: 50 };
      const failObject = enhancer.fail(itemObject);
      expect(failObject.durability).toBe(40);
    });
    it("test if item enhancement is 15 or more durability is decreased by 10", () => {
      const itemObject = { name: "item", enhancement: 16, durability: 50 };
      const failObject = enhancer.fail(itemObject);
      expect(failObject.durability).toBe(40);
    });
    it("test if item's enhancement is greater than 16 then enhancement decreases by 1", () => {
      const itemObject = { name: "item", enhancement: 17, durability: 50 };
      const failObject = enhancer.fail(itemObject);
      expect(failObject.enhancement).toBe(16);
    });
  });
});
