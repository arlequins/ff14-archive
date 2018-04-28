$( document ).ready(function() {

	// 지도 기본값 정의
	var w = 4096;
	var h = 4096;
	var image_location = 'http://setine.net:9999/shared/convert/';
	var mapMinZoom = 2;
	var mapMaxZoom = 5;
	
	// 지도 척도 정의
	L.CRS.MySimple = L.extend({}, L.CRS.Simple, {
	  transformation: new L.Transformation(1/32.8, 0, 1/32.8, 0)
	});
	 
	// 지도 정의
	var _map = L.map('map', {
		maxZoom: 4,
		minZoom: mapMinZoom,
			crs:  L.CRS.MySimple,
	});

	// 지도 경계선 정의
	var _mapBounds = new L.LatLngBounds(
		_map.unproject([0, h], mapMaxZoom),
		_map.unproject([w, 0], mapMaxZoom));
	_map.setMaxBounds(_mapBounds);


	// 타일 세팅
	var _tileLayer = L.tileLayer(
		   image_location + path + '/{z}/{x}_{y}.png', {
			minZoom: mapMinZoom, maxZoom: 4,
			bounds: _mapBounds,
			noWrap:true,
			tileSize:128,
			attribution: 'SQUARE ENIX CO., LTD. All Rights Reserved.'
		  }).addTo(_map);

	_map.attributionControl.setPrefix('');

	// 지도 중앙선 및 척도 정의
	var _mapCenter = _map.unproject([w/2, h/2], mapMaxZoom);
	_map.setView(_mapCenter, 2);
	
//	L.marker([co_value_x, co_value_y]).addTo(_map);

	// 풍맥 위치 정보
	$.ajax({
		type: "GET",
		url: "/ff14/resources/leaflet/data_currents.jsp",
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",  
		datatype: 'json',  
		success: function ( data ) {
			var json_aether = [];
			var current_data = JSON.parse(data);

			$.each(current_data, function(key, value) {
				if (value.map_id == 1) {
					var x_fin = (value.co_x-1)*co_value;
					var y_fin = (value.co_y-1)*co_value;

				L.marker([y_fin, x_fin]).addTo(_map);
				}
			});
		}
	});
	
	
//	for (i = 0; i < 44; i++) { 
//		L.marker([(i*co_value), (i*co_value)]).addTo(_map);
//	}
//	
//	for (i = 0; i < 44; i++) { 
//		L.marker([(co_value*43)-(i*co_value), (i*co_value)]).addTo(_map);
//	}



	
});
	
	// 퀘스트 아이콘 정의
//	var Icon1 = L.icon({
//		iconUrl: './images/leaflet/assets/iconb_2.png',
//		iconSize: [40, 40],
//		iconAnchor: [30, 30],
//		popupAnchor:  [1, -24],
//	});

	
//
//  // 퀘스트 위치 정보
//	$.ajax({
//		type: "POST",
//		url: "data/data_quest.asp",
//		contentType: "application/x-www-form-urlencoded; charset=UTF-8",  
//		datatype: 'json',  
//		success: function ( data ) {
//			var json_quest = [];
//			
//			var quest_data = JSON.parse(data);
//
//				$.each(quest_data, function(key, value) {
//					if (value.map_id == param) {
//						var x_fin = (value.co_x*co_value)-85;
//						var y_fin = -(value.co_y*co_value)+95;
//
//					L.marker([y_fin, x_fin], {icon: Icon2}).addTo(_map).bindPopup('<img src="./images/001.png" style="width:300px;">' + 'X좌표: ' + value.co_x + ' Y좌표: ' + value.co_y + ' 이미지번호: ' + value.con_images + '<br>' + '조건 퀘스트: ' + value.condition_quest );
//					}
//				});
//
//			var html='';
//			if(quest_data != null){
//				$.each(quest_data,function(i,val){
//					if (val.map_id == param) {
//						var num = "퀘스트 " + val.con_images + "번", idx = val.idx, quest_name = val.condition_quest, quest_condition_name = val.target_quest,
//							co_x = val.co_x,
//							co_y = val.co_y;
//							
//							html+='<tr> \
//								<td class="width50 font_size_15 height30px" scope="row" id="number_'+idx+'">'+quest_name+'</th> \
//								<td class="width25 font_size_15 height30px">'+co_x+'</td> \
//								<td class="width25 font_size_15 height30px">'+co_y+'</td> \
//								</tr>';
//					}
//				});
//				$(html).appendTo('.results_quest');
//			}
//		}
//	});
