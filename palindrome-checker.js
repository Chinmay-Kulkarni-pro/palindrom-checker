//what I can do is treat the string like an array.
//come back here after learning about the for of loop and write the loop.
function palindrome(str) {
  
  let newVal = "";
 
  for (let i = 0; i<str.length; i++){
    
    if( (str.toUpperCase().charCodeAt(i) >= 48 && 
        str.toUpperCase().charCodeAt(i)<= 57) || 
        (str.toUpperCase(). charCodeAt(i) >= 65 &&
         str.toUpperCase().charCodeAt(i) <= 90) )
    {
      //we've got to add it create a new string.
      newVal = newVal.concat(str[i]);
    }   
  }

  //now that we have the cleaned up string, we can now check 
  //whether it's a palindrom or not, which basically means that we
  //need to check whether the reversed string matches the original
  //cleaned up string.
  //let's again treat the string like an array, and create a new
  //variable to store the string.

  let revString = [];

  for(let j = newVal.length-1; j>=0; j--){
    revString.push(newVal[j])
  }
  if (revString.join("").toUpperCase() === newVal.toUpperCase()){
    return true;
  }
  else{
    return false;
  }
  
}

palindrome("A man, a plan, a canal. Panama");