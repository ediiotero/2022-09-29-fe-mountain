// Write a function that asks the user for 3 numbers, adds them up and multiply them by 3
// You must check that the users inputs is a number if it isn't alter the user 
// and prompt the user again

const getNumber = () => {
    let currentCount = 0;
    for (let i = 0; i < 3; i++) {
        let question = parseInt(prompt("Pick a number"))

        while(isNaN(question)){
            question = parseInt(prompt("Pick a number"))
        }

        currentCount = currentCount + question
    }

    return currentCount * 3
}

// console.log(getNumber())


// ============================================

// Write a function called 'finishSentence' that takes two inputs an array and a function
// use the list array below
// your callback function called 'combine' should combine two string together and return them
// finishSentence should loop through the given array prompt the user with the questions in the array
// and combine the elements in the array with the word given in the prompt and alert the answer
//*** Bonus: accomplish the same result without the finishSentence function and use an array method

const list = ["My name is ", "I live in ", "My favorite food is "];

const combine = (sentence, word) => {
    return `${sentence} ${word}`
}

const finishSentence = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        const word = prompt(array[i])
        alert(callback(array[i], word))
    }
}

// finishSentence(list, combine)

// ============================================

// Write a Promise
// The promise should prompt the user to guess a number, wait 3 seconds 
// and check to see if the number is greater than or equal to 10
// if its larger resolve the promise
// if its lower reject the promise
// Use the promise to alert "you win" if resolved
// and "you lose" if rejected

const myPromise = new Promise((resolve, reject) => {
    const guess = prompt("Guess a number")
    setTimeout(() => {
        if(guess >= 10) {
            resolve("You win")
        } else {
            reject("You lose")
        }
    }, 3000)
})

myPromise.then(value => alert(value)).catch(value => alert(value))


















// x = 5;
// console.log(x)
// var x;

// y = 6;
// console.log(y)
// let y;
