'use strict'

//A fibonnaci like function: takes 2 numbers and make a fibonnacci-like array from them. the third number  specifies the array length.

function fiblike(a, b, count){
	const fibArray=[b,a];
	for(let i=2; i<count; i++){
		fibArray.unshift(fibArray[0]+fibArray[1]);
	}

	return fibArray.reverse();
}


//function which checks if an array of  numbers is  fibonnacci-like.
function fiblikeChecker(arr){
	const [a,b]=arr
	const check=fiblike(a,b,arr.length)
	const isFiblike=arr.every((item,index)=>item==check[index])


	return isFiblike
}

const arr=fiblike(2,3,5)
console.log(arr)
//[ 2, 3, 5, 8, 13 ]
console.log(fiblikeChecker([1,2,3,4,5,5,6]))
//false
console.log(fiblikeChecker(arr))
//true