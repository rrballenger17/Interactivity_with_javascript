/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */


function billingFunction(){
  
  console.log("run!");
  
  var box = document.getElementById("same");
  
  
  if(box.checked){
  
    var sName = document.getElementById("shippingName");
    var sZip = document.getElementById("shippingZip");
  
    document.getElementById("billingName").value = sName.value;
    document.getElementById("billingZip").value = sZip.value;
    
  }else{
    
    document.getElementById("billingName").value = "";
    document.getElementById("billingZip").value = "";  
    
  }
  
  
  
}