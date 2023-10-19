function proportion(total, broken) {
    console.log("The persontage:", (broken * 100 / total).toFixed(2) + "%");
}

let total_cars = 3450000
let broken_cars = 543245

proportion(total_cars, broken_cars)