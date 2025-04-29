//object


//1. object를 생성해서 객체 생성
//2. class를 인스턴스화 해서 객체 생성
//3. function으로 객체 생성 하는 방법들이 잇다

const yujin = {
  name: '유진',
  year: 2020
}

class Idol{
  name;
  year;

  constructor(name, year){
    this.name = name;
    this.year = year;
  }
}

console.log(new Idol('유진', 2020));

//3. 으로 객체 만들기
function IdolFunction(name, year){
  this.name = name;
  this.year = year;
}

const gaeul = new IdolFunction('가을', 2000);
console.log(gaeul);











