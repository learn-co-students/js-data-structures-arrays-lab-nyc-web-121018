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
      return new_arr = [...drivers, name];
  }

  function prependDriver(name){
    return new_arr = [name, ...drivers];
  }

  function removeLastDriver(){
    return new_arr = drivers.slice(0,2);
  }

  function removeFirstDriver(){
    return new_arr = drivers.slice(1,3);
  }
