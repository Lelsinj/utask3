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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.more-vertical')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
