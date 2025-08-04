const result = document.getElementById("result");

function check(){
    const word = document.getElementById("text-input").value
    if (word ==""){
        alert("Please input a value")
        return;
    }
     const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    console.log(cleanedWord)
const reverse = cleanedWord.split("").reverse().join("")
    console.log(reverse)
if (cleanedWord ===  reverse){
    result.textContent = `${word} is a palindrome.`
}
else{
     result.textContent = `${word} is not a palindrome.`
}

}