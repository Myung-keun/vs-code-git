function HighlightRow(obj){

	var table = document.getElementId("table");
	var tr = table.getElementsByTagName("tr");
	for(var i=0; i<tr.length; i++){
		tr[i].style.background = "white";
	}
	obj.style.backgroundColor = "blue";

}