//Jason Woods
// ASDI 1305
// main.js

$(function(){

$("#clearLocal").on("click", function(){
	
	if($.storage.length('localStorage') === 0){ 
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



$("#submitpick").on("click",function(key){
	if (!key){
		picks = Math.floor(Math.random()*100000001);
		
		}else{
			picks = key;
		}

			$.storage.setItem( picks, 
			["1st:", $("#first").val(),
			"2nd:", $("#second").val(),
			"3rd:", $("#third").val(),
			"4th:", $("#fourth").val(),
			"5th:", $("#fifth").val(),
			"6th:", $("#sixth").val(),
			"7th:", $("#seventh").val(),
			"8th:", $("#eighth").val(),
			"9th:", $("#nineth").val(),
			"10th:", $("#tenth").val()], 'localStorage' );
	
		alert("Picks Saved");

		$.mobile.changePage($("#main-page"));
		 
});
/*var defaultData = $(function(){
	for(var i in jsonD){
		var id = Math.floor(Math,random()*1000000001);
		localStorage.setItem(id, JSON.stringify(jsonD[i]));
	}
})*/

$("#results").on("pageinit",function(){

		
			$.ajax({
			url: "remote.json",
			type: "GET",
			dataType: "json",
			success: function(response){

				for(var i=0, j=reponse.Picks.length; i<j; i++){
					var pick = reponse.Picks[i];
					
					$(''+
						'<ul id="thePicks" class="block">'+
						'<li>'+ pick.first + '</li>' +
						'<li>'+ pick.second + '</li>' +
						'<li>'+ pick.third+ '</li>' +
						'<li>'+ pick.forth + '</li>' +
						'<li>'+ pick.fifth + '</li>' +
						'<li>'+ pick.sixth + '</li>' +
						'<li>'+ pick.seventh + '</li>' +
						'<li>'+ pick.eighth + '</li>' +
						'<li>'+ pick.nineth +'</li>' +
						'<li>'+ pick.tenth + '</li>' +
						'</ul>').appendTo("#dResult");
				}
			}
			
				
			
						
			
				
		})
	});	
		/*.on("click",function(){
						$.mobile.changePage($("#picks"));
						var iValue = localStorage.getItem(this.key);
						var item = $.parseJSON(iValue);
						$("#first").val()  = item.pick1[1];
						$("#second").val() = item.pick2[1];
						$("#third").val()  = item.pick3[1];
						$("#fourth").val() = item.pick4[1];
						$("#fifth").val()  = item.pick5[1];
						$("#sixth").val(]  = item.pick6[1];
						$("#seventh").val()= item.pick7[1];
						$("#eighth").val() = item.pick8[1];
						$("#nineth").val() = item.pick9[1];
						$("#tenth").val()  = item.pick10[1];
			}
			makeItemLink(key, linkLi);//create our edit and delete buttons. for each item in local storage.*/

		
	
	
			/*$.ajax({
				url: "something",
				type: "GET",
				dataType: 'json',
				success: function(response){
					console.log();
				}
			})*/
		
	

});
		



