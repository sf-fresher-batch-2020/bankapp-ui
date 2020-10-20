class AccountService 
{
    save = function(accountObj){
        
        var accountsTemp = JSON.parse(localStorage.getItem("ACCOUNTS"));
        var accounts = accountsTemp ? accountsTemp : [];
        accounts.push(accountObj);       
        localStorage.setItem("ACCOUNTS", JSON.stringify(accounts ) );
    }
    
    list = function(){
        var accountsTemp = JSON.parse(localStorage.getItem("ACCOUNTS"));
        var accounts = accountsTemp ? accountsTemp : [];
        return accounts;
    }

}