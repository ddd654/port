const numbers = document.querySelectorAll(".number");
const btn1 = document.querySelector(".btn1");
const resetBtn = document.querySelector('.btn2');

let isAnimating = false;
// 랜덤 숫자 뽑는 기능
btn1.addEventListener("click", () => { //btn1이 클릭되면
  const randomNumbers = [];

  if (isAnimating == true) return;
  //아직은 false 이고

  //이제 true
  isAnimating = true;

  const goodNumbers =new Set();

  while(goodNumbers.size< 6){
    const randomNumbers = Math.floor(Math.random() *45)+1;
    goodNumbers.add(randomNumbers); //set에 숫자 추가하기
  }

  //set을 배열로 변환
  const randomNumbersArray = Array.from(goodNumbers);

  //정렬/
  randomNumbersArray.sort((a, b) => a - b);

  //추가
  // numbers.forEach((num, index) => {
  //   num.textContent = randomNumbers[index];
  // })

  numbers.forEach((num, index) => {
    let count = 0;
    let target = randomNumbersArray[index];

    const interval = setInterval(() => {
      if (count < target) {
        count++;
        num.textContent = count; // 숫자 증가
      } else {
        clearInterval(interval); //목표 숫자엥 도달하면 멈춤
        if (index == numbers.length - 1) {
          isAnimating = false; //완료
        }
      }
    }, 50);
  });



  //btn1 클릭하면 사라지고, resetBtn 나타난다다
  btn1.style.display = "none"; //사라지고
  resetBtn.style.display = "block" //나타난다
})

//resetBtn 클릭하면 사라지고, btn1 나오게
resetBtn.addEventListener('click', () => {
  if (isAnimating == true) return;

  resetBtn.style.display = "none";
  btn1.style.display = "block";

  //리셋 기능
  numbers.forEach(num => {
    num.textContent = "";
    num.style.transform = `translateY(0)`;
  })
})




















