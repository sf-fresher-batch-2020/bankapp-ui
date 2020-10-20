class TransactionService{

    save = function(obj){
        
        var temp = JSON.parse(localStorage.getItem("TRANSACTIONS"));
        var transactionList = temp ? temp : [];
        transactionList.push(obj);       
        localStorage.setItem("TRANSACTIONS", JSON.stringify(transactionList) );
    }
    
    list = function(){
        var temp = JSON.parse(localStorage.getItem("TRANSACTIONS"));
        var transactionList = temp ? temp : [];
        return transactionList;
    }

}