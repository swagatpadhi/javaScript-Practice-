let marks = prompt("enter your marks(0-100): ")

if(marks <= 100 && marks >=80) {
    console.log("Grade: A")
}else if(marks <= 79 && marks >= 70){
    console.log("Grade B")
}else if(marks <=69 && marks >= 60){
    console.log("Grade C")
}else if(marks <=59 && marks >= 50){
    console.log("Grade D")
}else if(marks <=49 && marks >= 0){
    console.log("Failed")
}