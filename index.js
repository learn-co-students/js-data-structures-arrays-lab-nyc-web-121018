// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  const newA = [...drivers,name]
  return newA
}

function prependDriver(name){
  const newB = [name, ...drivers]
  return newB
}

function removeLastDriver(){
  const newC = drivers.slice(0,2)
  return newC
}

function removeFirstDriver(){
  const newD = drivers.slice(1)
  return newD
}
