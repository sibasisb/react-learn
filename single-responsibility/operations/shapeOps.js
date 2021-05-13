

/**
 * this violates liskov substitution
 * Square type is not able to replace Rectangle type
 */
class Rectangle{

    constructor(width,height){
        this.width=width
        this.height=height
    }

    setWidth(width){
        this.width=width
    }

    setHeight(height){
        this.height=height
    }

    findArea(){
        let area=this.width* this.height;
        console.log(`Area: ${area}`);
    }

}

class Square extends Rectangle{
    
    setWidth(width){
        this.width=width
        this.height=width
    }

    setHeight(height){
        this.height=height
        this.width=height
    }

}

const increaseWidthOfRectangle=(rectangle)=>{
    rectangle.setWidth(rectangle.height + 1)
}

module.exports=()=>{
    const square=new Square(5,5)
    const rectangle=new Rectangle(5,5)
    increaseWidthOfRectangle(square)
    increaseWidthOfRectangle(rectangle)
    rectangle.findArea()
    square.findArea()
}