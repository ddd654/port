// inheritance
class IdolModel{
  name;
  year;
  constructor(name, year){
    this.name = name;
    this.year = year;
  }
}

class FemaleIdolModel extends IdolModel{
  dance(){
    return `여자 아이돌이 춤을 춥니다.`;
  }
}

class MaleIdolModel extends IdolModel{
  sing(){
    return `남자 아이돌이 노래를 불러요`;
  }
}


const yujin = new FemaleIdolModel('안유진', 2020);
console.log(yujin);

const jimin = new MaleIdolModel('지민', 2013);
console.log(jimin);

console.log(yujin.dance());
console.log(yujin.name);

console.log(jimin.sing());

const coco = new IdolModel('코코', 33);
console.log(coco);



















