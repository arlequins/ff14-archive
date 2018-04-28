package com.setine.common;

import com.setine.db.mongo.model.FFKorea;
import com.setine.db.mongo.model.NoticeArray;
import com.setine.dto.HomeDTO;

public interface ParsingFn {

	FFKorea getJSONdata(String data_list);

	NoticeArray getLodestone_data(String target);

	HomeDTO getKoreaData(String FF14K);
}
