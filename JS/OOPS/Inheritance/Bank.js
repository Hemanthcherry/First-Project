class Account{
    AId;
    AName;
    constructor(id,name){
        console.log("parent class constructor");
        this.AId=id
        this.AName=name;
    }
}
class Savings_Account extends Account{
    Min_Bal=500
    constructor(id,name,amount){
        super(id,name)
        console.log("Child class constructor");
        this.amount=amount
}
}
class Current_Account extends Savings_Account{
    Min_Bal=10000
    constructor(id,name,amount){
        super(id,name,amount)
        
    }
}
let c1=new Savings_Account(101,"Hemanth",20000);
console.log(c1);
let c2= new Current_Account(102,"Pavani",20000)

console.log(c2);
