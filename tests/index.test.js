const { Checkout } = require("../src/index");

describe("Checkout", () => {
	beforeEach(() => {
		checkout = new Checkout();
	});

	it("should return 0 if there is nothing checked out", () => {
		expect(checkout.totalExpected()).toEqual("Total price expected: $0");
	});

	it("should return price of item", () => {
		expect(checkout.totalExpected(["001", "002"])).toEqual(
			"Total price expected: $54"
		);
	});

	it("should clear the register after each entry", () => {
		expect(checkout.totalExpected(["001"])).toEqual("Total price expected: $9");
		expect(checkout.totalExpected(["001", "002"])).toEqual(
			"Total price expected: $54"
		);
	});
});
