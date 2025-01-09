// problem 01


function calculateTax(income, expenses) {
      if (income < 0 || expenses < 0) {
            return "Invalid input";
      }
      if (income < expenses) {
            return "Invalid input";
      }

      const total = income - expenses;
      const tax = total * 0.20; // Tax is 20%
      return tax;
}

const totalTax = calculateTax(-5000, 2000);
//   console.log(totalTax);


// problem 2_____________________________________________________/

function sendNotification(email) {
      if (!email.includes("@")) {
            return "invalid input"
      }
      const send = email.split("@");
      const result = send[0] + "sent you an email from " + send[1];
      return result
}
// console.log(sendNotification("farhan34@yahoo.com"))
// console.log(sendNotification("farhan34yahoo.com"))



// // _______________ problem 03 __________________________________________/

/*function signature/sample */
function checkDigitsInName(name) {
      if (typeof name !== "string") {
            return "invalid input"
      }

    for (let char of name) {
      if (!isNaN(char) && char !== " ") { 
          return true;
      }
  }
  return false;
}
console.log(checkDigitsInName(["Raj"]))



