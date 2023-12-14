//Abstract class:
//we cannot create an object for the class
//we cannot implement the method definition
//it all be done in its derived class
abstract class Shape{
    Name:string;
    Color:string;
    constructor(n:string,c:string){
        this.Name=n;
        this.Color=c;
    }
    abstract calculateArea():number;

}
class Circle extends Shape{
    raduis:number;
    constructor(a:number,n:string,c:string){
        super(n,c);

        this.raduis=a;
    }
    calculateArea(): number {
        return 3.14*this.raduis*this.raduis;
        
    }
}
const obj1=new Circle(2,"Circle","Blue");
let res:number=obj1.calculateArea();
console.log(res);
