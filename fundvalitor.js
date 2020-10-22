class fundFormValidator{

    validate(amount,comment){
        if(amount < 0){
            throw "amount should be greater than or equal to zero 0";
        } 
        if(comment == ""){
            throw "comment cannot be empty";
        }
    }
}
