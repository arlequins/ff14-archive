$(document)
		.ready(
				function() {
					$('#translanguage')
							.DataTable(
									{
										"stateSave" : true,
										"pagingType" : "full_numbers",
										"language" : {
											"url" : base_location
													+ "js/korean.js"
										},
										"columnDefs" : [ {
											"visible" : false,
											"targets" : [ 0 ],
											"searchable" : true
										}, ],
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
																if (Data.Key > 20000000002) {
																	var npc_type_name = "bnpc";
																} else {
																	var npc_type_name = "enpc";
																}
																if (x >= 400) {
																	var shd = document
																			.getElementById('eodb_tooltip');
																	shd.innerHTML = "<object width=\"420px\" height=\"100%\" type=\"text/html\" data=\"http://setine.nayana.kr/ff14/" + base_location_name + "s_tooltip.php?id="
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