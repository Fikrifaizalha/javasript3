function multiply(a, b) {
  return a * b;
}

let result = multiply(10, 2);
console.log(result);

/* Output:
20
*/

function greeting(name, language) {
  if (language === "English") {
    return "Good Morning " + name + "!";
  } else if (language === "French") {
    return "Bonjour " + name + "!";
  } else {
    return "Selamat Pagi " + name + "!";
  }
}

let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);

/* Output:
Bonjour Harry!
*/

// expression function

const greeting = function (name, language) {
  if (language === "English") {
    return "Good Morning " + name + "!";
  } else if (language === "French") {
    return "Bonjour " + name + "!";
  } else {
    return "Selamat Pagi " + name + "!";
  }
};

console.log(greeting("Ron", "English"));

/* Output:
Good Morning Ron!
 */
