var groceryList = [
		{ 
			name: "Strawberries",
			price: 2.99
		},
		{	name: "Yogurt",
			price: 3.49
		},
		{	name: "Juice",
			price: 1.99
		},
		{	name: "Bagels",
			price: 2.49
		}
	];

var total = 0;
var list = document.getElementById("list");
var foodTotal = document.getElementById("foodTotal");
var button = document.getElementById("button");

groceryList.forEach(function(item){
	var newItem = document.createElement("li");
	newItem.innerText += item.name + " - " + item.price;
	list.appendChild(newItem);
	total += item.price;
	});

button.addEventListener("click", function(){
	var userFood = document.getElementById("food").value;
	var userPrice = document.getElementById("price").value;
	var newUserFood = document.createElement("li");
	newUserFood.innerText += userFood + " - " + userPrice;
	list.appendChild(newUserFood);
	total += parseFloat(userPrice, 10);
	foodTotal.innerText = "The total is " + total + ("!");
	});

