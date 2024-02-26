// GET ELEMENT BY 'ID' NAME
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('header');

headerTitle.innerHTML += ' RAKIT';
headerTitle.textContent += ' ✅';
header.style.borderBottom = '10px solid white';

// GET ELEMENT BY 'CLASS' NAME
var items = document.getElementsByClassName('list-item');
items[2].innerHTML += ' , Photo Editing';
items[1].style.color = '#7B0323';
items[3].style.fontWeight = 'bold';

for (var i = 0; i < items.length; i++) {
  items[i].innerHTML += '💕';
}

// GET ELEMENT BY 'TAG' NAME
var h4 = document.getElementsByTagName('h4');
h4[0].style.color = '#7B0323';

function Action() {
  var y = document.getElementsByTagName('button');
  y[0].style.backgroundColor = '#7B0323';
}

// DOB EXAMPLE OF QUERYSELECTOR
var order = document.querySelector('.orderList');
var order2 = document.querySelector('.orderList:last-child');
var order3 = document.querySelectorAll('.orderList');
order.style.color = 'red';
order2.style.color = 'green';
order3[2].style.fontWeight = 'bold';

var odd = document.querySelectorAll('.orderList:nth-child(odd)');
for (i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = '#09088d';
  odd[i].style.fontWeight = 'bold';
}
var even = document.querySelectorAll('.orderList:nth-child(even)');
for (i = 0; i < even.length; i++) {
  even[i].style.backgroundColor = 'yellow';
  even[i].style.fontStyle = 'italic';
}

var input = document.querySelector('input');
var input2 = document.querySelector('input[type="submit"]');
input.value = 'Enter Your Name';
input2.value = 'CONFIRM';

// How to make HTML elements by JavaScript

// Creating div by 'createElement'
var newDiv = document.createElement('div');
// adding CLass
newDiv.className = 'box';
// Add ID
newDiv.id = 'textbox';
//Create Text
var newDivText = document.createTextNode(
  'This is an example to add DIV on html'
);
// add text to div
newDiv.appendChild(newDivText);
newDiv.style.color = 'white';
newDiv.style.textTransform = 'capitalize'
newDiv.style.fontWeight = 'bold'
newDiv.style.backgroundColor = 'purple';
newDiv.style.border = '3px solid black';
newDiv.style.padding = '10px';
newDiv.style.margin = '30px 90px 20px 0px';
/*Need To Create Two 'veriable'
1st on to Carry Newdiv,
2nd On to choose Whice Elements Before It Show*/
var container = document.querySelector('#content');
var form = document.querySelector('form');
container.insertBefore(newDiv, form);
