var boldTags = document.querySelectorAll('b');
for (var i = 0; i < boldTags.length; i++) {

	var isAPlayerName = /\d(?:p|d)$/; 
	var isTheResult = /(?:W|B)\+.*\)/;
	if (isTheResult.test(boldTags[i].innerText)) {
		var newString = boldTags[i].innerText.replace(isTheResult, "");
		console.log(newString);
		boldTags[i].innerText = newString;
		console.log(boldTags[i].innerText);
	}

}
