$(document).ready(function() {
	$('#action-table').DataTable({
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

	$(document)
	.ready(
			function() {
				$('#item-table')
						.DataTable(
								{
									"stateSave" : true,
									"pagingType" : "full_numbers",
									"order" : [ [ 4, "desc" ] ],
									"language" : {
										"url" : base_location
												+ "js/korean.js"
									},
									"data" : output_item,
									"columns" : [
											{
												"data" : "Key"
											},
											{
												"data" : "icon",
												"render" : function(data,
														type, row, meta) {
													if (data != null) {
														return '<a href="http://setine.nayana.kr/ff14/itemdetail.php?item='
																+ row.Key
																+ '">'
																+ '<img width="40px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/'
																+ data
																+ '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"></a>';
													}
													return '<a href="http://setine.nayana.kr/ff14/itemdetail.php?item='
															+ row.Key
															+ '">'
															+ '<img width="40px" style="text-align: center;" src="'
															+ base_location
															+ '"/eorzeadb/images/'
															+ row.icon
															+ '.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"></a>';
												},
												"sClass" : "my_class"
											},
											{
												"data" : "UIName_kr",
												"render" : function(data,
														type, row, meta) {
													if (data != "") {
														if (row.Rarity == 1) {
															return '<a href="http://setine.nayana.kr/ff14/itemdetail.php?item='
																	+ row.Key
																	+ '">'
																	+ '<h5 class="wblack item">'
																	+ data
																	+ '</h5></a>';
														} else if (row.Rarity == 2) {
															return '<a href="http://setine.nayana.kr/ff14/itemdetail.php?item='
																	+ row.Key
																	+ '">'
																	+ '<h5 class="wgreen item">'
																	+ data
																	+ '</h5></a>';
														} else if (row.Rarity == 3) {
															return '<a href="http://setine.nayana.kr/ff14/itemdetail.php?item='
																	+ row.Key
																	+ '">'
																	+ '<h5 class="wblue item">'
																	+ data
																	+ '</h5></a>';
														} else if (row.Rarity == 4) {
															return '<a href="http://setine.nayana.kr/ff14/itemdetail.php?item='
																	+ row.Key
																	+ '">'
																	+ '<h5 class="wpurple item">'
																	+ data
																	+ '</h5></a>';
														} else if (row.Rarity == 7) {
															return '<a href="http://setine.nayana.kr/ff14/itemdetail.php?item='
																	+ row.Key
																	+ '">'
																	+ '<h5 class="wpink item">'
																	+ data
																	+ '</h5></a>';
														}
													} else {
														if (row.Rarity == 1) {
															return '<a href="http://setine.nayana.kr/ff14/itemdetail.php?item='
																	+ row.Key
																	+ '">'
																	+ '<h5 class="wblack item">'
																	+ row.UIName_en
																	+ '</h5></a>';
														} else if (row.Rarity == 2) {
															return '<a href="http://setine.nayana.kr/ff14/itemdetail.php?item='
																	+ row.Key
																	+ '">'
																	+ '<h5 class="wgreen item">'
																	+ row.UIName_en
																	+ '</h5></a>';
														} else if (row.Rarity == 3) {
															return '<a href="http://setine.nayana.kr/ff14/itemdetail.php?item='
																	+ row.Key
																	+ '">'
																	+ '<h5 class="wblue item">'
																	+ row.UIName_en
																	+ '</h5></a>';
														} else if (row.Rarity == 4) {
															return '<a href="http://setine.nayana.kr/ff14/itemdetail.php?item='
																	+ row.Key
																	+ '">'
																	+ '<h5 class="wpurple item">'
																	+ row.UIName_en
																	+ '</h5></a>';
														} else if (row.Rarity == 7) {
															return '<a href="http://setine.nayana.kr/ff14/itemdetail.php?item='
																	+ row.Key
																	+ '">'
																	+ '<h5 class="wpink item">'
																	+ row.UIName_en
																	+ '</h5></a>';
														}
													}
												},
											},
											{
												"data" : "Slot",
												"sClass" : "my_class",
												"render" : function(data,
														type, row, meta) {
													if (data != "") {
														return row.Slot;
													} else {
														return row.Slot2;
													}
												}
											}, {
												"data" : "Level",
												"sClass" : "my_class"
											}, {
												"data" : "EquipLevel",
												"sClass" : "my_class"
											}, ],
									"columnDefs" : [ {
										"visible" : false,
										"targets" : [ 0 ],
										"searchable" : true
									}, ],
									"fnRowCallback" : function(Row, Data,
											iDisplayIndex) {

										$(Row)
												.hover(
														function(e) {
															var offset = $(
																	'#wrap')
																	.offset();
															var x = e.pageX
																	- offset.left;
															var y = e.pageY
																	- offset.top;

															if (x >= 400) {
																var shd = document
																		.getElementById('eodb_tooltip');
																shd.innerHTML = "<object width=\"420px\" height=\"100%\" type=\"text/html\" data=\"http://setine.nayana.kr/ff14/item_tooltip.php?item="
																		+ Data.Key
																		+ "\"></object>";
																shd.style.display = "block";
																shd.style.top = y
																		- 100
																		+ "px";
																shd.style.left = x
																		+ 150
																		+ "px";
																shd.style.width = "420px";
																shd.style.height = "100%";
															}
														},
														function(e) {
															var x = null;
															var y = null;
															var shd = document
																	.getElementById('eodb_tooltip');
															shd.style.display = "none";
														});

										return Row;
									},
								});
			})

			// 아이템 종료
			
			// 퀘스트 시작
			$('#quest-table').DataTable( {
				"stateSave": true,
				"pagingType": "full_numbers",
				"order" : [ [ 1, "asc" ] ],
				  "pageLength": 25,
				"language" : {
					"url" : base_location
							+ "js/korean.js"
				},
				"data": output_quest,
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

	// 퀘스트 종료
	
	// 임무 시작
	$('#duty-table').DataTable( {
		"stateSave": true,
		"pagingType": "full_numbers",
		"order" : [ [ 4, "desc" ] ],
		"language" : {
			"url" : base_location
					+ "js/korean.js"
		},
		"data": output_duty,
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
	   // 퀘스트 종료
	   
	   // 엔피씨 시작
		$('#npc-table').DataTable( {
			"stateSave": true,
			"pagingType": "full_numbers",
			"language" : {
				"url" : base_location
						+ "js/korean.js"
			},
			"data": output_npc,
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
	// 엔피씨 종료
	
	// 업적 시작
	$('#achievements-table').DataTable( {
		"stateSave": true,
		"pagingType": "full_numbers",
		"language" : {
			"url" : base_location
					+ "js/korean.js"
		},
		"data": output_achievement,
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
							return "칭호" + "<br>" + '아이템';
					}
						else {
						return "칭호";
					}
				} else if (row.item != "0"){
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
// 업적 종료
});

