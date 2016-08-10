var boldTags = document.querySelectorAll('b');
for (var i = 0; i < boldTags.length; i++) {

	var isAPlayerName = /\d(?:p|d)$/; 
	if (isAPlayerName.test(boldTags[i].innerText)) {
		console.log(boldTags[i]);

		///////////////////////////////////////////
		// Actions concerning the player info
		/////////////////////////////////////////

		boldTags[i].className = "player"; // We give it a class for future use.
		boldTags[i].style.fontWeight = "normal";
		
		///////////////////////////////////////////
		// Actions concerning the result node
		/////////////////////////////////////////

		var childs = boldTags[i].parentNode.childNodes;
		console.log(childs);
		
		var resultNode = childs[childs.length - 1];
		console.log(resultNode);

		// We find the text Node that shows the result
		var isAResult = /Result:/;
		while (resultNode.nodeType != 3 && !isAResult.test(resultNode.innerText)) {
			resultNode = resultNode.previousSibling;
		}

		var parent = resultNode.parentNode;
		var nextElem = resultNode.nextSibling;

		var spanNode = document.createElement("span"); 
		spanNode.appendChild(resultNode);

		 // if the result node is the last element...
		if (nextElem == null)
			parent.appendChild(spanNode);

		else
			parent.insertBefore(spanNode,nextElem);

		spanNode.style.display = "none";  
	}
}

