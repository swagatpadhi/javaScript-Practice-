// //for-of loop
//used to iterate over strings and arrays.
// let str = "SwagatPadhi"
// for(let val of str) {
//     console.log(val)
// }

//for-in loop
//used to iterate the keys in the object.
let student = {
    fullName: "swagat",
    age: 20,
    cgpa: 8.2,
    isPass: true
};
console.log(student["cgpa"])
for(let key in student){
    console.log("key= ",key,"value= ",student[key])
}