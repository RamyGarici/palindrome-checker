const result = document.getElementsByClassName("result")[0];

function check(){
    const word = document.getElementById("text-input").value
    const cleanedWord = word.replace(/[_\s]/g, "");
const reverse = word.split("").reverse().join("")

if (cleanedWord ===  reverse){
    result.textContent = `${word} is a palindrome.`
}
else{
     result.textContent = `${word} is not a palindrome.`
}

}