	if (output_app_enpc != null){
     document.getElementById("app_enpc_menu").style.display = "block";
	$('#app_enpc').DataTable( {
		"lengthChange": false,
		"info": false,
		"searching" : false,
		"language": {
			"url": "../js/korean.js"
		},
		"data": output_app_enpc,
        "columns": [
			{ "data": "name_kr" ,
				"render": function ( data, type, row, meta ) {
					if (data != null){
					return data;
					}
					else {
					return row.name_en;
					}
				},
			},
            { "data": "areaname",
		    "sClass": "my_class",
			},
		],
          "fnRowCallback": function (Row, Data, iDisplayIndex) {

				$(Row).hover(function(e){
			   var offset = $('#wrap').offset(); 
				var x = e.pageX - offset.left;
				var y = e.pageY - offset.top;

					if (x >= 400)
					{
						var shd = document.getElementById('eodb_tooltip');
						shd.innerHTML = "<object width=\"500px\" height=\"100%\" type=\"text/html\" data=\"./npc_tooltip.php?enpc=" + Data.Index_gl + "\"></object>";
						shd.style.display = "block";
						shd.style.top = y-100+"px";
						shd.style.left = x+150+"px";
						shd.style.width = "500px";
						shd.style.height = "100%";
				}},
				function(e){
					var x = null;
					var y = null;
					var shd = document.getElementById('eodb_tooltip');
					shd.style.display = "none";
				});


                // Bind click event
                $(Row).click(function() {

				window.open('./npcdetail.php?enpc=' + Data.Index_gl,'_self');

                });

                return Row;
           },
	});
	}


	if (output_app_rewardachievement != null){
     document.getElementById("app_achievement_menu").style.display = "block";
	$('#app_achievement').DataTable( {
		"lengthChange": false,
		"info": false,
		"searching" : false,
		"language": {
			"url": "../js/korean.js"
		},
		"data": output_app_rewardachievement,
        "columns": [
			{ "data": "name_kr" ,
				"render": function ( data, type, row, meta ) {
					if (data != null){
					return data;
					}
					else {
					return row.name_en;
					}
				},
		    "sClass": "my_class",
			},
		],
          "fnRowCallback": function (Row, Data, iDisplayIndex) {

				$(Row).hover(function(e){
			   var offset = $('#wrap').offset(); 
				var x = e.pageX - offset.left;
				var y = e.pageY - offset.top;

					if (x >= 400)
					{
						var shd = document.getElementById('eodb_tooltip');
						shd.innerHTML = "<object width=\"420px\" height=\"100%\" type=\"text/html\" data=\"./achievements_tooltip.php?id=" + Data.Index + "\"></object>";
						shd.style.display = "block";
						shd.style.top = y-100+"px";
						shd.style.left = x+150+"px";
						shd.style.width = "420px";
						shd.style.height = "100%";
				}},
				function(e){
					var x = null;
					var y = null;
					var shd = document.getElementById('eodb_tooltip');
					shd.style.display = "none";
				});


                // Bind click event
                $(Row).click(function() {

				window.open('./achievementsdetail.php?id=' + Data.Index,'_self');

                });

                return Row;
           },
	});
	}