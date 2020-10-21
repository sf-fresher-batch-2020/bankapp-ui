class Payee {

    add(payee) {
        // adding payee to payees array from local storage or creating not exists
        if (localStorage.getItem("PAYEES")) {
            var addedPayees = JSON.parse(localStorage.getItem("PAYEES"));
        } else {
            var addedPayees = [];
        }
        //push payee to array
        addedPayees.push(payee);
        //store array in LS
        localStorage.setItem("PAYEES", JSON.stringify(addedPayees));
    }

    list() {
        // listing code
    }
}