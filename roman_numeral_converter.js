function convertToRoman(num) {
    //Turn the number into a string:
    let strNum = num.toString();
    console.log(strNum);
  
  
    //Get length of num string
    let strLength = strNum.length;
    console.log(strLength);
    
    //Define empty output string
    let strOut = '';
  
    //Define 2d array for roman numerals:
    let arabicToRomanArr = [['I', 'IV', 'V', 'IX'], ['X', 'XL', 'L', 'XC'], ['C', 'CD', 'D', 'CM'], ['M']];
  
    //console.log(strLength);
  
    //Loop through the num string
    for (let i = 0; i < strLength; i++) {
  
      //First index for the array to use in each loop:
      let convertArrIndex = strLength - i - 1;
      console.log(convertArrIndex)
  
      //Character converted to a string:
      let digitStr = strNum[i];
      console.log(digitStr);
  
      //Second index:
      let convertArrIndexSecond = 0;
      if (digitStr == 4) {
        convertArrIndexSecond += 1;
      } else if (digitStr == 5) {
        convertArrIndexSecond += 2;
      } else if (digitStr == 9) {
        convertArrIndexSecond += 3;
      }
  
  
      //Get Roman character from array for basic case and case more than 4/less than 9:
      let romanChar = arabicToRomanArr[convertArrIndex][convertArrIndexSecond];
      let romanCharVStart = arabicToRomanArr[convertArrIndex][2];
      console.log(romanCharVStart);
      
      //Multiply for different cases:
      if (convertArrIndexSecond == 0) {
        if (digitStr < 4) {
          for (i = 0; i < digitStr; i++) {
            strOut += romanChar;
            }
        } else if (digitStr > 4 && digitStr < 9) {
          strOut += romanCharVStart
          for (i = 0; i < digitStr - 5; i++) {
            strOut += romanChar;
          }
        }
      } else {
          strOut += romanChar;
        }
      //console.log(strOut)
  
      //Add to out string
      
  
    }
  
  
   console.log(strOut)
   return strOut;
  }
  
  convertToRoman(1);