class AccountTypeService 
{
    save = function(accountTypeObj){
        
        var temp = JSON.parse(localStorage.getItem("ACCOUNT_TYPES"));
        var accountTypes = temp ? temp : [];
        accountTypes.push(accountTypeObj);       
        localStorage.setItem("ACCOUNT_TYPES", JSON.stringify(accountTypes ) );
    }
    
    list = function(){
        var temp = JSON.parse(localStorage.getItem("ACCOUNT_TYPES"));
        var accountTypes = temp ? temp : [];
        return accountTypes;
    }

}