function rotate() {
  var lastChild = document.querySelector('.slider div:last-child').cloneNode()

  /*$('#test').html(lastChild)*/
  document.querySelector('.slider div').classList.remove('firstSlide')
  document.querySelector('.slider div:last-child').remove();
  document.querySelector('.slider').prepend(lastChild)
  document.querySelector(lastChild).addClass('firstSlide')
}

window.setInterval(function(){
  rotate()
}, 4000);
