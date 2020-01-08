
document.querySelectorAll("table .Select tr").forEach(function(tr){
    tr.addEventListener("click", function(){
        tr.className = tr.className == "" ? "Selected" : "";
    });
});

