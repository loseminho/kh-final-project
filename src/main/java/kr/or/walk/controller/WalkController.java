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
import kr.or.walk.model.vo.WalkMateComment;
import kr.or.walk.model.vo.WmApply;

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
	
	@RequestMapping(value="/inputWmapply.do", produces="application/json;charset=utf-8")
	public String inputWmApply(WmApply wa) {
		int result = service.inputWmApply(wa);
		if(result > 0) {
			return "redirect:walkMateFrm.do";
		} else {
			return "redirect:walkMateFrm.do";
		}
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

	//댓글작성
	@RequestMapping(value="/insertMainComment.do", produces="application/json;charset=utf-8")
	public String insertMainComment(WalkMateComment wmc) {
		int result = service.insertMainComment(wmc);
		if(result > 0) {
			return "redirect:walkMateFrm.do";
		} else {
			return "redirect:walkMateFrm.do";
		}
	}
	//대댓글작성
	@RequestMapping(value="/insertSubComment.do", produces="application/json;charset=utf-8")
	public String insertSubComment(WalkMateComment wmc) {
		int result = service.insertSubComment(wmc);
		if(result > 0) {
			return "redirect:walkMateFrm.do";
		} else {
			return "redirect:walkMateFrm.do";
		}
	}
	//댓글 삭제
	@RequestMapping(value="/deleteMainComment.do", produces="application/json;charset=utf-8")
	public String deleteMainComment(WalkMateComment wmc) {
		int result = service.deleteMainComment(wmc);
		if(result > 0) {
			return "redirect:walkMateFrm.do";
		} else {
			return "redirect:walkMateFrm.do";
		}
	}
	//대댓글 삭제
	@RequestMapping(value="/deleteSubComment.do", produces="application/json;charset=utf-8")
	public String deleteSubComment(WalkMateComment wmc) {
		int result = service.deleteSubComment(wmc);
		if(result > 0) {
			return "redirect:walkMateFrm.do";
		} else {
			return "redirect:walkMateFrm.do";
		}
	}
		
	
	@ResponseBody
	@RequestMapping(value="/categoryList.do", produces="application/json;charset=utf-8")
	public String selectCategoryList(Walk w) {
		ArrayList<Walk> list = service.selectCategoryList(w);
		return new Gson().toJson(list);
	}
//	//댓글 작성
//	@ResponseBody
//	@RequestMapping(value="/picture_replyList.do", produces="application/json;charset=utf-8")
//	public String writeReply(WalkMateComment wmc) {
//		Walk result = service.writeReply(wmc);
//		return new Gson().toJson(result);
//	}
//	//대댓글 작성
//	@ResponseBody
//	@RequestMapping(value="/picture_write_rereply.do", produces="application/json;charset=utf-8")
//	public String writeReReply(WalkMateComment wmc) {
//		WalkMateComment result = service.writeReReply(wmc);
//		result.setWmcClass(1);
//		Walk w = service.pictureWriteReReply(result);
//		return new Gson().toJson(w);
//	}
//	//댓글 리스트
//	@ResponseBody
//	@RequestMapping(value="/picture_replyList.do", produces="application/json;charset=utf-8")
//	public String replyList(WalkMateComment wmc) {
//		ArrayList<WalkMateComment> list = service.replyList(wmc);
//		return new Gson().toJson(list);
//	}
//	//댓글 삭제
//	@ResponseBody
//	@RequestMapping(value="/picture_delete_reply.do", produces="application/json;charset=utf-8")
//	public String deleteReply(WalkMateComment wmc) {
//		WalkMateComment result = service.deleteReply(wmc);
//		return new Gson().toJson(result);
//	}
//	//대댓글 삭제
//	@ResponseBody
//	@RequestMapping(value="/picture_delete_rereply.do", produces="application/json;charset=utf-8")
//	public String deleteReReply(WalkMateComment wmc) {
//		WalkMateComment result = service.deleteReReply(wmc);
//		return new Gson().toJson(result);
//	}
	
}