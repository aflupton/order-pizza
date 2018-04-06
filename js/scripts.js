//business logic
pizzaPrice = 0;

function Pizza (size, meat, veg, extra) {
  this.pizzaSize = size;
  this.pizzaMeat = meat;
  this.pizzaVeg = veg;
  this.pizzaExtra = extra;
}

Pizza.prototype.PizzaSpecs = function () {
  return this.pizzaSize + " " + this.pizzaMeat + " " + this.pizzaVeg + " " + this.pizzaExtra;
}

Pizza.prototype.pizzaPrice = function() {
  if (this.pizzaSize == "Small" && this.pizzaExtra == !true) {
    pizzaPrice = 12.99;
  } else if (this.pizzaSize == "Small" && this.pizzaExtra == true) {
    pizzaPrice = 14.99;
    if (this.Meat || this.veg == "None") {
      pizzaPrice = 10.99;
    }
  } else if (this.pizzaSize == "Medium" && this.pizzaMeat == "Pepperoni" || "Sausage" && this.pizzaExtra == !true) {
    pizzaPrice = 16.99;
    if (this.Meat || this.veg == "None") {
      pizzaPrice = 10.99;
    }
  } else if (this.pizzaSize == "Medium" && this.pizzaMeat == "Pepperoni" || "Sausage" && this.pizzaExtra == true) {
    pizzaPrice = 17.99;
    if (this.Meat || this.veg == "None") {
      pizzaPrice = 10.99;
    }
  } else if (this.pizzaSize == "Medium" && this.pizzaMeat !== "Pepperoni" || "Sausage" && this.pizzaExtra == !true) {
    pizzaPrice = 18.99;
    if (this.Meat || this.veg == "None") {
      pizzaPrice = 10.99;
    }
  } else if (this.pizzaSize == "Medium" && this.pizzaMeat !== "Pepperoni" || "Sausage" && this.pizzaExtra == true) {
    pizzaPrice = 19.99;
    if (this.Meat || this.veg == "None") {
      pizzaPrice = 10.99;
    }
  } else if (this.pizzaSize == "Large" && this.pizzaMeat == "Pepperoni" || "Sausage" && this.pizzaExtra == !true) {
    pizzaPrice = 20.99;
    if (this.Meat || this.veg == "None") {
      pizzaPrice = 10.99;
    }
  } else if (this.pizzaSize == "Large" && this.pizzaMeat == "Pepperoni" || "Sausage" && this.pizzaExtra == true) {
    pizzaPrice = 21.99;
    if (this.Meat || this.veg == "None") {
      pizzaPrice = 10.99;
    }
  } else if (this.pizzaSize == "Large" && this.pizzaMeat !== "Pepperoni" || "Sausage" && this.pizzaExtra == !true) {
    pizzaPrice = 22.99;
    if (this.Meat || this.veg == "None") {
      pizzaPrice = 10.99;
    }
  } else if (this.pizzaSize == "Large" && this.pizzaMeat !== "Pepperoni" || "Sausage" && this.pizzaExtra == true) {
    pizzaPrice = 23.99
    if (this.Meat || this.veg == "None") {
      pizzaPrice = 10.99;
    }
  }
}

function refresh() {
  location.reload();
};


//UI logic
$(document).ready(function() {

  $("form#userInput").submit(function(event) {
  event.preventDefault();

    var inputName = $("#nameInput").val();
    var inputSize = $(".size").val();
    var inputMeat = $(".meat-topping").val();
    var inputVeg = $(".veg-topping").val();
    var inputExtra = $(".extra-topping").val();

    var newPizza = new Pizza(inputSize, inputMeat, inputVeg, inputExtra);
    var priceOf = newPizza.pizzaPrice();

    $("#results").show();
    $("#priceOutput").text(priceOf);
    $("#nameOutput").text(inputName);
console.log(priceOf);

  });
  $("#refresh").click(function(event) {
    event.preventDefault();
    refresh();
  });
});
