package com.setine.db.mongo;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.DBObject;
import com.mongodb.util.JSON;
import com.setine.db.mongo.model.BoardInfo;

public abstract class AbstractDao<PK extends Serializable, T> {

	private final Class<T> persistentClass;
	protected EntityManager entityManager;

	@SuppressWarnings("unchecked")
	public AbstractDao() {
		this.persistentClass = (Class<T>) ((ParameterizedType) this.getClass().getGenericSuperclass()).getActualTypeArguments()[1];
	}

	@Autowired
	MongoTemplate mongoTemplate;

	public T getByKey2(PK key, String target, String collection_name) {

		Query searchQuery = new Query(Criteria.where(target).is(key));
		searchQuery.with(new Sort(Sort.Direction.DESC, "key")).limit(1);
		return (T) mongoTemplate.findOne(searchQuery, persistentClass, collection_name);
	}
	public T getLast(PK key, String target, String collection_name) {
		Query searchQuery = new Query();
		searchQuery.with(new Sort(Sort.Direction.DESC, "$natural")).limit(1);		
		return (T) mongoTemplate.findOne(searchQuery, persistentClass, collection_name);
	}
	public T getByDates(String date1, String date2, String collection_name) throws ParseException {
//		Query searchQuery = new Query(Criteria.where("LoggingTime").gte(Criteria.where("$date").is(date + "T00:00:00.000Z")));
	    // create and execute the query
		   // setup
	    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'hh:mm:ss'Z'");

		Date to = dateFormat.parse(date1 + "T00:00:00.000Z");
	    Date from = dateFormat.parse(date2 + "T00:00:00.000Z");

	    Query searchQuery = new Query();
	    searchQuery.addCriteria(Criteria.where("LoggingTime").gte(from).lte(to));
	    
		System.out.println("MyLog:" + searchQuery);
		return (T) mongoTemplate.findOne(searchQuery, persistentClass, collection_name);
	}

	public T getByLastOne(String collection_name) {
		Query searchQuery = new Query();
		searchQuery.with(new Sort(Sort.Direction.DESC, "Key")).limit(1);
		return (T) mongoTemplate.findOne(searchQuery, persistentClass, collection_name);
	} 
	
	public T getByKey1(PK key, String collection_name) {
		return (T) mongoTemplate.findById(key, persistentClass, collection_name);
	}
	public ArrayList<T> getByKeyByDate(String date, String collection_name) throws ParseException {

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Calendar c = Calendar.getInstance();
		c.setTime(sdf.parse(date));
		c.add(Calendar.DATE, 1);  // number of days to add
		String date2 = sdf.format(c.getTime());  // dt is now the new date
		
	    Date from = sdf.parse(date);
	    Date to = sdf.parse(date2);
		
		Query searchQuery = new Query();
	    searchQuery.addCriteria(Criteria.where("LoggingTime").gte(from).lte(to));
		return (ArrayList<T>) mongoTemplate.find(searchQuery, persistentClass, collection_name);
	}

	public void setUpdate(PK key, String target, String cKey, Object cValue, String collection_name) {
		Query searchQuery = new Query(Criteria.where(target).is(key));
		mongoTemplate.updateFirst(searchQuery, Update.update(cKey, cValue), persistentClass, collection_name);
	}

	public void setUpdateAll(PK key, T entity, String target, String collection_name) throws JsonProcessingException {
		Query searchQuery = new Query(Criteria.where(target).is(key));

		String json_String = setJsonData(entity);

		DBObject dbObject = (DBObject) JSON.parse(json_String);
		mongoTemplate.updateFirst(searchQuery, Update.fromDBObject(dbObject), persistentClass, collection_name);
	}

	public void setInsert(T entity, String collection_name) {
		mongoTemplate.insert(entity, collection_name);
	}

	public void delete(T entity, String collection_name) {
		mongoTemplate.remove(entity, collection_name);
	}

	public ArrayList<T> getAllList(String collection_name) {
		ArrayList<T> list = new ArrayList<T>();
		list = (ArrayList<T>) mongoTemplate.findAll(persistentClass, collection_name);

		return list;
	}

	public ArrayList<T> getAllList2(BoardInfo boardInfo, String collection_name) {
		ArrayList<T> list = new ArrayList<T>();
		Query searchQuery = new Query();

		// 페이징 계산 
		int cPage = boardInfo.getcPage();
		int sType = boardInfo.getsType();
		String question = boardInfo.getQuestion();
		
		switch (sType) {
		case 1:
			searchQuery.addCriteria(Criteria.where("title").regex(question));
			break;
		case 2:
			searchQuery.addCriteria(Criteria.where("writer"). regex(question));
			break;
		}

		if (cPage > 1) {
			searchQuery.with(new Sort(Sort.Direction.DESC, "date")).with(new Sort(Sort.Direction.DESC, "hit")).limit(500);
		} else if (cPage == -1) {
			searchQuery.addCriteria(Criteria.where("besthit").gt(3)).with(new Sort(Sort.Direction.DESC, "date")).with(new Sort(Sort.Direction.DESC, "hit")).limit(500);			
		} else {
			searchQuery.with(new Sort(Sort.Direction.DESC, "date")).with(new Sort(Sort.Direction.DESC, "hit")).limit(500);;
		}

		list = (ArrayList<T>) mongoTemplate.find(searchQuery, persistentClass, collection_name);

		return list;
	}

	public BoardInfo getTotalCount(BoardInfo boardInfo, String collection_name) {
		Query searchQuery = new Query();

		// 페이징 계산 
		int limit = boardInfo.getLimit();
		int cPage = boardInfo.getcPage();
		int sType = boardInfo.getsType();
		String question = boardInfo.getQuestion();
		
		switch (sType) {
		case 1:
			searchQuery.addCriteria(Criteria.where("title").regex(question));
			break;
		case 2:
			searchQuery.addCriteria(Criteria.where("writer").regex(question));
			break;
		}

		searchQuery.skip((cPage-1) * limit).limit(limit);

		// 전체 개수 확인
		long totalCount = mongoTemplate.count(searchQuery, collection_name);
		long totalPageCount = (long) Math.ceil((double) totalCount / limit);

		boardInfo.setTotalPageCount(totalPageCount);
		boardInfo.setTotalCount(totalCount);

		return boardInfo;
	}

	public String setJsonData(T entity) throws JsonProcessingException {
		// 담을 JSON 매핑
		ObjectMapper mapper = new ObjectMapper();
		mapper.setSerializationInclusion(Include.NON_NULL);

		// 추출한 자료를 JSON으로 매핑하기
		String dtoAsString = mapper.writeValueAsString(entity);
		return dtoAsString;
	}
}
