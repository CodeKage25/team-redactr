// function startApp() {
//     // Your entire app should not necessarily be coded inside this 
//     // single function (though there's no penalty for that), 
//     // so create and use/call additional functions from here
  
//     // pls remove the below and make some magic in here!
//     // console.log('make magic in here!');
  
//   //   const header = document.querySelector('h2');
//   //   if(header) {
//   //     header.textContent = 'make some magic here!!';
//   //   }
  
//   };
  
//   // ======= DO NOT EDIT ============== //
//   export default startApp;
//   // ======= EEND DO NOT EDIT ========= //

/*
02- Redactr - Scramble some words from a body of text content
Scenario
Your app is to help people safely share content on social media by scrambling portions of the text they don’t want the world to read/see. A user will write/paste the some content into a form field and then specify the words they need to be scrambled (using another field). Note the user is allowed to specify more than one word (separated by space) to be scrambled.

Outcome
After clicking a “Redact Now” button, the app scans through the original text and replaces the specified words to be scrambled with asterisks (i.e ***)

Advanced features (OPTIONAL- build any, some or all of the following if you feel up to it)
Allow the user specify what to use in replacing the words, so that the app can do the scrambling with what the user provides, be it asterisks, questions marks, dashes, underscores, or even other words
Display some stats like how many words were scanned, how many matched the words to be scrambled, how many characters were scrambled in total, how long it took (in seconds) to complete the scrambling task e.t.c. Feel free to be creative here

*/
// Test Run
// let re = 'the dog is running towards the pole back to the dog again pole';
// let sum = 'dog,pole';
// let replaceWord = 'rat,fence'
// // let str = '*';

// // splitting the required fields for (scrambling and replacing words) and turning them into arrays
// let scrambleWords = sum.split(',');
// console.log(scrambleWords);
// let replacingWord = replaceWord.split(',');
// console.log(replacingWord);

// // checking out the words
// console.log(scrambleWords)
// console.log(replacingWord)
// console.log(re)

// function multiplewords(){
//     // creating two looping tools i.e tag and i(the tag is for scrambleWords(array) and i for the other array)
//     scrambleWords.forEach((tag, i)=>
//     re = re.replace(new RegExp(tag,'g'),replacingWord[i])
// );
//   document.getElementById('secretwords').value = re;
// }
//   multiplewords();



// THE REAL CODE


function multipleWords() {
let re = document.getElementById("sentence").value;
const sum = document.getElementById("word").value;
const replaceWord = document.getElementById("secret-word").value;

const btn = document.getElementById("submit-btn").value;

let scrambleWords = sum.split(",");
let replacingWord = replaceWord.split(",");
  scrambleWords.forEach((tag, i) =>
    re = re.replace(new RegExp(tag, 'g'), replacingWord[i]));
  alert(re)
  document.getElementById("scrambled-word").textContent = re;
}

btn.addEventListener("click", multipleWords());
