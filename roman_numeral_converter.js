function convertToRoman(num) {
    //Turn the number into a string:
    let strNum = num.toString();
  
    //Get length of num string
    let strLength = strNum.length;
    //console.log(strLength)
  
    //Define empty output string
    let strOut = '';
  
    //Define 2d array for roman numerals:
    let arabicToRomanArr = [['I', 'IV', 'V', 'IX'], ['X', 'XL', 'L', 'XC'], ['C', 'CD', 'D', 'CM'], ['M']];
  
  
  
    //Loop through the num string
    for (let i = 0; i < strLength; i++) {
  
      //Convert digit into roman char based on index:
      //Index of the coverting array to use in each loop:
      let convertArrIndex = strLength - i - 1;
  
      //Character converted to a string:
      let digitStr = strNum[i]
      console.log(digitStr)
  
      //Get Roman character from array for basic case:
      let romanCharOne = arabicToRomanArr[convertArrIndex][0]
      console.log(romanCharOne)
      
  
      //Add to out string
      
    }
  
  
    //console.log(strNum)
   return strOut;
  }
  
  convertToRoman(36);