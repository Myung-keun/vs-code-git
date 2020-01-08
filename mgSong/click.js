

document.querySelectorAll(".wrap ul").forEach(function(ul){
    ul.addEventListener("click", function(){
        ul.className = ul.className == "" ? "selected" : "";
    });
});

