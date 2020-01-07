function HighlightRow(obj){

	var table = document.getElementId("table");
	var td = table.getElementsByTagName("td");
	for(var i=0; i<td.length; i++){
		td[i].style.background = "white";
	}
	obj.style.backgroundColor = "blue";

}