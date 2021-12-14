function validateEmail() {
         var addressIsLegal = true;
         var eEntered = document.getElementById("address").value;
         if (eEntered.indexOf(" ") !== -1) {
            alert("Please correct email address");
         addressIsLegal = false;
    
         }
         else if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5){
            alert("Please correct email address");
            addressIsLegal = false;
         }
         else if (eEntered.indexOf(".") - eEntered.indexOf("@") < 2 ||
        eEntered.indexOf(".") > eEntered.length - 3) {
            alert("Please correct email address");
            addressIsLegal = false;
         }
         else if (addressIsLegal === false) {
         alert("Please correct email address");
         return false;
        }
         validatePswd();
        }

        function validatePswd() {
              var valueEntered = document.getElementById("pwd").value;
              var numChars = valueEntered.length;
              if (numChars < 8) {
                alert("Please enter a 6-8 digit code.");
                return false;
              }
              for (var i = 0; i <= 4; i++) {
                var thisChar = parseInt(valueEntered[i]);
                if (isNaN(thisChar)) {
                  alert("Please enter only numbers.");
                  return false;
                  }
                }
            }


            function showData(){

                var strText1 = document.getElementById("name").value;          
                var strText2 = document.getElementById("email").value;
                var strText3 = document.getElementById("psw").value;
                var strText4 = document.getElementById("psw-repeat").value;
                var result = strText1 + ' ' + strText2 + '' + strText3 + '' + strText4;
                document.getElementById('data').innerHTML = result;
                
            }

