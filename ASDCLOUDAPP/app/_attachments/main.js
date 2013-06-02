//Jason Woods
// ASDI 1305
// main.js


$("#main-page").on("pageshow",function(){
	$("#img img")
		.fadeIn(3000);

});


//Picks Page Functions
/*
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
			

	});*/
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

	
    
$("#submitpick").on("click",function(){ 		
	var race = $("#race").val();		
    var name=  $("#name").val(); 
     var theID = race+name  
   		console.log(race);
		doc ={_id:theID };
		doc.player = name;
		doc.race = race;
		doc.first =$("#first").val();
		doc.second =$("#second").val();
		doc.third = $("#third").val();
		doc.fourth =$("#fourth").val();
		doc.fifth = $("#fifth").val();
		doc.sixth = $("#sixth").val();
		doc.seventh =$("#seventh").val();
		doc.eighth = $("#eighth").val();
		doc.ninth =$("#ninth").val();
		doc.tenth = $("#tenth").val();
	$.couch.db("development").saveDoc(doc, {
   		success: function(data) {
   			alert(race + " Picks Saved");
   			$.mobile.changePage("#results");
   			
   			
   		 },
   		error: function(status) {
       		 console.log(status);
    	}
    	
	});
	
});
$(document).on('pageinit', '#results', function() {
	$.couch.db("development").view("mototracker/picks", {
		success: function(data) {
		
		//console.log(data);
		$("#dResultList").empty();
		$.each(data.rows, function(index, value) {
			var item = (value.value || value.doc);
			$("#dResultList").append(
				$("<li>").append(
					$("<a id="+item.race+item.player+">")
						.attr("href", "picks.html?myPicks="+item.race+item.player)
						.text(item.player)
				)
			);
		});
		$("#dResultList").listview("refresh",true);		
	}
	})
	});
