class AddPayeeValidator {
    validate(name, acc_num, mobile) {
        if (name == null || name == "") {
            throw "Name cannot be empty";
        } else if (name.length <= 4) {
            throw "Name should have at least 5 letters"
        }
        if (acc_num.length <= 9) {
            throw "Account number should be grater then 9 digits";
        }
        if (mobile.length != 10) {
            throw "Mobile number must be of 10 digits long";
        }
    }
}