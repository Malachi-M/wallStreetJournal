function enableAccess(event) {
	var visible = document.querySelector(".articleInfo.hidden");
	console.log(visible);
	if (visible) {
		visible.classList.toggle("hidden");
		var requiredInputs = visible.querySelectorAll('.feedback-input');
		for(i=0; i < requiredInputs.length; i++){
			requiredInputs[i].required = true;
		}
		if (!document.querySelector(".articleInfo.hidden")){
		
			document.querySelector("#button-addArticle").parentNode.classList.add("hidden");
		}
	}

}

var el = document.querySelector("#button-addArticle");
el.addEventListener("click", enableAccess);
