// checkbox 하나씩만 선택되게 하기
const checkBoxes = document.querySelectorAll('.project_title');

checkBoxes.forEach(checkBox => {
  checkBox.addEventListener('change', () => {

    checkBoxes.forEach(others => {
      if(others != checkBox){
        others.checked = false;
      }
    })
  })
})










