// 마우스로 스크롤하는 경우
//슬라이드를 마우스로 이동하는 기능
let currentSlide = 0;
let isOpening = false;

const slides = document.querySelector(".slides");
const sections = document.querySelectorAll("section");
const totalSlides = sections.length;

const windowAni = document.querySelector('.windowAni');
const door = document.querySelector('.door a');
const nav = document.querySelector('nav');
// cosnst text1 = document.querySelector('.text1');

let isScrolling = false; //스크롤 가능한지 상태

// function handleOpening(){
//   const main= document.querySelector('main')
// }

//intro 텍스트 효과 딜넣기
// setTimeout(() => {
//   document.querySelector('.board p').classList.add('show');
// }, 3000)

//마우스로 스크롤했을때 이벤트
window.addEventListener('wheel', (event) => {

  if (isScrolling) { //스크롤이 가능하면 끝낸다
    return;
  }
  isScrolling = true;


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

  //1번에서 >>> 0번으로 갈때는 커튼 문이 닫히게
  if (currentSlide == 1) {
    windowAni.classList.add('open');
    // text1.style.opacity = '1';

    setTimeout(() => {
      windowAni.style.opacity = "0";
      windowAni.style.pointerEvents = "none"; // 클릭, hover 이벤트 비활성화
      windowAni.style.zIndex = '2';

    }, 1000);
  }

  //0번에서 >>> 1번 슬라이드로 이동할때의 애니메이션
  if (currentSlide == 0) {
    // door.classList.remove('scaleUpCenter');
    // text1.style.opacity = '0';

    windowAni.classList.remove('open');
    windowAni.style.opacity = "1";
    windowAni.style.pointerEvents = "auto";
    //클릭, hover 이벤트 활성화

    setTimeout(() => {
      windowAni.style.zIndex = '1';
    }, 1000)
  }

  // 슬라이드 이동 효과 넣기
  slides.style.transition = "transform 0.5s ease-in-out"; // 애니메이션 효과 추가
  slides.style.transform = `translateX( -${ currentSlide * 100 }vw )`; // 슬라이드 이동

  //슬라이드 번호
  console.log(`스크롤 중 슬라이드 번호는 ${ currentSlide + 1 }`);

  // 두번째 슬라이드 오프닝
  // main에 오프닝을 추가해보자
  // main에 클래스리스트를 붙여서 관리하자
  const main = document.querySelector('main');
  let opening = document.querySelector('.opening'); //태그 만들기
  // opening.classList.add('opening');//opening에 갖다 붙이기

  if (currentSlide == 1 && !isOpening) { //1번 슬라이드일때, isOpening 은 일회성으로 할때

    if (!opening) { // opening 이 없으면
      opening = document.createElement('div'); // 태그를 만든다
      opening.classList.add('opening'); // 클래스 이름 붙인다
      main.appendChild(opening); //태그에 추가한다
    }

    console.log(main);


    isOpening = true; // 1회성 끝
  } else { //그 외 슬라이드 일때

    if (opening) { //opening이 있으면
      // opening.classList.remove('opening'); // 선택 삭제
      opening.remove(); //하위 태그 전부 삭제
    }

    // 오늘은 생기고 사라지게 까지 했고
    // 이제 안쪽 애니메이션을 넣자
  }

  setTimeout(() => {
    isScrolling = false;
  }, 500); //스크롤 0.5초 딜레이 넣기

});


//-----------------------------------
//메뉴를 클릭했을때
//클릭한 a태그에 따라 슬라이드 이동하는 기능
const links = document.querySelectorAll(".link"); //차이점

let isClick = false; //클릭상태 확인하기기

for (let i = 0; i < links.length; i++) {
  const link = links[i];

  link.addEventListener("click", (e) => { //link를 클릭하면 일어나는 일

    if (isScrolling) {
      return;
    }
    isClick = true;
    e.preventDefault(); // a태그의 기본 링크 이동 막기

    // e.target.closest('a')로 클릭된 a태그를 찾아 data-slide 값을 가져오기
    const clickedLink = e.target.closest('a');
    const slideNumber = clickedLink.getAttribute("data-slide");

    if (slideNumber != null) { //data slide가 존재할 때만
      currentSlide = parseInt(slideNumber); //정수로 변환한다

      if (!isNaN(currentSlide)) {//숫자가 아닐경우에

        if (slideNumber == 0) {
          windowAni.classList.add('open');
          windowAni.style.zIndex = '2';

        }
        if (slideNumber == 1) {
          windowAni.classList.add('open');
          setTimeout(() => {
            windowAni.style.zIndex = '1';
          }, 1000)
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


    //두번째 슬라이드로 가면 바로 검은화면


  })
}


// intro 문짝 클릭하면 애니메이션 나오는 기능






// 창크기가 변할때 슬라이드 효과 막는 기능
let resize;
window.addEventListener("resize", () => {
  slides.style.transition = 'none'
  // clearTimeout(resize);
})


// 다른 html로 갔다가 돌아올때
// 내가 현재 슬라이드로 돌아가야하는데
// 필요한것
// 현재 슬라이드 값
// 현재 슬라이드 값 저장?
// 뒤로가기를 감지하는 법
// 뒤로가기 함수를 실행하면 현재 슬라이드 갖고오기



