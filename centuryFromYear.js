// Given a year - determine the century that year takes place
// Century starts at 1 through 100 (1900 is 19th century - 1901 is 20th)
function centuryFromYear(year) {
	var century;
    if(year % 100 === 0){
        century = year / 100;
    } else {
        //year might be like 19.05 - so 20th century
        century = ((year / 100) | 0) + 1;
    }
    return century;    
}