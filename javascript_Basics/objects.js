const JSUser = {
    name : "Pavankumar",
    age : 18,
    loggedIn : false,
    fullName : "Pavankumar Karnati",
    email: "pavan@goggle.com",
    location : "Mumbai",
    lastLoggedIn : ["Monday" , "Tuesday", "Saturday"],

    Greeting: function () {
        console.log(`Hello !! My name is ${JSUser["name"]}`);

    },

    Utility : function (num1 , num2){
    console.log(`The Addition of the number is ${num1 + num2}`);
}

}

console.log(JSUser["email"])
console.log(JSUser["fullName"])

console.log(`The name of the javaScript user is ${JSUser["fullName"]}`)
JSUser.Greeting()

JSUser.Utility(5,6)