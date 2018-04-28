$(document)
		.ready(
				function() {
					$('#translanguage')
							.DataTable(
									{
										"order" : [ [ 0, "asc" ] ],
										"stateSave" : true,
										"pagingType" : "full_numbers",
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
															return "";
														}
													}
												},
												{
													"data" : "UIName_en",
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
															return "";
														}
													}
												},
												{
													"data" : "UIName_ja",
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
															return "";
														}
													}
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
				});
$(window).ready(function() {
	document.getElementById("translanguage").style.display = "block";
});