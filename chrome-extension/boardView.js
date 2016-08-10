var boldTags = document.querySelectorAll('b');
for (var i = 0; i < boldTags.length; i++) {

	var isAPlayerName = /\d(?:p|d)$/; 
	var isTheResult = /(?:W|B)\+.*\)/;
	var execObj = isTheResult.exec(boldTags[i].innerText);
	if (execObj != null) {
		boldTags[i].innerText = boldTags[i].innerText.replace(execObj[0], "");
		var spoilersButton = $("<div id=result> <span id=spoilerTitle>Spoilers:  </span>" +
							"<span class=gameResult>" + execObj[0] + "</span>" + 
							"<span class=spoilersButton> [+] </span> </div>");
		$(boldTags[i]).append(spoilersButton);
		$(".gameResult").hide();
		break;
	}
}

$(".spoilersButton").click( function (){
	// If Spoiler is not visible
	if (this.innerText.search(/.*\+.*/) != -1) {
		this.innerText = "[-]";
		$(this.previousSibling).show();
	}

	// if Spoiler is already visible
	else {
		this.innerText = "[+]";
		$(this.previousSibling).hide();
	}

});
