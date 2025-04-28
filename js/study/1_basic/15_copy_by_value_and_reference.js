/*
copy by value 값에 의한 전달
copy by reference 참조에 의한 전달

1. primitive 값은 값에 의한 전달
2. 객체(함수나, 배열도) 데이터 타입은 참조에 의한 전달

*/
//값에 의한
let original = '안녕';//1
let clone = original;//2 안녕
console.log(original);
console.log(clone);

clone += '골돌';//3
console.log('-------------');
console.log(original);
console.log(clone);


//
//참조
let originalObj = {
  name: 'goldstone',
  group: 'gold'
}
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

originalObj['group'] = 'changedGroup';
console.log('---------------------');
console.log(originalObj);
console.log(cloneObj);


//값을 직접 가리키는 느낌
//값이 있는 공간을 가리키는 느낌

const goldstone = {
  name: '골돌',
  group: '이름',
}

const goldstone2 = goldstone;
const goldstone3 = {
  name: '골돌',
  group: '이름',
}

console.log(goldstone === goldstone2); //true
console.log(goldstone === goldstone3); //false
console.log(goldstone2 === goldstone3); //false



//Spread Operator
const goldstone4 = { //새로운 메모리 공간이다
  ...goldstone3 //같은 값이지만
}
console.log(goldstone4);

const goldstone5 = {
  year: 1993,
  ...goldstone3
}
console.log(goldstone5);

const goldstone6 ={
  ...goldstone3,
  name: 'new 골똘', //이미 있는 name에 덮어쓰여서 순서가 중요하다
}
console.log(goldstone6);







