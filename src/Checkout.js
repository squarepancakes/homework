const { Item } = require("./Item");

const itemsList = [
	{
		itemCode: "001",
		name: "Travel Card Holder",
		price: 9,
	},
	{
		itemCode: "002",
		name: "Personalised cufflinks",
		price: 45,
	},
	{
		itemCode: "003",
		name: "Kids T-shirt",
		price: 19,
	},
];

class Checkout {
	constructor() {
		this.expectedTotal = 0;
		this.availableItems = [];
	}

	totalExpected(itemsInCart = []) {
		this.resetRegister();
		itemsInCart.forEach((item) => {
			this.addItemPrice(item);
		});
		return `Total price expected: $${this.expectedTotal}`;
	}

	addItemPrice(itemCode) {
		const purchasedItem = this.findItem(itemCode);
		this.expectedTotal += purchasedItem.price;
	}

	findItem(itemCode) {
		return this.availableItems.find((item) => item.itemCode === itemCode);
	}

	resetRegister() {
		this.expectedTotal = 0;
		itemsList.forEach((item) => {
			this.availableItems.push(new Item(item.itemCode, item.name, item.price));
		});
	}
}

module.exports = {
	Checkout,
};
