class bank{
    Min_Bal=500
    open_Account(){
        console.log("Account opened Successfully");
    }
    Deposit(){
        console.log("Deposited Successfully");
    }
    Withdrawl(){
        console.log("Withdraw Successfully");
    }
    Check_Balance(){
        console.log("Balance");
    }
    Close_Account(){
        console.log("Account Closed Successfully");
    }

}
let a= new bank()
a.Deposit()
a.Withdrawl()
a.Check_Balance()