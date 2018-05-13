function checkPalindrome(inputString) {
    // I split the string into an array
    // reverse the array and join that shit back together
    var reverse = inputString.split("").reverse().join("");
	if(inputString === reverse){
        return true;
    } else {
        return false;
    }
}