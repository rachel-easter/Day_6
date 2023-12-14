//static property an methods
//built -in library:
//Math-which has static property and methods namely-Math.PI and round() methods

//Example:
//static keyword is used to declare methods and property

//It cannot be accessed by object
//It can be accessed by its class Name

class Things{
    static Name:string;
    static price:number=2;
    static Details(a:number):number{
        this.Name="Pencil";
        this.price=a*this.price;
        return this.price;

    }
}

var res=Things.Details(10);//10-total pencil.
console.log(`The Price of ${Things.Name} is ${Things.price} `);
//It cannot be accessed by:
/*const ob=new Things();
ob.Details(10); -invalid*/
