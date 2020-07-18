let operations = {
  '÷': function(a,b) {return a/b},
  '×': function(a,b) {return a*b},
  '-': function(a,b) {return a-b},
  '+': function(a,b) {return parseFloat(a)+parseFloat(b)}
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
    console.log('showResult', showResult)
    //case 1 if showResult is false, keep adding number on input
    if(!showResult){
      input.innerText += e.target.innerText
    }

    //case 2 if showResult is true and user click on operators, keep adding new input to display
    if(showResult && operators.indexOf(input.innerText[input.innerText.length-1]) !== -1 ){
      input.innerText += e.target.innerText
      showResult = false
    }
    //case 3 if showResult is true and user click on numbers, clear current display and add new number to display
    if (showResult){
      input.innerText = e.target.innerText
      showResult = false
    }
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
  let currentResults;
  let currentPositionOperator;
  //Check if last text is one of the operations, remove it
  if (operators.indexOf(currentText[currentText.length-1])!==-1){
    let newString = input.innerText.slice(0, input.innerText.length-1)
    currentText = newString
  }
  //Seperate numbers and operations into different arrays
  let numbersArray = currentText.split(/\+|\-|\×|\÷/g);
  let operatorsArray = currentText.replace(/[0-9]|\./g, "").split("");
  //start operations in order from operators (since x and ÷ should start first)
  for (let i of operators){
    while(operatorsArray.indexOf(i) !== -1){
      currentPositionOperator = operatorsArray.indexOf(i);
      currentResult = operations[i](numbersArray[currentPositionOperator],numbersArray[currentPositionOperator+1]);
      numbersArray.splice(currentPositionOperator, 2, currentResult)
      operatorsArray.splice(currentPositionOperator,1)
    }
  }
  input.innerText = numbersArray[0]
  showResult = true;
})