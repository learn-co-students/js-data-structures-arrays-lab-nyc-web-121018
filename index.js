// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name){
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift(name)
}

function appendDriver(name){
  return result = [...drivers, name]
}

function prependDriver(name){
  return result = [name, ...drivers]
}

function removeLastDriver() {
  return result = drivers.slice(0,2)
}

function removeFirstDriver() {
  return result = drivers.slice(1,3)
}
