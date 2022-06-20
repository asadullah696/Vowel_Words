var inputText = document.getElementById("input");
var btnSubmit = document.querySelector(".btn");
var resultDiv = document.querySelector(".result");



var vowelsCounter = () => {
  var str = inputText.value;
  var counter = 0;
str = str.toLowerCase().split("");

str.map((e) => {
  if (e == "a") {
    counter += 1;
  } else if (e == "e") {
    counter += 1;
  } else if (e == "i") {
    counter += 1;
  } else if (e == "o") {
    counter += 1;
  } else if (e == "e") {
    counter += 1;
  } else if (e == "u") {
    counter += 1;
  }
});
return counter;
};

btnSubmit.addEventListener("click", () => {
  if (!inputText.value) {
    alert("Please enter a text")
  } 
  else {
    resultDiv.innerHTML = `
      <p class="mt-4">
        There are <span id="count" class="text-primary fw-bold fs-4">${vowelsCounter()}</span> vowels
        in <span class="text-danger fw-bold fs-4" id="text">${inputText.value}</span>
      </p>`
    inputText.value = "";
  }
});

window.onload = () => {
  inputText.focus();
};


// function addWord(){
  
//   var strConsonants = "";
//   var strVowel = "";
//   var length = inputText.length

//   for(var i = 0; i < length ; i++){
//     if(inputText.charAt(i) == "a" || inputText.charAt[i] == "e" || inputText.charAt[i] == "i" ||
//     inputText.charAt[i] == "o" || inputText.charAt[i] == "u" || inputText.charAt[i] == "A" ||
//     inputText.charAt[i] == "E" || inputText.charAt[i] == "I" || inputText.charAt[i] == "O" ||
//     inputText.charAt[i] == "U" ){
//           inputText.push(strVowel);
          
//     }
//     else{
//           input.push(strConsonants);
      
//     }
//   }

// }
// console.log(addWord)



function addword() {
    var userInput = document.getElementById("input").value;
    var userValue = userInput.toLowerCase();
    var vowels = [];
    var consonants = [];
    var boolean = false;
    
    for(i = 0; i < userValue.length; i++){
        if(userValue[i] === "a" || userValue[i] === "e" || userValue[i] === "i" || userValue[i] === "o" || userValue[i] === "u" ){   
            boolean = true;break;
        }
    }
    if(boolean === true){
        vowels.push(userInput);
    }
    else{
        consonants.push(userInput);
    }
    for(j = 0; j < vowels.length; j++){
        document.getElementById("vowelwords").innerHTML += "<li>"+ vowels[j] + "</li>";
    }
    for(k = 0; k < consonants.length; k++){
        document.getElementById("consonantwords").innerHTML += "<li>"+ consonants[k] + "</li>";
    }
}

// function savedword(){
//   var dataSaved = document.getElementById("input"); 
//   var saved = "";
//   dataSaved.push(saved);
//   document.getElementById("showsaved").innerHTML = saved; 
// }

