let marks = [50, 60, 93, 67, 99, 92.2, 89, 90,100]

let meritList = marks.filter((val)=>{
    return val >= 90
})

console.log(meritList)