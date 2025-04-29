//object 안의 property 의 속성

//1. data property - 키값 형식 값
//2. access property - 호출되는 property


const yujin = {
  name: '유진',
  year: 2020
}


console.log(Object.getOwnPropertyDescriptor(yujin, 'name'));
console.log(Object.getOwnPropertyDescriptor(yujin, 'year'));

//실행하면
// value: 값
// writable: 값 수정 여부
// enymerable: 열거가능 여부
// configurable: 수정/ 재정의 가능 여부

console.log(Object.getOwnPropertyDescriptors(yujin)); //s 붙은거










