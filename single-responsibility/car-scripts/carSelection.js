module.exports.Tessla=class Tessla {
    constructor(model,hp,company){
        this.model=model
        this.hp=hp
        this.company=company
    }

    logProperties(){
        console.log(`An electric vehicle from ${this.company} with power ${this.hp}`);
    }
}

module.exports.Marruti=class Marruti {
    constructor(version,mileage,company){
        this.version=version
        this.mileage=mileage
        this.company=company
    }

    logProperties(){
        console.log(`A diesel vehicle frrom ${this.company} with mileage ${this.mileage}`);
    }
}

/**
 *no more changes needed to code this
 *extensible for modification through class functionality 
 * @param {*} car 
 */
const carSelection=(car)=>{
    car.logProperties()
}

module.exports.carSelection=carSelection