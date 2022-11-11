package kr.or.walk.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;

import common.FileRename;
import kr.or.market.model.vo.MarketDog;
import kr.or.market.model.vo.MarketDogFile;
import kr.or.walk.model.service.WalkService;
import kr.or.walk.model.vo.Walk;
import kr.or.walk.model.vo.WalkFile;

@Controller
public class WalkController {
	@Autowired
	private WalkService service;
	@Autowired
	private FileRename fileRename;
	
	@RequestMapping(value="/walkMateFrm.do")
	public String walkMate() {
		return "walkmate/walkMateFrm";
	}
	// WalkMate ajax 시작
	// WalkMate 모든 게시물 띄우기..
	// WalkMate 모든 게시물 참여하는 유저 프로필
	@ResponseBody
	@RequestMapping(value="/selectContentBox.do", produces="application/json;charset=utf-8")
	public String selectContentBox(int wmNo) {
		Walk w = service.selectContentBox(wmNo);
		return new Gson().toJson(w);
	}
	@ResponseBody
	@RequestMapping(value="/allWalkListAjax.do", produces="application/json;charset=utf-8")
	public String allWalkListAjax() {
		ArrayList<Walk> list = service.allWalkList();
		return new Gson().toJson(list);
	}
	@RequestMapping(value="/inputWalkmate.do")
	public String inputMarket(Walk w, MultipartFile[] photo,HttpServletRequest request) {
		String savePath = request.getSession().getServletContext().getRealPath("/resources/upload/walkmate/");
		ArrayList<WalkFile> list = new ArrayList<WalkFile>();
		if(photo[0].isEmpty()) {
		}else {
			for(MultipartFile file : photo) {
				if(file.isEmpty()) {
					continue;
				}
				String filename = file.getOriginalFilename();
				String filepath = fileRename.fileRename(savePath, filename);
				
				File upFile = new File(savePath+filepath);
				try {
					FileOutputStream fos = new FileOutputStream(upFile);
					BufferedOutputStream bos = new BufferedOutputStream(fos);
					byte[] bytes = file.getBytes();
					bos.write(bytes);
					bos.close();
					WalkFile wf = new WalkFile();
					wf.setFilepath(filepath);
					wf.setFilename(filename);
					list.add(wf);
					w.setFileList(list);
				} catch (FileNotFoundException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		int result = service.inputWalk(w);
		return "redirect:walkMateFrm.do";
	}
}