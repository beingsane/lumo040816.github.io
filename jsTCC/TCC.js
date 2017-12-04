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
  var backButton = div.children('.btSinFte');
  
  text.show();
  backButton.show();
});

  $(".btInfSo").click(function(){
    
    var button = $(this);
    var div = $(button.parent()[0]);
    var text = div.children('.textSobra');
    var backButton = div.children('.btSinFsO');
   
  text.show();
  backButton.show();  
  });

  $(".btInfCasa").click(function(){
      
    var button = $(this);
    var div = $(button.parent()[0]);
    var text = div.children('.textCasa');
    var backButton = div.children('.btSinFcA');  
  
  text.show();
  backButton.show(); 
  });

  $(".btInfApart").click(function(){
    
    var button = $(this);
    var div = $(button.parent()[0]);
    var text = div.children('.textApart');
    var backButton = div.children('.btSinFaP');
    


  text.show();
  backButton.show();

  });

  $(".btSinFte").click(function(){
    
    var button = $(this);
    var div = $(button.parent()[0]);
    var text = div.children('.texTerre');
    var backButton = div.children('.btSinFte');
    
    text.hide();
    backButton.hide();
  
  
     });  

     $(".btSinFsO").click(function(){
      
      var button = $(this);
      var div = $(button.parent()[0]);
      var text = div.children('.textSobra');
      var backButton = div.children('.btSinFsO');
     
    text.hide();
    backButton.hide();  
     });

     $(".btSinFcA").click(function(){
      
    var button = $(this);
    var div = $(button.parent()[0]);
    var text = div.children('.textCasa');
    var backButton = div.children('.btSinFcA');   
 
    text.hide();
    backButton.hide();
     });


     $(".btSinFaP").click(function(){
      
      var button = $(this);
      var div = $(button.parent()[0]);
      var text = div.children('.textApart');
      var backButton = div.children('.btSinFaP');
    
    text.hide();
    backButton.hide();
     });
    }); 
