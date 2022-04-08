let numEl1 = document.getElementById("num1-el")
let numEl2 = document.getElementById("num2-el")
let sumEl = document.getElementById("sum-el")


function add(){
  const value = Number(numEl1.value) + Number(numEl2.value);
  sumEl.textContent = `Result = ${value}`;
}

function sub(){
  const value = +numEl1.value - +numEl2.value;
  sumEl.textContent = `Result = ${value}`;
}

function multiplication(){
  const value = eval(numEl1.value) * eval(numEl2.value)
  sumEl.textContent = `Result = ${value}`;
}

function division(){
  const value = +numEl1.value / +numEl2.value;
  sumEl.textContent = `Result = ${value}`;
}

/* Number() and "+" is a string method used to convert a string into a variable (containing number)

eval() is a string method generally used to return both text and numbers to a variable*/
