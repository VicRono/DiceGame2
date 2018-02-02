"use stricts";
function diceRoll(){
	var dice = Math.floor(Math.random()*4);
	var dice1 = Math.floor(Math.random()*6);
	var dice2 = Math.floor(Math.random()*8);
	var dice3 = Math.floor(Math.random()*12);
	var dice4 = Math.floor(Math.random()*20);
	let totalOfRolls = 0;
	let diceArray = [dice, dice1, dice2, dice3, dice4];
	for(let i=0; i < diceArray.length; i++){
		// console.log(diceArray[i]);
		totalOfRolls += diceArray[i];

	}
	return totalOfRolls;
}
let p1Total = diceRoll();
let p2Total = diceRoll();

console.log("P1's total is: " + p1Total);
console.log("P2's total is: " + p2Total);






// Dice game with 6 dice [4, 6, 8, 10, 12, 20] (use an array to store the dice numbers)
// each player rolls all six dice and totals up the rolls (for loop to loop over diceArray)
// highest roll total wins!