document.querySelectorAll("#restaurantTable tbody tr").forEach(function (tr){
    
    tr.addEventListener("click", function() {
        tr.className = tr.className == "" ? "selected" : "";
    });
});

document.querySelector("#selectButton").addEventListener("click", function() {
    var selectedRows;

    if(document.querySelectorAll("tr.selected").length > 0)
        selectedRows = document.querySelectorAll("tr.selected");
    else
        selectedRows = document.querySelectorAll("#restaurantTable tbody tr");

    var menuCount = selectedRows.length;
    var rand = Math.floor(Math.random() * menuCount);

    document.querySelector("#resultText").innerHTML = "오늘은 " + selectedRows[rand].querySelector("td").innerText + "(으)로 갑시다!";
});