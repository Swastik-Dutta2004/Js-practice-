# project related to DOM
# [click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code
## project 1

``` javascript
console.log ('swastik')
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
  console.log(button);
  button.addEventListener('click',function(e){
    console.log (e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id;
    }
  })

```
## project 2 
``` java
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


```

# project 3 solution code

```javascript
const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
},1000)
```

## project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;


if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if(NaN(guess)){
    alert('please enter a valid number')
  }else if(guess<1){
    alert('enter a number that is more than 1')
  }else if(guess>100){
    alert('please enter a number that is less than 100')
  }else{
    prevGuess.push(guess);
    if (numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game over.Random number was ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      cheakGuess(guess)
    }
  }
}
function cheakGuess(guess) {
  if(guess === randomNumber){
    displayMessage('you gussed it wright')
  }else if(guess > randomNumber){
    displayMessage('your numnber is too high')
  }else if(guess < randomNumber){
    displayMessage('your numnber is too low')
  }
}
function displayGuess(guess) {
  
}
function displayMessage(message) {
  //
}
function endGame() {
  //
}
function startGame() {
  //
}

```