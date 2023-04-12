//PSEUDO

//Sounds like we need to ask question, receive user input and store, later add input to unique paragraph.

//HOW: Ask question by console.logging or writing?
//HOW: Receive and store user input by using readline >> will ask question and pass answer to next nested callback
//HOW  Reference all answers provided?  Template literals might be best because we'll be logging long string at the end
//HOW: Exit survey?  .close() method?

///////////////////////////////////////////////////////////////////////////////////

const readline = require('readline');         //Require and setup readline

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


//Ask question, input comes back and is stored as the argument for the next callback function. Repeat over and over.  AKA callback hell
rl.question('What is your name?  ', (name) => {
  rl.question('How old are you?  ', (age) => {
    rl.question('What is a mundane activity you are good at?  ', (mundane) => {
      rl.question('What is a quirky activity you enjoy?  ', (quirky) => {
        rl.question('Action you will never do?  ', (never) => {
          rl.question('Something you find boring?  ', (boring1) => {
            rl.question('Something else you find boring?  ', (boring2) => {
              rl.question('Something weird you have done?  ', (weird) => {
                console.log(`My name is ${name}, I am ${age} years old.  A little about me: ${mundane} extraordinaire, semi-professional at ${quirky}, but I have never ${never}. I won't bore you with stories about ${boring1} or ${boring2}, but I might ${weird}.`)
                rl.close();       //End survey program in terminal
              });
            });
          });
        });
      });
    });
  });
});

