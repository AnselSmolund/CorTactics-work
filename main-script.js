window.onload = function(){
    var mouseInVideo = false;

    console.log("loaded");

    document.getElementById("main-cover").addEventListener("mouseenter", function(){
        mouseInVideo = true;
        console.log(mouseInVideo);
    });
    document.getElementById("main-cover").addEventListener("mouseour", function(){
        mouseInVideo = false;
        console.log(mouseInVideo);
    });
}
