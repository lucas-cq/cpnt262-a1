const circle = document.querySelector('.circle');

const button = document.querySelector('button');

const toggleCircle = function() {

  //console.log(circle);
  circle.classList.toggle('fancy');
}

button.addEventListener('click', toggleCircle);