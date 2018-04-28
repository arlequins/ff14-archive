$(document)
		.ready(
				function() {
					$('#normalsearch')
							.DataTable(
									{
										"stateSave" : true,
										"pagingType" : "full_numbers",
										"order" : [ [ 4, "desc" ] ],
										"language" : {
											"url" : base_location
													+ "js/korean.js"
										},
										"data" : output_data,
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
$(window).ready(function() {
	document.getElementById("collapse_normalitem").style.display = "block";
});
