class CreditCardService 
{
    save = function(obj){
        
        var temp = JSON.parse(localStorage.getItem("CARDS"));
        var cardList = temp ? temp : [];
        cardList.push(obj);       
        localStorage.setItem("CARDS", JSON.stringify(cardList ) );
    }
    
    list = function(){
        var temp = JSON.parse(localStorage.getItem("CARDS"));
        var cardList = temp ? temp : [];
        return cardList;
    }

    

}