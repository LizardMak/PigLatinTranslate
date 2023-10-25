Describe: vowelCheck()

Test: "It will add 'way' to the end of words"
code: vowelCheck("a")
Expected Output: "away"

Test: "It will replace commas and return string as it was with 'way' attached if necessary"
code: vowelCheck("a i")
Expected Output: "away iway"

Describe: consonantCheck()

Test: "It will add first consonants to the end of a word along with 'ay'"
code: checklessWords("a code")
Expected Output: "away odecay"
