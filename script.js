
var chosenItem = "Dean"


//Objects
var guitarShop = {
  guitars: ["Gibson", "Fender", "Yamaha", "Martin", "Taylor", "Ibanez"],

  amps: ["Mustang", "Spider V", "Marshall", "Boss", "Mesa", "Mark Bass"],

  apptMessage: function() {
    console.log("Email us at guitarshop.com")
  }
}

function guitarsMessage() {
  console.log("Congrats " + chosenItem + " is available in our store.")
  guitarShop.apptMessage()
}
function ampsMessage() {
  console.log("Congrats" + chosenItem + " is available in the store.")
  guitarCenter.apptMessage
}

//function for random loop in else statement

function thisOne() {
  for (var i = 0; i < guitarShop.guitars.length; i++)
    Math.floor(Math.random() * guitarShop.guitars.length[i])
  
}
var result=thisOne()
console.log(result)

//if statement from the chosen item with .includes

if (guitarShop.guitars.includes(chosenItem)) {
  guitarsMessage()
} else if (guitarShop.amps.includes(chosenItem)) {
  ampsMessage()
} else {
  console.log("It looks like we are out of stock for that.")
  console.log("But it looks like we do have " + result + " in our store.")
}
