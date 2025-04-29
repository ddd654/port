//prototype

const obj = {};

console.log(obj.__proto__);

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

console.log(IdolModel.prototype);

console.dir(IdolModel.prototype, { showHidden: true, });

//
console.dir(IdolModel.prototype.constructor == IdolModel);
console.dir(IdolModel.prototype.constructor.prototype == IdolModel.prototype);

