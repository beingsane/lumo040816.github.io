$(document).ready(function(){

$("#btTerreno").click(function(){
    $(".terreno").show();
    $(".sobrado").hide();
    $(".casa").hide();  
    $("#PGP").hide();
    $(".apartamento").hide();
    $( "#btTerreno" ).css( "color", "black" );
    $( "#btTerreno" ).css( "background-color", "white" );
    $( "#btSobrado" ).css( "color", "white" );
    $( "#btSobrado" ).css( "background-color", "black" );
    $( "#btCasa" ).css( "color", "white" );
    $( "#btCasa" ).css( "background-color", "black" );
    $( "#btAparta" ).css( "color", "white" );
    $( "#btAparta" ).css( "background-color", "black" );
  });

$("#btSobrado").click(function(){
    $(".sobrado").show();
    $(".terreno").hide();
    $(".casa").hide();
    $("#PGP").hide();
    $(".apartamento").hide()
    $( "#btSobrado" ).css( "color", "black" );
    $( "#btSobrado" ).css( "background-color", "white" );
    $( "#btTerreno" ).css( "color", "white" );
    $( "#btTerreno" ).css( "background-color", "black" );
    $( "#btCasa" ).css( "color", "white" );
    $( "#btCasa" ).css( "background-color", "black" );
    $( "#btAparta" ).css( "color", "white" );
    $( "#btAparta" ).css( "background-color", "black" );
});

$("#btCasa").click(function(){
  $(".sobrado").hide();
  $(".terreno").hide();
  $(".apartamento").hide();
  $("#PGP").hide();
  $(".casa").show();
  $( "#btCasa" ).css( "color", "black" );
  $( "#btCasa" ).css( "background-color", "white" );
  $( "#btSobrado" ).css( "color", "white" );
  $( "#btSobrado" ).css( "background-color", "black" );
  $( "#btTerreno" ).css( "color", "white" );
  $( "#btTerreno" ).css( "background-color", "black" );
  $( "#btAparta" ).css( "color", "white" );
  $( "#btAparta" ).css( "background-color", "black" );
  });
 
 
  $("#btAparta").click(function(){
    $(".sobrado").hide();
    $(".terreno").hide();
    $(".casa").hide();
    $("#PGP").hide();
    $(".apartamento").show();
    $( "#btAparta" ).css( "color", "black" );
    $( "#btAparta" ).css( "background-color", "white" );
    $( "#btCasa" ).css( "color", "white" );
    $( "#btCasa" ).css( "background-color", "black" );
    $( "#btSobrado" ).css( "color", "white" );
    $( "#btSobrado" ).css( "background-color", "black" );
    $( "#btTerreno" ).css( "color", "white" );
    $( "#btTerreno" ).css( "background-color", "black" );
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
