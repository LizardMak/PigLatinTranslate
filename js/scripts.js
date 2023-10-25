window.addEventListener("load", function() {
  document.getElementById("form").addEventListener("submit", latinator);
  
})

function vowelCheck(checklessWords) {
  const textArray = checklessWords.split(" ");
  let newArray = [];
  textArray.forEach(word => {
    if (word.charAt(0) === "a" || word.charAt(0) === "e" || word.charAt(0) === "i" || word.charAt(0) === "o" || word.charAt(0) === "u" || word.charAt(0) === "A" || word.charAt(0) === "E" || word.charAt(0) === "I" || word.charAt(0) === "O" || word.charAt(0) === "U") {
      newArray.push(word + "way")
    } else {
      newArray.push(word);
    }
   
  });
  let returnString1 = newArray.toString();
    let returnString2 = returnString1.replace(/,/g, " ");

    return returnString2
}

function consonantCheck(vowelCheckedWords) {
  const textArray = vowelCheckedWords.split(" ");
  let newArray = [];
  textArray.forEach(word => {
   if (word.charAt(0) === "b" || word.charAt(0) === "B" || word.charAt(0) === "c" || word.charAt(0) === "C" ||word.charAt(0) === "d" || word.charAt(0) === "D" || word.charAt(0) === "f" || word.charAt(0) === "F" ||word.charAt(0) === "g" || word.charAt(0) === "G" ||                                    word.charAt(0) === "h" || word.charAt(0) === "H" || word.charAt(0) === "j" || word.charAt(0) === "J" || word.charAt(0) === "k" || word.charAt(0) === "K" || word.charAt(0) === "l" || word.charAt(0) === "L" || word.charAt(0) === "m" ||                                                                    word.charAt(0) === "M" ||word.charAt(0) === "n" || word.charAt(0) === "N" || word.charAt(0) === "p" || word.charAt(0) === "P" || word.charAt(0) === "q" || word.charAt(0) === "Q" || word.charAt(0) === "r" || word.charAt(0) === "R" || word.charAt(0) === "s" || word.charAt(0) === "S" ||               word.charAt(0) === "t" || word.charAt(0) === "T" || word.charAt(0) === "v" || word.charAt(0) === "V" || word.charAt(0) === "w" || word.charAt(0) === "W" || word.charAt(0) === "x" || word.charAt(0) === "X" || word.charAt(0) === "y" || word.charAt(0) === "Y" || word.charAt(0) === "z" ||            word.charAt(0) === "Z") {
    let consonants = "";
    let newWord = "";
    let stop = 0
    for (let i = 0; i <= word.length && stop != 1; i++) {
      if (word.charAt(i) === "b" || word.charAt(i) === "B" || word.charAt(i) === "c" || word.charAt(i) === "C" || word.charAt(i) === "d" || word.charAt(i) === "D" || word.charAt(i) === "f" || word.charAt(i) === "F" || word.charAt(i) === "g" || word.charAt(i) === "G" || word.charAt(i) === "h" ||       word.charAt(i) === "H" || word.charAt(i) === "j" || word.charAt(i) === "J" || word.charAt(i) === "k"|| word.charAt(i) === "K" || word.charAt(i) === "l"|| word.charAt(i) === "L"|| word.charAt(i) === "m"|| word.charAt(i) === "M" || word.charAt(i) === "n"|| word.charAt(i) === "N"|| word.charAt(i) === "p"|| word.charAt(i) === "P" || word.charAt(i) === "q"|| word.charAt(i) === "Q"|| word.charAt(i) === "r"|| word.charAt(i) === "R"|| word.charAt(i) === "s"|| word.charAt(i) === "S"|| word.charAt(i) === "t"|| word.charAt(i) === "T"|| word.charAt(i) === "v"|| word.charAt(i) === "V"||           word.charAt(i) === "w"|| word.charAt(i) === "W"|| word.charAt(i) === "x"|| word.charAt(i) === "X"|| word.charAt(i) === "y"|| word.charAt(i) === "Y"|| word.charAt(i) === "z"|| word.charAt(i) === "Z") {
        consonants = consonants + word.charAt(i);
      } else {
        let slicedWord = word.slice(i, word.length);
        newWord = slicedWord + consonants + "ay";
        newArray.push(newWord);
        stop = 1;
      }
    }
   } else {
    newArray.push(word);
   };
   let returnString1 = newArray.toString();
   let returnString2 = returnString1.replace(/,/g, " ");
   console.log(returnString2);
  });
}

function latinator(e) {
  e.preventDefault();
  const checklessWords = document.getElementById("textInput").value;
  const vowelCheckedWords = vowelCheck(checklessWords);
  const consonantCheckedWords = consonantCheck(vowelCheckedWords);
}

