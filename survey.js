//PSEUDO

//Sounds like we need to ask question, receive user input and store, later add input to unique paragraph.

//HOW: Ask question by console.logging
//HOW: Receive and store user input by using process.argv

///////////////////////////////////////////////////////////////////////////////////

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Is this TEST question working for you? ) ', (response) => {
  console.log(response);
});