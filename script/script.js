const toggleBtn = document.querySelector('#task');
const toggleBtnOverlay = document.querySelector('#task-overlay');
const divList = document.querySelector('.overlay');

//overlay visible
toggleBtn.addEventListener('click', () =>{
  if(divList.style.display === 'none'){
    divList.style.display = 'block';
  }else {
    divList.style.display = 'none';
  }
});

toggleBtnOverlay.addEventListener('click', () =>{
  if(divList.style.display === 'none'){
    divList.style.display = 'block';
  }else {
    divList.style.display = 'none';
  }
});

//add task



// create new task chart

