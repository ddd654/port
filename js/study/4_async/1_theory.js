// sync는 동기 a는 비동기

function longWork(){
  const now = new Date();

  //milliseconds epoch
  const milliseconds = now.getTime();
  const afterTwoSeconds = milliseconds + 2 *1000;

  while(new Date().getTime() < afterTwoSeconds){ //2s 동안

  }
  console.log('완료');
  

}

// console.log('안녕');
// longWork();
// console.log('하세요');

function longWork(){
  setTimeout(()=>{
    console.log('완료요');
    
  }, 2000); // 큐안에 보내서 2초 후에 실행
};

console.log('안녕');
longWork();
console.log('하세요');

