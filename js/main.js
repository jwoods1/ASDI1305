//Jason Woods
// ASDI 1305
// main.js


$("#main-page").on("pageshow",function(){
	$("#img img")
		.fadeIn(3000)
		.fadeOut(3000)
		.fadeIn(3000)
		.fadeOut(3000)
		.fadeIn(3000);

});


//Picks Page Functions
$("#picks").on("pageinit",function(){

	$("#submitpick").on("click",function(key){
		key = localStorage.id;
		if(!key){
			var id = Math.floor(Math.random()*100000001);
		}else{
			id = key;
		}

		var pickX    ={};
				
				pickX.first = ["1st:", $("#first").val()];
				pickX.second = ["2nd:", $("#second").val()];
				pickX.third = ["3rd:", $("#third").val()];
				pickX.fourth = ["4th:", $("#fourth").val()];
				pickX.fifth = ["5th:", $("#fifth").val()];
				pickX.sixth = ["6th:", $("#sixth").val()];
				pickX.seventh = ["7th:", $("#seventh").val()];
				pickX.eighth = ["8th:", $("#eighth").val()];
				pickX.nineth = ["9th:", $("#nineth").val()];
				pickX.tenth = ["10th:", $("#tenth").val()];
		
			localStorage.setItem(id,JSON.stringify(pickX));
			alert("Picks Saved");

			$.mobile.changePage($("#main-page"));
		
	});

});
/*var defaultData = $(function(){
	for(var i in jsonD){
		var id = Math.floor(Math,random()*1000000001);
		localStorage.setItem(id, JSON.stringify(jsonD[i]));
	}
})*/



$('#results').on("pageinit",function(e){

	// clear Button
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

	// Display button
	$("#displayData").on("click",function(){
		
		if(localStorage.length === 0){
			alert("No Picks to display.");
		}
		for(var i=0, j=localStorage.length; i<j; i++){
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var lsO = $.parseJSON(value);

			$("<ul>Race Results</ul>").appendTo($("#dResult"));
			$("<li>"value"</li>").appendTo("#dResult ul:last");
		}
				console.log(lsO);
	});
});
		
	



//Use listview(refresh) to refresh list in results page
		



