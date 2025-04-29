//callback

function waitAndRun() {
  setTimeout(() => {
    console.log('끝났어')
  }, 2000)
}

waitAndRun();

// function waitAndRun2() {
//   setTimeout(() => {
//     console.log('1번 콜백 끝');

//     setTimeout(() => {
//       console.log('2번 콜백 끝');

//       setTimeout(() => {
//         console.log('3번 콜백 끝');

//       }, 2000);
//     }, 2000);
//   }, 2000);
// }
// waitAndRun2();

//promise
const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('완료여');
  }, 2000);
});

timeoutPromise.then((res) => { //2초 뒤에 실행되는
  console.log('--then--');
  console.log(res);

})

const getPromise = (seconds) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('에러의 경우');
  }, seconds * 1000);
})

getPromise(1)
  .then((res) => {
    console.log('--first then--');
    console.log(res);

  })
  .catch((res) => {
    console.log('--catch--');
    console.log(res);

  })
  .finally(()=>{
    console.log('--finally--');
    
  })
