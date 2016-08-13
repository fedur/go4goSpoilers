var boldTags = document.querySelectorAll('b');

for (var i = 0; i < boldTags.length; i++) {

	var isAPlayerName = /\d(?:p|d)$/; 
	var isAResult = /Result:.*/;


	// We iterate through the bold tags (instead of all the tags) to find the blocks containing the player info..
	if (isAPlayerName.test(boldTags[i].innerText)) {
		
		var gameInfos = $(boldTags[i].parentNode.childNodes);
		gameInfos.each( function(index) {
			if ($(this).is("b")) {
				if (isAPlayerName.test(this.innerText)) {
					this.className = "winner";
					this.style.fontWeight = "normal";
				}
			} 
				
			else if (isAResult.test($(this).text())) {
				console.log("Allooo");
				$(this).replaceWith("<span class=spoilerTitle> Spoilers:  </span><span class=gameResult style='display:none'>" + $(this).text() + "</span><span class=spoilersButton> [+] </span>");
			}
			
		});
	}
}

$(".spoilersButton").click( function (){
	// If Spoiler is not visible
	if (this.innerText.search(/.*\+.*/) != -1) {
		this.innerText = "[-]";
		$(this.previousElementSibling).show();
		$(this.previousElementSibling.previousElementSibling).hide();

		var currentElement = this;
		while (!$(currentElement).hasClass("winner"))
			currentElement = currentElement.previousElementSibling;

		currentElement.style.fontWeight = "bold";
	}

	// if Spoiler is already visible
	else {
		this.innerText = "[+]";
		$(this.previousSibling).hide();
		$(this.previousElementSibling.previousElementSibling).show();

		var currentElement = this;
		while (!$(currentElement).hasClass("winner"))
			currentElement = currentElement.previousElementSibling;

		currentElement.style.fontWeight = "normal";
	}

});

