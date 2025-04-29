//scope

var numberOne = 1;

function levelOne(){
  console.log(numberOne);
  
}

// levelOne();

function levelOne(){
  var numberOne = 11;
  console.log(numberOne);
  
}

levelOne();

console.log(numberOne); //그대로 있던거

function levelOne(){
  var numberOne = 100;
  function levelTwo(){
    var numberTwo = 200;
    
    console.log(`numberOne numberOne : ${numberOne}`);
    console.log(`numberTwo numberTwo : ${numberTwo}`);
    
  }
  levelTwo();
}

levelOne();
console.log('원래 저장된거 ',numberOne);


//Lexial Scope




