//getter setter

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  //1. 데이터를 새로운 데이터로 가공할때
  //2. private한 값을 리턴 반환 할때
  get nameAndYear() {
    return `${ this.name }-${ this.year }`;
  }

  set setName(name) { //para 필요
    this.name = name; //name 프로퍼티로 가서 나온다
  }
}

const yujin = new IdolModel('안유진', 2003);
console.log(yujin);
console.log(yujin.nameAndYear);

yujin.setName = '장웡영'; //set para에 넣기
console.log(yujin);

//private
class IdolModel2{
  #name; //구식 문법
  year;
  constructor(name, year){
    this.#name = name;
    this.year = year;
  }

  get name(){
    return this.#name;
  }

  set name(name){
    this.#name = name;
  }

}

const yujin2 = new IdolModel2('뉴 안유진', '뉴 2003');
console.log(yujin2);

console.log(yujin2.name);
yujin2.name = '넣을 이름';
console.log(yujin2.name);







