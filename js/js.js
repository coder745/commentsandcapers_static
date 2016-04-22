function hide(text) {
	if(text.value == 'Type answer to: (4 + 2) x 4') {
		text.value = '';
	}
}

function show(text) {
	if(text.value == '') {
		text.value = 'Type answer to: (4 + 2) x 4';
	}
}

function hide2(text) {
	if(text.value == 'Solve: (4 + 3) x 2') {
		text.value = '';
	}
}

function show2(text) {
	if(text.value == '') {
		text.value = 'Solve: (4 + 3) x 2';
	}
}