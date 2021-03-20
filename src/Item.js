class Item {
	constructor(itemCode, name, price) {
		this.itemCode = itemCode;
		this.name = name;
		this.price = price;
	}
	getName() {
		return this.name;
	}
	getPrice() {
		return this.price;
	}
}

module.exports = {
	Item,
};
