// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

	var table, cell, height, width, rows;

	table = $('#pixelCanvas');
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();

	table.children().remove();

	for ( var x = 0; x < height; x++) {
	table.append('<tr></tr>');
	}
  rows = $('tr');
	for (var y = 0; y < width; y++) {
	rows.append('<td></td>');
	}

	cell = table.find('td');
  cell.on("click", function() {
    var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});

}

var submitButton = $('input[type="submit"]');
submitButton.click(function(e) {
  e.preventDefault();
  makeGrid();
});
