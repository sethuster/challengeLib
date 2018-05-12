// You are given an array of coins available in a Vending machine 
const coins = [0.01, 0.05, 0.10, 0.25, 0.50, 1.00]; 

// Devise a function getChange that given an amount (M) and a price (P)
// computes an array of coins to be returned. 
// This function should return the least amount of coins possible.
function getChange(given, cost){
	var change = (given - cost).toFixed(2);
	var returnedCoins = [0, 0, 0, 0, 0, 0];
	for(var i = coins.length - 1; i >= 0; i--){		
		while(change >= coins[i].toFixed(2)){
			returnedCoins[i] += 1;
			change = (change - coins[i]).toFixed(2);
		}
	}

	return returnedCoins;
}

console.log(getChange(5, 0.99)); // [ 1, 0, 0, 0, 0, 4 ]
console.log(getChange(3.14, 1.99)); // [ 0, 1, 1, 0, 0, 1 ]
console.log(getChange(4, 3.14)); // [ 1, 0, 1, 1, 1, 0 ]
console.log(getChange(0.45, 0.34)); // [ 1, 0, 1, 0, 0, 0 ]
