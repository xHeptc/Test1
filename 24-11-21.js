// 1 užd.
let sum = 0
for (let i = 0; i < 100; i++){
    sum += i
}

console.log(sum)

// 2 užd.
let array = [5, 8, -5, 12, 4]

array.sort((a, b) => {
    if (a > b) {
        return 1
    }
    
    return -1
})

let highest = array[array.length - 1]
console.log(array, highest)

// 3 užd.
let car = {
    make: "Volkswagen",
    model: "Golf",
    year: 2009,
    getInfo: (info) => car[info]
}

console.log(
    `Car make: ${car.getInfo("make")}\n`,
    `Car make: ${car.getInfo("model")}\n`,
    `Car make: ${car.getInfo("year")}`,
)
