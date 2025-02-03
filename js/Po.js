// numbering = function () {
//     i = 0;
//     while (i < 10) {
//         document.write(i);
//         i += 1;
//     }
// }
// function numbering() {
//     i = 0;
//     while (i < 10) {
//         document.write(i);
//         i++;
//     }
// }
// numbering();

// (function () {
//     i = 0;
//     while (i < 10) {
//         document.write(i);
//         i++;
//     }
// })();

///////////////////////////

// let tempFruit = 'subak';
// let fruit = ['apple', 'banana', 'kiwi'];

// document.write(fruit);

// function get_fruit(){
//     return ['apple', 'kiwi', 'peach'];
// }

// fruit = get_fruit();
// document.write(' ' + fruit);

// let member =['chris', 'jhon', 'ian']

// var member = ['apple', 'banana', 'kiwi']

let currentSlide = 0;
const slides = document.querySelector(".slides");
const sections = document.querySelectorAll("section");
const totalSlides = sections.length;

let isScrolling = false;

window.addEventListener('wheel', (event) => {

    if (isScrolling) {
        return;
    }
    isScrolling = true;

    event.preventDefault();

    console.log("스크롤 이벤트 확인");



    if (event.deltaY > 0) {
        // 아래로 스크롤 (다음 슬라이드로)
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        }
    } else {
        // 위로 스크롤 (이전 슬라이드로)
        if (currentSlide > 0) {
            currentSlide--;
        }
    }

    // 슬라이드 이동
    slides.style.transition = "transform 0.5s ease-in-out"; // 애니메이션 효과 추가
    slides.style.transform = `translateX(-${currentSlide * 100}vw)`; // 슬라이드 이동

    //스크롤 후
    setTimeout( () => {
        isScrolling = false;
    }, 500); // 0.5초 딜넣기

});


