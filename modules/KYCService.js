class kycservice
{
   save(userDetails) 
   {
    console.log("User Details",userDetails);
      var kyclist=[];
      kyclist.push(userDetails);
      localStorage.setItem("KYC_LIST",JSON.stringify(kyclist));
    }
}