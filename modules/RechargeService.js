class RechargeService {
    save(obj) {
        var paymentsTemp = JSON.parse(localStorage.getItem("payments"));
        var payments = paymentsTemp ? paymentsTemp : [];
        payments.push(obj);        
        localStorage.setItem("payments", JSON.stringify(payments));
        let result = "success";
        return result;
    }
    list(){
        var paymentsTemp = JSON.parse(localStorage.getItem("payments"));
        var payments = paymentsTemp ? paymentsTemp : [];
        return payments;
    }
}
