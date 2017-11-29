$(document).ready(function(){

$("#btTerreno").click(function(){
    $(".terreno").show();
    $(".sobrado").hide();
    $(".casa").hide();  
    $("#PGP").hide();
    $(".apartamento").hide()
  });


$("#btSobrado").click(function(){
    $(".sobrado").show();
    $(".terreno").hide();
    $(".casa").hide();
    $("#PGP").hide();
    $(".apartamento").hide()
});

$("#btCasa").click(function(){
  $(".sobrado").hide();
  $(".terreno").hide();
  $(".apartamento").hide();
  $("#PGP").hide();
  $(".casa").show();
  });
 
 
  $("#btAparta").click(function(){
    $(".sobrado").hide();
    $(".terreno").hide();
    $(".casa").hide();
    $("#PGP").hide();
    $(".apartamento").show();
  });

$("#imgP").click(function(){
  $(".sobrado").hide();
  $(".terreno").hide();
  $(".casa").hide();
  $(".apartamento").hide();
  $("#PGP").show();
});
});