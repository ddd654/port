//Object 객체 데이터 타입

//key : value pair
let coco = {
  name: '코코',
  group: 'fruit',
  dance: function () { //obj 안의 함수는 메서드
    return `${this.name}의 춤`; //현재 객체를 가리키는 this
  }
}

console.log(coco);
console.log(coco.name);


const key = 'name';
console.log('key에 해당하는 value값: ', coco[key]);
console.log(coco.dance());

// 객체를 만들때 변수식으로 만들 수도 있다
const nameKey = 'name';
const nameValue = '코코';

const gruopKey = 'group';
const gruopValue = 'fruit';

const coco2 = {
  [nameKey]: nameValue,
  [gruopKey]: gruopValue,
  dance: function(){
    return `${this.name}은(가) 춤을 춥니다`;
  }
}

console.log(coco2.dance());

coco2['group'] = 'newGroup';
console.log(coco2);

coco2['whatIsThis'] = 'hi';
console.log(coco2);

delete coco2['whatIsThis'];
console.log(coco2);

//객체의 특징
//1. const인 경우 객체 자체를 변경할 수 없다.
//2. 객체안의 프로퍼티나 메서드는 변경할 수 있다.

const kiwi = {
  name: '키위',
  group: 'fruit',
};
console.log(kiwi);

kiwi['group'] = 'newGroup';
console.log(kiwi);

//모든 키값 가져오기 all key
console.log(Object.keys(kiwi)); //리스트로 가져온다.

//모든 value 값 가져오기 all value
console.log(Object.values(kiwi))

const name = '골돌';
const goldstone = {
  name,
}
console.log(goldstone);















