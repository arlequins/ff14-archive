$(document).ready(function() {
	$('#transduty').DataTable( {
		"ordering": false,
		"stateSave": true,
		"pagingType": "full_numbers",
		"columns": [
			{ "data": "name_kr" },
			{ "data": "name_en" },
			{ "data": "name_jp" },
			{ "data": "Index"} ,
		],
		"language": {
			"url": "./js/korean.js"
		},
		"columnDefs": [
		{
			"visible": false, 
			"targets": [3],
			"searchable": true
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
						shd.innerHTML = "<object width=\"500px\" height=\"100%\" type=\"text/html\" data=\"duty_tooltip.php?id=" + Data.Index + "\"></object>";
						shd.style.display = "block";
						shd.style.top = y-150+"px";
						shd.style.left = x+50+"px";
						shd.style.width = "500px";
						shd.style.height = "100%";
				}
				},
				function(e){
					var x = null;
					var y = null;
					var shd = document.getElementById('eodb_tooltip');
					shd.style.display = "none";
				});

				// Bind click event
                $(Row).click(function() {

				window.open('./dutydetail.php?id=' + Data.Index,'_blank');

                });

                return Row;
           },
		"ajax": "./php/se.duty.php",
		})
});