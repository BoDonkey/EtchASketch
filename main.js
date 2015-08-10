$(document).ready(function(){
var table = $('<table></table>').addClass('foo');
for (i=0; i<16; i++){
	table.append('<tr>');
	for (j=0; j<16; j++){
		var cell = $('<td><div></div></td>').addClass('bar');
    	table.append(cell);
    }
    table.append('</tr>');
}

$('#here_table').append(table);