$(document).on('pageinit', '#thePicks', function() {
	var urlData = $(this).data("url");
	//console.log(urlData);
	var urlParts = urlData.split('?');
	var urlPairs = urlParts[1].split('&');
	var urlValues = {};
	for (var pair in urlPairs) {
		var keyValue = urlPairs[pair].split('=');
		var key = decodeURIComponent(keyValue[0]);
		var value = decodeURIComponent(keyValue[1]);
		urlValues[key] = value;
		console.log(value);
	}
		
		$.couch.db("development").view("mototracker/picks",{
			success:function(data) {
			console.log(data, value);
				
			$.each(data.rows, function(index, picks){
			var thisID = picks.id;
			var thisRev = picks.value.rev;
			var name = picks.value.player;
			var race = picks.value.race;
			var first = picks.value.first;
			var second = picks.value.second;
			var third = picks.value.third;
			var four = picks.value.fourth;
			var fifth = picks.value.fifth;
			var sixth =picks.value.sixth;
			var seventh = picks.value.seventh;
			var eighth = picks.value.eighth;
			var ninth = picks.value.ninth;
			var tenth = picks.value.tenth;
			console.log(value);
				if(thisID === value){
			console.log(thisID);
			$("#pick").empty();
			$("#pick").append('<h3>'+ name + '</h3>');
			$("#pick").append(
					$("<li>").text(race));
					$("#pick").append($("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(first));
					$("#pick").append($("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(second));
					$("#pick").append($("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(third));
					$("#pick").append($("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(four));
					$("#pick").append($("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(fifth));
					$("#pick").append($("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(sixth));
					$("#pick").append($("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(seventh));
					$("#pick").append($("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(eighth));
					$("#pick").append($("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(ninth));
					$("#pick").append($("<li  class='ui-li ui-li-static ui-btn-up-a ui-first-child ui-last-child'>").text(tenth));
					
					$("<li><a type='button' id='delete' value="+thisID+" data-theme='a'>Delete</a></li>")
						.appendTo("#pick");
						//Delete Function
			
							 $("#delete").on("click", function(data){
						 		console.log("Hello");
							var doc = {
							    _id: thisID,
							    _rev: thisRev
							};
							$.couch.db("development").removeDoc(doc, {
							     success: function(data) {
							         console.log(data);
							         $.mobile.changePage("index.html#results");
							        $("#dResultList").listview("refresh",true);
							    }, 
							    error: function(status) {
							        console.log(status);
							    }
							     
							});
						});
					$("<li><a href='edit.html?myEdit="+value+"' type='button' id='edit' value="+thisID+" data-theme='a'>Edit</a></li>")
						.appendTo("#pick");
						
						
				}		
			console.log(thisRev);
			})
	
		$("#pick").listview("refresh",true);
	}
	});
	});
$(document).on('pageinit','#editPage',  function() {
	var urlData = $(this).data("url");
	//console.log(urlData);
	var urlParts = urlData.split('?');
	var urlPairs = urlParts[1].split('&');
	var urlValues = {};
	for (var pair in urlPairs) {
		var keyValue = urlPairs[pair].split('=');
		var key = decodeURIComponent(keyValue[0]);
		var value = decodeURIComponent(keyValue[1]);
		urlValues[key] = value;
		console.log(value);
	}
		
		$.couch.db("development").view("mototracker/picks",{
			success:function(data) {
			console.log(data, value);
			$.each(data.rows, function(index, picks){
			var thisID = picks.id;
			var thisRev = picks.value.rev;
			var name = picks.value.player;
			var race = picks.value.race;
			var first = picks.value.first;
			var second = picks.value.second;
			var third = picks.value.third;
			var four = picks.value.fourth;
			var fifth = picks.value.fifth;
			var sixth =picks.value.sixth;
			var seventh = picks.value.seventh;
			var eighth = picks.value.eighth;
			var ninth = picks.value.ninth;
			var tenth = picks.value.tenth;
			console.log(value);
				if(thisID === value){
			console.log($("#race2").val());
				$("#name2").val(name);
				$("#race2").val(race);
				$('#race2').selectmenu('refresh', true);
				$("#first2").val(first);
				$('#first2').selectmenu('refresh', true);
				$("#second2").val(second);
				$('#second2').selectmenu('refresh', true);		
				$("#third2").val(third);
				$('#third2').selectmenu('refresh', true);
				$("#fourth2").val(four);
				$('#fourth2').selectmenu('refresh', true);
				$("#fifth2").val(fifth);
				$('#fifth2').selectmenu('refresh', true);
				$("#sixth2").val(sixth);
				$('#sixth2').selectmenu('refresh', true);
				$("#seventh2").val(seventh);
				$('#seventh2').selectmenu('refresh', true);
				$("#eighth2").val(eighth);
				$('#eighth2').selectmenu('refresh', true);
				$("#ninth2").val(ninth);
				$('#ninth2').selectmenu('refresh', true);
				$("#tenth2").val(tenth);
				$('#tenth2').selectmenu('refresh', true);	
			
				$("#edit2").on("click",function(){
					console.log("HELLO");
						var race = $("#race2").val();		
					    var name=  $("#name2").val(); 
					     var theID = race+name  
					   		console.log(race);
							
						var doc = {
					   		"_id":theID,
							"_rev": thisRev,
							"player": name,
							"race": race,
							"first": $("#first2").val(),
							"second": $("#second2").val(),
							"third": $("#third2").val(),
							"fourth": $("#fourth2").val(),
							"fifth": $("#fifth2").val(),
							"sixth": $("#sixth2").val(),
							"seventh": $("#seventh2").val(),
							"eighth": $("#eighth2").val(),
							"ninth": $("#ninth2").val(),
							"tenth": $("#tenth2").val()
					};
					console.log(doc);
					$.couch.db("development").saveDoc(doc, {
					    success: function(data) {
					        console.log(data);
					        alert("Picks Saved");
					        
					        
					    },
					    error: function(status) {
					        console.log(status);
					    }
					});
					$.mobile.changePage("index.html#results");
					});
				}
		});
		
	
		}
		
		
	})
	$("#editList").listview("refresh",true);
	
});
$(document).on('pageinit','#editPage',  function() {

});
