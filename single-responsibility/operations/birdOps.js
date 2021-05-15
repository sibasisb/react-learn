/**
 * no interfaces in JS
 * interface segregation principle applies though
 * Bird class has methods like fly,quack and swim
 * what if a subclass does not require all of these methods
 * Penguin cannot quack or fly
 * Hence it is useless for this subtype
 */
// class Bird{
//     fly(){
//         console.log('this bird can fly');
//     }
    
//     quack(){
//         console.log('this bird can quack');
//     }

//     swim(){
//         console.log('this bird can swim');
//     }
// }

// class Duck extends Bird {

// }

// class Penguin extends Bird {
//     fly(){
//         return null
//     }

//     quack(){
//         return null
//     }
// }

// const birdOps=()=>{
//     const duck=new Duck()
//     duck.quack()
//     const penguin=new Penguin()
//     penguin.quack()
// }

/**
 * Bird class contains methods applicable to all
 * Interface is segregated
 */
class Bird{
    swim(){
        console.log('this bird can swim');
    }
}

const fly={
    fly(){
    console.log('this bird can fly');
    }
}

const quack={
    quack(){
    console.log('this bird can quack');
    }
}

class Duck extends Bird {

}
Object.assign(Duck.prototype,fly)
Object.assign(Duck.prototype,quack)


class Penguin extends Bird {

}

const birdOps=()=>{
    const duck=new Duck()
    duck.quack()
    // const penguin=new Penguin()
    // penguin.quack()
}

module.exports=birdOps