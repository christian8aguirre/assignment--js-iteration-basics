
/**
 * simpOrSamp()
 *
 * Write a function called `simpOrSamp` that takes an array of string values as input
 * and returns an array of modified string values:
 *
 * If an element in the array is less than 6 characters, append 'Sampson': e.g. "Homer Sampson"
 *
 * If an element in the array is 6 characters or longer, append 'Simpson': 'Jessica Simpson'
 *
 * Example:
 *    var ex2 = arrayToString(['Ben','Janet','Kristy'])
 *    console.log(ex2)
 *        //-> ['Ben Sampson', 'Janet Sampson', 'Kristy Simpson']
 *
*/


// ++ Write YOUR CODE Below

function simpOrSamp(array) {
    newarray = [""];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length < 6) {
            newarray[i] = array[i] + " Sampson";
        } else{
            newarray[i] = array[i] + " Simpson";
        }
    }
    return newarray;
}









// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

var namesList_1 = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]

var namesList_2 = [
    "Maria",
    "Guadalupe",
    "Angelica",
    "Rodrigo",
    "Juan",
    "Jose"
]

var modifiedNamesList1 = simpOrSamp(namesList_1)
var modifiedNamesList2 = simpOrSamp(namesList_2)

/*-------------------TEST-1-------------------------*/
//  function accepts array as argument and
//    should return an array (of strings...).
/*--------------------------------------------------*/

console.log("==== ex-08-simpOrSamp : TEST 1 ====");

console.assert( Array.isArray(modifiedNamesList1) === true )
console.assert( Array.isArray(modifiedNamesList2) === true )

// Arrays are same length?
console.assert( modifiedNamesList1.length === namesList_1.length)
console.assert( modifiedNamesList2.length === namesList_2.length)


/*-------------------TEST-2-------------------------*/
// Checks that the array elements less than 6 characters
//   have '«arrayVal» Sampson' returned in the new array
/*--------------------------------------------------*/
console.log("==== ex-08-simpOrSamp : TEST 2 ====");

// output from simpOrSamp(namesList_1)
//   -- these values should be in returned array, `modifiedNamesList1`
console.assert( modifiedNamesList1.indexOf('Homer Sampson') >= 0 )
console.assert( modifiedNamesList1.indexOf('OJ Sampson') >= 0)
console.assert( modifiedNamesList1.indexOf('Bart Sampson') >= 0)
console.assert( modifiedNamesList1.indexOf('Maggie Simpson') >= 0)
console.assert( modifiedNamesList1.indexOf('Jessica Simpson') >= 0)

// output from simpOrSamp(namesList_1)
//   -- these values should be in returned array, `modifiedNamesList2`
console.assert( modifiedNamesList2.indexOf('Juan Sampson') >= 0)
console.assert( modifiedNamesList2.indexOf('Jose Sampson') >= 0)
console.assert( modifiedNamesList2.indexOf('Maria Sampson') >= 0)
console.assert( modifiedNamesList2.indexOf('Angelica Simpson') >= 0)
console.assert( modifiedNamesList2.indexOf('Rodrigo Simpson') >= 0 )


/*-------------------TEST-3-------------------------*/
// Checks that the array elements less than 6 characters
//   have '«arrayVal» Sampson' returned in the new array
/*--------------------------------------------------*/
console.log("==== ex-08-simpOrSamp : TEST 3 ====");

// 'Homer Simpson', 'Maggie Sampson' from namesList_1
//    should NOT be in returned array
console.assert( modifiedNamesList1.indexOf('Homer Simpson') === -1 )
console.assert( modifiedNamesList1.indexOf('Maggie Sampson') === -1)

// 'Rodrigo Sampson', 'Juan Simpson', 'Jose Simpson' from namesList_2
//    should NOT be in returned array
console.assert( modifiedNamesList2.indexOf('Jose Simpson') === -1)
console.assert( modifiedNamesList2.indexOf('Juan Simpson') === -1 )
console.assert( modifiedNamesList2.indexOf('Rodrigo Sampson') === -1 )

/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');
