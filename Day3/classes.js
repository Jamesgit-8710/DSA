class oops{
    
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    #num(){
        return this.y;
    }

    publicMethod() {
        console.log('This is a public method');
        console.log(this.#num()) // Private function can be accessed within the class
    }


}

obj = new oops(2,5);

console.log(obj.publicMethod())

