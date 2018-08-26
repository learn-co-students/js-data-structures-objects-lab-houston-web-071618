// Write your solution in this file!
const driver = {};

const updateDriverWithKeyAndValue = (driver, key, value) => Object.assign({}, driver, { [key]: value };

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => (driver[key] = value && driver);

const deleteFromDriverByKey = (driver, key)  => (
  const newObj = Object.assign({}, driver) && delete newObj[key] &&
  newObj
);

const destructivelyDeleteFromDriverByKey = (driver, key) => delete driver[key] && driver;