//class 대문자 시작 이름
//
class IdolModel{
  name;
  year;

  constructor(name, year){ //외부로부터 받는 값 parameter
    this.name = name;
    this.year = year;
  }

  //메소드
  sayName(){
    return `안녕하세요, 저는 ${this.name}입니다.`
  }

}

//constructor 생성자
const yujin = new IdolModel('안유진', 2003); //객체
console.log(yujin);

const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);

const ray = new IdolModel('레이', 2004);
const liz = new IdolModel('리즈', 2004);
const eseo = new IdolModel('이서', 2007);
console.log(ray, liz, eseo);

console.log(yujin.year);


console.log(yujin.sayName());
console.log(eseo.sayName());

console.log(typeof IdolModel); //클래스가? 함수 타입
console.log(typeof yujin);// 객체 타입이다




//--------------------

class IdolModel2{
  name;
  year;

  //6개의 타입?
  constructor(name, year){
    this.name = name;
    this.year = year;
  }
}

new IdolModel2();
const idol = new IdolModel2('안유진2', 2020);
console.log(idol);

const idol2 =new IdolModel2('안유진3', 2023);
console.log(idol2);











