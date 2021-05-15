

/**
 * this violates liskov substitution
 * makeBirdFly takes Bird type object
 * should be replaceable by its subtypes
 * Duck instance meets criteria
 * Penguin instance does not
 * Watch out for too many overriding methods
 * That means code from parent class not reusable
 */
// class Bird{

//     fly(){
//         console.log(`This bird can fly`);
//     }

// }

// class Duck extends Bird{
    
//     quack(){
//         console.log('This bird can quack');
//     }

// }

// class Penguin extends Bird{
    
//     fly(){
//         throw new Error("This bird cannot fly")
//     }

//     swim(){
//         console.log('This bird can swim');
//     }

// }

// const makeBirdFly=(bird)=>{
//     bird.fly()
// }

// module.exports=()=>{
//     const duck=new Duck()
//     makeBirdFly(duck)
//     const penguin=new Penguin()
//     makeBirdFly(penguin)
// }


/**
 * this does not violate liskov substitution
 * makeFlyingBirdFly takes FlyingBird type object
 * should be replaceable by its subtypes
 * Duck instance meets criteria
 * Penguin instance meets criteria for SwimmingBird
 * Watch out for too many overriding methods
 * That means code from parent class not reusable
 */
 class FlyingBird{

    fly(){
        console.log(`This bird can fly`);
    }

}

class SwimmingBird{

    swim(){
        console.log(`This bird can swim`);
    }

}

class Duck extends FlyingBird{
    
    quack(){
        console.log('This bird can quack');
    }

}

class Penguin extends SwimmingBird{
    
    fly(){
        throw new Error("This bird cannot fly")
    }

}

const makeSwimmingBirdSwim=(swimmingBird)=>{
    swimmingBird.swim()
}

const makeFlyingBirdFly=(flyingBird)=>{
    flyingBird.fly()
}

module.exports=()=>{
    const duck=new Duck()
    makeFlyingBirdFly(duck)
    const penguin=new Penguin()
    makeSwimmingBirdSwim(penguin)
}