// 1 užd.
function getSum(a, b) {
    return a + b
}

// Better way:
// const getSum = (a, b) => a + b

const result = getSum(42, 97)
console.log(`Result: ${result}`)

/////////////////////////////////////////

// 2 užd.
const myName = "Alice"

if (myName === "Alice" || myName === "Bob") {
    console.log("Your name is validated!")
} else {
    console.log("Your name isn't Alice or Bob")
}

/* Better way:
const nameComparison = myName === "Alice" || myName === "Bob" 
console.log(nameComparison ? "Your name is validated!" : "Your name isn't Alice or Bob")
*/
/////////////////////////////////////////

// 3 užd.
const year = parseInt(prompt("Input a year: "))

function isLeapYear(yearInput) {
    if ((yearInput % 4 === 0 && yearInput % 100 !== 0) || (yearInput % 400 === 0)) {
        return true
    }

    return false
}

alert(
    isLeapYear(year)
    ? `${year} is a leap year!`
    : `${year} is not a leap year!`
)
