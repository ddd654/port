
// array 어레이 배열
let fruit = [
  'apple', 'banana', 'kiwi', 'peach'
];
console.log(fruit);

console.log(fruit.push('새로운 과일'));
console.log(fruit);

fruit.unshift('peach33');
console.log(fruit);


fruit.splice(0, 3); // 0~ 3까지 삭제
console.log(fruit);

let fruit_normal = [
  'apple', 'banana', 'kiwi', 'peach'
];

let fruit_rare = [
  'dragonFruit', 'orange'
]

fruit.pop('kiwi');
console.log('키위 없는 ', fruit);



fruit = [
  'apple', 'banana', 'kiwi', 'peach'
];

console.log(fruit);
console.log(fruit.slice(1, 2));


let fruit2 = [
  ...fruit
];
console.log(fruit2);


//join()
console.log(fruit.join('/')); // '/' 를 기준으로 문자열 나타내기
console.log(fruit.join(', '));

//
fruit.sort();
console.log(fruit);
console.log(fruit.reverse());


//
let numbers = [1, 5, 3, 22, 12, 2];
console.log(numbers);

numbers.sort();

//
numbers.sort((a, b) => { //형식 외울거
  return a > b ? 1 : -1;
});

console.log(numbers);


numbers.sort((a, b) => {
  return a > b ? -1 : 1;
})
console.log(numbers);


//map() 함수
//array의 값들을 변형

console.log(fruit.map((para) => para));
console.log(fruit.map((para) => `apple: ${ para }`));

//array를 변경하여 내보낼 수도 있다
console.log(fruit.map((x) => {
  if (x === 'apple') {
    return `붉은 과일: ${ x }`;
  } else {
    return x;
  }
}))

console.log(fruit);

// filter()
numbers = [32, 77, 95, 34, 15];
console.log(numbers.filter((x) => {
  return x % 2 === 0; //짝수만 필터하기
}))

//find()
console.log(numbers.find((x) => x % 2 === 0));

//findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));


//concat()
console.log(fruit.concat("가나다")); //새로운 배열을 만들어 반환
console.log(fruit);

//slice()
console.log(fruit.slice(1, 2)) //1번 인덱스부터 2까지 잘라서 로그화

//spread operator
let fruitSpread = [
  ...fruit
]
console.log('스프레드 ' + fruitSpread);

console.log();
console.log(fruit.reverse());

numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbers);


//map()
console.log(fruit.map((x) => x));// 리턴값들은 변경된 값들
console.log(fruit.map((x) => `코코: ${x}`));// 리턴값들은 변경된 값들


console.log(fruit.map((x)=>{
  if(x==='apple'){
    return `붉은 과일: ${x}`;
  }else{
    return x;
  }

}));


//찾는 기능?
//filter()
console.log(numbers.filter((x) =>{
  return x % 2 ==0; //2로 나눈 나머지가 0인 값을 리턴한다
}))

//find()
console.log(numbers.find((x) =>{ //해당되는 값을 바로 리턴
  return x % 2 ==0;
}))

//reduce()  배열에 있는 모든값이 순회하면서 합해진다
//argument 2개
numbers = [11, 88, 23, 45, 76];
console.log(numbers.reduce((pre, next)=> pre + next, 0)); // (콜백함수, 초기값)














