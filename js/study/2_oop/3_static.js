//static

class IdolModel {
  name;
  year;
  static group;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static returnGroup() {
    return '미래그룹';
  }

}

const coco = new IdolModel('코코', 2020);
console.log(coco);

console.log(IdolModel.group);
console.log(IdolModel.returnGroup());

//
// factory constructor

class Fruit {
  name;
  color;

  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  static fromObj(object) {
    return new Fruit(
      object.name,
      object.year,
    );
  }

  static fromList(list){
    return new Fruit(
      list[0],
      list[1],
    )
  }

}

// const coco2 =new Fruit('사과', 10); 원래 이렇게 하다가...
// static으로 객체를 만들어본다

const coco2 = Fruit.fromObj({
  //객체 넣기 후 만들기
  name: '사과',
  year: 10,
});
console.log(coco2);

const redFruit = Fruit.fromList(
  [
    '사과',
    22
  ]
)
console.log(redFruit);




