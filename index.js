//* Overview:
// As you are picking out your froyo flavor at your favorite local frozen yogurt shop,
// you overhear the management team discussing how they want to gather data to improve
// customer retention. You make small-talk and offer your services to help them to build a survey.

// Variables tables
const Timmy = {
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

/**
 * At the end of the script, you should return and log the string "Your grand total is ${finalAmount}."
 * @param {Object} customer - details of a customer and their prescription, subscription, and coupon
 */

function getResult(custumer) {
  // apply discount assigning a string
  let finalAmount = applyDiscount(custumer);
  // apply coupon creating a new string and a parameter: customer
  finalAmount = applyCoupon(finalAmount, custumer.coupon)
  // print total
  // using consule.log('Your grant total is ${finalAmount}.')
  return finalAmount
}
