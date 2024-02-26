<br/>
<p align="center">
  <a href="https://github.com/MUSHFIQUER-RAKIT/javascript-pactice">
    <img src="https://iconape.com/wp-content/files/ez/353342/png/javascript-logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Javascript Practice</h3>

  <p align="center">
Remember, consistent practice and dedication will lead you to JavaScript mastery. Happy coding! 🚀
    <br/>
    <br/>
  </p>
</p>



## Table Of Contents

* [About the Project](#about-the-project)
* [How to Use This Repository](#built-with)
* [Getting Started](#getting-started)
* [Usage](#usage)


## About The Project


Welcome to our JavaScript Practice Repository! This repository is designed to help you improve your JavaScript skills through hands-on coding exercises and challenges. Whether you're a beginner looking to solidify your understanding of JavaScript fundamentals or an experienced developer aiming to sharpen your problem-solving skills
you'll find something valuable here.

## How to Use This Repository

1. Explore the Challenges: Browse through the Challenges directory to find a variety of JavaScript coding challenges sorted by difficulty level.

2. Choose a Challenge: Select a challenge that interests you or aligns with the skills you want to practice.

3. Read the Instructions: Each challenge comes with a README.md file containing a description of the problem, input/output examples, and any additional instructions or constraints.

4. Solve the Challenge: Write your solution code in the provided JavaScript file (usually named solution.js), following the instructions and constraints outlined in the README.md file.

5. Test Your Solution: Use the provided test cases or create your own to verify that your solution works correctly.

6. Review and Reflect: Once you've completed a challenge, take some time to review your solution. Consider ways to improve it or optimize its performance. Reflect on what you've learned from the challenge.

7. Repeat: Challenge yourself with more problems! The more you practice, the more confident and proficient you'll become in JavaScript.

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.



## Usage

> JAVASCRIPT FUNCTION 
<P>It's an example for changing elements with mouse ` Events ` </P>

```js
var body = document.getElementById('body');
var button = document.getElementById('button');

button.onclick = function () {
  if (body.className == 'bgColor') {
    body.className = 'bgColor2';
    button.className = 'white';
  } else {
    body.className = 'bgColor';
    button.className = 'black';
  }
};
```

> Example Of Looping 
<P>Here's An Example To Find Odd And Even Number Using Various Loop</P>

```js
//FOR LOOP
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) document.write(i + '<br>');
}
//WHILE LOOP
let i = 1;
while (i <= 100) {
  document.write(i + '<br>');
  i++;
}
// DO WHILE LOOP
let i = 10;
do {
  document.write(i + '<br>');
  i++;
} while (i <= 5);
//CONFIRM PASSWORD USING PRMOT WINDOW 
{
  let password;
  do {
    password = prompt('What Is The PassCode?');
  } while (password !== 'rakit');
}
```

>Javascript ARRAY
```js
//EXAMPLE OF ARREY
let subject = ['Math ', 'physics ', 'Chemistry ', 'Biology'];

subject.splice(1, 2);
subject.push('NEW ELEMENTS')
document.write(subject + '<br>');
document.write(subject.length);
```
<p>Some Examples of  Array <br>

1. The splice() method in JavaScript is a powerful tool for manipulating arrays. Let’s dive into how it works:

   subject.splice(1, 2);

   What does splice() do?
   The splice() method modifies the contents of an array by:
   Removing existing elements.
   Replacing existing elements.
  Adding new elements in place.

2. The push() method in JavaScript is a handy way to add new items to the end of an array. Let’s explore how it works:

   What does push() do?
   The push() method modifies an array by adding one or more elements to its end.
   It returns the new length of the array after the addition.

3. The pop() method in JavaScript is a powerful tool for manipulating arrays.

4. The unshift() method in JavaScript is a powerful way to add elements to the beginning of an array.
5. The shift() method in JavaScript is a powerful tool for manipulating arrays.
   What does shift() do?
   The shift() method of Array instances removes the first element from an array and returns that removed element.
   This method changes the length of the array.
6. You can blank the value of array using square brackets and length = 0
   ```js
   subject = []
   subject.length=0
   ```
7. If you want to check the position of specific element First you need to create a variable
   ```js
   let position = subject.indexOf('Chemistry');
   ```
8. The split() method in JavaScript is used to divide a string into an array of substrings.
   ```js
   let splitArray = 'My Name Is Mushfiquer Rakit'
   let wordArray = splitArray.split(' ')
   let join = subject.join('---')
   let join = subject.concat(subject2,subject3,subject4)
   document.write(wordArray);
   console.log(wordArray[3]);
   ```
9. The join() method is called on an array and accepts an optional parameter:
separator: This parameter specifies the character or string that separates the array elements in the resulting string.

11. The join() method is called on an array and accepts an optional parameter:
separator: This parameter specifies the character or string that separates the array elements in the resulting string.
</p>

><h1> Javascript Documents Object Model </h1>
GET ELEMENT BY 'ID' NAME
```js
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('header');
headerTitle.innerHTML += ' RAKIT';
header.style.borderBottom = '10px solid white';
```
GET ELEMENT BY 'CLASS' NAME
```js
var items = document.getElementsByClassName('list-item');
items[1].style.color = '#7B0323';
items[3].style.fontWeight = 'bold';
//Need to create for Loop to apply all classes 
for (var i = 0; i < items.length; i++) {
  items[i].innerHTML += '💕';}
```
GET ELEMENT BY 'TAG' NAME
```js
var h4 = document.getElementsByTagName('h4');
h4[0].style.color = '#7B0323';
function Action() {
  var y = document.getElementsByTagName('button');
  y[0].style.backgroundColor = '#7B0323';}
```
DOB EXAMPLE OF QUERYSELECTOR
```js
var order = document.querySelector('.orderList');
var order2 = document.querySelector('.orderList:last-child');
var order3 = document.querySelectorAll('.orderList');
order.style.color = 'red';
order2.style.color = 'green';
order3[2].style.fontWeight = 'bold';

var odd = document.querySelectorAll('.orderList:nth-child(odd)');
for (i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = '#09088d';
  odd[i].style.fontWeight = 'bold';}

var input = document.querySelector('input');
var input2 = document.querySelector('input[type="submit"]');
input.value = 'Enter Your Name';
input2.value = 'CONFIRM';
```
><h1>How to make HTML elements by JavaScript </h1>
Here is an example of adding new DIV by js

Creating div by 'createElement'
```js
var newDiv = document.createElement('div');
```
Adding 'Class' & Adding 'ID' to New DIV
```js
newDiv.className = 'box';
newDiv.id = 'textbox';
```
Create Text  By "createTextNode" & add text to div by "appendChild"
```js
var newDivText = document.createTextNode('This is an example to add DIV on html');
newDiv.appendChild(newDivText);
newDiv.style.fontWeight = 'bold';
```
Need To Create Two 'veriable'
1st on to Carry Newdiv,
2nd On to choose Whice Elements Before It Show.
```js
var container = document.querySelector('#content');
var form = document.querySelector('form');
container.insertBefore(newDiv, form);
```

