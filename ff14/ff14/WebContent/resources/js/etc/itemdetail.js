
// 카테고리 검색 테이블 지정
	if (output5 != 0){
     document.getElementById("category1").style.display = "block";
	$('#category2').DataTable( {
		"lengthChange": false,
		"info": false,
		"searching" : false,
        "order": [[ 4, "desc" ]],
		"language": {
			"url": "../js/korean.js"
		},
		"data": output5,
        "columns": [
            { "data": "Index_gl" },
			{ "data": "icon_path",
				"render": function ( data, type, row, meta ) {
					if (data != null){
						return '<img width="40px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + data + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'">';
					}
					return "";
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
			"visible": false, 
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

// 장터 카테고리 검색 테이블 지정
	if (output_ser_j != 0){
     document.getElementById("category_ser1").style.display = "block";
	$('#category_ser2').DataTable( {
		"lengthChange": false,
		"info": false,
		"searching" : false,
        "order": [[ 4, "desc" ]],
		"language": {
			"url": "../js/korean.js"
		},
		"data": output_ser_j,
        "columns": [
            { "data": "Index_gl" },
			{ "data": "icon_path",
				"render": function ( data, type, row, meta ) {
					if (data != null){
						return '<img width="40px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + data + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'">';
					}
					return "";
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
			"visible": false, 
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



	if (output_app_shop != null){
     document.getElementById("app_shop_menu").style.display = "block";
	$('#app_shop').DataTable( {
		"lengthChange": false,
		"info": false,
		"searching" : false,
		"language": {
			"url": "../js/korean.js"
		},
		"data": output_app_shop,
        "columns": [
            { "data": "Index_gl" },
			{ "data": "name_kr" ,
				"render": function ( data, type, row, meta ) {
					if (data != null){
					return data;
					}
					else {
					return row.name_en;
					}
				},
					"sClass": "my_class_normal"
			},
				{ "data": "area1_2",
				"render": function ( data, type, row, meta ) {
					if (data != null)
					{
						if (row.area2_2 != null) {
							return row.area1_2 + '<br>' + row.area2_2;
						}
						else {
							return row.area1_2;
						}
					}
					else {
						return '';
					}
			},
					"sClass": "my_class_normal"
			},
		],
		"columnDefs": [
		{
			"visible": false, 
			"targets": [0],
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
						shd.innerHTML = "<object width=\"420px\" height=\"100%\" type=\"text/html\" data=\"./npc_tooltip.php?enpc=" + Data.Index_gl + "\"></object>";
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

				window.open('./npcdetail.php?enpc=' + Data.Index_gl,'_self');

                });

                return Row;
           },
	});
	}

	if (output_app_drop != null){
     document.getElementById("app_drop_menu").style.display = "block";
	$('#app_drop').DataTable( {
		"lengthChange": false,
		"info": false,
		"searching" : false,
		"language": {
			"url": "../js/korean.js"
		},
		"data": output_app_drop,
        "columns": [
            { "data": "Index_gl" },
			{ "data": "name_kr" ,
				"render": function ( data, type, row, meta ) {
					if (data != null){
					return data;
					}
					else {
					return row.name_en;
					}
				},
					"sClass": "my_class_normal"
			},
				{ "data": "area1_2",
				"render": function ( data, type, row, meta ) {
					if (data != null)
					{
						if (row.area5_2 != 0) {
							return row.area1_2 + '<br>' + row.area2_2 + '<br>' + row.area3_2 + '<br>' + row.area4_2 + '<br>' + row.area5_2;
						}
						else if (row.area4_2 != 0) {
							return row.area1_2 + '<br>' + row.area2_2 + '<br>' + row.area3_2 + '<br>' + row.area4_2;
						}
						else if (row.area3_2 != 0) {
							return row.area1_2 + '<br>' + row.area2_2 + '<br>' + row.area3_2;
						}
						else if (row.area2_2 != 0) {
							return row.area1_2 + '<br>' + row.area2_2;
						}
						else if (row.area1_2 != 0) {
							return row.area1_2;
						}
					}
					else {
						return '';
					}
			},
					"sClass": "my_class_normal"
			},
		],
		"columnDefs": [
		{
			"visible": false, 
			"targets": [0],
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
						shd.innerHTML = "<object width=\"420px\" height=\"100%\" type=\"text/html\" data=\"./npc_tooltip.php?bnpc=" + Data.Index_gl + "\"></object>";
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

				window.open('./npcdetail.php?bnpc=' + Data.Index_gl,'_self');

                });

                return Row;
           },
	});
	}

	if (output_app_specialshop != null){
     document.getElementById("app_specialshop_menu").style.display = "block";
	$('#app_specialshop').DataTable( {
		"lengthChange": false,
		"info": false,
		"searching" : false,
		"language": {
			"url": "../js/korean.js"
		},
		"data": output_app_specialshop,
        "columns": [
            { "data": "Index_gl",
				"render": function ( data, type, row, meta ) {
			if (data != null)
			{
				return data;
			}
			else { return ""; }
		},
			},
			{ "data": "name_kr" ,
				"render": function ( data, type, row, meta ) {
					if (data != null){
					return data;
					}
					else if(row.name_en != null) {
					return row.name_en;
					}
					else { return ""; }
				},
					"sClass": "my_class"
			},
            { "data": "targetitem",
				"render": function ( data, type, row, meta ) {
					if (data.Rarity == 1) {
						if (data.name_kr != null)
						{
						return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblack item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString();
						}
						else {
						return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblack item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString();
						}
					}
					else if (data.Rarity == 2) {
						if (data.name_kr != null)
						{
						return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wgreen item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString();
						}
						else {
						return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wgreen item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString();
						}
					}
					else if (data.Rarity == 3) {
						if (data.name_kr != null)
						{
						return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblue item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString();
						}
						else {
						return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblue item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString();
						}
					}
					else if (data.Rarity == 4) {
						if (data.name_kr != null)
						{
						return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wpurple item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString();
						}
						else {
						return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wpurple item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString();
						}
					}
					else if (data.Rarity == 7) {
						if (data.name_kr != null)
						{
						return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wpink item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString();
						}
						else {
						return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wpink item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString();
						}
					}
			},
			},
			{ "data": "needitem1",
				"render": function ( data, type, row, meta ) {
					if (data.itemcount != null){
								if(row.needitem2.itemcount != null) {
										if(row.needitem3.itemcount != null) {
												if (row.needitem3.name_kr != null){
						if (row.needitem3.Rarity == 1)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblack item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wblack item">' + row.needitem2.name_kr + '</a>  x' + row.needitem2.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem3.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem3.Index_gl + '" class="wblack item">' + row.needitem3.name_kr + '</a>  x' + row.needitem3.itemcount.toLocaleString();
						}
						else if (row.needitem3.Rarity == 2)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wgreen item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wgreen item">' + row.needitem2.name_kr + '</a>  x' + row.needitem2.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem3.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem3.Index_gl + '" class="wgreen item">' + row.needitem3.name_kr + '</a>  x' + row.needitem3.itemcount.toLocaleString();
						}
						else if (row.needitem3.Rarity == 3)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblue item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wblue item">' + row.needitem2.name_kr + '</a>  x' + row.needitem2.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem3.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem3.Index_gl + '" class="wblue item">' + row.needitem3.name_kr + '</a>  x' + row.needitem3.itemcount.toLocaleString();
						}
						else if (row.needitem3.Rarity == 4)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wpurple item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wpurple item">' + row.needitem2.name_kr + '</a>  x' + row.needitem2.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem3.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem3.Index_gl + '" class="wpurple item">' + row.needitem3.name_kr + '</a>  x' + row.needitem3.itemcount.toLocaleString();
						}
						else if (row.needitem3.Rarity == 7)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wpink item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wpink item">' + row.needitem2.name_kr + '</a>  x' + row.needitem2.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem3.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem3.Index_gl + '" class="wpink item">' + row.needitem3.name_kr + '</a>  x' + row.needitem3.itemcount.toLocaleString();
						}
												}
												else if (row.needitem3.name_en != null) {
												{
						if (row.needitem3.Rarity == 1)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblack item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wblack item">' + row.needitem2.name_en + '</a>  x' + row.needitem2.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem3.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem3.Index_gl + '" class="wblack item">' + row.needitem3.name_en + '</a>  x' + row.needitem3.itemcount.toLocaleString();
						}
						else if (row.needitem3.Rarity == 2)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wgreen item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wgreen item">' + row.needitem2.name_en + '</a>  x' + row.needitem2.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem3.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem3.Index_gl + '" class="wgreen item">' + row.needitem3.name_en + '</a>  x' + row.needitem3.itemcount.toLocaleString();
						}
						else if (row.needitem3.Rarity == 3)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblue item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wblue item">' + row.needitem2.name_en + '</a>  x' + row.needitem2.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem3.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem3.Index_gl + '" class="wblue item">' + row.needitem3.name_en + '</a>  x' + row.needitem3.itemcount.toLocaleString();
						}
						else if (row.needitem3.Rarity == 4)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wpurple item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wpurple item">' + row.needitem2.name_en + '</a>  x' + row.needitem2.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem3.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem3.Index_gl + '" class="wpurple item">' + row.needitem3.name_en + '</a>  x' + row.needitem3.itemcount.toLocaleString();
						}
						else if (row.needitem3.Rarity == 7)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wpink item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wpink item">' + row.needitem2.name_en + '</a>  x' + row.needitem2.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem3.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem3.Index_gl + '" class="wpink item">' + row.needitem3.name_en + '</a>  x' + row.needitem3.itemcount.toLocaleString();
						}
												}
											}
									}
									if (row.needitem2.name_kr != null){
						if (row.needitem2.Rarity == 1)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblack item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wblack item">' + row.needitem2.name_kr + '</a>  x' + row.needitem2.itemcount.toLocaleString();
						}
						else if (row.needitem2.Rarity == 2)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wgreen item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wgreen item">' + row.needitem2.name_kr + '</a>  x' + row.needitem2.itemcount.toLocaleString();
						}
						else if (row.needitem2.Rarity == 3)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblue item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wblue item">' + row.needitem2.name_kr + '</a>  x' + row.needitem2.itemcount.toLocaleString();
						}
						else if (row.needitem2.Rarity == 4)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wpurple item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wpurple item">' + row.needitem2.name_kr + '</a>  x' + row.needitem2.itemcount.toLocaleString();
						}
						else if (row.needitem2.Rarity == 7)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wpink item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wpink item">' + row.needitem2.name_kr + '</a>  x' + row.needitem2.itemcount.toLocaleString();
						}
									}
									else if (row.needitem2.name_en != null) {
						if (row.needitem2.Rarity == 1)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblack item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wblack item">' + row.needitem2.name_en + '</a>  x' + row.needitem2.itemcount.toLocaleString();
						}
						else if (row.needitem2.Rarity == 2)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wgreen item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wgreen item">' + row.needitem2.name_en + '</a>  x' + row.needitem2.itemcount.toLocaleString();
						}
						else if (row.needitem2.Rarity == 3)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblue item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wblue item">' + row.needitem2.name_en + '</a>  x' + row.needitem2.itemcount.toLocaleString();
						}
						else if (row.needitem2.Rarity == 4)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wpurple item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wpurple item">' + row.needitem2.name_en + '</a>  x' + row.needitem2.itemcount.toLocaleString();
						}
						else if (row.needitem2.Rarity == 7)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wpink item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString() + '<br><img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + row.needitem2.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + row.needitem2.Index_gl + '" class="wpink item">' + row.needitem2.name_en + '</a>  x' + row.needitem2.itemcount.toLocaleString();
						}
									}

							}
						}
							if (data.name_kr != null){
						if (row.needitem1.Rarity == 1)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblack item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString();
						}
						else if (row.needitem1.Rarity == 2)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wgreen item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString();
						}
						else if (row.needitem1.Rarity == 3)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblue item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString();
						}
						else if (row.needitem1.Rarity == 4)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wpurple item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString();
						}
						else if (row.needitem1.Rarity == 7)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wpink item">' + data.name_kr + '</a>  x' + data.itemcount.toLocaleString();
						}
							}
							else {
						if (row.needitem1.Rarity == 1)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblack item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString();
						}
						else if (row.needitem1.Rarity == 2)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wgreen item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString();
						}
						else if (row.needitem1.Rarity == 3)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wblue item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString();
						}
						else if (row.needitem1.Rarity == 4)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wpurple item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString();
						}
						else if (row.needitem1.Rarity == 7)
						{
												return '<img width="20px" style="text-align: center;" src="../eorzeadb/images/0' + data.icon_id + '.tex.png" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> <a href="./itemdetail.php?item=' + data.Index_gl + '" class="wpink item">' + data.name_en + '</a>  x' + data.itemcount.toLocaleString();
						}
							}
					},
			},
		],
		"columnDefs": [
		{
			"visible": false, 
			"targets": [0],
			"searchable": true
		},
		],
          "fnRowCallback": function (Row, Data, iDisplayIndex) {

				$(Row).hover(function(e){
			   var offset = $('#wrap').offset(); 
				var x = e.pageX - offset.left;
				var y = e.pageY - offset.top;

					if (x >= 400)
						if (Data.Index_gl != null)
						{
					{
						var shd = document.getElementById('eodb_tooltip');
						shd.innerHTML = "<object width=\"420px\" height=\"100%\" type=\"text/html\" data=\"./npc_tooltip.php?enpc=" + Data.Index_gl + "\"></object>";
						shd.style.display = "block";
						shd.style.top = y-100+"px";
						shd.style.left = x+150+"px";
						shd.style.width = "420px";
						shd.style.height = "100%";
				}
										}},
				function(e){
					var x = null;
					var y = null;
					var shd = document.getElementById('eodb_tooltip');
					shd.style.display = "none";
				});


                // Bind click event
                $(Row).click(function() {
				if (Data.Index_gl != null)
				{
				window.open('./npcdetail.php?enpc=' + Data.Index_gl,'_self');
				}

                });

                return Row;
           },
	});
	}

	if (output_app_instance != null){
     document.getElementById("app_instance_menu").style.display = "block";
	$('#app_instance').DataTable( {
		"lengthChange": false,
		"info": false,
		"searching" : false,
		"language": {
			"url": "../js/korean.js"
		},
		"data": output_app_instance,
		"columns": [
            { "data": "Index" },
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
				"sClass": "my_class"
			},
            { "data": "avitemlv",
					"sClass": "my_class"
			},
		],
		"columnDefs": [
		{
			"visible": false, 
			"targets": [0],
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
	if (output_app_quest != null){
     document.getElementById("app_quest_menu").style.display = "block";
	$('#app_quest').DataTable( {
		"lengthChange": false,
		"info": false,
		"searching" : false,
		"language": {
			"url": "../js/korean.js"
		},
		"data": output_app_quest,
        "columns": [
            { "data": "Index_gl" },
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
            { "data": "classlv1" },
			{ "data": "area",
				"render": function ( data, type, row, meta ) {
					if (data != null)
					{
						return data;
					}
					else {
						return '';
					}
			}
			},
		],
		"columnDefs": [
		{
			"visible": false, 
			"targets": [0],
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


// 도큐먼트 스타트 이후

$('.btn.btn-default.mine').click(function(){
	var collapse_content_selector = $(this).attr('href');					
			
	//make the collapse content to be shown or hide
	var toggle_switch = $(this);
	$(collapse_content_selector).toggle(function(){
	  if($(this).css('display')=='none'){
						//change the button label to be 'Show'
		toggle_switch.html('펼치기');
	  }else{
						//change the button label to be 'Hide'
		toggle_switch.html('줄이기');
	  }
	});
});



function open_butt_ui() {
	document.getElementById("collapse1").style.display = "block";
    document.getElementById("ui_open").innerHTML = "숨기기";
}

function open_butt_ser() {
	document.getElementById("collapse2").style.display = "block";
    document.getElementById("ser_open").innerHTML = "숨기기";
}




// 아이템 테이블 지정
	if (output_recipe != null){
     document.getElementById("collapse_recipequestion").style.display = "block";

	var table = $('#recipequestion').DataTable( {
		"lengthChange": false,
		"info": false,
		"searching" : false,
		"language": {
			"url": "./js/korean.js"
		},
		"data": output_recipe,
        "columns": [
            {
                "className":      'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
			{ "data": "typename",
				"render": function ( data, type, row, meta ) {
				if (row.elementname != "속성: 무")
				{
					return data + "<br>" + row.elementname;
				}
				else {
					return data;
				}
			},
			},
            { "data": "0",
				"render": function ( data, type, row, meta ) {
				if (data.Rarity == 1) {
					if (data.name_kr != null) {
						return '<h5 class="wblack item"><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + data.icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> ' + '<a class="wblack item" href="./recipedetail.php?id=' + row.Index + '">'+ data.name_kr + '</h5></a>';
					}
					else {
						return '<h5 class="wblack item"><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + data.icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> ' + '<a class="wblack item" href="./recipedetail.php?id=' + row.Index + '">'+ data.name_en + '</h5></a>';
					}
				}
				else if (data.Rarity == 2){
					if (data.name_kr != null) {
						return '<h5 class="wgreen item"><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + data.icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> ' + '<a class="wgreen item" href="./recipedetail.php?id=' + row.Index + '">'+ data.name_kr + '</h5></a>';
					}
					else {
						return '<h5 class="wgreen item"><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + data.icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> ' + '<a class="wgreen item" href="./recipedetail.php?id=' + row.Index + '">'+ data.name_en + '</h5></a>';
					}
				}
				else if (data.Rarity == 3){
					if (data.name_kr != null) {
						return '<h5 class="wblue item"><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + data.icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> ' + '<a class="wblue item" href="./recipedetail.php?id=' + row.Index + '">'+ data.name_kr + '</h5></a>';
					}
					else {
						return '<h5 class="wblue item"><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + data.icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> ' + '<a class="wblue item" href="./recipedetail.php?id=' + row.Index + '">'+ data.name_en + '</h5></a>';
					}
				}
				else if (data.Rarity == 4){
					if (data.name_kr != null) {
						return '<h5 class="wpurple item"><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + data.icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> ' + '<a class="wpurple item" href="./recipedetail.php?id=' + row.Index + '">'+ data.name_kr + '</h5></a>';
					}
					else {
						return '<h5 class="wpurple item"><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + data.icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> ' + '<a class="wpurple item" href="./recipedetail.php?id=' + row.Index + '">'+ data.name_en + '</h5></a>';
					}
				}
				else if (data.Rarity == 7){
					if (data.name_kr != null) {
						return '<h5 class="wpink item"><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + data.icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> ' + '<a class="wpink item" href="./recipedetail.php?id=' + row.Index + '">'+ data.name_kr + '</h5></a>';
					}
					else {
						return '<h5 class="wpink item"><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + data.icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> ' + '<a class="wpink item" href="./recipedetail.php?id=' + row.Index + '">'+ data.name_en + '</h5></a>';
					}
				}
				else {
					if (data.name_kr != null) {
						return '<h5 class="wblack item"><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + data.icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"> ' + '<a href="./recipedetail.php?id=' + row.Index + '">'+ data.name_kr + '</h5></a>';
					}
					else {
						return "";
					}
				}
			},
			},
			{ "data": "levelview",
				"render": function ( data, type, row, meta ) {
				if (data != null){
					return data + row.star;
				}
				else {
					return "";
				}
			},
			"sClass": "my_class"
			},
            { "data": "level" }
		],
		"columnDefs": [
		{
			"visible": false, 
			"targets": [4],
			"searchable": true
		},
		],
} );

	}

	
function format ( d ) {
    // `d` is the original data object for the row
		if (d.needitem != 1){
			if (d.needitem != 2) {
				if (d.needitem != 3) {
					if (d.needitem != 4) {
						if (d.needitem != 5) {
							if (d.needitem != 6) {
								if (d.needitem != 7) {
		return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+'<td>재료 1</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[1].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[1].Index_gl + '" class="wblack item"> '+d[1].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 2</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[2].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[2].Index_gl + '" class="wblack item"> '+d[2].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 3</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[3].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[3].Index_gl + '" class="wblack item"> '+d[3].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 4</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[4].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[4].Index_gl + '" class="wblack item"> '+d[4].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 5</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[5].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[5].Index_gl + '" class="wblack item"> '+d[5].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 6</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[6].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[6].Index_gl + '" class="wblack item"> '+d[6].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 7</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[7].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[7].Index_gl + '" class="wblack item"> '+d[7].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 8</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[8].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[8].Index_gl + '" class="wblack item"> '+d[8].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'</table>';
									}
		return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+'<tr>'+'<td>재료 1</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[1].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[1].Index_gl + '" class="wblack item"> '+d[1].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 2</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[2].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[2].Index_gl + '" class="wblack item"> '+d[2].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 3</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[3].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[3].Index_gl + '" class="wblack item"> '+d[3].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 4</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[4].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[4].Index_gl + '" class="wblack item"> '+d[4].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 5</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[5].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[5].Index_gl + '" class="wblack item"> '+d[5].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 6</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[6].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[6].Index_gl + '" class="wblack item"> '+d[6].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 7</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[7].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[7].Index_gl + '" class="wblack item"> '+d[7].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'</table>';
								}
		return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+'<tr>'+'<td>재료 1</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[1].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[1].Index_gl + '" class="wblack item"> '+d[1].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 2</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[2].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[2].Index_gl + '" class="wblack item"> '+d[2].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 3</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[3].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[3].Index_gl + '" class="wblack item"> '+d[3].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 4</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[4].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[4].Index_gl + '" class="wblack item"> '+d[4].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 5</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[5].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[5].Index_gl + '" class="wblack item"> '+d[5].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 6</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[6].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[6].Index_gl + '" class="wblack item"> '+d[6].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'</table>';
							}
		return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+'<tr>'+'<td>재료 1</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[1].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[1].Index_gl + '" class="wblack item"> '+d[1].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 2</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[2].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[2].Index_gl + '" class="wblack item"> '+d[2].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 3</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[3].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[3].Index_gl + '" class="wblack item"> '+d[3].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 4</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[4].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[4].Index_gl + '" class="wblack item"> '+d[4].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 5</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[5].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[5].Index_gl + '" class="wblack item"> '+d[5].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'</table>';
						}
		return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+'<tr>'+'<td>재료 1</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[1].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[1].Index_gl + '" class="wblack item"> '+d[1].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 2</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[2].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[2].Index_gl + '" class="wblack item"> '+d[2].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 3</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[3].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[3].Index_gl + '" class="wblack item"> '+d[3].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 4</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[4].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[4].Index_gl + '" class="wblack item"> '+d[4].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'</table>';
					}
		return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+'<tr>'+'<td>재료 1</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[1].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[1].Index_gl + '" class="wblack item"> '+d[1].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 2</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[2].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[2].Index_gl + '" class="wblack item"> '+d[2].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 3</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[3].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[3].Index_gl + '" class="wblack item"> '+d[3].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'</table>';
				}
		return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+'<tr>'+'<td>재료 1</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[1].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[1].Index_gl + '" class="wblack item"> '+d[1].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'<tr>'+'<td>재료 2</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[2].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[2].Index_gl + '" class="wblack item"> '+d[2].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'</table>';
			}
		else {
		return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+'<tr>'+'<td>재료 1</td>'+ '<td><img width="25px" style="text-align: center;" src="http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/' + d[1].icon_path + '" onERROR="this.src=\'http://img.finalfantasyxiv.com/lds/pc/global/images/common/ic/socket_128.png\'"><a href="./itemdetail.php?item=' + d[1].Index_gl + '" class="wblack item"> '+d[1].name + '</a> x' + d.needitemcount1 + '</td>'+'</tr>'+'</table>';
		}
}

		   // Add event listener for opening and closing details
    $('#recipequestion tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }

	});

