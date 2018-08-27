// Write your solution in this file!

// create driver object
const driver = {}
// console.log(driver)
let newDriver = {}
// - this function should take in a driver Object, a key and a value. The function should not mutate the driver parameter and return a new driver that has an updated value for the key passed in.

// key:"address", value:"1609 Brill Dr"
// pass the actual string values for the arguments
function updateDriverWithKeyAndValue(driver, key, value) {
  // console.log(arguments)
  // driver.address = '1609 Brill Dr'; dot notation, the actual key name value
  // driver[ddress] "11 Broadway"; bracket notation passing a variable that holds the value
  newDriver = { ...driver }
  newDriver[key] = value;

  return newDriver;
}

// function nondestructivelyUpdateObject(obj, key, value) {
//   const newObj = { ...obj };
//
//   newObj[key] = value;
//
//   return newObj;
// }

// - this function should work the same as updateDriverWithKeyAndValue() but it should mutate the driver parameter passed in.
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  // console.log(arguments)
  driver[key] = "12 Broadway"
  return driver
}

// function destructivelyUpdateObject (obj, key, value) {
//   obj[key] = value;
//
//   return obj;
// }

// - this function should take in a driver Object and a key. It should delete the key/value pair for the key that was passed in from the driver Object. This should all not actually mutate the driver passed in.
function deleteFromDriverByKey(driver, name) {
  return Object.assign({}, driver, { [name]: undefined})
}

// function nondestructivelyUpdateObject(obj, key, value) {
//   return Object.assign({}, obj, { [key]: value });
// }

// - this function should work the same as deleteFromDriverByKey() but it should mutate the driver passed in.
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
