const myButton = document.getElementById('btn');
myButton.onclick = function () {
  const name = prompt('Enter your full name.');
  document.getElementById('name').innerText = name;
}

// Variables
const pi = 3.142;
let name = 'Michael Hammond';
let age = 219;
let present = false;
console.log(name);

// Objects
const car = {
  numberPlate: 'GR-345-24',
  model: 'Bentley',
  color: 'pink',
  weight: 50,
  weightUnit: 'KG',
  owner: {
    name: 'Michael Hammond',
    driver: {
      name: 'Fiifi',
      license: '',
    }
  }
}
console.log(car.numberPlate);
console.log(car.owner.driver.name);

car.model = 'Porche';
console.log(car.model);
car.owner.driver.name = 'Elizabeth';
console.log(car.owner.driver.name);
console.log(car);

// Arrays
const tweet1 = {
  text: 'I am learning js today.',
  likes: 5,
  shares: 2,
  retweets: 1
}

const tweet2 = {
  text: 'I am learning arrays today.',
  likes: 8,
  shares: 3,
  retweets: 0
}

const tweets = [];
tweets.push(tweet1);
tweets.push(tweet2);
tweets.length;
tweets;

// Dates
const today = new Date();
today.toString();
today.toLocaleDateString();
today.getHours();

// If/Else
if (today.getHours() >= 16) {
  console.log('Class has ended!');
} else {
  console.log('Class is in session!');
}

// For loop
for (let i = 0; i <= 9; i++) {
  console.log('Notify friends!', i);
}

// Functions
// Defining functions
function login(username, password) {
  if (username == 'mickeymond' && password == '1234') {
    return 'User is logged in!';
  } else if (username != 'mickeymond') {
    return 'Invalid username!';
  } else if (password != '1234') {
    return 'Invalid password!';
  } else {
    return 'Invalid username or password!';
  }
}
// Invoking functions
login('mickeymon', '123');

// Basic Arithmetic
12 + 34;
45 - 16;
7 * 12;
78 / 4;
78 % 4;

37 / 24;
37 % 24;

// Comparison operators
2 === 2;
3 !== 2;
3 !== 3;

//  Built-in Math functions
Math.round(37 / 24);
Math.floor(37 / 24);
Math.ceil(37 / 24);
Math.random();
Math.max(78, 12, 98, 14, 89);

Math.ceil(Math.random() * 1000000);

// Order of operations
1 * 2 + 3 - 4 / 2 + 2 ** 2;

// Handling user inputs
1200 + Number('delete');
Number('delete');

// String concatenation
const firstname = 'Michael ';
const lastname = 'Hammond';
firstname.trim() + ' ' + lastname.trim();

// Template literal
`${firstname.trim()} ${lastname.trim()}`;

// String methods
firstname.length;
lastname.length;
`${firstname.trim()} ${lastname.trim()}`.length;
(firstname.trim() + ' ' + lastname.trim()).length;
firstname.toUpperCase();
lastname.charAt(1);
`${firstname.trim()} ${lastname.trim()}`.charAt(0);
`${firstname.trim().charAt(0)}${lastname.trim().charAt(0)}`;

// String conversion
String(2014);

// Write a function that will add a participant to our Google Classroom
const participants = [];
function addParticipant(email) {
  // Check if email was provided
  if (!email) {
    return 'Email not provided!';
  }
  // Check if email is valid
  if (!email.includes('@')) {
    return 'Invalid email provided!';
  }
  // Add email to the participants;
  participants.push(email);
  // Notify them via mail
  // return response
  return 'Participant added!';
}

addParticipant('mickeymond@yahoo.com');

// Arrays in JavaScript
const alphabets = ['A', 'B', 'C', 'D'];
alphabets;
alphabets.join(' ');
alphabets.join(' ').split(' ');

// Write a function that will take a user with firstname, lastname and return fullname;
const user = {
  firstname: 'Joe',
  lastname: 'Ganner'
}
function fullname(user) {
  return {
    ...user,
    fullname: `${user.firstname} ${user.lastname}`
  }
}

fullname(user);

// Array map
const users = [
  { firstname: 'Linda', lastname: 'Parker' },
  { firstname: 'Mark', lastname: 'Twaine' },
  { firstname: 'Oliver', lastname: 'Queen' },
  { firstname: 'Stephen', lastname: 'Grider' },
  { firstname: 'Elon', lastname: 'Musk' }
]
users.map(fullname);

// Map and return squares of numbers
function square(number) {
  return number ** 2;
}
const numbers = [9, 8, 7, 6]
numbers.map(square);

// Filter and return even numbers
function even(number) {
  return number % 2 === 0;
}
numbers.filter(even);