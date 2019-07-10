$( document ).ready(function() {
    var scroll = $(window).scrollTop();
    if(scroll > 500){
        $("#services-nav").css({'top':'-200px'});
    }

});

$(document).scroll(function() {
    $("#services-nav").css({'top':'0px'});
});

function showDiv(divToShow){
    console.log(document.getElementById(divToShow).style.display);
    if(document.getElementById(divToShow).style.display == 'none'){
      console.log("showing");
      document.getElementById(divToShow).style.display = "block";
      document.getElementById(divToShow+"_btn").innerHTML = "Show Less";
    }
    else if(document.getElementById(divToShow).style.display == "block"){
      document.getElementById(divToShow).style.display = "none";
      document.getElementById(divToShow+"_btn").innerHTML = "Show More";
    }
}


