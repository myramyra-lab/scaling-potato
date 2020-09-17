var crustValue=document.querySelector(".crust");
var toppingsValue=document.querySelector(".toppings");
var sizeValue=document.querySelector(".size");

window.addEventListener('DOMContentLoaded', function(){
    document.querySelector("#button").addEventListener("click",function(event){
        event.preventDefault();
        $(document).ready(function(){
    
          function calc() {
                var add=function(sizeValue, toppingsValue){
                return sizeValue+toppingsValue;
              };
            var sizeValue= parseInt($('.size:checked').val());
            $(function() {
                $(document).on("change", ".size",calc);
                calc();
              });
              var toppingsValue = 0;
              $(".toppings:checked").each(function() {
                if($("#small".checked)){
                  $toppingsPrice = $(this).attr("value","50");
                } else if ($("#medium".checked)){
                  $toppingsPrice = $(this).attr("value","100");
                } else if ($("$large".checked)){
                  $toppingsPrice=$(this).attr("value","150");
                } else{
                  return false;
                }
                var toppingsPrice = $(this).attr("value");
                toppingsValue += parseFloat(toppingsPrice);
                
                var result=add(sizeValue, toppingsValue);
                $('#results').text("Your pizza total is Ksh."+ result.toFixed(2)+".");
              });
            }
              $(function() {
                $(document).on("change", ".toppings",calc);
                calc();
              });
            });
          });
          document.querySelector("#button").addEventListener("click",function(event){
          calc();
          $('#results').text("Your pizza total is Ksh."+ result.toFixed(2)+".");
          });
});       