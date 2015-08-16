$(document).ready(function(){
makeTable(16);
$('div').mouseleave(function(){
	$(this).css('background-color','blue');
})
});


function makeTable(tabSize){
var elWidth = 1000 / tabSize;
var table = $('<table></table>');
$('#here_table').append(table);
var rowBeg = '<tr>';
var rowEnd = '</tr>';
var cellCont = '<td><div id="jqCreate"></div></td>';

for (i=0; i<tabSize; i++){
	var stringHolder = '';
	stringHolder +=rowBeg;
	for (j=0; j<tabSize; j++){
    	stringHolder +=cellCont;
    }
    stringHolder += rowEnd;
    $('table').append(stringHolder);

}
}
function eraseTable(){
	$('#here_table').html('');
}



function funcA(){
	var sizeGrid = window.prompt('Please enter your new grid size','16');
	console.log('done');
	eraseTable();
	makeTable(sizeGrid);
}