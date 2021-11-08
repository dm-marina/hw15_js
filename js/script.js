function padString(str, strLength, char, leftOfRight= true){
    if(str === undefined){
        return 'String "str" is not defined';
    }
    // if(typeof str!=="String"){
    //     return '"str" is not a String';
    // }
    if (strLength === undefined){
        return 'You do not enter the length of the string';
    }
    // if(typeof strLength!== "Number"){
    //     return 'The type of the "strLength" is not number';
    // }
    if (char === undefined){
        return 'You do not choose the symbol';
    }
    // if (typeof char!== "String" ){
    //     return 'Type of "char" should be String';
    // }
    let resultString;
    let difference;
    if(strLength > str.length){
        difference = strLength - str.length;
        
        for(let i=0; i<difference; i++){
            if(leftOfRight===false){
                resultString = char + str; 
            } else if(leftOfRight ===true){
                resultString = str+char;
            } 
        }
    }else{
        resultString = str.substr(0,difference);
    }
    return resultString;
}
console.log(padString('mum', 5, '*'))