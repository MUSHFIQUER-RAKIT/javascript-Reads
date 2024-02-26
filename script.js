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

document.getElementById('img1').addEventListener('mouseover', function () {
  this.style.filter = 'grayscale(0%)';
});
document.getElementById('img1').addEventListener('mouseout', function () {
  this.style.filter = 'grayscale(100%)';
});

// window.addEventListener('scroll', function () {
//   if (this.window.pageYOffset > 400) {
//     this.document.body.style.background = 'green';
//   } else {
//     this.document.body.style.background = 'gray';
//   }
// });

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) document.write(i);
}

// let i = 1;
// while (i <= 100) {
//   document.write(i + '<br>');
//   i++;
// }

let i = 10;
do {
  document.write(i + '<br>');
  i++;
} while (i <= 5);

// {
//   let password;
//   do {
//     password = prompt('What Is The PassCode?');
//   } while (password !== 'rakit');
// }

//EXAMPLE OF ARREY

// let subject = ['Math', 'physics', 'Chemistry', 'Biology'];
// let join = subject.join('---');
// document.write(join);

// subject.splice(1, 1);
// document.write(subject + '<br>');
// document.write(subject.length);

// let splitArray = 'My Name Is Mushfiquer Rakit';
// let wordArray = splitArray.split(' ');
// document.write(wordArray);
// console.log(wordArray[3]);

document.write('<br>');
document.write('<br>');

//Objects in JavaScript

// let person = {
//   firstName: 'Mushfiquer',
//   lastName: 'Rakit',
//   fullName: function () {
//     return this.firstName + ' ' + this.lastName;
//   },
//   age: 20,
//   hobbies: ['Coding', 'Gaming', 'Bike Raiding', 'Traveling'],
// }

// for (let check in person) {
//   document.write(check + ': ' + person[check] + '<br>');
// }

//~~~~~~~~~~~~ MATH IN JAVASCRIPT~~~~~~~~~
var x = Math.max(100, 200, 300, 400, 500);

document.write(x);

document.write('<br>');
document.write('<br>');

var d = new Date('January 10 2008');
d.setFullYear(2010);
document.write(d.toDateString());
