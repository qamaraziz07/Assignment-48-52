// function calcTot(merchTot) {
//   var orderTot;
//   if (merchTot >= 100) {
//     orderTot = merchTot;
//   } else if (merchTot < 50.01) {
//     orderTot = merchTot + 5;
//   } else {
//     orderTot = merchTot + 5 + 0.03 * (merchTot - 50);
//   }
//   return orderTot;
// }
// let user = prompt("Enter a valid number ");
// let result =calcTot(user);
// alert("Result is : "+result);

///////// zip code form validation

// function validateZIP() {
//   var valueEntered = document.getElementById("zip").value;
//   var numChars = valueEntered.length;
//   if (numChars < 5) {
//     alert("Please enter a 5-digit code.");
//     return false;
//   }
//   for (var i = 0; i <= 4; i++) {
//     var thisChar = parseInt(valueEntered[i]);
//     if (isNaN(thisChar)) {
//       alert("Please enter only numbers.");
//       return false;
//       }
//     }
// }

////////  Email  of form validation..

// function validateEmail() {
//      var addressIsLegal = true;
//      var eEntered = document.getElementById("address").value;
//      if (eEntered.indexOf(" ") !== -1) {
//         alert("Please correct email address");
//      addressIsLegal = false;

//      }
//      else if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5){
//         alert("Please correct email address");
//         addressIsLegal = false;
//      }
//      else if (eEntered.indexOf(".") - eEntered.indexOf("@") < 2 ||
//     eEntered.indexOf(".") > eEntered.length - 3) {
//         alert("Please correct email address");
//         addressIsLegal = false;
//      }
//      else if (addressIsLegal === false) {
//      alert("Please correct email address");
//      return false;
//     }
//     else {
//         alert("Email Submitted..!!");
//     }
//      }
///////////////////////////////////


    // {try .....catch} method

// function greetWorld() {
//   try {
//     var greeting = "Hello world!";
//     alert(greeting);
//   } catch (err) {
//     alert(err);
//   }
// }
// greetWorld();

