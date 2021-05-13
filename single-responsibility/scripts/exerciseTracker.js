const logHours=require('./logHours')
/**
 * applying single responsibility principle by keeping logging as separate module
 * this module adds hours and resets hours
 * logging values can be general to other modules
 * not part of this module's responsibility 
 */
module.exports=
class ExerciseTracker{
    
    constructor(){
        this.hours=0
    }

    addHour=()=>{
        this.hours=this.hours + 1
        logHours(this.hours)
    }

    reset=()=>{
        this.hours=0
    }

}
