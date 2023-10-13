console.log ('Attendance Calculator is run !!')

// Main routine to alter the attendance display
function setup () {
	rows = document.querySelectorAll ('#subjetInfo> tr'); // Find a suitable selector
	console.log(rows);
	if (rows.length == 0) {
		// We are most likely dealing with the case where the attendance display is not on the screen
		alert ('Attendance table not found on the display\nPlease click on [Attendance] in the left-hand-side menu');
	}

	for (var r = 0; r < rows.length; r++) {
		sub = rows[r].children [2];           // `sub` is a node containing attendance info for a single subject
		sub.style.backgroundColor = 'lightblue';    // Try some styling by changing properties of `sub.style`, e.g. `sub.style.backgroundColor`
		// sub.innerHTML=sub.innerHTML+"("+x+"after bunking"+")";
		
		// Our calculations
		attn = sub.innerHTML.split ('/');
		attended = Number(attn[0]); total = Number (attn[1]);
		after_bunk_attn = attended * 100 / (total+1);
		sub.innerHTML = "Bunk 1 class => " + after_bunk_attn + "%";
	}
}

// Create a button, on pressing which the extension will start modifying the attendance page
btn = document.createElement ('button');
btn.onclick = setup;
btn.innerHTML = 'Show Attendance Calculator';
// Append it to the page
nav = document.querySelector ('#pge_menu');
nav.appendChild (btn);
//done