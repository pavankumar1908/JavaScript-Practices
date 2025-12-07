// without Parameter

// function Greeting(){
//     console.log("Heyyy !! Pavankumar here")
// }

// with Parameter
// function Addition (number1,number2){
//     return number1 + number2
// }

 

// Greeting()
// console.log(Addition(5,6))

function usercardtotal(... num1){
    return num1
} 
console.log(usercardtotal(200,500,7000,512,846451,51541));


const User = {
    username : "Pavankumar",
    password : 7896544123,
    email : "pkk@gmil.com",
}
function handleObjects(getObject){
    return(`The username is ${getObject.username} and the password is ${getObject.password} and the email is ${getObject.email}`)
}

console.log(handleObjects(User))


