//A fibonnaci like function: takes 2 numbers and make a fibonnacci-like array from them. the third number  specifies the array length.

function fiblike(a, b, count){
	const fibArray=[b,a];
	for(let i=2; i<count; i++){
		fibArray.unshift(fibArray[0]+fibArray[1]);
	}

	return fibArray.reverse();
}

const arr=fiblike(2,3,5)
console.log(arr)