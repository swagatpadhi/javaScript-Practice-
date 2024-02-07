// function noOfVowels(str) {
//     let vowelCount = 0;
//     let vowels = ["a", "e","i", "o", "u"]
//     for(let char of str) {
//         if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u"){
// vowelCount++;
// }
//         }
//     }
//     console.log(vowelCount)
// }
//  noOfVowels("swagat padhi")

const noOfVowels = (str) => {
  let vowelCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      vowelCount++;
    }
  }
  console.log(vowelCount);
};
