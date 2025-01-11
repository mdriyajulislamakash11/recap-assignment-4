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

// /*function signature/sample */
// function checkDigitsInName(name) {
//       if (typeof name !== "string") {
//             return "invalid input"
//       }

//       for (let char of name) {
//             if (!isNaN(char) && char !== " ") {
//                   return true;
//             }
//       }
//       return false;
// }
// // console.log(checkDigitsInName(["Raj"]))




// function calculateFinalScore(obj) {
//       if (
//             typeof obj !== "object" ||
//             Array.isArray(obj) ||
//             obj === null
//       ) {
//             return "Invalid Input";
//       }

//       const { name, testScore, schoolGrade, isFFamily } = obj;

//       // Validate the object properties
//       if (
//             typeof name !== "string" ||
//             typeof testScore !== "number" || testScore > 50 ||
//             typeof schoolGrade !== "number" || schoolGrade > 30 ||
//             typeof isFFamily !== "boolean"
//       ) {
//             return "Invalid Input";
//       }


//       let finalScore = testScore + schoolGrade;
//       if (isFFamily) {
//             finalScore += 20; 
//       }

//       return finalScore >= 80;
// }


// console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false }));
// console.log(calculateFinalScore("hello")); 
// console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true })); 



function calculateFinalScore(obj) {
      if (
            typeof obj !== "object" ||
            Array.isArray(obj) ||
            obj === null
      ) {
            return "Invalid Input";
      }


      const { name, testScore, schoolGrade, isFFamily } = obj;

      if (
            typeof name !== "string" ||
            typeof testScore !== "number" || schoolGrade > 50 ||
            typeof schoolGrade !== "number" || schoolGrade > 30 ||
            typeof isFFamily !== "boolean"
      ) {
            return "Invalid Input";
      }

      let final = testScore + schoolGrade;
      if (isFFamily === true) {
            final = final + 20;
      }
      return final >= 80;

}
// console.log(calculateFinalScore({ name: "raib", testScore: 45, schoolGrade: 25, isFFamily: true }));
// console.log(calculateFinalScore( { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false}));
// console.log(calculateFinalScore("hello"));
// console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));



function waitingTime(waitingTimes, serialNumber) {
      if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
            return 'Invalid Input';
      }

      const totalTime = waitingTimes.reduce((sum, time) => sum + time, 0);

      const averageTime = Math.round(totalTime / waitingTimes.length);

      const remainingPeople = serialNumber - waitingTimes.length - 1;

      const waitingTime = remainingPeople > 0 ? remainingPeople * averageTime : 0;

      return waitingTime;
}

console.log(waitingTime([3, 5, 7, 11, 6], 10));  // Output: 24
console.log(waitingTime([13, 2], 6));  // Output: 24
console.log(waitingTime([13, 2, 6, 7, 10], 6));  // Output: 0
console.log(waitingTime([6], 4));  // Output: 12
console.log(waitingTime(7, 10));  // Output: Invalid Input
console.log(waitingTime("[6,2]", 9));  // Output: Invalid Input
console.log(waitingTime([7, 8, 3, 4, 5], "9"));  // Output: Invalid Input
