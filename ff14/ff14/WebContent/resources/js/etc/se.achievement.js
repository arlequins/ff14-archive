$(document).ready(function() {

	$('#achievements-table').DataTable( {
		"stateSave": true,
		"pagingType": "full_numbers",
		"language" : {
			"url" : base_location
					+ "js/korean.js"
		},
		"data": output_data,
		"columns": [
					{ "data": "Key",
						"sClass": "my_class",
						},
		            { "data": "Kind",
							"sClass": "my_class",
					},
			{ "data": "Category",
			"sClass": "my_class",
			},
		
			{ "data": "Name",
				"render": function ( data, type, row, meta ) {
					return '<a href="http://setine.nayana.kr/ff14/achievementsdetail.php?id=' + row.Key + '">' + data + '</a>';
				},
			},
			{ "data": "point",
				"sClass": "my_class",
				},
			{ "data": "Title",
				"render": function ( data, type, row, meta ) {
				if (data != "0" )
				{
					if (row.item != null) {
							return "칭호: " + data + "<br>" + '아이템';
					}
						else {
						return "칭호: " + data;
					}
				} else if (row.item != null){
					return '아이템';
				} else {
					return "";
				}
				},
			}
			],
			"columnDefs": [
			       		{
			       			"visible": false, 
			       			"targets": [0],
			       			"searchable": true
			       		}
			       		],
          "fnRowCallback": function (Row, Data, iDisplayIndex) {

				$(Row).hover(function(e){
			   var offset = $('#wrap').offset(); 
				var x = e.pageX - offset.left;
				var y = e.pageY - offset.top;

					if (x >= 400)
					{
						var shd = document.getElementById('eodb_tooltip');
						shd.innerHTML = "<object width=\"420px\" height=\"100%\" type=\"text/html\" data=\"http://setine.nayana.kr/ff14/achievements_tooltip.php?id=" + Data.Key + "\"></object>";
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
    document.getElementById("collapse_achievements").style.display = "block";
});