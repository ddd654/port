/* 
try...catch

*/

function runner() {
  try {
    console.log('Hello');
    throw new Error('에러가 생겼어요'); //에러 만들기
    console.log('gold stone');
  }

  catch (e) {
    console.log('--catch--');
    console.log(e, '보통 e를 넣어 쓴다');
  }

  finally { //무조건 실행하는 경우, 선택 사항
    console.log('--finally--');
  }
}

runner();







