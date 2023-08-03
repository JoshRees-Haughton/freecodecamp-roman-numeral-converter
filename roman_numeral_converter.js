function convertToRoman(num) {
    //Turn the number into a string:
    let strNum = num.toString();
  
    //Get length of num string
    let strLength = strNum.length
    //console.log(strLength)
  
    //Define empty output string
    let strOut = ''
  
    //Define map to link to other maps:
  
    /*Define maps of Arabic values and Roman numerals for each power of ten:
    const arabicToRomanThousand = new Map([
    ["1000", 'M']
  ]);
    const arabicToRomanHundred = new Map([
    ["900", 'CM'],
    ["500", 'D'],
    ["400", 'CD'],
    ["100", 'C']
  ]);
    const arabicToRomanTen = new Map([
    ["90", 'XC'],
    ["50", 'L'],
    ["40", 'XL'],
    ["10", 'X']
  ]);
    const arabicToRomaOne = new Map([
    ["9", 'IX'],
    ["5", 'V'],
    ["4", 'IV'],
    ["1", 'I']
  ]);
  */
  
  
    //Loop through the num string
    for (let i = 0; i < strLength; i++) {
  
      //Convert digit into roman char based on index
      let digitDec = strNum[i] * (10 ** (strLength - i - 1));
      console.log(digitDec)
  
      //Break down into individual units:
  
      //Converts from the decimal to the string:
      let digitDecString = digitDec.toString()
      console.log(digitDecString)
  
      //Gets the value from the map:
      let romanChar = arabicToRoman.get(digitDecString)
      console.log(romanChar)
      //Add to out string
      
    }
  
  
    console.log(strNum)
   return strOut;
  }
  
  convertToRoman(36);