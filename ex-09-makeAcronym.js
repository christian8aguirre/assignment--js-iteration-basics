/* makeAcronym()
 *
 * Write a function called makeAcronym() that converts a name like Portable Network Graphics to its acronym (PDF).
 * makeAcronym('PNG')  => 'PDF'
 *
**/


// ++ Write YOUR CODE Below

function makeAcronym(text) {
    let acronym = text.charAt(0);
    let flag = false;
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i)===" ") {
            acronym += text.charAt(i+1);
        }
    }
    return acronym.toUpperCase();
}








// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

/*-------------------TEST-1-------------------------*/
//  function accepts string as argument and
//    should return the first character of each word
/*--------------------------------------------------*/
console.log("==== ex-09--makeAcronym : TEST 1 ====");


console.assert( makeAcronym('Portable Document Format') === 'PDF' );
console.assert( makeAcronym('Bring Your Own Beverage') === 'BYOB' )
console.assert( makeAcronym('National Broadcasting Company') === 'NBC' )


/*-------------------TEST-2-------------------------*/
//  function accepts string as argument and
//    should capitalize all letters in the acronym
//    for each word
/*--------------------------------------------------*/
console.log("==== ex-09--makeAcronym : TEST 2 ====");
console.assert( makeAcronym('Department of Defense') === 'DOD' )
console.assert( makeAcronym('Rest in Peace') === 'RIP' )
console.assert( makeAcronym('be right back') === 'BRB' )
console.assert( makeAcronym('in case you missed it') === 'ICYMI' )
console.assert( makeAcronym('if I recall correctly') === 'IIRC' )

/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');
