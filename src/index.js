const numbersTill19 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const dozens = [20, 30, 40, 50, 60, 70, 80, 90];
const numbersTill19_words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const dozens_words= ["twenty", "thirty","forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
let count = 0;

module.exports = function toReadable (number) {
        if (number <= 19) {
         return numberUnder19 (number, count)
        }
        
        if (number>19 && number <100) {
        return numberUnderOneHundred (number, count)
        }

        if (number >=100 && number < 1000) {
        return numberUnderOneThousand (number, count)
        }
}



function numberUnder19 (number, count) {
        for (let i = 0; i <= numbersTill19.length; i++) {
            if (numbersTill19[i]===number) {
                count = i; 
                break
            }
            continue
          }
        return numbersTill19_words[count]
}

function numberUnderOneHundred (number, count) {
    let res="";
    if (number%10 === 0) {
        for (let i = 0; i <= dozens.length; i++) {
            if (dozens[i]===number) {
                count = i
                break
            }
            continue
        }
        return dozens_words[count]
        } else {
            let firstNumber = Math.floor(number/10)
            let secondNumber = numberUnder19(number%10)
            return res=`${dozens_words[firstNumber-2]} ${secondNumber}`

        }
}

function numberUnderOneThousand (number, count) {
let res=""
    if (number%100===0) {  
      return res=`${numberUnder19(number/100)} hundred`
    } else if (number%100<=19) {
        return res=`${numberUnder19(Math.floor(number/100))} hundred ${numberUnder19(number%100)}`
    } else {
        return res=`${numberUnder19(Math.floor(number/100))} hundred ${numberUnderOneHundred(number%100)}`
    }
}


//console.log(toReadable(999))