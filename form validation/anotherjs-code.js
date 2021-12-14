// function addNumber(){
//     sum = 2 + 2 ;
// }
// var sum;
//  addNumber();
// document.write(sum);


// function fillCity() {
//   var cityName;
//   var zipEntered = document.getElementById("zip").value;
//   switch (zipEntered) {
//     case "60608":
//       cityName = "Chicago";
//       break;
//     case "68114":
//       cityName = "Omaha";
//       break;
//     case "53212":
//       cityName = "Milwaukee";
//   }
//   document.getElementById("city").value = cityName;
// }



// var plan1 = {
//   name: "Basic",
//   price: 3.99,
//   space: 100,
//   transfer: 1000,
//   pages: 10,
//   discountMonths: [6, 7],
// };
// function calcAnnual() {
//   var bestPrice = plan1.price;
//   var currDate = new Date();
//   var thisMo = currDate.getMonth();
//   for (var i = 0; i < plan1.discountMonths.length; i++) {
//     if (plan1.discountMonths[i] === thisMo) {
//       bestPrice = plan1.price * 0.8;
//       break;
//     }
//   }
//   return bestPrice * 12;
// }
// var annualPrice = calcAnnual();
// console.log(annualPrice);



       //for text fields form submission

// function checkForLastName() {
//   var targetField = document.getElementById("lastNameField");
//   if (targetField.value.length === 0) {
//     alert("Please enter your last name");
//     targetField.focus();
//     targetField.style.background = "red";
//     return false;
//   }
//   else{
//       targetField.style.background = "white";
//         alert("Your data will be submitted..!!")
//   }
// }

        // for dropdown form submission

// function checkForSelection() {
//      var target = document.getElementById("states");
//      if (target.selectedIndex === 0) {
//      alert("Please select a state.");
//      return false;
//      }
//      else {
//          alert("State's selected...!!");
//      }
//      }


