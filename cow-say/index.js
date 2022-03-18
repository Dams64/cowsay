const school = require('./information');

const cowsay = require("cowsay")
console.log(
    cowsay.say({
      text: `Hello world ! i'm ${school.myName} and my campus is : ${school.campus}`,
      e: "oO",
      T: "U",
    })
  );