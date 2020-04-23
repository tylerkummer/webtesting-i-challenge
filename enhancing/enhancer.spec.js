const { repair, succeed, fail } = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe("repair", () => {
    it("test 100 durability", () => {
      expect(
        repair({ name: "item", durability: 50, enhancement: 10 }).durability
      ).toBe(100);
    });
  });

  describe("succeed", () => {
    it("test increasing enhancement by 1", () => {
      expect(
        succeed({ name: "item", durability: 50, enhancement: 10 }).enhancement
      ).toBe(11);
    });
    it("test not increasing enhancement when 20", () => {
      expect(
        succeed({ name: "item", durability: 50, enhancement: 20 }).enhancement
      ).toBe(20);
    });
    it("test not changing durability", () => {
      expect(
        succeed({ name: "item", durability: 50, enhancement: 10 }).durability
      ).toBe(50);
    });
  });

  describe("fail", () => {
    it("test if item enhancement is less than 15 durability decreases by 5", () => {
      expect(
        fail({ name: "item", durability: 50, enhancement: 10 }).durability
      ).toBe(45);
    });
    it("test if item enhancement is 15 or more durability is decreased by 10", () => {
      expect(
        fail({ name: "item", durability: 50, enhancement: 15 }).durability
      ).toBe(40);
    });
    it("test if item enhancement is 15 or more durability is decreased by 10", () => {
      expect(
        fail({ name: "item", durability: 50, enhancement: 16 }).durability
      ).toBe(40);
    });
    it("test if item's enhancement is greater than 16 then enhancement decreases by 1", () => {
      expect(
        fail({ name: "item", durability: 50, enhancement: 17 }).enhancement
      ).toBe(16);
    });
  });
});
