// let arr = [1, 4, 67, 23]

// arr.forEach(function printVal(val){
//     console.log(val)
// })
//no need to execute the callback function, forEach automatically executes it.

let cities = ["pune", "bangalore", "chennai"]

cities.forEach(function xyz(val){
    console.log(val.toUpperCase())
})
//we use forEach on arrays when we wanna perform something on all elements inside an
//array.