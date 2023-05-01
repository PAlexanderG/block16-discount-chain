//* Overview:
// As you are picking out your froyo flavor at your favorite local frozen yogurt shop,
// you overhear the management team discussing how they want to gather data to improve
// customer retention. You make small-talk and offer your services to help them to build a survey.

// Variables tables
const timmy = {
  prescription: "acetaminaphen",
  pricePerRefill: 25,
  refills: 3,
  subsciption: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};
// SECOND FUNCTIONS
// A function is a block of code designed to perform a particular task

/**
 * At the end of the script, you should return and log the string "Your grand total is ${finalAmount}."
 * @param {Object} customer - details of a customer and their prescription, subscription, and coupon
 */

// Function Keyword: function nameOfFunction(parameter1, parameters2, parameterN){
// code to be executed
// }

function getResult(custumer) {
  // apply discount assigning a string
  let finalAmount = applyDiscount(custumer);
  // apply coupon creating a new string and a parameter: customer
  finalAmount = applyCoupon(finalAmount, custumer.coupon);

  // print total
  // Using consule.log('Your grant total is ${finalAmount}.') or the Function Invocation
  // Return keyword ends a function's execution and passes a value to the fuction caller
  // Example: function nameFuction (passedValue){
  // return passedValue + 12;
  // }
  // const order = nameFuncion(new value: 10);
  // console.log(order);

  // return (keyword)finalAmount = shortcut of console.log('Any data.')
  return finalAmount;
}

/**
 * If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
 * // parameters are listed inside the parentheses, with the function definition
 * @param {Object} customer
 * @returns {number} total
 */
function applyDiscount(customer) {
  // let total = parameters.any multiply by the parameter. by number of refills;
  let total = customer.pricePerRefill * customer.refills;
  // if subscription
  if (customer.subscription) {
    // total = total - ( discount / 100 )
    total -= total * 0.25;
  }
  return total;
}

/**
 * If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
 * @param {number} total
 * @param {boolean} hasCoupon
 */
function applyCoupon(total, hasCoupon) {
  // if hasCoupon : boolean
  if (hasCoupon) {
    // subtract 10 from total
    total -= 10;
  }
  // return total
  return total;
}

// business logic

/**
 * Prints the customer name and grand total in one line
 * @param {Object} customerObject this nested object has the customer's name as the key, and the prescription info as it's value
 */
function printTotal(customerObject) {
  // get the key (name) off of the parameter
  const name = Object.keys(customerObject)[0];
  // get the total
  const total = getTotal(customerObject[name]);
  // print the name and total together

  // Arrow Functions are a different way to write functions and they achieve the same goal as function keyword
  // A shortcut of a large codebase (function addition (return number1 + number2;){
  // return number1 + number2;
  // }
  //instead
  // const addition = (num1, num2) => num1 + num2
  // Also creates one-liner bits of code:
  console.log(`${name} => "Your grand total is ${total}"`);
}

// FINALLY FUNCTION CALLS
// ({property})

printTotal({ timmy });
printTotal({ sarah });
printTotal({ rocky });
