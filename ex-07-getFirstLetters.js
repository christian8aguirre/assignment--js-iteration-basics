
/**
 * getFirstLetters()
 *
 * Write a function called `getFirstLetters` that takes an array of strings
 * and returns another array of strings with only the first letter
 *
 * Hint: you may want to invoke the `reverseString` function you wrote earlier
 * from the previous queestion
*/


// ++ Write YOUR CODE Below

function getFirstLetters(array) {
    newarray = [];
    for (let i = 0; i < array.length; i++) {
        newarray[i] = array[i].charAt(0);                
    }
    return newarray;
}







// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

/*------------------Sample-Data+Output-------------------------*/

var wordsArrInput1 = ['wow', 'milk', 'howdy', 'sweet', 'bye']
var wordsArrInput2 = ['kayak', 'chair', 'jacket', 'nice!']


let outputArray1 = getFirstLetters(wordsArrInput1)
let outputArray2 = getFirstLetters(wordsArrInput2)


/*-------------------TEST-1-------------------------*/
//  function accepts array and should return an array
//    of strings
/*--------------------------------------------------*/
console.log("==== ex-07-getFirstLetters : TEST 1 ====");
console.assert( Array.isArray(outputArray1) === true )
console.assert( Array.isArray(outputArray2) === true )

//lengths of input array is same as output array
console.assert( outputArray1.length === wordsArrInput1.length )
console.assert( outputArray2.length === wordsArrInput2.length )


/*-------------------TEST-2-------------------------*/
//  function should return first only letter of each element
//     to new array
/*--------------------------------------------------*/
console.log("==== ex-07-getFirstLetters : TEST 2 ====");

// output 1
console.assert( outputArray1[0] === 'w')
console.assert( outputArray1[1] === 'm')
console.assert( outputArray1[2] === 'h')
console.assert( outputArray1[3] === 's')
console.assert( outputArray1[4] === 'b')

// output 2
console.assert( outputArray2[0] === 'k' )
console.assert( outputArray2[1] === 'c' )
console.assert( outputArray2[2] === 'j' )
console.assert( outputArray2[3] === 'n' )

/*-------------------END----------------------------*/
console.log('\n\n');
