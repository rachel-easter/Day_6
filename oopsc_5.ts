//Inheritance
//THe class reuse the property and methods of hte another class is called inheritance
//Simple Example:
//It uses the extends keyword to inherits
class Parent{

     public money:number;
     constructor(a:number){
        this.money=a;
     }

    fair():void{
        this.money=2000;
        console.log(`I own ${this.money} `);
    }
}

const iobj=new Parent(3000);

iobj.fair();

class Child extends Parent{
//super keyword is used to inherits the constructor
constructor(a:number){
      super(a);
}


    //method Overloading:
    
    
    fair():void{
        this.money=500;
        console.log(`I own ${this.money} from my parent`);
    }
       


}
const cobj=new Child(90);
cobj.fair();



