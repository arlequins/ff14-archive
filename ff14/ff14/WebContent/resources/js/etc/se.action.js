$(document).ready(function() {
	if (output_action != null) {
		document.getElementById("transaction").style.display = "block";
		$('#transaction').DataTable({
			"ordering" : false,
			"stateSave" : true,
			"pagingType" : "full_numbers",
			"data" : output_action,
			"columns" : [ {
				"data" : "name_kr"
			}, {
				"data" : "name_en"
			}, {
				"data" : "name_jp"
			}, ],
			"language" : {
				"url" : base_location + "js/korean.js"
			},
		});
	}

	if (output_class != null) {
		document.getElementById("transaction2").style.display = "block";
		$('#transaction2').DataTable({
			"stateSave" : true,
			"paging" : false,
			"pagingType" : "full_numbers",
			"data" : output_class,
			"columns" : [ {
				"data" : "classlevel",
				"sClass" : "my_class"
			}, {
				"data" : "name_kr"
			}, {
				"data" : "name_en"
			}, {
				"data" : "name_jp"
			}, ],
			"language" : {
				"url" : base_location + "js/korean.js"
			},
		});
	}
	;
});