const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];


//   Print out an array of the inventors whose name starts with 'A'.

// let aInventors = inventors.filter((items) => {
//     return items.charAt(0) == 'A'
// })
// console.log(aInventors)

console.log(inventors.filter((item) => item.charAt(0) == 'A'))

//Print out an array of the inventors whose name contains 'n'.

console.log(inventors.filter((letter) => letter.includes("n")))

//Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).

console.log(inventors.filter((letter) => letter.split()))

//Print out an array of the numbers which are odd.

console.log(numbers.filter((odd) => odd%2 != 0 ))

//Print out an array of the numbers that have two digits.

console.log(numbers.filter((digits) => digits >9))

//Print out an array of the numbers which are prime.

// console.log(numbers.filter((prime) => prime >2 && prime % , numbers))   

//Print out the first name of each inventor.
console.log(inventors.map((name) => name.charAt()))

//Print out the length of every inventor's full name.
console.log(inventors.map((long) => long.length -1))

//Print out all the inventors' names in uppercase.
console.log(inventors.map((up) => up.toUpperCase()))

// Print out initials of all inventors(e.g. A.E., I.N., ...)
console.log(inventors.map((fullName) => fullName.split(' ')[0].charAt(0) + '.' + fullName.split(' ')[1].charAt(0)))

//Print out an array of every number multiplied by 100.
console.log(numbers.map((multiplied)=> multiplied *100))

//Sort all the inventors in alphabetical order, A-Z.
console.log(inventors.sort())

//Sort all the inventors in reverse alphabetical order, Z-A.

console.log(inventors.sort((a,b) => b.split(' ')[0].charCodeAt(0) - a.split(' ')[0].charCodeAt(0)))

//Sort all the inventors by length of name, shortest name first.
console.log(inventors.sort((short,shortest) => short.length - shortest.length)) ;

//Sort all the inventors by length of name, longest name first.
console.log(inventors.sort((long,longest) => longest.length - long.length));

//Find the sum of all the numbers.
console.log(numbers.reduce((a,b) => a+b))

//Create a string that has the first name of every inventor

console.log(inventors.reduce((total,name) => (total += name.split(' ')[0]),'')) ;

//Does any inventor have the letter 'y' in their name?
console.log(inventors.some((letterY) => letterY.includes("y")))

//Does every inventor have the letter 'e' in their name
console.log(inventors.every((letterE) => letterE.includes("e")))

//Does every inventor have first name that's longer than 4 characters?
console.log(inventors.every((four) => four.split(' ')[0].length >4))

//Find the inventor that has a middle name.
console.log(inventors.find((middle) => middle.split(' ').length >=3))

//Find the number divisible by 7.
console.log(numbers.find((seven) => seven%7 == 0))

// Bonus: Return a new array, that only has the numbers that are not divisible by 7.
console.log(numbers.filter((seven)=> seven %7 !==0))
