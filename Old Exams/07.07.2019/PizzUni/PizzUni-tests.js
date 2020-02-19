const { assert } = require("chai");
const PizzUni = require("../PizzUni");

describe("", () => {
  let pizzUni;
  let user;
  let index;

  beforeEach(() => {
    pizzUni = new PizzUni();
    user = pizzUni.registerUser("JoeGomez@gmail.com");
    index = pizzUni.makeAnOrder("JoeGomez@gmail.com", "Italian Style", "Fanta");
  });

  it("constructor initializes properties correctly", () => {
    let newPizzUni = new PizzUni();
    assert.equal(newPizzUni.registeredUsers.length, 0);
    assert.equal(newPizzUni.availableProducts.pizzas.length, 3);
    assert.equal(newPizzUni.availableProducts.drinks.length, 3);
    assert.equal(newPizzUni.orders.length, 0);
  });

  it("registerUser works correctly and returns current object", () => {
    assert.equal(typeof user, "object");
    assert.equal(user.email, "JoeGomez@gmail.com");
    assert.equal(user.orderHistory.length, 1);
    assert.equal(pizzUni.registeredUsers.length, 1);
  });

  it("registerUser throws error if user already exists", () => {
    let expected =
      "This email address (JoeGomez@gmail.com) is already being used!";
    assert.throws(() => pizzUni.registerUser("JoeGomez@gmail.com"), expected);
  });

  describe("Test makeAnOrder", () => {
    it("throws error if user does not exist", () => {
      let expected = "You must be registered to make orders!";
      assert.throws(
        () => pizzUni.makeAnOrder("test@gmail.com", "Italian Style"),
        expected
      );
    });

    it("throws error if pizza is not in the availableProducts list does not exist", () => {
      let expected = "You must order at least 1 Pizza to finish the order.";
      assert.throws(
        () => pizzUni.makeAnOrder("JoeGomez@gmail.com", "testPizza"),
        expected
      );
    });

    it("adds order to user.orderHistory, to orders property and returns the order Id(index)", () => {
      assert.equal(pizzUni.orders[0].orderedPizza, "Italian Style");
      assert.equal(pizzUni.orders[0].orderedDrink, "Fanta");
      assert.equal(pizzUni.orders[0].email, "JoeGomez@gmail.com");
      assert.equal(pizzUni.orders[0].status, "pending");
      assert.equal(pizzUni.orders.length, 1);
      assert.equal(index, 0);
    });
  });

  it("completeOrder changes first order status to complete and returns the order", () => {
    let order = pizzUni.completeOrder();
    assert.equal(typeof order, "object");
    assert.equal(
      pizzUni.detailsAboutMyOrder(index),
      "Status of your order: completed"
    );
  });
});
