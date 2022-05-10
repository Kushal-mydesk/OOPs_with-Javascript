// if version A is greater then print 1, if both equal then 0, and if Ver B is greater then -1;
function compareVersions(verA, verB) {
	// Write your code here
	const arr_a = verA.split(".");
	const arr_b = verB.split(".");
	
	if(arr_a[0]>arr_b[0]){
	    return 1;
	}else if(arr_a[0] == arr_b[0]){
	    if(arr_a[1]>arr_b[1]){
	        return 1;
	    }else if(arr_a[1] == arr_b[1]){
	        if(arr_a[2]>arr_b[2]){
	            return 1;
	        }else if(arr_a[2]<arr_b[2]){
	             return -1;
	         }
	        else{
	            return 0;
	        }
	    }
	}else{
	    return -1;
	}
}

    const A = "1.0.2";
    const B = "1.2.3";
    console.log(compareVersions(A,B));





