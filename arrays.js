var chocolateBars = ["chocolateBars", "snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  
  return array
}

function removeElementFromBeginningOfArray(array) {
  slicedarray = array.slice(1)
  
  return slicedarray
}