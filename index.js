
// ARRAYS
// declare array
  const drivers = ["Milo", "Otis", "Garfield"];

// Add Elements to an Array
// appends a driver to the end of the drivers array
  function destructivelyAppendDriver(name){
      drivers.push(name);
  }
  // .unshift() elements onto the beginning of an Array
  function destructivelyPrependDriver(name){
    drivers.unshift(name);
  }

  // .pop removes the last driver from the drivers array
  function destructivelyRemoveLastDriver(){
    drivers.pop();
  }

  // .shify removes the first driver from the drivers array
  function destructivelyRemoveFirstDriver(){
    drivers.shift();
  }

  // Appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
   //
   // ... The spread operator allows us to spread out the contents of an existing Array into a new Array, adding new elements but preserving the original:

  function appendDriver(name){
   newDrivers = [...drivers, name];
   return newDrivers;

  }
  // Spread operator
  function prependDriver(name){
    newDrivers = [name, ...drivers];
    return newDrivers;
  }


//
// Removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged
function removeLastDriver(){
  newDrivers = drivers.slice(0, drivers.length-1);
  return newDrivers;
}

// removes first driver from array and returns new array
function removeFirstDriver(){
  newDrivers = drivers.slice(1);
  return newDrivers;
}
