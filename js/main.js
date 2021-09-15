// var fizzBuzz = Number(prompt("Istalgan raqam kiriting..."));
var elFizzBuzzForm = document.querySelector('.js-fizzbuzz-form');
var elFizzBuzzFormInput = elFizzBuzzForm.querySelector('.js-fizzbuzz-form-input');
var elFizzBuzzFormResult = elFizzBuzzForm.querySelector('.js-fizzbuzz-form-result');

function chekFizzBuzz () {
  var userNumber = Number(elFizzBuzzFormInput.value);

  if (userNumber % 3 === 0 && userNumber % 5 === 0) {
    elFizzBuzzFormResult.textContent = 'FizzBuzz';
  }else if (userNumber % 3 === 0) {
    elFizzBuzzFormResult.textContent = 'Fizz';
  }else if (userNumber % 5 === 0) {
    elFizzBuzzFormResult.textContent = 'Buzz'
  }else{
    elFizzBuzzFormResult.textContent = userNumber;
  }
}

if (elFizzBuzzForm) {
  elFizzBuzzForm.addEventListener('submit', function (evt) {
    evt.preventDefault();


    chekFizzBuzz();
  });
}