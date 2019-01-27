// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name) {
  drivers.push(name);
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}
function destructivelyRemoveLastDriver() {
  drivers.pop()
}
function destructivelyRemoveFirstDriver() {
  drivers.shift()
}
function appendDriver(name) {
const appendDriver = drivers.concat(name);
return appendDriver
}

function prependDriver(name) {
  const prependDriver = [name, ...drivers.slice()]
  return prependDriver

}

function removeLastDriver(){
  const removeLastDriver = drivers.slice(0, -1)
 return removeLastDriver;
}

function removeFirstDriver(){
  const removeFirstDriver = drivers.slice(1, drivers.length);
 return removeFirstDriver;
}
