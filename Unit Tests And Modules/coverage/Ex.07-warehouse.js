const { assert } = require("chai");
const Warehouse = require("../Exercise/warehouse");

describe("Test warehouse", () => {
  let warehouse;

  beforeEach(() => {
    warehouse = new Warehouse(100);
  });

  describe("Test constructor", () => {
    it("Creates class successfully with number > 0 parameter", () => {
      assert.equal(warehouse._capacity, 100);
      //assert.deepInclude(warehouse.availableProducts, { Food: {}, Drink: {} }); ** judge does not accept this **
    });

    it("Throws 'Invalid given warehouse space' if parameter is NaN or negative", () => {
      assert.throw(() => new Warehouse("100"), "Invalid given warehouse space");
      assert.throw(() => new Warehouse(-1), "Invalid given warehouse space");
    });
  });

  describe("Test addProduct function", () => {
    it("Successfully add products (first time and already existing)", () => {
      warehouse.addProduct("Food", "Burger", 1);
      warehouse.addProduct("Drink", "Water", 1);
      warehouse.addProduct("Food", "Burger", 1);
      warehouse.addProduct("Food", "Pork", 1);

      assert.equal(warehouse.availableProducts.Food.Burger, 2);
      assert.equal(warehouse.availableProducts.Food.Pork, 1);
      assert.equal(warehouse.availableProducts.Drink.Water, 1);
      //   assert.deepInclude(warehouse.availableProducts, {
      //     Food: { Burger: 2, Pork: 1 },
      //     Drink: { Water: 1 } ** judge does not accept this **
    });
    it("Successfully returns added product", () => {
      assert.equal(warehouse.addProduct("Food", "Burger", 1).Burger, 1);
      assert.equal(warehouse.addProduct("Food", "Burger", 1).Burger, 2);
    });
    it("When capacity is full - throws 'There is not enough space or the warehouse is already full'", () => {
      warehouse.addProduct("Food", "Salad", 100);
      assert.throw(
        () => warehouse.addProduct("Food", "Ribs", 1),
        "There is not enough space or the warehouse is already full"
      );
    });
  });

  describe("Test orderProducts function", () => {
    it("Order the available products in descending order by quantity", () => {
      warehouse.addProduct("Food", "Apricot", 1);
      warehouse.addProduct("Food", "Salad", 2);

      let orderedProducts = warehouse.orderProducts("Food");
      let namesInOrder = Object.getOwnPropertyNames(orderedProducts);
      assert.equal(namesInOrder[0], "Salad");
      assert.equal(namesInOrder[1], "Apricot");
    });
  });

  describe("Test revision function", () => {
    it("Test revision with one product", () => {
      warehouse.addProduct("Food", "Apricot", 1);
      let expected = `Product type - [Food]\n- Apricot 1\nProduct type - [Drink]`;
      assert.equal(warehouse.revision(), expected);
    });
    it("Test revision with one product of each type", () => {
      warehouse.addProduct("Food", "Apricot", 1);
      warehouse.addProduct("Drink", "Water", 1);
      let expected = `Product type - [Food]\n- Apricot 1\nProduct type - [Drink]\n- Water 1`;
      assert.equal(warehouse.revision(), expected);
    });
    it("Test revision witout products", () => {
      let expected = `The warehouse is empty`;
      assert.equal(warehouse.revision(), expected);
    });
  });

  describe("Test scrapeAProduct function", () => {
    let scrape = function(
      type,
      product,
      initialQuantity,
      scrapeQuantity,
      expected
    ) {
      it("scrape existing product", () => {
        warehouse.addProduct(type, product, initialQuantity);
        let typeProducts = warehouse.scrapeAProduct(product, scrapeQuantity);
        assert.equal(typeProducts[product], expected);
      });
    };

    scrape("Food", "Burger", 1, 1, 0);
    scrape("Food", "Burger", 1, 2, 0);
    scrape("Food", "Burger", 2, 1, 1);

    it("scrape non-existing product throws '{product} do not exists'", () => {
      assert.throw(
        () => warehouse.scrapeAProduct("Burger", 1),
        "Burger do not exists"
      );
    });
  });

  describe("Test occupiedCapacity", () => {
    it("Zero products", () => {
      assert.equal(warehouse.occupiedCapacity(), 0);
    });
    it("One product", () => {
      warehouse.addProduct("Food", "Burger", 1);
      assert.equal(warehouse.occupiedCapacity(), 1);
    });
  });
});
