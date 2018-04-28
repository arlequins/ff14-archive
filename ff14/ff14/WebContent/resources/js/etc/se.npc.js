$(document).ready(function() {
	$('#npc-table').DataTable( {
		"stateSave": true,
		"pagingType": "full_numbers",
		"language" : {
			"url" : base_location
					+ "js/korean.js"
		},
		"data": output_data,
        "columns": [
        			{ "data": "Key" },
                    { "data": "has_shop" ,
					"render": function ( data, type, row, meta ) {
					if (row.has_quest == 1) {
						return '퀘스트';
					}
					else if (row.has_shop == 1){
						return '상인';
					}
					else if (row.Key > 20000000002){
					 return '몬스터';
					}
					else { return 'NPC'; 
					}
		
				}
			},
			{ "data": "Name" ,
				"render": function ( data, type, row, meta ) {
					if (row.has_quest == 1 || row.has_shop == 1) {
						return '<a href="' + previous_site + 'npcdetail.php?enpc=' + row.Key + '">' + data + '</a>';
					}
					else if (row.Key > 20000000002){
						return '<a href="' + previous_site + 'npcdetail.php?bnpc=' + row.Key + '">' + data + '</a>';
					} else {
						return '<a href="' + previous_site + 'npcdetail.php?enpc=' + row.Key + '">' + data + '</a>';						
					}
				}
			},
            { "data": "area" }
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
						if (Data.Key < 20000000002)
						{
						shd.innerHTML = "<object width=\"420px\" height=\"100%\" type=\"text/html\" data=\"" + previous_site + "npc_tooltip.php?enpc=" + Data.Key + "\"></object>";
						} else {
							shd.innerHTML = "<object width=\"420px\" height=\"100%\" type=\"text/html\" data=\"" + previous_site + "npc_tooltip.php?bnpc=" + Data.Key + "\"></object>";
						}
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
           },
	   });
})
$(window).ready(function() {
     document.getElementById("collapse_npc").style.display = "block";
});