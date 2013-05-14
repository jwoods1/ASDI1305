
$("#clearLocal").on("click", function(){
	if(localStorage.length === 0){
			alert("There is no data to clear.");
			$.mobile.changePage($("#main-page"));

	}else{
		localStorage.clear();
		alert("All Picks are Deleted");
		$.mobile.changePage($("#main-page"));
	}
});
$("#results").on("click", function(){
	//When user clicks it will pull the local storage data and display on the page.
	// If no data will pull dummy data.
});



$("#submitpick").on("click",function(){
	var id = Math.floor(Math.random()*100000001);
	var item 			= {};
			item.pick1	= ["Picks:", $("#first").val()];
			item.pick2	= ["Picks:", $("#second").val()];
			item.pick3	= ["Picks:", $("#third").val()];
			item.pick4	= ["Picks:", $("#fourth").val()];
			item.pick5	= ["Picks:", $("#fifth").val()];
			item.pick6	= ["Picks:", $("#sixth").val()];
			item.pick7	= ["Picks:", $("#seventh").val()];
			item.pick8	= ["Picks:", $("#eighth").val()];
			item.pick9	= ["Picks:", $("#nineth").val()];
			item.pick10	= ["Picks:", $("#tenth").val()];
			

		localStorage.setItem(id, JSON.stringify(item));
		alert("Picks Saved");
		$.mobile.changePage($("#main-page"));
	
})

$("#results").on("pagebeforeshow",function(e){
		if(localStorage.length === 0){
			alert("there is no data in Local Storage so JSON data was loaded.");
		
		}
		/*		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		cV("items").style.display = "block";
		for(var i=0, j=localStorage.length; i<j; i++) {
			var makeli = document.createElement("li");
			var linkLi = document.createElement("li");
			linkLi.setAttribute("id","links");
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//convert the string from local storage value back to an Object by using JSON.parse()
			var lObj = JSON.parse(value);
			var createSubList = document.createElement("ul");
			makeli.appendChild(createSubList);
			getClientImg(lObj.company[1], createSubList);
			for(var n in lObj){
				var createSubli = document.createElement("li");
				createSubList.appendChild(createSubli);
				var optSubText = lObj[n][0]+" "+lObj[n][1];
				createSubli.innerHTML = optSubText;
				createSubList.appendChild(linkLi);
			}
			makeItemLink(key, linkLi);//create our edit and delete buttons. for each item in local storage.
		}*/


});
		
	


