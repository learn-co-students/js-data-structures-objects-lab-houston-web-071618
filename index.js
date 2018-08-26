// Write your solution in this file!

const driver = {};

driver.name = 'Sam';

function updateDriverWithKeyAndValue() {
	return Object.assign({}, driver, {address: '11 Broadway'});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
	driver[key] = value;
	return driver;
}

function deleteFromDriverByKey(driver, key) {
	const newDriver = Object.assign({}, driver);

	delete newDriver[key];

	return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
	delete driver[key];
	return driver;
}