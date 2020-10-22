class CreateAccountService
{
    save(obj){
            var users =[];
            var usersTemp = JSON.parse(localStorage.getItem("ACCOUNTS"));
            var users = usersTemp ? usersTemp : [];
            users.push(obj);
            localStorage.setItem("ACCOUNTS", JSON.stringify(users ) );
            localStorage.getItem("ACCOUNTS");
    }

    list = function() {
    var usersTemp = JSON.parse(localStorage.getItem("ACCOUNTS"));
    var accounts = usersTemp ? usersTemp : [];
    return accounts; 

    }
}