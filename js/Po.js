
//슬라이드를 마우스로 이동하는 기능
let currentSlide = 0;
const slides = document.querySelector(".slides");
const sections = document.querySelectorAll("section");
const totalSlides = sections.length;

const windowAni = document.querySelector('.windowAni');

let isScrolling = false; //스크롤 가능한지 상태

//마우스로 스크롤 가능하게하는 기능
window.addEventListener('wheel', (event) => {

  if (isScrolling) { //스크롤이 가능하면 끝낸다
    return;
  }
  isScrolling = true;

  event.preventDefault(); //기본 브라우저 동작막기?

  if (event.deltaY > 0) { // 아래로 스크롤하면
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
    }
  } else {
    //위로 스크롤하면
    if (currentSlide > 0) {
      currentSlide--;
    }
  }

  //1번에서 >>> 0번으로 갈때는 닫히게
  if (currentSlide == 1) {
    windowAni.classList.add('open');

    setTimeout(() => {
      windowAni.style.opacity = "0";
      windowAni.style.pointerEvents = "none"; // 클릭, hover 이벤트 비활성화
    }, 1000);
  }

  //0번에서 >>> 1번 슬라이드로 이동할때의 애니메이션
  if (currentSlide == 0) {
    windowAni.classList.remove('open');
    windowAni.style.opacity = "1";
    windowAni.style.pointerEvents = "auto";
    //클릭, hover 이벤트 활성화
  }

  // 슬라이드 이동 효과 넣기
  slides.style.transition = "transform 0.5s ease-in-out"; // 애니메이션 효과 추가
  slides.style.transform = `translateX( -${ currentSlide * 100 }vw )`; // 슬라이드 이동

  //슬라이드 번호
  console.log(`스크롤 중 슬라이드 번호는 ${ currentSlide + 1 }`);

  //스크롤 지연 넣기
  setTimeout(() => {
    isScrolling = false;
  }, 500); // 0.5초 딜넣기
  // 스크롤 할때는 다시 바로 스크롤이 되게 하는걸 막는다

});

//클릭한 a태그에 따라 슬라이드 이동하는 기능
const links = document.querySelectorAll(".link"); //차이점

let isClick = false; //클릭상태 확인하기기

for (let i = 0; i < links.length; i++) {
  const link = links[i];

  link.addEventListener("click", (e) => { //link를 클릭하면 일어나는 일일

    if (isScrolling) {
      return;
    }
    isClick = true;
    e.preventDefault(); // a태그의 기본 링크 이동 막기?

    // e.target.closest('a')로 클릭된 a태그를 찾아 data-slide 값을 가져옵니다.
    const clickedLink = e.target.closest('a');
    const slideNumber = clickedLink.getAttribute("data-slide");

    if (slideNumber != null) { //data slide가 존재할 때만
      currentSlide = parseInt(slideNumber); //정수로 변환한다

      if (!isNaN(currentSlide)) {//숫자가 아닐경우에

        if (slideNumber == 0) {
          windowAni.classList.add('open');

        }
        if (slideNumber == 1) {
          windowAni.classList.add('open');

        }

        //슬라이드 이동 효과
        if (currentSlide >= 0 && currentSlide < totalSlides) { // 슬라이드 번호 범위 체크
          slides.style.transition = "transform 0.5s ease-in-out"; //슬라이드 이동 효과
          slides.style.transform = `translateX( -${ currentSlide * 100 }vw)` //슬라이드 이동 거리 currentSlide 가 1이면 -100vw

          console.log(`a태그용 슬라이드 번호는 ${ currentSlide + 1 }`);
        } else {
          console.error("잘못된 번호에요");
        }

        setTimeout(() => {
          isClick = false;
        }, 500); // 0.5

        //클릭하고 이동중에 또 클릭하는거 막기

      } else {
        console.error("잘못된 슬라이드 번호에요");
      }
    } else {
      console.error("data~slide 속성이 존재하지 않아요");
    }

  })

}

// 창크기가 변할때 슬라이드 효과 막는 기능
let resize;
window.addEventListener("resize", () => {
  slides.style.transition = 'none'
  // clearTimeout(resize);
})


//내가 현재 슬라이드로 돌아가야하는데
// 필요한것
// 현재 슬라이드 값
// 현재 슬라이드 값 저장?
// 뒤로가기를 감지하는 법
// 뒤로가기 함수를 실행하면 현재 슬라이드 갖고오기



