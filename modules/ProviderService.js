class ProviderService {
    list(){
          var obj1 = { id: 1, title:"Mobile Recharge" , link:"https://www.airtel.com/"};
          var obj2 = { id: 2, title:"Electrity Recharge" , link:"https://www.tnebd.com/"};
          var obj3 = { id: 3, title:"Gas booking" , link:"https://myhpgas.in/myHPGas/Index.aspx"};
          var data = [];
          data.push(obj1);
          data.push(obj2);
          data.push(obj3);
          return data;
    }
}