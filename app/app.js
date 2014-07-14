/* global prompt:true */

'use strict';

var dog = {};

dog.name = 'fido';
dog.age = 3;
dog.gender = 'male';
dog.breed = 'labrador';

console.log(dog);

var dog2 = {name:'sam', age:4};

console.log(dog2);

// Exercise 1

var prompt = require('sync-prompt').prompt;

var name = prompt('Dog Name: ');
var age = prompt('Dog Age: ');
var breed = prompt('Dog Breed: ');

age = parseInt(age);

var dog3 = {name:name, age:age, breed:breed};
console.log('your dog 3 is', dog3);

// Exercise 2

var dogs = [];
var option = prompt('(d)og or (q)uit: ');
while(option !== 'q'){
  name = prompt('Dog Name: ');
  age = prompt('Dog Age: ');
  breed = prompt('Dog Breed: ');

  dog = {name:name, age:age, breed:breed};
  dogs.push(dog);

  option = prompt('(d)og or (q)uit: ');
}

console.log(dogs);

