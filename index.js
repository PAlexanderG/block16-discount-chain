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
  // using consule.log('Your grant total is ${finalAmount}.') or the Funcintion Invocation
  // return finalAmount = shortcut of console.log('Any data.')
  return finalAmount;
}

// until here I reviewed the coding:

/**
 * If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
 * @param {Object} customer
 * @returns {number} total
 */
function applyDiscount(customer) {
  // let total = multiply pricePerRefill by number of refills
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
  // if hasCoupon
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
  console.log(`${name} => "Your grand total is ${total}"`);
}

// FINALLY FUNCTION CALLS

printTotal({ timmy });
printTotal({ sarah });
printTotal({ rocky });
