package kr.or.dog.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;

import common.FileRename;
import kr.or.dog.model.service.DogService;
import kr.or.dog.model.vo.Dog;
import kr.or.market.model.vo.DogType;
import kr.or.member.model.vo.Member;

@Controller
public class DogController {

	@Autowired
	private DogService service;
	@Autowired
	private FileRename fileRename;
	
//	@RequestMapping(value="/selectMyDogList.do")
//	public String selectMyDogList(@SessionAttribute Member m, HttpSession session) {
//		int memberNo = m.getMemberNo();
//		ArrayList<Dog> list = service.selectMyDogList(memberNo);
//		session.setAttribute("myDogList", list);
//		return "redirect:/";
//	}
	
	@ResponseBody
	@RequestMapping(value="/selectMyOneDog.do", produces="application/json;charset=utf-8")
	public String selectMyOneDog(int dogNo) {
		Dog dog = service.SelectMyOneDog(dogNo);
		System.out.println(dog);
		if(dog != null) {
			return new Gson().toJson(dog);
		} else {
			return "null";
		}
	} 
	
	@ResponseBody
	@RequestMapping(value="/selectAllDogType.do", produces="application/json;charset=utf-8")
	public String selectAllDogType() {
		ArrayList<DogType> list = service.selectAllDogType();
		if(list != null) {
			return new Gson().toJson(list);
		} else {
			return "null";
		}
	}
	
	@RequestMapping(value="/insertMyDog.do")
	public String insertMyDog(Dog d, DogType dt, MultipartFile[] photodog, HttpServletRequest request, Model model) {
		if(dt.getTypeName() != null) {
			int result = service.insertDogType(dt);
			int typeCode = service.selectDogTypeCode();
			d.setDogTypeNo(typeCode);
		}
		
		String savePath = request.getSession().getServletContext().getRealPath("/resources/upload/dog/");
		
		if(photodog != null) {
			for(MultipartFile file : photodog) {
				String filename = file.getOriginalFilename();
				String filepath = fileRename.fileRename(savePath, filename);
				File upFile = new File(savePath + filepath);
				try {
					FileOutputStream fos = new FileOutputStream(upFile);
					BufferedOutputStream bos = new BufferedOutputStream(fos);
					byte[] bytes = file.getBytes();
					bos.write(bytes);
					bos.close();
					d.setDogPhoto(filepath);
				} catch (FileNotFoundException e) {
					e.printStackTrace();
				} catch (IOException e) {
					e.printStackTrace();
				}
			} // forEach문 끝		
		}
		
		int result = service.insertMyDog(d);
		if(result > 0) {
			model.addAttribute("title", "정보 추가 완료");
			model.addAttribute("msg", "반려견 정보가 추가되었습니다.");
			model.addAttribute("icon", "success");
			model.addAttribute("loc", "/myPage.do");
			return "common/msg";
		} else {			
			return "redirect:/";
		}
	}
	
	@RequestMapping(value="/deleteMyDog.do")
	public String deleteMyDog(int dogNo, Model model) {
		int result = service.deleteMyDog(dogNo);
		if(result > 0) {
			model.addAttribute("title", "정보 삭제 완료");
			model.addAttribute("msg", "반려견 정보가 삭제되었습니다.");
			model.addAttribute("icon", "success");
			model.addAttribute("loc", "/myPage.do");
			return "common/msg";
		} else {
			return "redirect:/";
		}
	}
	
	@RequestMapping(value="/updateMyDog.do")
	public String updateMyDog(Dog d, MultipartFile[] photodog, HttpServletRequest request, Model model) {
		String savePath = request.getSession().getServletContext().getRealPath("/resources/upload/dog/");
		
		if(photodog != null) {
			for(MultipartFile file : photodog) {
				String filename = file.getOriginalFilename();
				String filepath = fileRename.fileRename(savePath, filename);
				File upFile = new File(savePath + filepath);
				try {
					FileOutputStream fos = new FileOutputStream(upFile);
					BufferedOutputStream bos = new BufferedOutputStream(fos);
					byte[] bytes = file.getBytes();
					bos.write(bytes);
					bos.close();
					d.setDogPhoto(filepath);
				} catch (FileNotFoundException e) {
					e.printStackTrace();
				} catch (IOException e) {
					e.printStackTrace();
				}
			} // forEach문 끝		
		}
		
		int result = service.updateMyDog(d);
		if(result > 0) {
			model.addAttribute("title", "정보 수정 완료");
			model.addAttribute("msg", "반려견 정보가 수정되었습니다.");
			model.addAttribute("icon", "success");
			model.addAttribute("loc", "/myPage.do");
			return "common/msg";
		} else {
			return "redirect:/";
		}
	}
}
