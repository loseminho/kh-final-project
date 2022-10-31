package kr.or.dog.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.or.dog.model.dao.DogDao;
import kr.or.dog.model.vo.Dog;
import kr.or.market.model.vo.DogType;

@Service
public class DogService {

	@Autowired
	private DogDao dao;

	public ArrayList<Dog> selectMyDogList(int memberNo) {
		return dao.selectMyDogList(memberNo);
	}

	public Dog SelectMyOneDog(int dogNo) {
		return dao.selectMyOneDog(dogNo);
	}

	public ArrayList<DogType> selectAllDogType() {
		return dao.selectAllDogType();
	}

	@Transactional
	public int insertMyDog(Dog d) {
		return dao.insertMyDog(d);
	}

	@Transactional
	public int deleteMyDog(int dogNo) {
		return dao.deleteMyDog(dogNo);
	}
	
}
