//Iteration 1: Names and Input

let hacker1;
hacker1 = "Gwerborc’h";
console.log(hacker1);
let hacker2;
hacker2 = "Omar";
console.log(hacker2);
//Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
  console.log(`The longest name ${hacker1}.`);
} else if(hacker1.length < hacker2.length) {
  console.log(`The longest name ${hacker2}.`);
} else {
  console.log("The both names are equally long");
}
//Iteration 3: Loops

function letters(chaine) {
  chaine = chaine.toUpperCase();
  let chaine1;
  chaine1 = chaine.split('');
  console.log(chaine1.join('     '));
 }
letters(hacker1);
letters(hacker2);
hacker1 = hacker1.split('').reverse().join('');
console.log(hacker1);
hacker2 = hacker2.split('').reverse().join('');
console.log(hacker2);