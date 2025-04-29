//불변 객체


const yujin = {
  name:'안유진',
  year:2020,

  get age(){
    return new Data().getFullYear() - this.year;
  },

  set age(age){
    this.year = new Data().getFullYear() - age;
  }
}

console.log(yujin);









