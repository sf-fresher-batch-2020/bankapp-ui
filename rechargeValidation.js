class rechargeValidation {
    validate( MobileNo, Amount) {
        
        if (Amount <= 0) {
            throw "Amount should be grater than zero";
        }
        if (MobileNo.length != 10) {
            throw "Your MobileNo must be of 10 digits ";
        }
    }
}