// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driverObject, key, value) {
  let tempObject = {[key]: value}
  return Object.assign(tempObject, driverObject)
}

function destructivelyUpdateDriverWithKeyAndValue(driverObject, key, value) {
  return Object.assign(driverObject, {[key]: value})
}

function deleteFromDriverByKey(driverObject, key) {
  let tempObject = Object.assign({}, driverObject)
  delete tempObject[key]
  return tempObject
}

function destructivelyDeleteFromDriverByKey(driverObject, key) {
  delete driverObject[key]
  return driverObject
}
