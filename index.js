// const { result } = require("lodash");

let btn = document.querySelector('.submit-btn');
const code = document.querySelector('.code-is-ready');
// function display(){
//     let match = document.querySelector('.matches')

//     let mad = document.querySelector('.words')

    
//     let re = document.querySelector('.name').value;
//     let sum = document.querySelector('.scramble').value;
//     let replaceWord = document.querySelector('.replace').value;

    
//     let result = document.querySelector('#scrambled-word');
//     result.style.backgroundColor = 'green';
//     result.style.color = 'white';
// // splitting the required fields for (scrambling and replacing words) and turning them into arrays
//     let sentence = re.split(' ')
//     let scrambleWords= sum.split(',')
//     let replacingWord = replaceWord.split(',')

//     scrambleWords.forEach((tag, i)=>
//     re = re.replace(new RegExp(tag,'g'),replacingWord[i]));
    
//     match.textContent = scrambleWords.length;
//     mad.textContent = sentence.length;
//     result.textContent = re;
    // alert(re)
    // alert(sentence.length)
    // alert(scrambleWords.length)
    
// }
// let startTime = performance.now();
btn.addEventListener('click', function display(e) {
    e.preventDefault();
    // this ma
    let match = document.querySelector('.matches')
    let mad = document.querySelector('.words')

    
    let re = document.querySelector('.name').value;
    let sum = document.querySelector('.scramble').value;
    let replaceWord = document.querySelector('.replace').value;

    
    let result = document.querySelector('#scrambled-word');
    result.style.backgroundColor = 'green';
    result.style.color = 'white';
    // splitting the required fields for (scrambling and replacing words) and turning them into arrays
    let sentence = re.split(' ')
    let scrambleWords = sum.split(',')
    let replacingWord = replaceWord.split(',')

    scrambleWords.forEach((tag, i) =>
        re = re.replace(new RegExp(tag, 'g'), replacingWord[i]));
    
    match.textContent = scrambleWords.length;
    mad.textContent = sentence.length;
    result.textContent = re;

    
    
    // btn.addEventListener('click', countWords);
    

    
});

const countWords = redactedWords => {
        let count = 0;
        redactedWords.forEach(word => {
            let regexExp = new RegExp(word, 'gi');
            count += re.value.match(regexExp).length;
        })
        code.textContent = count;
        return count;
        
    }

console.log()

const countChar = Words => {
  let count = 0;
    Words.forEach(word => {
    let regexExp = new RegExp(word, "gi");
    (content.value).match(regexExp).forEach(char => {
      matchCount += char.length;
    })
  });
  return count;
}

const scannedWords = str => {
  return getWords(str.value).length;
}

// let endTime = performance.now();
// console.log(`It took ${endTime - startTime} millisecond`);



// const display = function () {
    
// }