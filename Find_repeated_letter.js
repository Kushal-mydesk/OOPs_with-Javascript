function findCharCount(str, char) {
	// Write your code here
	
	
	let count=0;
	
	for(let i = 0; i<str.length;i++){
	    if(str[i]  == char || str[i].toUpperCase() == char.toUpperCase() ){
	        count++;
	    }
	}
	return count;
	
	
}


let str = "abcda";
const result = findCharCount(str, 'a');

console.log(result);