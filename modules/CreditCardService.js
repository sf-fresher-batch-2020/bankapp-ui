class CreditCardService 
{
    saveCard(card1){
      
      let cardsTemp = JSON.parse(localStorage.getItem("CARDS"));
      let cards  = cardsTemp ? cardsTemp :[];
      cards.push(card1);
      localStorage.setItem("CARDS",JSON.stringify(cards));
      
      
    }
        saveList()
        {
          let cardsTemp = JSON.parse(localStorage.getItem("CARDS"));
            let cards  = cardsTemp ? cardsTemp : [];
            let sno = 0;
            for(let obj of cards){
                var new_row = "<tr><td>" + ++sno + "</td><td>" + obj.name + "</td><td>" + obj.cc_number + "</td><td>" + obj.cc_exp + "</td></tr>";
                $("table tbody").append(new_row);
            }
        }

}
