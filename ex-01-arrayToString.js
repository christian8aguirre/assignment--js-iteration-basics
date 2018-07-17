/**
 * arrayToString()
 *
 * Write a function called `arrayToString` that takes
 *  an array of string values and returns a string with
 *  all of the values combined together.
 *
 *  Example:
 *    var ex1 = arrayToString(['my','arrayToString'array,'is','lina'])
 *    console.log(ex1)
 *        //-> 'mynameislina'
 *
 * You must use a for-loop to solve this problem.
 **/


// ++ Write YOUR CODE Below

function arrayToString(arrayItem) {
    var arrayString ="";
    
    for(var i=0; i<arrayItem.length; i++){
        arrayString += arrayItem[i];
    }
    return arrayString;
}








// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

/*-------------------Output-------------------------*/

var arrayExample2 = ['cool', 'great', 'nice', 'awesome', 'sweet']
var arrayExample3 = ['cool', 'great', 'awesome', 'super']
var arrayExample4 = ['wow', 'great', 'wow', 'neat']

var returnedVal1 = arrayToString(["Hello", "how", "are", "you"])
var returnedVal2 = arrayToString(arrayExample2)
var returnedVal3 = arrayToString(arrayExample3)
var returnedVal4 = arrayToString(arrayExample4)

/*-------------------TEST-1-------------------------*/
//  function accepts array as argument and
//    should return a joined string of the array values
/*--------------------------------------------------*/
console.log("==== ex-01-arrayToString : TEST 1 ====");

console.assert( returnedVal1 === "Hellohowareyou" )

console.assert( returnedVal2 === 'coolgreatniceawesomesweet' )

console.assert( returnedVal3 === 'coolgreatawesomesuper' )

console.assert( returnedVal4 === 'wowgreatwowneat' )

/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');
