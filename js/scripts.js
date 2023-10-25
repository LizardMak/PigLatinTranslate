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
    let qu = "";
    let qulessWord = "";
    let quStart = "";
    if (word.charAt(0) === "q" && word.charAt(1) === "u") {
      qu = "qu";
      qulessWord = word.slice(2, word.length);
    } else if (word.charAt(0) === "Q" && word.charAt(1) === "U") {
      qu = "QU";
      qulessWord = word.slice(2, word.length);
    } else if (word.charAt(0) === "Q" && word.charAt(1) === "u") {
      qu = "Qu";
      qulessWord = word.slice(2, word.length);
    } else if (word.charAt(0) === "q" && word.charAt(1) === "U") {
      qu = "qU";
      qulessWord = word.slice(2, word.length);
    } else {
      qulessWord = word;
    }
    for (let i = 0; i <= qulessWord.length && stop != 1; i++) {
      if (qulessWord.charAt(i) === "q" && qulessWord.charAt(i+1) === "u") {
        quStart = quStart + "qu";
        qulessWord = qulessWord.slice(i+1, qulessWord.length);
      } else if (qulessWord.charAt(i) === "Q" && qulessWord.charAt(i+1) === "U") {
        quStart = quStart + "QU";
        qulessWord = qulessWord.slice(i+1, qulessWord.length);
      }
      else if (qulessWord.charAt(i) === "Q" && qulessWord.charAt(i+1) === "u") {
        quStart = quStart + "Qu";
        qulessWord = qulessWord.slice(i+1, qulessWord.length);
      }
      else if (qulessWord.charAt(i) === "q" && qulessWord.charAt(i+1) === "U") {
        quStart = quStart + "qU";
        qulessWord = qulessWord.slice(i+1, qulessWord.length);
      }
       if (qulessWord.charAt(i) === "b" || qulessWord.charAt(i) === "B" || qulessWord.charAt(i) === "c" || qulessWord.charAt(i) === "C" || qulessWord.charAt(i) === "d" || qulessWord.charAt(i) === "D" || qulessWord.charAt(i) === "f" || qulessWord.charAt(i) === "F" || qulessWord.charAt(i) === "g" || qulessWord.charAt(i) === "G" || qulessWord.charAt(i) === "h" ||       qulessWord.charAt(i) === "H" || qulessWord.charAt(i) === "j" || qulessWord.charAt(i) === "J" || qulessWord.charAt(i) === "k"|| qulessWord.charAt(i) === "K" || qulessWord.charAt(i) === "l"|| qulessWord.charAt(i) === "L"|| qulessWord.charAt(i) === "m"|| qulessWord.charAt(i) === "M" || qulessWord.charAt(i) === "n"|| qulessWord.charAt(i) === "N"|| qulessWord.charAt(i) === "p"|| qulessWord.charAt(i) === "P" ||qulessWord.charAt(i) === "Q" || qulessWord.charAt(i) === "q" ||qulessWord.charAt(i) === "r"|| qulessWord.charAt(i) === "R"|| qulessWord.charAt(i) === "s"|| qulessWord.charAt(i) === "S"|| qulessWord.charAt(i) === "t"|| qulessWord.charAt(i) === "T"|| qulessWord.charAt(i) === "v"|| qulessWord.charAt(i) === "V"||           qulessWord.charAt(i) === "w"|| qulessWord.charAt(i) === "W"|| qulessWord.charAt(i) === "x"|| qulessWord.charAt(i) === "X"|| qulessWord.charAt(i) === "y"|| qulessWord.charAt(i) === "Y"|| qulessWord.charAt(i) === "z"|| qulessWord.charAt(i) === "Z") {
        consonants = consonants + qulessWord.charAt(i);
      } else {
        let slicedWord = qulessWord.slice(i, qulessWord.length);
        newWord = quStart + slicedWord + consonants + qu + "ay";
        newArray.push(newWord);
        stop = 1;
      }
    }
   } else {
    newArray.push(word);
   };
   let returnString1 = newArray.toString();
   let returnString2 = returnString1.replace(/,/g, " ");
   return returnString2;
  });
}

function latinator(e) {
  e.preventDefault();
  const checklessWords = document.getElementById("textInput").value;
  const vowelCheckedWords = vowelCheck(checklessWords);
  const consonantCheckedWords = consonantCheck(vowelCheckedWords);
}

