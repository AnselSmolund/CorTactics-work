$('#contact-submit').click(function(){
    $(location).attr('href', 'mailto:anssmolund@gmail.com?subject='
                             + encodeURIComponent("This is my subject")
                             + "&body=" 
                             + encodeURIComponent("This is my body")
    );
});