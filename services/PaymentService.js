class PaymentService 
{
    save = function(obj){
        
        var temp = JSON.parse(localStorage.getItem("PAYMENTS"));
        var paymentList = temp ? temp : [];
        paymentList.push(obj);       
        localStorage.setItem("PAYMENTS", JSON.stringify(paymentList ) );
    }
    
    list = function(){
        var temp = JSON.parse(localStorage.getItem("PAYMENTS"));
        var paymentList = temp ? temp : [];
        return paymentList;
    }

    

}