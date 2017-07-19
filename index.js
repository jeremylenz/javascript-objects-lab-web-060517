let recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  let objToAdd = {}
  objToAdd[key] = value
  let newObj = Object.assign({}, object, objToAdd)
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  let objToAdd = {}
  objToAdd[key] = value
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  let objToDelete = {key: object[key]}
  let newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
