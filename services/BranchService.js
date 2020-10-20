class BranchService 
{
    save = function(obj){
        
        var temp = JSON.parse(localStorage.getItem("BRANCHES"));
        var branchList = temp ? temp : [];
        branchList.push(obj);       
        localStorage.setItem("BRANCHES", JSON.stringify(branchList ) );
    }
    
    list = function(){
        var temp = JSON.parse(localStorage.getItem("BRANCHES"));
        var branchList = temp ? temp : [];
        return branchList;
    }

    

}