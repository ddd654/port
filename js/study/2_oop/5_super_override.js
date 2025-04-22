//super, override

class IdolModel{
  name;
  year;

  constructor(name, year){
    this.name = name;
    this.year = year;
  }

  sayHello(){
    return `안녕하세요, ${this.name}입니다.`;
  }

}

class FemaleIdolModel extends IdolModel{
  //노래
  part;

  constructor(name, year, part){
    // this.name = name;
    // this.year = year;
    super(name, year);
    this.part = part;
  }

  sayHello(){
    // return `안녕하세요, ${this.name}입니다. ${this.part}를 맡고 있습니다.`;
    return `${super.sayHello()} ${this.part}를 맡고 있습니다.` //오버라이드를 할 수 있다.
  }

}

const yujin = new FemaleIdolModel('안유진', 2003 , '보컬');
console.log(yujin);

const wonYoung= new IdolModel('원영', 2010);
console.log(wonYoung.sayHello());
console.log(yujin.sayHello()); //상속을 해서 된다








