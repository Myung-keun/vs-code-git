function add_row() {
    var objRow;
    objRow = document.all[".table1"].insertRow();
    // 식당이름
    var objCell_Nm = objRow.insertCell();
    objCell_Nm.innerHTML = "<input text ='text' id='row_id' name='row_id' size='10' value=''/>";
    //대표메뉴
    var objCell_Mu = objRow.insertCell();
    objCell_Nm.innerHTML = "<input text ='text' id='row_id' name='row_id' size='10' value=''/>";
    //위치(거리)
    var objCell_Na = objRow.insertCell();
    objCell_Nm.innerHTML = "<input text ='text' id='row_id' name='row_id' size='10' value=''/>";
    //가격
    var objCell_Pr = objRow.insertCell();
    objCell_Nm.innerHTML = "<input text ='text' id='row_id' name='row_id' size='10' value=''/>";
    //테이블수
    var objCell_Ta = objRow.insertCell();
    objCell_Nm.innerHTML = "<input text ='text' id='row_id' name='row_id' size='10' value=''/>";
}














function HighlightRow(obj){

	var table = document.getElementId("table");
	var td = table.getElementsByTagName("td");
	for(var i=0; i<td.length; i++){
		td[i].style.background = "white";
	}
	obj.style.backgroundColor = "blue";

}