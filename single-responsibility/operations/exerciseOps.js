const ExerciseTracker=require('../scripts/exerciseTracker')
const exerciseOps=()=>{
    const exerciseTracker=new ExerciseTracker()
    exerciseTracker.addHour()
    exerciseTracker.addHour()
}

module.exports=exerciseOps;