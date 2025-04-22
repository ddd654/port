//


//  
/*  
  1. Country 클래스는 나라 이름과 나라에 해당하는 
    아이돌 그룹정보를 리스트로 들고있다. (name 프로퍼티, fruitGroup 프로퍼티)

  2. IdolGroup 클래스는 아이돌 그룹 이름과 멤버 정보를 리스트로 들고 있다.
    (name 프로퍼티, members 프로퍼티)

  3. Idol 클래스는 아이돌 이름과 출생년도 정보를 들고있다.
    (name 프로퍼티, year 프로퍼티)

  4. MaleIdol 클래스는 Idol 클래스ㅗ아 동일하게 name, year 프로퍼티가 존재한다.
    추가로 sing() 함수를 실행하면 ${이름}이 노래를 합니다. 라는 스트링을 반환한다.

  5.FemaleIdol 클래스는 Idol 클래스와 동일하게 name, year 프로퍼티가 존재한다.
  ㅂ추가로 danxe() 함수를 실행하면 ${이름}이 춤을 춥니다. 스트링을 반환한다.

  map() 함수를 잘 활용하면 좋다.
*/

const iveMembers = [
  { name: '안유진', year: 2003 },
  { name: '가을', year: 2001 },
  { name: '레이', year: 1694 },
  { name: '장원영', year: 2015 }
]

const btsMembers = [
  { name: '진', year: 1992, },
  { name: '슈가', year: 1993 },
  { name: '제이홉', year: 1994 }
]

class Country {
  name;
  idolGroups;

  constructor(name, idolGroups){
    this.name = name;
    this.idolGroups = idolGroups;
  }
}

class IdolGroups {
  name;
  members;

  constructor(name, members) {
    this.name = name;
    this.members = members;
  }
}

class Idol {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class MaleIdol extends Idol {
  sing() {
    return `${ this.name }이 노래를 불러요`;
  }
}

class FemaleIdol extends Idol {
  dance() {
    return `${ this.name }이 춤을 춥니다.`;
  }
}

const cIveMembers = iveMembers.map(
  (x) => {
    return new FemaleIdol(x['name'], x['year']);
  }
);
console.log(cIveMembers);

const cBtsMembers = btsMembers.map(
  (x) => {
    return new MaleIdol(x['name'], x['year']);
  }
)
console.log(cBtsMembers);


const iveGroup = new IdolGroups('아이브', cIveMembers);
console.log(iveGroup);

const btsGroup = new IdolGroups('bts', cBtsMembers);
console.log(btsGroup);

const korea = new Country('대한민국', [iveGroup, btsGroup]); //Array로 값이 존재
console.log(korea);

//한번에
const allTogether = new Country(
  '대한민국',
  [
    new IdolGroups(
      '아이브',
      iveMembers.map(
        (x) => {
          return new FemaleIdol(x['name'], x['year']);
        }
      )
    ),
    new IdolGroups(
      btsMembers.map(
        (x) =>{
          return new MaleIdol(x['name'], x['year']);
        }
      )
    )
  ]
)

console.log(allTogether);







