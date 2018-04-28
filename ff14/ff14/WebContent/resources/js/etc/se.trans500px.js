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
												{"data" : "UIName_kr"},
												{"data" : "UIName_en"},
												{"data" : "UIName_ja"},],
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
																	shd.innerHTML = "<object width=\"500px\" height=\"100%\" type=\"text/html\" data=\"http://setine.nayana.kr/ff14/" + base_location_name + "_tooltip.php?id="
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