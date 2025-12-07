const instaUser = {
    email:"pkk@gmail.com",
    fullName : {
        firstName : "Pavankumar",
        middleName : "Srinivas",
        lastName : "Karnati"
    }
}
console.log(instaUser.fullName.firstName);
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = Object.assign(obj1, obj2)
console.log(obj3)

console.log(Object.keys(instaUser));

console.log(Object.values(instaUser));