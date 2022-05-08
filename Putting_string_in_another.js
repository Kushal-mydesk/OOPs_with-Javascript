/**str is the Destination where the secondstring need to be inserted
 * scndstr is the secondstr
 * index is the pos of destination string where it has to be inserted
 */

function insert(str, scndStr, index){
    var result = "";
    if(index > str.length){
        result= str.concat(scndStr);
        return result;
    } else{
        for(let i = 0 ; i<str.length;i++){
            if(i == index){
                result = result.concat(scndStr);
                result = result.concat(str.charAt(i));
                
            }
            else{
                result = result.concat(str.charAt(i));
            }
        }
    }
    return result;
}

let firststr = "c";
let scndstr = "abd";
let index1 = 1;

let result  =  insert(firststr,scndstr,index1);
console.log(result);