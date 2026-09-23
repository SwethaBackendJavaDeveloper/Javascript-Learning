const MySub = document.getElementById("MySub");
const Paypal= document.getElementById("Paypal");
const Mastercard = document.getElementById("Mastercard");
const Visa = document.getElementById("Visa");
const submit = document.getElementById("submit");
const  Myh2 =  document.getElementById("Myh2");
const  Myh3 =  document.getElementById("Myh3");

submit.onclick = function(){
/*if(MySub.checked){
    Myh2.textContent = "subscribed";

}
else{
    Myh2.textContent = "Not subscribed";

}*/
//ternary operator

Myh2.textContent = MySub.checked ? "Subscribed" : "Not Subscribed";

if(Paypal.checked)
{
   Myh3.textContent = "PayPal is clicked";
}
else if(Mastercard.checked)
{
   Myh3.textContent = "Mastercard is clicked";

}
else if(Visa.checked)
{
   Myh3.textContent = "Visa is clicked";

}
else{
    Myh3.textContent = "Card didnt click";
}
}


