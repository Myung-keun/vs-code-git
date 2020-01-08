function addRow(){
    mytable=document.getElementsById('stock_form');
    row = mytable.insertRow(mytable.rows.length);

    cell1=row.insertCell(6);
    cell2=row.insertCell(1);

    cell1.innerHTML = "<td class='al fontB'><input type='text' name='title' size='10'></td>"
    cell2.innerHTML = "<td><input type='text' name='title' size='10'></td>"
}

