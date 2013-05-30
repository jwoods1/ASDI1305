//Jason Woods
// ASDI 1305
// main.js


//Jason Woods
// ASDI 1305
// main.js


$("#main-page").on("pageshow",function(){
	$("#img img")
		.fadeIn(3000);

});


//Picks Page Functions
$("#picks").on("pageinit",function(){

	$("#submitpick").on("click",function(key){
		key = localStorage.id;
		if(key){
			var	id = localStorage.key(key);
		}else{
		
		var id = Math.floor(Math.random()*100000001);
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
			location.reload();
			$.mobile.changePage($("#main-page"));
			}	
	});

	// Display button
	$("#results").on("pageshow",function(e){
			
	
		
		if(localStorage.length === 0){
		alert("No Picks to display.");
		}
		for(var i=0, j=localStorage.length; i<j; i++){
			var key = localStorage.key(i);
			var value = localStorage[key];
			var lsO = $.parseJSON(value);
			$("<ol data-role='listview' data-inset='true' class='ui-listview ui-listview-inset ui-corner-all ui-shadow'></ol>").appendTo($("#dResultList"));
			$("<li data-role='list-divider'>Race Picks</li>").appendTo($("ol:last"));
			$("<li class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>"+lsO.first[1] +"</li>").appendTo("ol:last");
			$("<li class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>"+lsO.second[1] +"</li>").appendTo("#dResultList ol:last");
			$("<li class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>"+lsO.third[1] +"</li>").appendTo("#dResultList ol:last");
			$("<li class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>"+lsO.fourth[1] +"</li>").appendTo("#dResultList ol:last");
			$("<li class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>"+lsO.fifth[1] +"</li>").appendTo("#dResultList ol:last");
			$("<li class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>"+lsO.sixth[1] +"</li>").appendTo("#dResultList ol:last");
			$("<li class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>"+lsO.seventh[1] +"</li>").appendTo("#dResultList ol:last");
			$("<li class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>"+lsO.eighth[1] +"</li>").appendTo("#dResultList ol:last");
			$("<li class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>"+lsO.nineth[1] +"</li>").appendTo("#dResultList ol:last");
			$("<li class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>"+lsO.tenth[1] +"</li>").appendTo("#dResultList ol:last");
			
		$("<input type='button' id='editPick' value='Edit' data-theme='a' data-mini='true' data-inline='false'>")
				.appendTo("#dResultList")
				.on("click",function(){
				$.mobile.changePage($("#picks"));
				$("#first").val(lsO.first[1]).selectmenu("refresh", true);
				$("#second").val(lsO.second[1]).selectmenu("refresh", true);
				$("#third").val(lsO.third[1]).selectmenu("refresh", true);
				$("#fourth").val(lsO.fourth[1]).selectmenu("refresh", true);
				$("#fifth").val(lsO.fifth[1]).selectmenu("refresh", true);
				$("#sixth").val(lsO.sixth[1]).selectmenu("refresh", true);
				$("#seventh").val(lsO.seventh[1]).selectmenu("refresh", true);
				$("#eighth").val(lsO.eighth[1]).selectmenu("refresh", true);
				$("#nineth").val(lsO.nineth[1]).selectmenu("refresh", true);
				$("#tenth").val(lsO.tenth[1]).selectmenu("refresh", true);
				$("<div class='ui-submit ui-btn ui-shadow ui-btn-corner-all ui-btn-icon-right ui-btn-up-a' data-corners='true' data-shadow='true' data-iconshadow='true' data-wrapperels='span' data-icon='grid' data-iconpos='right' data-theme='a' data-disabled='false' aria-disabled='false'><span class='ui-btn-inner'><span class='ui-btn-text'>Edit Picks</span><span class='ui-icon ui-icon-grid ui-icon-shadow'>&nbsp;</span></span><input id='edit' class='ui-btn-hidden' type='submit' data-theme='a' data-iconpos='right' value='Edit Picks' data-disabled='false'>").appendTo("#form");
				$("#edit").on("click",function(key){
					id = localStorage[key];
					console.log(id);
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
	})

				});		
			$("<input type='button' id='deletePick' value='Delete' data-theme='a' data-mini='true' data-inline='false'>")
				.appendTo("#dResultList").on("click",function(){
				localStorage.removeItem(key);
					location.reload();
					
					});	
				
		}

	});
/*$.ajax({
	"url":"_view/races" ,
	"dataType": "json",
	"success": function (data){
		$.each(data.rows, function(index, races){
			var race = races.value.Race;
			var first = races.value.first;
			var second = races.value.second;
			var third = races.value.third;
			var four = races.value.fourth;
			var fifth = races.value.fifth;
			var sixth = races.value.sixth;
			var seventh = races.value.seventh;
			var eighth = races.value.eighth;
			var ninth = races.value.ninth;
			var tenth = races.value.tenth;
			console.log(four);
			$("#rResult").append(
					$("<h3>").text("Race Finishes"));
			$("#rResult").append(
				$("<ul id='raceResults'>").append(
					$("<li>").text(race),
					$("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(first),
					$("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(second),
					$("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(third),
					$("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(four),
					$("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(fifth),
					$("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(sixth),
					$("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(seventh),
					$("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(eighth),
					$("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(ninth),
					$("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(tenth)
						)
					
					);
			
				
		});
		$("#rResults").listview("refresh");
	}
})*/
$(document).on('pageinit', '#results', function(){
	$.couch.db("development").view("mototracker/races", {
		success: function(data){
		$.each(data.rows, function(index, races){
			var race = races.value.Race;
			var first = races.value.first;
			var second = races.value.second;
			var third = races.value.third;
			var four = races.value.fourth;
			var fifth = races.value.fifth;
			var sixth = races.value.sixth;
			var seventh = races.value.seventh;
			var eighth = races.value.eighth;
			var ninth = races.value.ninth;
			var tenth = races.value.tenth;
	
			$("#rResult").append(
					$("<h3>").text("Race Finishes"));
			$("#rResult").append(
				$("<ul id='raceResults'>").append(
					$("<li>").text(race),
					$("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(first),
					$("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(second),
					$("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(third),
					$("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(four),
					$("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(fifth),
					$("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(sixth),
					$("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(seventh),
					$("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(eighth),
					$("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(ninth),
					$("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(tenth)
						)
					
					);
			
		});
		$("#rResults").listview("refresh");
	}
		});
});
	
});
$("#picks").on("pagebeforeshow",function(){
	$("#first").selectmenu("refresh");

});


