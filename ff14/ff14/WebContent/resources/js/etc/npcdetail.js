// 아이템 테이블 지정
	if (output_item != null){
     document.getElementById("rdrop").style.display = "block";
	$('#rdrop_table').DataTable( {
		"lengthChange": false,
		"info": false,
		"searching" : false,
        "order": [[ 4, "desc" ]],
		"language": {
			"url": "./js/korean.js"
		},
		"data": output_item,
        "columns": [
            { "data": "Index_gl" },
			{ "data": "icon_path",
				"render": function ( data, type, row, meta ) {
					if (data != null){
						return '<img width="40px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + data + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'">';
					}
					return '<img width="40px" style="text-align: center;" src="../eorzeadb/images/0' + row.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'">';
					},
			    "sClass": "my_class"
				},
			{ "data": "name_kr" ,
				"render": function ( data, type, row, meta ) {
					if (data != null){
						if (row.Rarity == 1)
						{
								return '<h5 class="wblack item">' + data + '</h5>';
						}
						else if (row.Rarity == 2)
						{
								return '<h5 class="wgreen item">' + data + '</h5>';
						}
						else if (row.Rarity == 3)
						{
								return '<h5 class="wblue item">' + data + '</h5>';
						}
						else if (row.Rarity == 4)
						{
								return '<h5 class="wpurple item">' + data + '</h5>';
						}
						else if (row.Rarity == 7)
						{
								return '<h5 class="wpink item">' + data + '</h5>';
						}
					}
					return row.name_en;
					},
			},
            { "data": "name_en" },
			{ "data": "Item_Level",
			    "sClass": "my_class"
			},
            { "data": "Required_Level" ,
			    "sClass": "my_class"
			},
            { "data": "Rarity" },
		],
		"columnDefs": [
		{
			"visible": false, 
			"targets": [0],
			"searchable": true
		},
		{
			"targets": [1],
			"searchable": false,
			"orderable": false,
		},
		{
			"visible": false, 
			"targets": [3],
			"searchable": true
		},
		{
			"targets": [4],
		},
		{
			"targets": [5],
		},
		{
			"visible": false, 
			"targets": [6],
			"searchable": false,
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
						shd.innerHTML = "<object width=\"420px\" height=\"100%\" type=\"text/html\" data=\"./item_tooltip.php?item=" + Data.Index_gl + "\"></object>";
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


                // Bind click event
                $(Row).click(function() {

				window.open('./itemdetail.php?item=' + Data.Index_gl,'_self');

                });

                return Row;
           },
	});
	}

// 상점 테이블 지정
	if (output_shop != null){
     document.getElementById("rshop").style.display = "block";

     
	$('table.table-hover.shop').DataTable( {
		"lengthChange": false,
		"info": false,
        "order": [[ 4, "desc" ]],
		"language": {
			"url": "./js/korean.js"
		},
		"data": output_shop,
        "columns": [
            { "data": "Index_gl" },
			{ "data": "icon_path",
				"render": function ( data, type, row, meta ) {
					if (data != null){
						return '<img width="40px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + data + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'">';
					}
					return '<img width="40px" style="text-align: center;" src="../eorzeadb/images/0' + row.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'">';
					},
			    "sClass": "my_class"
				},
			{ "data": "name_kr" ,
				"render": function ( data, type, row, meta ) {
					if (data != null){
						if (row.Rarity == 1)
						{
								return '<h5 class="wblack item">' + data + '</h5>';
						}
						else if (row.Rarity == 2)
						{
								return '<h5 class="wgreen item">' + data + '</h5>';
						}
						else if (row.Rarity == 3)
						{
								return '<h5 class="wblue item">' + data + '</h5>';
						}
						else if (row.Rarity == 4)
						{
								return '<h5 class="wpurple item">' + data + '</h5>';
						}
						else if (row.Rarity == 7)
						{
								return '<h5 class="wpink item">' + data + '</h5>';
						}
					}
					return row.name_en;
					},
			},
            { "data": "name_en" },
			{ "data": "Item_Level",
			    "sClass": "my_class"
			},
            { "data": "Required_Level" ,
			    "sClass": "my_class"
			},
            { "data": "Rarity" },
			{ "data": "price",
				"render": function ( data, type, row, meta ) {
					return data.toLocaleString() + '길';
					},
			    "sClass": "my_class"
			},
            { "data": "shopcode" },
		],
		"columnDefs": [
		{
			"visible": false, 
			"targets": [0],
			"searchable": true
		},
		{
			"targets": [1],
			"searchable": false,
			"orderable": false,
		},
		{
			"visible": false, 
			"targets": [3],
			"searchable": true
		},
		{
			"targets": [4],
		},
		{
			"targets": [5],
		},
		{
			"visible": false, 
			"targets": [6],
			"searchable": false,
		},
		{
			"visible": false, 
			"targets": [8],
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
						shd.innerHTML = "<object width=\"420px\" height=\"100%\" type=\"text/html\" data=\"./item_tooltip.php?item=" + Data.Index_gl + "\"></object>";
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

                // Bind click event
                $(Row).click(function() {

				window.open('./itemdetail.php?item=' + Data.Index_gl,'_self');

                });

                return Row;
           },
	});
var arrayLength2 = tab_name2.length;
for (var i = 0; i < arrayLength2; i++) {
var text2 = "#rshop_table" + (i+2);

	$(text2).DataTable().search( tab_name2[i] ).draw();
}
	}
    $('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e) {
        $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
    } );



// 스페셜샵 테이블 지정
	if (output_specialshop != null){
     document.getElementById("rspecial").style.display = "block";
	$('table.table-hover.special').DataTable( {
		"lengthChange": false,
		"info": false,
        "order": [[ 4, "desc" ]],
		"language": {
			"url": "./js/korean.js"
		},
		"data": output_specialshop,
        "columns": [
        { "data": "Index_gl" },
		{ "data": "icon_path",
				"render": function ( data, type, row, meta ) {
					if (data != null){
						return '<img width="40px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + data + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'">';
					}
					return '<img width="40px" style="text-align: center;" src="../eorzeadb/images/0' + row.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'">';
					},
			    "sClass": "my_class"
				},
			{ "data": "name_kr" ,
				"render": function ( data, type, row, meta ) {
					if (data != null){
						if (row.Rarity == 1)
						{
								return '<a href="./itemdetail.php?item=' + row.Index_gl + '" class="wblack item">' + data + '</a>  x' + row.itemcount;
						}
						else if (row.Rarity == 2)
						{
								return '<a href="./itemdetail.php?item=' + row.Index_gl + '" class="wgreen item">' + data + '</a>  x' + row.itemcount;
						}
						else if (row.Rarity == 3)
						{
								return '<a href="./itemdetail.php?item=' + row.Index_gl + '" class="wblue item">' + data + '</a>  x' + row.itemcount;
						}
						else if (row.Rarity == 4)
						{
								return '<a href="./itemdetail.php?item=' + row.Index_gl + '" class="wpurple item">' + data + '</a>  x' + row.itemcount;
						}
						else if (row.Rarity == 7)
						{
								return '<a href="./itemdetail.php?item=' + row.Index_gl + '" class="wpink item">' + data + '</a>  x' + row.itemcount;
						}
					}
					else if (row.name_en != null){
						if (row.Rarity == 1)
						{
								return '<a href="./itemdetail.php?item=' + row.Index_gl + '" class="wblack item">' + row.name_en + '</a>  x' + row.itemcount;
						}
						else if (row.Rarity == 2)
						{
								return '<a href="./itemdetail.php?item=' + row.Index_gl + '" class="wgreen item">' + row.name_en + '</a>  x' + row.itemcount;
						}
						else if (row.Rarity == 3)
						{
								return '<a href="./itemdetail.php?item=' + row.Index_gl + '" class="wblue item">' + row.name_en + '</a>  x' + row.itemcount;
						}
						else if (row.Rarity == 4)
						{
								return '<a href="./itemdetail.php?item=' + row.Index_gl + '" class="wpurple item">' + row.name_en + '</a>  x' + row.itemcount;
						}
						else if (row.Rarity == 7)
						{
								return '<a href="./itemdetail.php?item=' + row.Index_gl + '" class="wpink item">' + row.name_en + '</a>  x' + row.itemcount;
						}
					}
				}
			},
            { "data": "name_en" },
			{ "data": "Item_Level",
			    "sClass": "my_class"
			},
            { "data": "Rarity" },
            { "data": "needitem1",
				"render": function ( data, type, row, meta ) {
					if (data != null){
								if(row.needitem2 != null) {
										if(row.needitem3 != null) {
												if (row.needitem3.name_kr != null){
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblack item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wblack item">' + row.needitem2.name_kr + '</a>  x' + row.needitem2.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem3.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem3.Index_gl + '" class="wblack item">' + row.needitem3.name_kr + '</a>  x' + row.needitem3.itemcount.toLocaleString();
												}
												else if (row.needitem3.name_en != null) {
												{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblack item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wblack item">' + row.needitem2.name_en + '</a>  x' + row.needitem2.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem3.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem3.Index_gl + '" class="wblack item">' + row.needitem3.name_en + '</a>  x' + row.needitem3.itemcount.toLocaleString();
												}
											}
									}
									if (row.needitem2.name_kr != null){
									return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblack item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wblack item">' + row.needitem2.name_kr + '</a>  x' + row.needitem2.itemcount.toLocaleString();
									}
									else if (row.needitem2.name_en != null) {
									return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblack item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wblack item">' + row.needitem2.name_en + '</a>  x' + row.needitem2.itemcount.toLocaleString();
									}

							}
						}
							if (data.name_kr != null){
							return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblack item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString();
							}
							else {
							return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblack item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString();
							}
					}
				},
            { "data": "shopcode" },
			],
		"columnDefs": [
		{
			"visible": false, 
			"targets": [0],
			"searchable": true
		},
		{
			"targets": [1],
			"searchable": false,
			"orderable": false,
		},
		{
			"targets": [2],
			"searchable": true
		},
			{
			"visible": false, 
			"targets": [3],
			"searchable": true
		},
		{
			"targets": [4],
			"searchable": true
		},
		{
			"visible": false, 
			"targets": [5],
			"searchable": true
		},
		{
			"visible": false, 
			"targets": [7],
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
						shd.innerHTML = "<object width=\"420px\" height=\"100%\" type=\"text/html\" data=\"./item_tooltip.php?item=" + Data.Index_gl + "\"></object>";
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
		   var arrayLength1 = tab_name1.length;
for (var i = 0; i < arrayLength1; i++) {
var text1 = "#rspecial_table" + (i+2);

	$(text1).DataTable().search( tab_name1[i] ).draw();
}
	}

	if (output_instance != null){
     document.getElementById("app_instance_menu").style.display = "block";
	$('#app_instance').DataTable( {
		"lengthChange": false,
		"info": false,
		"searching" : false,
		"language": {
			"url": "../js/korean.js"
		},
		"data": output_instance,
        "columns": [
			{ "data": "roulette",
				"render": function ( data, type, row, meta ) {
					switch (data)
					{
					case "1":
						return '<img width="40px" style="text-align: center;" src="../eorzeadb/images/061802.tex.png"\'">';
						break;
					case "2":
						return '<img width="40px" style="text-align: center;" src="../eorzeadb/images/061801.tex.png"\'">';
						break;
					case "3":
						return '<img width="40px" style="text-align: center;" src="../eorzeadb/images/061803.tex.png"\'">';
						break;
					case "4":
						return '<img width="40px" style="text-align: center;" src="../eorzeadb/images/061804.tex.png"\'">';
						break;
					case "5":
						return '<img width="40px" style="text-align: center;" src="../eorzeadb/images/061806.tex.png"\'">';
						break;
					case "6":
						return '<img width="40px" style="text-align: center;" src="../eorzeadb/images/061806.tex.png"\'">';
						break;
					default:
						return data;
						break;
					}
			},
		    "sClass": "my_class",
			},
			{ "data": "name_kr" ,
				"render": function ( data, type, row, meta ) {
					if (data != null){
					return data;
					}
					else {
					return row.name_en;
					}
				},
			},
            { "data": "minlevel",
		    "sClass": "my_class",
			},
			{ "data": "avitemlv",
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
          "fnRowCallback": function (Row, Data, iDisplayIndex) {

				$(Row).hover(function(e){
			   var offset = $('#wrap').offset(); 
				var x = e.pageX - offset.left;
				var y = e.pageY - offset.top;

					if (x >= 400)
					{
						var shd = document.getElementById('eodb_tooltip');
						shd.innerHTML = "<object width=\"500px\" height=\"100%\" type=\"text/html\" data=\"./duty_tooltip.php?id=" + Data.Index + "\"></object>";
						shd.style.display = "block";
						shd.style.top = y-100+"px";
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


                // Bind click event
                $(Row).click(function() {

				window.open('./dutydetail.php?id=' + Data.Index,'_self');

                });

                return Row;
           },
	});
	}


	if (output_quest != null){
     document.getElementById("app_quest_menu").style.display = "block";
	$('#app_quest').DataTable( {
		"lengthChange": false,
		"info": false,
		"searching" : false,
		"language": {
			"url": "../js/korean.js"
		},
		"data": output_quest,
        "columns": [
			{ "data": "name_kr" ,
				"render": function ( data, type, row, meta ) {
					if (data != null){
					return data;
					}
					else {
					return row.name_en;
					}
				},
		    "sClass": "my_class_40",
			},
            { "data": "classlv1",
		    "sClass": "my_class_20c",
			},
            { "data": "area",
		    "sClass": "my_class_40c",
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
						shd.innerHTML = "<object width=\"420px\" height=\"100%\" type=\"text/html\" data=\"./quest_tooltip.php?id=" + Data.Index_gl + "\"></object>";
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


                // Bind click event
                $(Row).click(function() {

				window.open('./questdetail.php?id=' + Data.Index_gl,'_self');

                });

                return Row;
           },
	});
	}


	if (output_client_quest != null){
     document.getElementById("app_client_quest_menu").style.display = "block";
	$('#app_client_quest').DataTable( {
		"lengthChange": false,
		"info": false,
		"searching" : false,
		"language": {
			"url": "../js/korean.js"
		},
		"data": output_client_quest,
        "columns": [
			{ "data": "name_kr" ,
				"render": function ( data, type, row, meta ) {
					if (data != null){
					return data;
					}
					else {
					return row.name_en;
					}
				},
		    "sClass": "my_class_40",
			},
            { "data": "classlv1",
		    "sClass": "my_class_20c",
			},
            { "data": "area",
		    "sClass": "my_class_40c",
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
						shd.innerHTML = "<object width=\"420px\" height=\"100%\" type=\"text/html\" data=\"./quest_tooltip.php?id=" + Data.Index_gl + "\"></object>";
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


                // Bind click event
                $(Row).click(function() {

				window.open('./questdetail.php?id=' + Data.Index_gl,'_self');

                });

                return Row;
           },
	});
	}
