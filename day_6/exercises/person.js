/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(clothes, goodMood) {
  this.clothes = clothes;
  this.goodMood = goodMood;
  }
addClothes() {
  this.clothes = "New Clothes";
  }
changeMood() {
  this.goodMood = true;
  }
};

var sue = new Person("Old Clothes", false);

sue.addClothes();
sue.changeMood(true);

console.log(sue.clothes);
console.log(sue.goodMood);
