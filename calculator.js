let operations = {
  '+': function(a,b) {return a+b},
  '-': function(a,b) {return a-b},
  '×': function(a,b) {return a*b},
  '÷': function(a,b) {return a/b}
}
let operators = Object.keys(operations)
let input = document.getElementById('input');
let numbersDiv = document.querySelectorAll('.numbers div');
let operatorsDiv = document.querySelectorAll('.operators-container div')
let showResult = false
let lastChar

//To handle when click numbers
numbersDiv.forEach(n => {
  n.addEventListener('click', function(e){
    //case 1 if showResult is false, keep adding number on input
    if(!showResult){
      input.innerText += e.target.innerText
    }

    //case 2 if showResult is true and user click on operators, keep adding new input to display

    //case 3 if showResult is true and user click on numbers, clear current display and add new number to display
  })
})




//To handle when click on operators
operatorsDiv.forEach(o => {
  o.addEventListener('click', function(e){
    lastChar = input.innerText[input.innerText.length-1]
    //case 1 if length on display is 0; ignore the operator
    if(input.innerText.length === 0){
      input.innerText = '';
    //case 2 if length on display is not 0 but last char is operator, replace that last char operator to new one
    } else if (input.innerText.length !== 0 && operators.indexOf(lastChar) !== -1 ){
      let newString = input.innerText.slice(0, input.innerText.length-1)
      input.innerText = newString + e.target.innerText
    //case 3 add operator to display
    } else { 
      input.innerText += e.target.innerText
    }
  })
})


//To handle clear
let clearDiv = document.getElementById('clear')
clearDiv.addEventListener('click', function(){
  input.innerText = ''
})

//To handle result
let resultDiv = document.getElementById('equals')
resultDiv.addEventListener('click', function(){
  let currentText = input.innerText
  //Check if last text is one of the operations, remove it
  if (operators.indexOf(currentText[currentText.length-1])!==-1){
    console.log('in here', operators.indexOf(currentText[currentText.length-1]))
    let newString = input.innerText.slice(0, input.innerText.length-1)
    currentText = newString
  }
  //Seperate numbers and operations into different arrays
  console.log(currentText)
  let numbersArray = currentText.split(/\+|\-|\×|\÷/g);
  let operatorsArray = currentText.replace(/[0-9]|\./g, "").split("");
  console.log(numbersArray)
  console.log(operatorsArray)
})