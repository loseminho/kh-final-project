package kr.or.dog.model.dao;

import java.util.ArrayList;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.dog.model.vo.Dog;

@Repository
public class DogDao {
	
	@Autowired
	private SqlSessionTemplate sqlSession;

	public ArrayList<Dog> selectMyDogList(int memberNo) {
		List list = sqlSession.selectList("dog.selectMyDogList", memberNo);
		return (ArrayList<Dog>) list;
	}

	public Dog selectMyOneDog(int dogNo) {
		return sqlSession.selectOne("dog.selectMyOneDog", dogNo);
	}
	
}
