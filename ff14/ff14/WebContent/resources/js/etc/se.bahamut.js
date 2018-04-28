$(document).ready(function() {
	$('#rank_gogo').DataTable({
		"stateSave" : true,
		"pagingType" : "full_numbers",
		"order" : [ [ 0, "desc" ] ],
		"language" : {
			"url" : base_location + "js/korean.js"
		},
		"data" : output_data_all,
		"columns" : [ {
			"data" : "date",
			"sClass" : "my_class",
		}, {
			"data" : "rank",
			"sClass" : "my_class",
		}, {
			"data" : "name"
		}, {
			"data" : "lv",
			"render" : function(data, type, row, meta) {
				if (row.name == "‘대표캐릭터를 설정하지 않았습니다.’") {
					return "";
				} else {
					return data;
				}
			},
			"sClass" : "my_class"
		}, {
			"data" : "class",
			"sClass" : "my_class",
		}, {
			"data" : "server",
			"sClass" : "my_class",
		}, {
			"data" : "count",
			"render" : function(data, type, row, meta) {
				if (row.name == "‘대표캐릭터를 설정하지 않았습니다.’") {
					return row.lv;
				} else {
					return data;
				}
			},
			"sClass" : "my_class",			
		} ],
	});

	$(window).ready(function() {
		document.getElementById("rank_all").style.display = "block";
	});

	$('#rank1').DataTable({
		"stateSave" : true,
		"pagingType" : "full_numbers",
		"order" : [ [ 0, "desc" ] ],
		"language" : {
			"url" : base_location + "js/korean.js"
		},
		"data" : output_data_1,
		"columns" : [ {
			"data" : "date",
			"sClass" : "my_class",
		}, {
			"data" : "rank",
			"sClass" : "my_class",
		}, {
			"data" : "name"
		}, {
			"data" : "lv",
			"render" : function(data, type, row, meta) {
				if (row.name == "‘대표캐릭터를 설정하지 않았습니다.’") {
					return "";
				} else {
					return data;
				}
			},
			"sClass" : "my_class"
		}, {
			"data" : "class",
			"sClass" : "my_class",
		}, {
			"data" : "server",
			"sClass" : "my_class",
		}, {
			"data" : "count",
			"render" : function(data, type, row, meta) {
				if (row.name == "‘대표캐릭터를 설정하지 않았습니다.’") {
					return row.lv;
				} else {
					return data;
				}
			},
			"sClass" : "my_class",
		} ],
	});

	$(window).ready(function() {
		document.getElementById("rank_div1").style.display = "block";
	});

		$('#rank2').DataTable({
			"stateSave" : true,
			"pagingType" : "full_numbers",
			"order" : [ [ 0, "desc" ] ],
			"language" : {
				"url" : base_location + "js/korean.js"
			},
			"data" : output_data_2,
			"columns" : [ {
				"data" : "date",
				"sClass" : "my_class",
			}, {
				"data" : "rank",
				"sClass" : "my_class",
			}, {
				"data" : "name"
			}, {
				"data" : "lv",
				"render" : function(data, type, row, meta) {
					if (row.name == "‘대표캐릭터를 설정하지 않았습니다.’") {
						return "";
					} else {
						return data;
					}
				},
				"sClass" : "my_class"
			}, {
				"data" : "class",
				"sClass" : "my_class",
			}, {
				"data" : "server",
				"sClass" : "my_class",
			}, {
				"data" : "count",
				"render" : function(data, type, row, meta) {
					if (row.name == "‘대표캐릭터를 설정하지 않았습니다.’") {
						return row.lv;
					} else {
						return data;
					}
				},
				"sClass" : "my_class",
			} ],
		});

		$(window).ready(function() {
			document.getElementById("rank_div2").style.display = "block";
		});

		$('#rank3').DataTable({
			"stateSave" : true,
			"pagingType" : "full_numbers",
			"order" : [ [ 0, "desc" ] ],
			"language" : {
				"url" : base_location + "js/korean.js"
			},
			"data" : output_data_3,
			"columns" : [ {
				"data" : "date",
				"sClass" : "my_class",
			}, {
				"data" : "rank",
				"sClass" : "my_class",
			}, {
				"data" : "name"
			}, {
				"data" : "lv",
				"render" : function(data, type, row, meta) {
					if (row.name == "‘대표캐릭터를 설정하지 않았습니다.’") {
						return "";
					} else {
						return data;
					}
				},
				"sClass" : "my_class"
			}, {
				"data" : "class",
				"sClass" : "my_class",
			}, {
				"data" : "server",
				"sClass" : "my_class",
			}, {
				"data" : "count",
				"render" : function(data, type, row, meta) {
					if (row.name == "‘대표캐릭터를 설정하지 않았습니다.’") {
						return row.lv;
					} else {
						return data;
					}
				},
				"sClass" : "my_class",
			} ],
		});

		$(window).ready(function() {
			document.getElementById("rank_div3").style.display = "block";
		});
	
});