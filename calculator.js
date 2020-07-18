let operations = {
  '+': function(a,b) {return a+b},
  '-': function(a,b) {return a-b},
  '*': function(a,b) {return a*b},
  '/': function(a,b) {return a/b}
}

let input = document.getElementById('input');
let numbers = document.querySelectorAll('.numbers div');
let operators = document.querySelectorAll('.operators-container div')
let showResult = false
let lastChar

//To handle when click numbers
numbers.forEach(n => {
  n.addEventListener('click', function(e){
    //case 1 if showResult is false, keep adding number on input
    if(!showResult){
      console.log(e)
      input.innerText += e.target.innerText
    }

    //case 2 if showResult is true and user click on operators, keep adding new input to display

    //case 3 if showResult is true and user click on numbers, clear current display and add new number to display
  })
})




//To handle when click on operators
//case 1 if length on display is 0; ignore the operator

//case 2 if length on display is not 0 but last char is operator, replace that last char operator to new one

//else add operator to display

//To handle clear
let clear = document.getElementById('clear')
clear.addEventListener('click', function(){
  input.innerText = ''
})