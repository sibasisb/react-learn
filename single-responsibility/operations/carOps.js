const {carSelection} = require("../car-scripts/carSelection")
const {Tessla} = require("../car-scripts/carSelection")
const {Marruti} = require("../car-scripts/carSelection")
// const cars=[
//     {
//         model:"E series",
//         hp:"100",
//         company:"Tessla"
//     },
//     {
//         version:"M Ignis",
//         mileage:"100",
//         company:"Marruti"
//     }
// ]


/**
 * switch statement or a block of if statements usually violate open/closed principle
 * this block is not closed for modification as any change in input would demand a change in switch cases
 * this should be replaced with classes and modules
 * this allows developer to extend functionality by adding methods in classes
 * and this block remains unchanged
 * open for extensibility, closed for modification
 */
const carOps=()=>{
    const cars=[
        new Tessla("E series","100","Tessla"),
        new Marruti("M Ignis","100","Marruti")
    ]
    cars.forEach(car=>{
        //selection with open/closed principle
        carSelection(car)
        
        // switch(car.company){
        //     case "Tessla":
        //         console.log(`An electric vehicle from ${car.company} with power ${car.hp}`);
        //         break;
        //     case "Marruti":
        //         console.log(`A diesel vehicle frrom ${car.company} with mileage ${car.mileage}`);
        //         break;
        //     default: console.log("invalid choice");
        // }
    })
}

module.exports=carOps