class PayeeService 
{
    save = function(payeeObj){
        
        var temp = JSON.parse(localStorage.getItem("PAYEES"));
        var payeeList = temp ? temp : [];
        payeeList.push(payeeObj);       
        localStorage.setItem("PAYEES", JSON.stringify(payeeList ) );
    }
    
    list = function(){
        var temp = JSON.parse(localStorage.getItem("PAYEES"));
        var payeeList = temp ? temp : [];
        return payeeList;
    }

    listMyPayees  = function(userId){
        var temp = JSON.parse(localStorage.getItem("PAYEES"));
        var payeeList = temp ? temp : [];
        var filteredList = payeeList.filter(obj=>obj.createdBy == userId);
        return filteredList;  
    }
}