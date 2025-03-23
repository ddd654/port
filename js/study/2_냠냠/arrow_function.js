const multiply = (x, y) => {
  return x * y;
}

console.log(multiply(3, 5));

const multiply4 = (x, y) => x * 3;
console.log(multiply4(3, 5));

const multiply5 = x => y => z => {
  return `x: ${ x } y는${ y } z:${ z }`;
}
console.log(multiply5(3)(4)(5));


function multiply6(x) {
  return function (y) {
    return function (z) {
      return `x, y, z 값 ${ x } ${ y } ${ z }`
    }
  }
}
console.log(multiply6(3)(4)(5));


//
const multiplyThree = function (x, y, z) {
  console.log(arguments);
  return x + y + z;
}

const multiplyAll = function (...arguments) { // para를 무한히 받음
  return Object.values(arguments).reduce((a, b) => a * b, 1);
}

console.log(multiplyAll(4, 2, 3));


//------------------------------------------

//즉시실행
(function(x, y){
  console.log(x + y);
})
(3, 8);

console.log(typeof multiplyAll);
console.log(multiplyAll instanceof Object);



