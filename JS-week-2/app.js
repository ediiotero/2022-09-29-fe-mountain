// var age = prompt("What is your age?")
// var firstName = prompt("What is your name?")

// var isHungry = confirm("Are you hungry?")
// alert(firstName + " hungry? " + isHungry)

// console.log(isHungry)

// for(let i = 0; i <= 5; i++) {
//     console.log(i)
// }

// if(age >= 15 && age <= 18) {
//     alert('you can learn to drive')
// } else if (age > 18) {
//     alert('you can take your driving test')
// } else {
//     alert("you can't drive")
// }

// switch(true) {
//     case age >= 15 && age <= 18:
//         alert('you can learn to drive')
//         break;
//     case age > 18:
//         alert('you can take your driving test')
//         break;
//     default:
//         alert("you can't drive")
// }

// var grade = prompt("Enter grade")
// console.log(grade.toUpperCase())
// switch(grade.toUpperCase()){
//     case 'A':
//         alert('Score of 90-100');
//         break;
//     case 'B':
//         alert('Score of 80-89');
//         break;
//     case 'C':
//         alert('Score of 70-79');
//         break;
//     case 'D':
//         alert('Score of 60-69');
//         break;
//     default:
//         alert('Score of under 60')
// }

// var question = confirm("Would you like to start?")
// var list = []

// while(question === true && list.length < 3){
//     if(list.length === 0) alert("starting the app")
//     var colorQuestion = prompt("Give me a color")
//     list.push(colorQuestion)

//     if(list.length === 3) {
//         console.log(list)
//     }
// }

// var count = 0;

/*
while(count <= 5) {
    console.log('This count is at ' + count)
    count++
}

do{
    count+=2
    console.log(count)
} while(count <= 5)
*/

// Make a loop that will console.log even numbers 1-10

for(var i = 1; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}