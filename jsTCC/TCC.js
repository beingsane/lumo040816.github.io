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


$(".btInfTe").click(function(){
  
  var button = $(this);
  var div = $(button.parent()[0]);
  var text = div.children('.texTerre');

  text.show();


  $(".btInfSo").click(function(){
    
    var button = $(this);
    var div = $(button.parent()[0]);
    var text = div.children('.textSobra');
    
   
  text.show();
    
  $(".btInfCasa").click(function(){
      
    var button = $(this);
    var div = $(button.parent()[0]);
    var text = div.children('.textCasa');
      
  text.show();
    
  $(".btInfApart").click(function(){
    
    var button = $(this);
    var div = $(button.parent()[0]);
    var text = div.children('.textApart');
    
  text.show();
  
    
    }); 
   }); 
  }); 
});


});