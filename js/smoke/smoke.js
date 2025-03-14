const main = document.querySelector('main');
console.log(main);

// 드래그로 연기 만들기
document.addEventListener('DOMContentLoaded', () => {
  let isDrag = false; //드래그 안하면 멈추게
  let startX, startY; //드래그 시작 지점

  //드래그로 시작하기
  main.addEventListener('mousedown', () => {
    isDrag = true

    startX = e.clientX; //드래그 시작 X좌표
    startY = e.clientY; //드래그 시작 Y좌표
  })

  //드래그를 떼는 동작, 종료료
  main.addEventListener('mouseup', () => {
    isDrag = false
  })

  main.addEventListener('mousemove', (e) => {
    if (!isDrag) { //드래그중이 아니면 빠져나오게 (실행x)
      return;
    }

    // 이동 방향
    const moveX = e.clientX - startX; //x 변화량
    const moveY = e.clientY - startY; //Y 변화량

    //연기 만들기
    const smoke = document.createElement('div'); //div 만들어서서
    smoke.classList.add('smoke-effect'); // 미리만든 css로 효과 넣기
    main.appendChild(smoke);//메인에 붙이기

    //연기의 위치
    // const rect = main.getBoundingClientRect();
    // smoke.style.left = `${ e.clientX}px`;
    // smoke.style.top = `${ e.clientY}px`;

    smoke.style.left = `${ e.clientX}px`;
    smoke.style.top = `${ e.clientY}px`;

    //연기 변화
    const distance = Math.sqrt(moveX * moveX + moveY * moveY); //이동 거리
    smoke.style.width = `${distance /2}px`; //이동거리만큼 연기 크기 조정
    smoke.style.height = `${distance /2}px`;

    smoke.style.transform = `rotate(${Math.atan2(moveY, moveX) * 180 /Math.PI}deg)`;

    // 연기 사라지게
    setTimeout(() =>{
      smoke.remove();
    }, 4400);

    //드래그 시작 좌표 업
    startX = e.clientX;
    startY = e.clientY;
    
  })
})






