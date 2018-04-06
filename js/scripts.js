//business logic
var pizzaPrice = 0;

function refresh() {
  location.reload();
};

function Pizza (size, meat, veg, extra) {
  this.pizzaSize = size;
  this.pizzaMeat = meat;
  this.pizzaVeg = veg;
  this.pizzaExtra = extra;
}

function Address (street, city, state, zip) {
  this.addressStreet = street;
  this.addressCity = city;
  this.addressState = state;
  this.addressZip = zip;
}

Pizza.prototype.pizzaSpecs = function () {
  return "The pizza you've ordered is as follows: " + this.pizzaSize + ", " + this.pizzaMeat + ", " + this.pizzaVeg + ", " + this.pizzaExtra + ".";
}

Address.prototype.addressSpecs = function() {
  return "Confirm that your address is correct before proceeding with your order: " + this.addressStreet + ", " + this.addressCity + ", " + this.addressState + " " + this.addressZip + "";
}

Pizza.prototype.pizzaPrice = function() {
  if (this.pizzaSize == "Small" && this.pizzaExtra == "None") {
    return pizzaPrice = 12.99;
  } else if (this.pizzaSize == "Small" && this.pizzaMeat == ("Pepperoni" || "Sausage") && this.pizzaExtra == ("Anchovies" || "Buffalo Mozzarella" || "Sun-Dried Tomatoes")) {
    return pizzaPrice = 14.99;
  } else if (this.pizzaSize == "Medium" && this.pizzaMeat == ("Pepperoni" || "Sausage") && this.pizzaExtra == "None") {
    return pizzaPrice = 16.99;
  } else if (this.pizzaSize == "Medium" && this.pizzaMeat == ("Pepperoni" || "Sausage") && this.pizzaExtra == ("Anchovies" || "Buffalo Mozzarella" || "Sun-Dried Tomatoes")) {
    return pizzaPrice = 17.99;
  } else if (this.pizzaSize == "Medium" && this.pizzaMeat !== ("Pepperoni" || "Sausage") && this.pizzaExtra == "None") {
    return pizzaPrice = 18.99;
  } else if (this.pizzaSize == "Medium" && this.pizzaMeat !== ("Pepperoni" || "Sausage") && this.pizzaExtra == ("Anchovies" || "Buffalo Mozzarella" || "Sun-Dried Tomatoes")) {
    return pizzaPrice = 19.99;
  } else if (this.pizzaSize == "Large" && this.pizzaMeat == ("Pepperoni" || "Sausage") && this.pizzaExtra == "None") {
    return pizzaPrice = 20.99;
  } else if (this.pizzaSize == "Large" && this.pizzaMeat == ("Pepperoni" || "Sausage") && this.pizzaExtra == ("Anchovies" || "Buffalo Mozzarella" || "Sun-Dried Tomatoes")) {
    return pizzaPrice = 21.99;
  } else if (this.pizzaSize == "Large" && this.pizzaMeat !== ("Pepperoni" || "Sausage") && this.pizzaExtra == "None") {
    return pizzaPrice = 22.99;
  } else if (this.pizzaSize == "Large" && this.pizzaMeat !== ("Pepperoni" || "Sausage") && this.pizzaExtra == ("Anchovies" || "Buffalo Mozzarella" || "Sun-Dried Tomatoes")) {
    return pizzaPrice = 23.99
  } else {
    alert("Please enter values in the spaces provided.")
    refresh();
  }
}

//UI logic
$(document).ready(function() {

  $("form#userInput").submit(function(event) {
  event.preventDefault();

    var inputName = $("#nameInput").val();
    var inputSize = $(".size").val();
    var inputMeat = $(".meat-topping").val();
    var inputVeg = $(".veg-topping").val();
    var inputExtra = $(".extra-topping").val();
    var inputStreet = $("#street").val();
    var inputCity = $("#city").val();
    var inputState = $("#state").val();
    var inputZip = $("#zip").val();

    var newPizza = new Pizza(inputSize, inputMeat, inputVeg, inputExtra);
    var newAddress = new Address(inputStreet, inputCity, inputState, inputZip);
    var priceOf = newPizza.pizzaPrice();
    var specsOf = newPizza.pizzaSpecs();
    var addressOf = newAddress.addressSpecs();


    $("#results").show();
    $("#priceOutput").text(priceOf);
    $("#nameOutput").text(inputName);
    $("#pizzaDetails").text(specsOf);
    $("#addressOutput").text(addressOf)
console.log(priceOf);
  });
  $("#refresh").click(function(event) {
    event.preventDefault();
    refresh();
  });
});
