function convertToRoman(num) {

    //Turn the number into a string:
    let strNum = num.toString();
  
  
    //Get length of num string
    let strLength = strNum.length;
    
    //Define empty output string
    let strOut = '';
  
    //Define 2d array for roman numerals:
    let arabicToRomanArr = [['I', 'IV', 'V', 'IX'], ['X', 'XL', 'L', 'XC'], ['C', 'CD', 'D', 'CM'], ['M']];
  
    //Loop through the num string
    for (let i = 0; i < strLength; i++) {
  
      //First index for the array to use in each loop:
      let convertArrIndex = strLength - i - 1;
  
      //Character converted to a string:
      let digitStr = strNum[i];
      //console.log("Single character/number for this loop: " + digitStr);
  
      //Second index, accounting for special cases:
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
      
      //Multiply for different cases and add to out string:
      if (convertArrIndexSecond == 0) {
        if (digitStr < 4) {
          for (let j = 0; j < digitStr; j++) {
            strOut += romanChar;
            }
        } else if (digitStr > 4 && digitStr < 9) {
          strOut += romanCharVStart
          for (let k = 0; k < digitStr - 5; k++) {
            strOut += romanChar;
          }
        }
      } else if (digitStr == 4 || digitStr == 5 || digitStr == 9){
          strOut += romanChar;
        }
    }
  
  
   console.log(strOut)
   return strOut;
  }
  
  convertToRoman(36);