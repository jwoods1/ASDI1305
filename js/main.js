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
})