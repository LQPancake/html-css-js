function isValid(grade){
    return grade >= 1 && grade <= 5
}
function getLongerWord(word1, word2){
    if(word1.length > word2.length) return word1
    if(word2.length > word1.length) return word2
    return "egyformák"
}
function isOpen(hour) {
    return hour >= 8 && hour < 16
}
function inNegative(numbers){
    for(const number of numbers){
        if (number < 0) return true
    }
}
function dotVowels(letter) {
    
}
module.exports = [isValid, getLongerWord, isOpen, inNegative, dotVowels];