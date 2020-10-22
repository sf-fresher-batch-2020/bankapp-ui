class CreditCardService 
{
    saveCard(card1){
      
      let cardsTemp = JSON.parse(localStorage.getItem("CARDS"));
      let cards  = cardsTemp ? cardsTemp :[];
      cards.push(card1);
      localStorage.setItem("CARDS",JSON.stringify(cards));
      
      
    }
    list()
    {
      let cardsTemp = JSON.parse(localStorage.getItem("CARDS"));
        let cards  = cardsTemp ? cardsTemp : [];
       return cards;
    }

}
