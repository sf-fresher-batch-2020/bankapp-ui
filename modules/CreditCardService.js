class CreditCardService 
{
    cardVerfication(){

        $(function () {
            $('[data-toggle="popover"]').popover()
          })
          
          
          
          $("#payment-button").click(function(e) {
          
              e.preventDefault();
              var form = $(this).parents('form');
              
              var cvv = $('#x_card_code').val();
              var regCVV = /^[0-9]{3,4}$/;
              var CardNo = $('#cc-number').val();
              var regCardNo = /^[0-9]{12,16}$/;
              var date = $('#cc-exp').val().split('/');
              var regMonth = /^01|02|03|04|05|06|07|08|09|10|11|12$/;
              var regYear = /^20|21|22|23|24|25|26|27|28|29|30|31$/;
              var name = $("#x_name").val();
              var expiryDate = $('#cc-exp').val();
              
              if (form[0].checkValidity() === false) {
                e.preventDefault();
                e.stopPropagation();
              }
              else {
                 if (!regCardNo.test(CardNo)) {
                 
                  $("#cc-number").addClass('required');
                  $("#cc-number").focus();
                  alert(" Enter a valid 12 to 16 card number");
                  return false;
                }
                else if (!regCVV.test(cvv)) {
                 
                  $("#x_card_code").addClass('required');
                  $("#x_card_code").focus();
                  alert(" Enter a valid CVV");
                  return false;
                }
                else if (!regMonth.test(date[0]) && !regMonth.test(date[1]) ) {
                 
                  $("#cc_exp").addClass('required');
                  $("#cc_exp").focus();
                  alert(" Enter a valid exp date");
                  return false;
                }
                 
          
                
              }
              let card1={name: name ,cc_number: CardNo, cc_exp: expiryDate};
              let cardsTemp = JSON.parse(localStorage.getItem("CARDS"));
              let cards  = cardsTemp ? cardsTemp :[];
              cards.push(card1);
              localStorage.setItem("CARDS",JSON.stringify(cards));
              document.querySelector('#message').innerHTML="Your card details are added in Card list";
              form.addClass('was-validated');
              
          });
    }

    
        
    
    

}