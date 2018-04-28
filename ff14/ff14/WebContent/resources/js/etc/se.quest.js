$(document).ready(function() {
	$('#quest_table').DataTable( {
		"stateSave": true,
		"pagingType": "full_numbers",
		"order" : [ [ 1, "asc" ] ],
		  "pageLength": 25,
		"language" : {
			"url" : base_location
					+ "js/korean.js"
		},
		"data": output_data,
        "columns": [
        			{ "data": "Key" },
                    { "data": "Sort",
			    "sClass": "my_class",
			    "render": function ( data, type, row, meta ) {
					if (data != "0")
					{
						return data;
					}
					else {
						return "-";
					}
				}
			},
			{ "data": "Genre" ,
				"render": function ( data, type, row, meta ) {
					if (data != "")
					{
						return data;
					}
					else {
						return row.Genre_en;
					}
				}
			},
			{ "data": "name_kr" ,
				"render": function ( data, type, row, meta ) {
					if (data != "")
					{
						return '<a href="http://setine.nayana.kr/ff14/questdetail.php?id=' + row.Key + '">' + "[" + row.Level + "] " + data + '</a>';
					}
					else {
						return '<a href="http://setine.nayana.kr/ff14/questdetail.php?id=' + row.Key + '">' + "[" + row.Level + "] " + row.name_en + '</a>';
					}
				}
			},
			{ "data": "Area" ,
				"render": function ( data, type, row, meta ) {
					if (data != "")
					{
						return data;
					}
					else {
						return row.area_en;
					}
				}
			},
			],
			"columnDefs" : [ {
				"visible" : false,
				"targets" : [ 0 ],
				"searchable" : true
			}, ],
          "fnRowCallback": function (Row, Data, iDisplayIndex) {

				$(Row).hover(function(e){
			   var offset = $('#wrap').offset(); 
				var x = e.pageX - offset.left;
				var y = e.pageY - offset.top;

					if (x >= 400)
					{
						var shd = document.getElementById('eodb_tooltip');
						shd.innerHTML = "<object width=\"420px\" height=\"100%\" type=\"text/html\" data=\"http://setine.nayana.kr/ff14/quest_tooltip.php?id=" + Data.Key + "\"></object>";
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
                return Row;
           },
	   });
});
$(window).ready(function() {
document.getElementById("collapse_quest").style.display = "block";
});