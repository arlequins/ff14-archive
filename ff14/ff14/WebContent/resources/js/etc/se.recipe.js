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



// 아이템 테이블 지정
	if (output_question != null){
     document.getElementById("collapse_recipequestion").style.display = "block";

	var table = $('#recipequestion').DataTable( {
        "order": [[ 4, "desc" ]],
		"language": {
			"url": "./js/korean.js"
		},
		"data": output_question,
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