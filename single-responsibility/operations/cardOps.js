/**
 * Direct coupling between Store and Payment processor class
 * This means any change in Payment processor has to be done on Store class
 * Not good design
 */
// class Store {
//     constructor(user){
//         this.paymentProcessor=new JustPaymentProcessor(user)
//     }

//     makePayment(quantity){
//         this.paymentProcessor.makePayment(quantity)
//     }
// }

// class JustPaymentProcessor {
//     constructor(user){
//         this.user=user
//     }

//     makePayment(quantity){
//         let amount=quantity * 150;
//         console.log(` user ${this.user} is paying ${amount}`);
//     }
// }

// class JustAnotherPaymentProcessor {
//     makePayment(user,quantity){
//         let amount=quantity * 150;
//         console.log(` user ${user} is paying ${amount}`);
//     }
// }

// const cardOps=()=>{
//     const store=new Store("Nick")
//     store.makePayment(30) 
// }

/**
 * Direct coupling between Store and Payment processor class
 * This means any modification in Payment processor has to be done on Store class
 * Not good design
 */
 class Store {
    constructor(user,quantity){
        this.paymentProcessorAbstraction=new PaymentProcessorAbstraction(user,quantity)
    }

    makePayment(){
        this.paymentProcessorAbstraction.makePayment()
    }
}
/**
 * flexible design
 * Store remains unchanged
 */
class PaymentProcessorAbstraction{
    constructor(user,quantity){
        this.paymentProcessor=new JustPaymentProcessor(user)
        this.quantity=quantity
    }

    makePayment(){
        this.paymentProcessor.makePayment(this.quantity)
    }
}

class JustPaymentProcessor {
    constructor(user){
        this.user=user
    }

    makePayment(quantity){
        let amount=quantity * 150;
        console.log(` user ${this.user} is paying ${amount}`);
    }
}

class JustAnotherPaymentProcessor {
    makePayment(user,quantity){
        let amount=quantity * 150;
        console.log(` user ${user} is paying ${amount}`);
    }
}

const cardOps=()=>{
    const store=new Store("Nick",30)
    store.makePayment() 
}

module.exports=cardOps