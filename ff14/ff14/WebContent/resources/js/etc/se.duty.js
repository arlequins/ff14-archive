$(document).ready(function() {
	$('#duty-table').DataTable( {
		"stateSave": true,
		"pagingType": "full_numbers",
		"order" : [ [ 4, "desc" ] ],
		"language" : {
			"url" : base_location
					+ "js/korean.js"
		},
		"data": output_data,
        "columns": [
                	{ "data": "Key"
        			},
			{ "data": "ContentName",
				"render": function ( data, type, row, meta ) {
					switch (data)
					{
					case "레이드":
						return '<a href="http://setine.nayana.kr/ff14/dutydetail.php?id=' + row.Key + '">' + '<img width="40px" style="text-align: center;" src="http://setine.nayana.kr/eorzeadb/images/061802.tex.png"\'">' + '</a>';
						break;
					case "던전":
						return '<a href="http://setine.nayana.kr/ff14/dutydetail.php?id=' + row.Key + '">' + '<img width="40px" style="text-align: center;" src="http://setine.nayana.kr/eorzeadb/images/061801.tex.png"\'">' + '</a>';
						break;
					case "길드 작전":
						return '<a href="http://setine.nayana.kr/ff14/dutydetail.php?id=' + row.Key + '">' + '<img width="40px" style="text-align: center;" src="http://setine.nayana.kr/eorzeadb/images/061803.tex.png"\'">' + '</a>';
						break;
					case "토벌전":
						return '<a href="http://setine.nayana.kr/ff14/dutydetail.php?id=' + row.Key + '">' + '<img width="40px" style="text-align: center;" src="http://setine.nayana.kr/eorzeadb/images/061804.tex.png"\'">' + '</a>';
						break;
					case "PvP":
						return '<a href="http://setine.nayana.kr/ff14/dutydetail.php?id=' + row.Key + '">' + '<img width="40px" style="text-align: center;" src="http://setine.nayana.kr/eorzeadb/images/061806.tex.png"\'">' + '</a>';
						break;
					defult:
						return data;
						break;
					}
				},
			    "sClass": "my_class",
			},
			{
				"data" : "Name",
				"render": function ( data, type, row, meta ) {
					return '<a href="http://setine.nayana.kr/ff14/dutydetail.php?id=' + row.Key + '">' + data + '</a>';
				},
			},
			{ "data": "Level",
			    "sClass": "my_class",
			},
			{ "data": "AvLevel",
				"render": function ( data, type, row, meta ) {
					if(data != 0) {
						return data;
					}
					else {
						return "없음";
					}
				},
		    "sClass": "my_class",
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
						shd.innerHTML = "<object width=\"500px\" height=\"100%\" type=\"text/html\" data=\"http://setine.nayana.kr/ff14/duty_tooltip.php?id=" + Data.Key + "\"></object>";
						shd.style.display = "block";
						shd.style.top = y-250+"px";
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
                return Row;
		   },
	   })
});

$(window).ready(function() {
document.getElementById("collapse_duty").style.display = "block";
});

